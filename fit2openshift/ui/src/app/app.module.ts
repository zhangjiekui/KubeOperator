import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {BaseModule} from './base/base.module';
import {AccountModule} from './account/account.module';
import {InterceptorService} from './shared/interceptor.service';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {OfflineModule} from './offline/offline.module';
import {UserModule} from './user/user.module';
import {ClusterModule} from './cluster/cluster.module';
import {OverviewModule} from './overview/overview.module';
import {NodeModule} from './node/node.module';
import {ConfigModule} from './config/config.module';
import {MonitorModule} from './monitor/monitor.module';
import {LogModule} from './log/log.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BaseModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AccountModule,
    OfflineModule,
    UserModule,
    ClusterModule,
    OverviewModule,
    NodeModule,
    ConfigModule,
    LogModule,
    MonitorModule
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule {
}
