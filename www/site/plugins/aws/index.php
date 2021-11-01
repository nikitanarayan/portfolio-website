<?php

@include_once __DIR__ . '/vendor/autoload.php';

Kirby::plugin('quentin-f451/aws', [
    'hooks' => [
        'file.create:after' => function ($file) {
            if ($file->type() == 'video') :
                $s3 = new Aws\S3\S3Client([
                    'region'  => option('quentin-f451.aws.region'),
                    'version' => 'latest',
                    'credentials' => [
                        'key'    => option('quentin-f451.aws.key'),
                        'secret' => option('quentin-f451.aws.secret'),
                    ]
                ]);

                $filepath = $file->root();
                $folder = $file->page() ? $file->page()->uid() : 'home';
                $key = basename($filepath);

                $result = $s3->putObject([
                    'Bucket' => option('quentin-f451.aws.bucket'),
                    'Key'    => $folder . '/' . $key,
                    'ACL'    => 'public-read',
                    'Body'   => fopen($filepath, 'r'),
                ]);
            endif;
        },

        'file.replace:after' => function ($newFile, $oldFile) {
            kirby()->trigger('file.create:after', $newFile);
        }
    ],

    'components' => [
        'file::url' => function (Kirby $kirby, $file, array $options = []) {
            if ($file->type() == 'video') :
                $folder = $file->page() ? $file->page()->uid() : 'home';
                return option('quentin-f451.aws.url') . '/' . $folder . '/' . $file->filename();
            else :
                return $file->mediaUrl();
            endif;
        }
    ]
]);
