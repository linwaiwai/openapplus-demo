//
//  TestViewController.m
//  OpenApplus
//
//  Created by linwaiwai on 22/09/2017.
//  Copyright © 2017 OpenApplus. All rights reserved.
//

#import "DemoViewController.h"
#import <OpenApplus/OpenApplus.h>
//#import <UINavigationItem+Margin/UINavigationItem+Margin.h>
@interface DemoViewController ()

@end

@implementation DemoViewController

-(NSArray *)testData{
    
    NSArray *testData = @[
                          @{@"title":@"openapplus-wx",@"link":@"openapplus://jsApp/Lr12JhPrE9bg7N4uoABBXY"}
    ];
    return testData;
    
}

 
-(void)didTapButton:(UIButton *)button {
    NSArray *testData = [self testData];
    NSDictionary *element = [testData objectAtIndex:button.tag];
    [OpenApplus navigateToMiniProgram:element[@"link"] completion:^{
        
    }];
}


- (void)viewDidLoad {
    [super viewDidLoad];
    self.title = @"OpenApplusSample";
//    self.navigationItem.leftMargin = 16;
//    self.navigationItem.rightMargin = 16;
//
    float screenWitdth = [UIScreen mainScreen].bounds.size.width;
    NSArray *testData = [self testData];
    NSUInteger i = 0;
    UIButton *lastButton = nil;
    for (NSDictionary *element in testData) {
        lastButton = [UIButton buttonWithType:UIButtonTypeRoundedRect];
        lastButton.layer.borderWidth = 1.0f;
        lastButton.layer.borderColor = [UIColor blueColor].CGColor;
        [lastButton setTitle:element[@"title"] forState:UIControlStateNormal];
       
        [lastButton setFrame:CGRectMake(64, i * 50 + 260, screenWitdth - 64 * 2, 40)];
        lastButton.tag = i++;
        [lastButton addTarget:self action:@selector(didTapButton:) forControlEvents:UIControlEventTouchUpInside];
        [self.view addSubview:lastButton];
    }

   
  
    // Do any additional setup after loading the view.
}

-(void)viewDidAppear:(BOOL)animated{
    [super viewDidAppear:animated];
//    [_titleV stopAnimation];
}

- (void)didReceiveMemoryWarning {
    [super didReceiveMemoryWarning];
    // Dispose of any resources that can be recreated.
}

/*
#pragma mark - Navigation

// In a storyboard-based application, you will often want to do a little preparation before navigation
- (void)prepareForSegue:(UIStoryboardSegue *)segue sender:(id)sender {
    // Get the new view controller using [segue destinationViewController].
    // Pass the selected object to the new view controller.
}
*/

@end
