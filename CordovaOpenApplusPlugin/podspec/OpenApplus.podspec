Pod::Spec.new do |s|
    s.name         = "OpenApplus"
    s.version      = "1.0.0"
    s.summary      = "OpenApplus framework"
    s.homepage     = "http://github.com/linwaiwai/openapplus"
    s.license      = { :type => 'OpenApplus License, Version 1.0.0', :text => <<-LICENSE
      Licensed under the OpenApplus License, Version 1.0.0 (the "License");
      you may not use this file except in compliance with the License.
      LICENSE
    }
    s.author   = "linwaiwai"
    s.platform     = :ios, "6.0.0"
    s.source       = { :git => "https://code.aliyun.com/openapplus/openapplus-framework.git", :branch => "master"}
    s.frameworks = "UIKit"
    s.requires_arc = true
    s.dependency 'SDWebImage', '3.7.5'
    s.dependency 'SSZipArchive', '1.6.2'
    s.dependency 'SVProgressHUD', '2.1.2'
    s.dependency 'UMengUShare/Social/WeChat', '6.3.0'
    s.dependency 'MJRefresh', '3.1.12'
    s.dependency 'AFNetworking'

    s.subspec 'OpenApplus' do |ss|
        ss.vendored_frameworks = '*.framework'
        ss.vendored_libraries = '*.a'
        ss.source_files = '*.h'
        ss.resource = '*.bundle'
    end
end