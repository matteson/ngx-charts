/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
 /* tslint:disable */

import * as import0 from '../../../src/bar-chart/bar-vertical-2d.component';
import * as import1 from '@angular/core/src/change_detection/change_detection_util';
import * as import2 from '@angular/core/src/linker/view';
import * as import3 from '@angular/core/src/linker/view_utils';
import * as import4 from '@angular/core/src/render/api';
import * as import5 from '@angular/core/src/metadata/view';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/constants';
import * as import8 from '@angular/core/src/linker/component_factory';
import * as import9 from '@angular/core/src/linker/element_ref';
import * as import10 from '@angular/core/src/zone/ng_zone';
import * as import11 from '@angular/common/src/location/location';
import * as import12 from '@angular/core/src/animation/animation_transition';
import * as import13 from '@angular/core/src/animation/animation_sequence_player';
import * as import14 from '@angular/core/src/animation/animation_styles';
import * as import15 from '@angular/core/src/animation/animation_style_util';
import * as import16 from '@angular/core/src/animation/animation_keyframe';
import * as import17 from '@angular/core/src/animation/animation_player';
import * as import18 from '../../../src/common/axes/x-axis.component';
import * as import19 from '../common/axes/x-axis.component.ngfactory';
import * as import20 from '@angular/core/src/linker/view_container';
import * as import21 from '../../../src/common/axes/y-axis.component';
import * as import22 from '../common/axes/y-axis.component.ngfactory';
import * as import23 from '../../../src/bar-chart/series-vertical.component';
import * as import24 from './series-vertical.component.ngfactory';
import * as import25 from '../../../src/common/charts/chart.component';
import * as import26 from '../../../src/common/tooltip/tooltip.service';
import * as import27 from '../common/charts/chart.component.ngfactory';
import * as import28 from '../../../src/common/grid-panel-series.component';
import * as import29 from '../common/grid-panel-series.component.ngfactory';
import * as import30 from '../../node_modules/@angular/common/src/directives/ng_if.ngfactory';
import * as import31 from '../../node_modules/@angular/common/src/directives/ng_for.ngfactory';
import * as import32 from '../../../src/services/injection.service';
import * as import33 from '@angular/core/src/linker/template_ref';
import * as import34 from '@angular/core/src/change_detection/differs/iterable_differs';
import * as import35 from '@angular/common/src/directives/ng_if';
import * as import36 from '@angular/common/src/directives/ng_for';
export class Wrapper_BarVertical2DComponent {
  /*private*/ _eventHandler:Function;
  context:import0.BarVertical2DComponent;
  /*private*/ _changed:boolean;
  /*private*/ _changes:{[key: string]:any};
  /*private*/ _expr_0:any;
  /*private*/ _expr_1:any;
  /*private*/ _expr_2:any;
  /*private*/ _expr_3:any;
  /*private*/ _expr_4:any;
  /*private*/ _expr_5:any;
  /*private*/ _expr_6:any;
  /*private*/ _expr_7:any;
  /*private*/ _expr_8:any;
  /*private*/ _expr_9:any;
  /*private*/ _expr_10:any;
  /*private*/ _expr_11:any;
  /*private*/ _expr_12:any;
  /*private*/ _expr_13:any;
  /*private*/ _expr_14:any;
  /*private*/ _expr_15:any;
  subscription0:any;
  subscription1:any;
  subscription2:any;
  constructor(p0:any,p1:any,p2:any,p3:any) {
    this._changed = false;
    this._changes = {};
    this.context = new import0.BarVertical2DComponent(p0,p1,p2,p3);
    this._expr_0 = import1.UNINITIALIZED;
    this._expr_1 = import1.UNINITIALIZED;
    this._expr_2 = import1.UNINITIALIZED;
    this._expr_3 = import1.UNINITIALIZED;
    this._expr_4 = import1.UNINITIALIZED;
    this._expr_5 = import1.UNINITIALIZED;
    this._expr_6 = import1.UNINITIALIZED;
    this._expr_7 = import1.UNINITIALIZED;
    this._expr_8 = import1.UNINITIALIZED;
    this._expr_9 = import1.UNINITIALIZED;
    this._expr_10 = import1.UNINITIALIZED;
    this._expr_11 = import1.UNINITIALIZED;
    this._expr_12 = import1.UNINITIALIZED;
    this._expr_13 = import1.UNINITIALIZED;
    this._expr_14 = import1.UNINITIALIZED;
    this._expr_15 = import1.UNINITIALIZED;
  }
  ngOnDetach(view:import2.AppView<any>,componentView:import2.AppView<any>,el:any):void {
  }
  ngOnDestroy():void {
    this.context.ngOnDestroy();
    (this.subscription0 && this.subscription0.unsubscribe());
    (this.subscription1 && this.subscription1.unsubscribe());
    (this.subscription2 && this.subscription2.unsubscribe());
  }
  check_results(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_0,currValue))) {
      this._changed = true;
      this.context.results = currValue;
      this._changes['results'] = new import1.SimpleChange(this._expr_0,currValue);
      this._expr_0 = currValue;
    }
  }
  check_view(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_1,currValue))) {
      this._changed = true;
      this.context.view = currValue;
      this._changes['view'] = new import1.SimpleChange(this._expr_1,currValue);
      this._expr_1 = currValue;
    }
  }
  check_scheme(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_2,currValue))) {
      this._changed = true;
      this.context.scheme = currValue;
      this._changes['scheme'] = new import1.SimpleChange(this._expr_2,currValue);
      this._expr_2 = currValue;
    }
  }
  check_schemeType(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_3,currValue))) {
      this._changed = true;
      this.context.schemeType = currValue;
      this._changes['schemeType'] = new import1.SimpleChange(this._expr_3,currValue);
      this._expr_3 = currValue;
    }
  }
  check_customColors(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_4,currValue))) {
      this._changed = true;
      this.context.customColors = currValue;
      this._changes['customColors'] = new import1.SimpleChange(this._expr_4,currValue);
      this._expr_4 = currValue;
    }
  }
  check_legend(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_5,currValue))) {
      this._changed = true;
      this.context.legend = currValue;
      this._changes['legend'] = new import1.SimpleChange(this._expr_5,currValue);
      this._expr_5 = currValue;
    }
  }
  check_xAxis(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_6,currValue))) {
      this._changed = true;
      this.context.xAxis = currValue;
      this._changes['xAxis'] = new import1.SimpleChange(this._expr_6,currValue);
      this._expr_6 = currValue;
    }
  }
  check_yAxis(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_7,currValue))) {
      this._changed = true;
      this.context.yAxis = currValue;
      this._changes['yAxis'] = new import1.SimpleChange(this._expr_7,currValue);
      this._expr_7 = currValue;
    }
  }
  check_showXAxisLabel(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_8,currValue))) {
      this._changed = true;
      this.context.showXAxisLabel = currValue;
      this._changes['showXAxisLabel'] = new import1.SimpleChange(this._expr_8,currValue);
      this._expr_8 = currValue;
    }
  }
  check_showYAxisLabel(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_9,currValue))) {
      this._changed = true;
      this.context.showYAxisLabel = currValue;
      this._changes['showYAxisLabel'] = new import1.SimpleChange(this._expr_9,currValue);
      this._expr_9 = currValue;
    }
  }
  check_xAxisLabel(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_10,currValue))) {
      this._changed = true;
      this.context.xAxisLabel = currValue;
      this._changes['xAxisLabel'] = new import1.SimpleChange(this._expr_10,currValue);
      this._expr_10 = currValue;
    }
  }
  check_yAxisLabel(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_11,currValue))) {
      this._changed = true;
      this.context.yAxisLabel = currValue;
      this._changes['yAxisLabel'] = new import1.SimpleChange(this._expr_11,currValue);
      this._expr_11 = currValue;
    }
  }
  check_scaleType(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_12,currValue))) {
      this._changed = true;
      this.context.scaleType = currValue;
      this._changes['scaleType'] = new import1.SimpleChange(this._expr_12,currValue);
      this._expr_12 = currValue;
    }
  }
  check_gradient(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_13,currValue))) {
      this._changed = true;
      this.context.gradient = currValue;
      this._changes['gradient'] = new import1.SimpleChange(this._expr_13,currValue);
      this._expr_13 = currValue;
    }
  }
  check_showGridLines(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_14,currValue))) {
      this._changed = true;
      this.context.showGridLines = currValue;
      this._changes['showGridLines'] = new import1.SimpleChange(this._expr_14,currValue);
      this._expr_14 = currValue;
    }
  }
  check_activeEntries(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_15,currValue))) {
      this._changed = true;
      this.context.activeEntries = currValue;
      this._changes['activeEntries'] = new import1.SimpleChange(this._expr_15,currValue);
      this._expr_15 = currValue;
    }
  }
  ngDoCheck(view:import2.AppView<any>,el:any,throwOnChange:boolean):boolean {
    var changed:any = this._changed;
    this._changed = false;
    if (!throwOnChange) { if (changed) {
      this.context.ngOnChanges(this._changes);
      this._changes = {};
    } }
    return changed;
  }
  checkHost(view:import2.AppView<any>,componentView:import2.AppView<any>,el:any,throwOnChange:boolean):void {
  }
  handleEvent(eventName:string,$event:any):boolean {
    var result:boolean = true;
    return result;
  }
  subscribe(view:import2.AppView<any>,_eventHandler:any,emit0:boolean,emit1:boolean,emit2:boolean):void {
    this._eventHandler = _eventHandler;
    if (emit0) { (this.subscription0 = this.context.select.subscribe(_eventHandler.bind(view,'select'))); }
    if (emit1) { (this.subscription1 = this.context.activate.subscribe(_eventHandler.bind(view,'activate'))); }
    if (emit2) { (this.subscription2 = this.context.deactivate.subscribe(_eventHandler.bind(view,'deactivate'))); }
  }
}
var renderType_BarVertical2DComponent_Host:import4.RenderComponentType = import3.createRenderComponentType('',0,import5.ViewEncapsulation.None,([] as any[]),{});
class View_BarVertical2DComponent_Host0 extends import2.AppView<any> {
  _el_0:any;
  compView_0:import2.AppView<import0.BarVertical2DComponent>;
  _BarVertical2DComponent_0_3:Wrapper_BarVertical2DComponent;
  constructor(viewUtils:import3.ViewUtils,parentView:import2.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_BarVertical2DComponent_Host0,renderType_BarVertical2DComponent_Host,import6.ViewType.HOST,viewUtils,parentView,parentIndex,parentElement,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import8.ComponentRef<any> {
    this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer,'ngx-charts-bar-vertical-2d',import3.EMPTY_INLINE_ARRAY,rootSelector,(null as any));
    this.compView_0 = new View_BarVertical2DComponent0(this.viewUtils,this,0,this._el_0);
    this._BarVertical2DComponent_0_3 = new Wrapper_BarVertical2DComponent(new import9.ElementRef(this._el_0),this.injectorGet(import10.NgZone,this.parentIndex),this.compView_0.ref,this.injectorGet(import11.Location,this.parentIndex));
    this.compView_0.create(this._BarVertical2DComponent_0_3.context);
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [this._el_0]),(null as any));
    return new import8.ComponentRef_<any>(0,this,this._el_0,this._BarVertical2DComponent_0_3.context);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import0.BarVertical2DComponent) && (0 === requestNodeIndex))) { return this._BarVertical2DComponent_0_3.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    if (this._BarVertical2DComponent_0_3.ngDoCheck(this,this._el_0,throwOnChange)) { this.compView_0.markAsCheckOnce(); }
    this.compView_0.internalDetectChanges(throwOnChange);
    if (!throwOnChange) { if ((this.numberOfChecks === 0)) { this._BarVertical2DComponent_0_3.context.ngAfterViewInit(); } }
  }
  destroyInternal():void {
    this.compView_0.destroy();
    this._BarVertical2DComponent_0_3.ngOnDestroy();
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
}
export const BarVertical2DComponentNgFactory:import8.ComponentFactory<import0.BarVertical2DComponent> = new import8.ComponentFactory<import0.BarVertical2DComponent>('ngx-charts-bar-vertical-2d',View_BarVertical2DComponent_Host0,import0.BarVertical2DComponent);
const styles_BarVertical2DComponent:any[] = ([] as any[]);
var BarVertical2DComponent_animationState_states:any = {
  '*': {},
  'void': {}
}
;
function BarVertical2DComponent_animationState_factory(view:import2.AppView<any>,element:any,currentState:any,nextState:any):import12.AnimationTransition {
  var previousPlayers:any = view.animationContext.getAnimationPlayers(element,((nextState == 'void')? (null as any): 'animationState'));
  var collectedStyles:any = {};
  var player:any = (null as any);
  var totalTime:any = 0;
  var defaultStateStyles:any = BarVertical2DComponent_animationState_states['*'];
  var startStateStyles:any = BarVertical2DComponent_animationState_states[currentState];
  if ((startStateStyles == (null as any))) { (startStateStyles = defaultStateStyles); }
  var endStateStyles:any = BarVertical2DComponent_animationState_states[nextState];
  if ((endStateStyles == (null as any))) { (endStateStyles = defaultStateStyles); }
  if (((player == (null as any)) && (true && (nextState == 'void')))) {
      player = new import13.AnimationSequencePlayer([view.renderer.animate(element,new import14.AnimationStyles(import15.collectAndResolveStyles(collectedStyles,[
        startStateStyles,
        {
          'opacity': '1',
          'transform': '*'
        }

      ]
      )),[
          new import16.AnimationKeyframe(0,new import14.AnimationStyles(import15.collectAndResolveStyles(collectedStyles,[{
            'opacity': '1',
            'transform': '*'
          }
        ]))),
          new import16.AnimationKeyframe(1,new import14.AnimationStyles(import15.collectAndResolveStyles(collectedStyles,[{
            'opacity': '0',
            'transform': 'scale(0)'
          }
        ])))
      ]
    ,500,0,(null as any),previousPlayers)]);
    totalTime = 500;
  }
  if ((player == (null as any))) { (player = new import17.NoOpAnimationPlayer()); }
  player.onDone(():void => {
    player.destroy();
    import15.renderStyles(element,view.renderer,import15.prepareFinalAnimationStyles(startStateStyles,endStateStyles));
  });
  new import13.AnimationSequencePlayer(previousPlayers).destroy();
  import15.renderStyles(element,view.renderer,import15.clearStyles(startStateStyles));
  view.animationContext.queueAnimation(element,'animationState',player);
  return new import12.AnimationTransition(player,currentState,nextState,totalTime);
}
class View_BarVertical2DComponent1 extends import2.AppView<any> {
  _el_0:any;
  compView_0:import2.AppView<import18.XAxisComponent>;
  _XAxisComponent_0_3:import19.Wrapper_XAxisComponent;
  _text_1:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import2.AppView<any>,parentIndex:number,parentElement:any,declaredViewContainer:import20.ViewContainer) {
    super(View_BarVertical2DComponent1,renderType_BarVertical2DComponent,import6.ViewType.EMBEDDED,viewUtils,parentView,parentIndex,parentElement,import7.ChangeDetectorStatus.CheckAlways,declaredViewContainer);
  }
  createInternal(rootSelector:string):import8.ComponentRef<any> {
    this._el_0 = import3.createRenderElement(this.renderer,(null as any),':svg:g',new import3.InlineArray2(2,'ngx-charts-x-axis',''),(null as any));
    this.compView_0 = new import19.View_XAxisComponent0(this.viewUtils,this,0,this._el_0);
    this._XAxisComponent_0_3 = new import19.Wrapper_XAxisComponent();
    this._text_1 = this.renderer.createText((null as any),'\n        ',(null as any));
    this.compView_0.create(this._XAxisComponent_0_3.context);
    var disposable_0:Function = import3.subscribeToRenderElement(this,this._el_0,new import3.InlineArray2(2,'dimensionsChanged',(null as any)),this.eventHandler(this.handleEvent_0));
    this._XAxisComponent_0_3.subscribe(this,this.eventHandler(this.handleEvent_0),true);
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [
      this._el_0,
      this._text_1
    ]
    ),[disposable_0]);
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import18.XAxisComponent) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 1)))) { return this._XAxisComponent_0_3.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_0_0_0:any = this.parentView.context.groupScale;
    this._XAxisComponent_0_3.check_xScale(currVal_0_0_0,throwOnChange,false);
    const currVal_0_0_1:any = this.parentView.context.dims;
    this._XAxisComponent_0_3.check_dims(currVal_0_0_1,throwOnChange,false);
    const currVal_0_0_2:any = this.parentView.context.showXAxisLabel;
    this._XAxisComponent_0_3.check_showLabel(currVal_0_0_2,throwOnChange,false);
    const currVal_0_0_3:any = this.parentView.context.xAxisLabel;
    this._XAxisComponent_0_3.check_labelText(currVal_0_0_3,throwOnChange,false);
    if (this._XAxisComponent_0_3.ngDoCheck(this,this._el_0,throwOnChange)) { this.compView_0.markAsCheckOnce(); }
    this.compView_0.internalDetectChanges(throwOnChange);
  }
  destroyInternal():void {
    this.compView_0.destroy();
    this._XAxisComponent_0_3.ngOnDestroy();
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
  handleEvent_0(eventName:string,$event:any):boolean {
    this.markPathToRootAsCheckOnce();
    var result:boolean = true;
    if ((eventName == 'dimensionsChanged')) {
      const pd_sub_0:any = ((<any>this.parentView.context.updateXAxisHeight($event)) !== false);
      result = (pd_sub_0 && result);
    }
    return result;
  }
}
class View_BarVertical2DComponent2 extends import2.AppView<any> {
  _el_0:any;
  compView_0:import2.AppView<import21.YAxisComponent>;
  _YAxisComponent_0_3:import22.Wrapper_YAxisComponent;
  _text_1:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import2.AppView<any>,parentIndex:number,parentElement:any,declaredViewContainer:import20.ViewContainer) {
    super(View_BarVertical2DComponent2,renderType_BarVertical2DComponent,import6.ViewType.EMBEDDED,viewUtils,parentView,parentIndex,parentElement,import7.ChangeDetectorStatus.CheckAlways,declaredViewContainer);
  }
  createInternal(rootSelector:string):import8.ComponentRef<any> {
    this._el_0 = import3.createRenderElement(this.renderer,(null as any),':svg:g',new import3.InlineArray2(2,'ngx-charts-y-axis',''),(null as any));
    this.compView_0 = new import22.View_YAxisComponent0(this.viewUtils,this,0,this._el_0);
    this._YAxisComponent_0_3 = new import22.Wrapper_YAxisComponent();
    this._text_1 = this.renderer.createText((null as any),'\n        ',(null as any));
    this.compView_0.create(this._YAxisComponent_0_3.context);
    var disposable_0:Function = import3.subscribeToRenderElement(this,this._el_0,new import3.InlineArray2(2,'dimensionsChanged',(null as any)),this.eventHandler(this.handleEvent_0));
    this._YAxisComponent_0_3.subscribe(this,this.eventHandler(this.handleEvent_0),true);
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [
      this._el_0,
      this._text_1
    ]
    ),[disposable_0]);
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import21.YAxisComponent) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 1)))) { return this._YAxisComponent_0_3.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_0_0_0:any = this.parentView.context.valueScale;
    this._YAxisComponent_0_3.check_yScale(currVal_0_0_0,throwOnChange,false);
    const currVal_0_0_1:any = this.parentView.context.dims;
    this._YAxisComponent_0_3.check_dims(currVal_0_0_1,throwOnChange,false);
    const currVal_0_0_2:any = this.parentView.context.showGridLines;
    this._YAxisComponent_0_3.check_showGridLines(currVal_0_0_2,throwOnChange,false);
    const currVal_0_0_3:any = this.parentView.context.showYAxisLabel;
    this._YAxisComponent_0_3.check_showLabel(currVal_0_0_3,throwOnChange,false);
    const currVal_0_0_4:any = this.parentView.context.yAxisLabel;
    this._YAxisComponent_0_3.check_labelText(currVal_0_0_4,throwOnChange,false);
    if (this._YAxisComponent_0_3.ngDoCheck(this,this._el_0,throwOnChange)) { this.compView_0.markAsCheckOnce(); }
    this.compView_0.internalDetectChanges(throwOnChange);
  }
  destroyInternal():void {
    this.compView_0.destroy();
    this._YAxisComponent_0_3.ngOnDestroy();
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
  handleEvent_0(eventName:string,$event:any):boolean {
    this.markPathToRootAsCheckOnce();
    var result:boolean = true;
    if ((eventName == 'dimensionsChanged')) {
      const pd_sub_0:any = ((<any>this.parentView.context.updateYAxisWidth($event)) !== false);
      result = (pd_sub_0 && result);
    }
    return result;
  }
}
class View_BarVertical2DComponent3 extends import2.AppView<any> {
  _el_0:any;
  compView_0:import2.AppView<import23.SeriesVerticalComponent>;
  _SeriesVerticalComponent_0_3:import24.Wrapper_SeriesVerticalComponent;
  /*private*/ _expr_3:any;
  /*private*/ _expr_4:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import2.AppView<any>,parentIndex:number,parentElement:any,declaredViewContainer:import20.ViewContainer) {
    super(View_BarVertical2DComponent3,renderType_BarVertical2DComponent,import6.ViewType.EMBEDDED,viewUtils,parentView,parentIndex,parentElement,import7.ChangeDetectorStatus.CheckAlways,declaredViewContainer);
    this._expr_3 = import1.UNINITIALIZED;
    this._expr_4 = import1.UNINITIALIZED;
  }
  createInternal(rootSelector:string):import8.ComponentRef<any> {
    this._el_0 = import3.createRenderElement(this.renderer,(null as any),':svg:g',new import3.InlineArray2(2,'ngx-charts-series-vertical',''),(null as any));
    this.compView_0 = new import24.View_SeriesVerticalComponent0(this.viewUtils,this,0,this._el_0);
    this._SeriesVerticalComponent_0_3 = new import24.Wrapper_SeriesVerticalComponent();
    this.compView_0.create(this._SeriesVerticalComponent_0_3.context);
    var disposable_0:Function = import3.subscribeToRenderElement(this,this._el_0,new import3.InlineArray8(6,'select',(null as any),'activate',(null as any),'deactivate',(null as any)),this.eventHandler(this.handleEvent_0));
    this._SeriesVerticalComponent_0_3.subscribe(this,this.eventHandler(this.handleEvent_0),true,true,true);
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [this._el_0]),[disposable_0]);
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import23.SeriesVerticalComponent) && (0 === requestNodeIndex))) { return this._SeriesVerticalComponent_0_3.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_3:any = 'active';
    if (import3.checkBinding(throwOnChange,this._expr_3,currVal_3)) {
      var animationTransition_animationState:any = this.componentType.animations['animationState'](this,this._el_0,((this._expr_3 == import1.UNINITIALIZED)? 'void': this._expr_3),((currVal_3 == import1.UNINITIALIZED)? 'void': currVal_3));
      this._expr_3 = currVal_3;
    }
    const currVal_0_0_0:any = this.parentView.context.dims;
    this._SeriesVerticalComponent_0_3.check_dims(currVal_0_0_0,throwOnChange,false);
    const currVal_0_0_1:any = this.context.$implicit.series;
    this._SeriesVerticalComponent_0_3.check_series(currVal_0_0_1,throwOnChange,false);
    const currVal_0_0_2:any = this.parentView.context.innerScale;
    this._SeriesVerticalComponent_0_3.check_xScale(currVal_0_0_2,throwOnChange,false);
    const currVal_0_0_3:any = this.parentView.context.valueScale;
    this._SeriesVerticalComponent_0_3.check_yScale(currVal_0_0_3,throwOnChange,false);
    const currVal_0_0_4:any = this.parentView.context.colors;
    this._SeriesVerticalComponent_0_3.check_colors(currVal_0_0_4,throwOnChange,false);
    const currVal_0_0_5:any = this.parentView.context.gradient;
    this._SeriesVerticalComponent_0_3.check_gradient(currVal_0_0_5,throwOnChange,false);
    const currVal_0_0_6:any = this.parentView.context.activeEntries;
    this._SeriesVerticalComponent_0_3.check_activeEntries(currVal_0_0_6,throwOnChange,false);
    const currVal_0_0_7:any = this.context.$implicit.name;
    this._SeriesVerticalComponent_0_3.check_seriesName(currVal_0_0_7,throwOnChange,false);
    if (this._SeriesVerticalComponent_0_3.ngDoCheck(this,this._el_0,throwOnChange)) { this.compView_0.markAsCheckOnce(); }
    const currVal_4:any = this.parentView.context.groupTransform(this.context.$implicit);
    if (import3.checkBinding(throwOnChange,this._expr_4,currVal_4)) {
      this.renderer.setElementAttribute(this._el_0,'transform',((currVal_4 == null)? (null as any): currVal_4.toString()));
      this._expr_4 = currVal_4;
    }
    this.compView_0.internalDetectChanges(throwOnChange);
  }
  destroyInternal():void {
    this.compView_0.destroy();
    this._SeriesVerticalComponent_0_3.ngOnDestroy();
  }
  detachInternal():void {
    var animationTransition_animationState:any = this.componentType.animations['animationState'](this,this._el_0,this._expr_3,'void');
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
  handleEvent_0(eventName:string,$event:any):boolean {
    this.markPathToRootAsCheckOnce();
    var result:boolean = true;
    if ((eventName == 'select')) {
      const pd_sub_0:any = ((<any>this.parentView.context.onClick($event,this.context.$implicit)) !== false);
      result = (pd_sub_0 && result);
    }
    if ((eventName == 'activate')) {
      const pd_sub_1:any = ((<any>this.parentView.context.onActivate($event,this.context.$implicit)) !== false);
      result = (pd_sub_1 && result);
    }
    if ((eventName == 'deactivate')) {
      const pd_sub_2:any = ((<any>this.parentView.context.onDeactivate($event,this.context.$implicit)) !== false);
      result = (pd_sub_2 && result);
    }
    return result;
  }
}
var renderType_BarVertical2DComponent:import4.RenderComponentType = import3.createRenderComponentType('',0,import5.ViewEncapsulation.None,styles_BarVertical2DComponent,{'animationState': BarVertical2DComponent_animationState_factory});
export class View_BarVertical2DComponent0 extends import2.AppView<import0.BarVertical2DComponent> {
  _text_0:any;
  _el_1:any;
  /*private*/ _vc_1:import20.ViewContainer;
  compView_1:import2.AppView<import25.ChartComponent>;
  _TooltipService_1_5:import26.TooltipService;
  _ChartComponent_1_6:import27.Wrapper_ChartComponent;
  _text_2:any;
  _el_3:any;
  _text_4:any;
  _el_5:any;
  compView_5:import2.AppView<import28.GridPanelSeriesComponent>;
  _GridPanelSeriesComponent_5_3:import29.Wrapper_GridPanelSeriesComponent;
  _text_6:any;
  _text_7:any;
  _anchor_8:any;
  /*private*/ _vc_8:import20.ViewContainer;
  _TemplateRef_8_5:any;
  _NgIf_8_6:import30.Wrapper_NgIf;
  _text_9:any;
  _anchor_10:any;
  /*private*/ _vc_10:import20.ViewContainer;
  _TemplateRef_10_5:any;
  _NgIf_10_6:import30.Wrapper_NgIf;
  _text_11:any;
  _anchor_12:any;
  /*private*/ _vc_12:import20.ViewContainer;
  _TemplateRef_12_5:any;
  _NgFor_12_6:import31.Wrapper_NgFor;
  _text_13:any;
  _text_14:any;
  _text_15:any;
  _arr_31:any;
  /*private*/ _expr_32:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import2.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_BarVertical2DComponent0,renderType_BarVertical2DComponent,import6.ViewType.COMPONENT,viewUtils,parentView,parentIndex,parentElement,import7.ChangeDetectorStatus.CheckOnce);
    this._arr_31 = import3.pureProxy2((p0:any,p1:any):any[] => {
      return [
        p0,
        p1
      ]
      ;
    });
    this._expr_32 = import1.UNINITIALIZED;
  }
  createInternal(rootSelector:string):import8.ComponentRef<any> {
    const parentRenderNode:any = this.renderer.createViewRoot(this.parentElement);
    this._text_0 = this.renderer.createText(parentRenderNode,'\n    ',(null as any));
    this._el_1 = import3.createRenderElement(this.renderer,parentRenderNode,'ngx-charts-chart',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._vc_1 = new import20.ViewContainer(1,(null as any),this,this._el_1);
    this.compView_1 = new import27.View_ChartComponent0(this.viewUtils,this,1,this._el_1);
    this._TooltipService_1_5 = new import26.TooltipService(this.parentView.injectorGet(import32.InjectionService,this.parentIndex));
    this._ChartComponent_1_6 = new import27.Wrapper_ChartComponent(this._vc_1.vcRef,this._TooltipService_1_5);
    this._text_2 = this.renderer.createText((null as any),'\n      ',(null as any));
    this._el_3 = import3.createRenderElement(this.renderer,(null as any),':svg:g',new import3.InlineArray2(2,'class','bar-chart chart'),(null as any));
    this._text_4 = this.renderer.createText(this._el_3,'\n        ',(null as any));
    this._el_5 = import3.createRenderElement(this.renderer,this._el_3,':svg:g',new import3.InlineArray4(4,'ngx-charts-grid-panel-series','','orient','vertical'),(null as any));
    this.compView_5 = new import29.View_GridPanelSeriesComponent0(this.viewUtils,this,5,this._el_5);
    this._GridPanelSeriesComponent_5_3 = new import29.Wrapper_GridPanelSeriesComponent();
    this._text_6 = this.renderer.createText((null as any),'\n        ',(null as any));
    this.compView_5.create(this._GridPanelSeriesComponent_5_3.context);
    this._text_7 = this.renderer.createText(this._el_3,'\n        ',(null as any));
    this._anchor_8 = this.renderer.createTemplateAnchor(this._el_3,(null as any));
    this._vc_8 = new import20.ViewContainer(8,3,this,this._anchor_8);
    this._TemplateRef_8_5 = new import33.TemplateRef_(this,8,this._anchor_8);
    this._NgIf_8_6 = new import30.Wrapper_NgIf(this._vc_8.vcRef,this._TemplateRef_8_5);
    this._text_9 = this.renderer.createText(this._el_3,'\n        ',(null as any));
    this._anchor_10 = this.renderer.createTemplateAnchor(this._el_3,(null as any));
    this._vc_10 = new import20.ViewContainer(10,3,this,this._anchor_10);
    this._TemplateRef_10_5 = new import33.TemplateRef_(this,10,this._anchor_10);
    this._NgIf_10_6 = new import30.Wrapper_NgIf(this._vc_10.vcRef,this._TemplateRef_10_5);
    this._text_11 = this.renderer.createText(this._el_3,'\n        ',(null as any));
    this._anchor_12 = this.renderer.createTemplateAnchor(this._el_3,(null as any));
    this._vc_12 = new import20.ViewContainer(12,3,this,this._anchor_12);
    this._TemplateRef_12_5 = new import33.TemplateRef_(this,12,this._anchor_12);
    this._NgFor_12_6 = new import31.Wrapper_NgFor(this._vc_12.vcRef,this._TemplateRef_12_5,this.parentView.injectorGet(import34.IterableDiffers,this.parentIndex),this.ref);
    this._text_13 = this.renderer.createText(this._el_3,'\n        ',(null as any));
    this._text_14 = this.renderer.createText((null as any),'\n    ',(null as any));
    this.compView_1.create(this._ChartComponent_1_6.context);
    this._text_15 = this.renderer.createText(parentRenderNode,'\n  ',(null as any));
    var disposable_0:Function = import3.subscribeToRenderElement(this,this._el_1,new import3.InlineArray8(6,'legendLabelActivate',(null as any),'legendLabelDeactivate',(null as any),'legendLabelClick',(null as any)),this.eventHandler(this.handleEvent_1));
    this._ChartComponent_1_6.subscribe(this,this.eventHandler(this.handleEvent_1),true,true,true);
    this.init((null as any),((<any>this.renderer).directRenderer? (null as any): [
      this._text_0,
      this._el_1,
      this._text_2,
      this._el_3,
      this._text_4,
      this._el_5,
      this._text_6,
      this._text_7,
      this._anchor_8,
      this._text_9,
      this._anchor_10,
      this._text_11,
      this._anchor_12,
      this._text_13,
      this._text_14,
      this._text_15
    ]
    ),[disposable_0]);
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import28.GridPanelSeriesComponent) && ((5 <= requestNodeIndex) && (requestNodeIndex <= 6)))) { return this._GridPanelSeriesComponent_5_3.context; }
    if (((token === import33.TemplateRef) && (8 === requestNodeIndex))) { return this._TemplateRef_8_5; }
    if (((token === import35.NgIf) && (8 === requestNodeIndex))) { return this._NgIf_8_6.context; }
    if (((token === import33.TemplateRef) && (10 === requestNodeIndex))) { return this._TemplateRef_10_5; }
    if (((token === import35.NgIf) && (10 === requestNodeIndex))) { return this._NgIf_10_6.context; }
    if (((token === import33.TemplateRef) && (12 === requestNodeIndex))) { return this._TemplateRef_12_5; }
    if (((token === import36.NgFor) && (12 === requestNodeIndex))) { return this._NgFor_12_6.context; }
    if (((token === import26.TooltipService) && ((1 <= requestNodeIndex) && (requestNodeIndex <= 14)))) { return this._TooltipService_1_5; }
    if (((token === import25.ChartComponent) && ((1 <= requestNodeIndex) && (requestNodeIndex <= 14)))) { return this._ChartComponent_1_6.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_1_0_0:any = this._arr_31(this.context.width,this.context.height);
    this._ChartComponent_1_6.check_view(currVal_1_0_0,throwOnChange,false);
    const currVal_1_0_1:any = this.context.legend;
    this._ChartComponent_1_6.check_showLegend(currVal_1_0_1,throwOnChange,false);
    const currVal_1_0_2:any = this.context.legendOptions;
    this._ChartComponent_1_6.check_legendOptions(currVal_1_0_2,throwOnChange,false);
    const currVal_1_0_3:any = this.context.activeEntries;
    this._ChartComponent_1_6.check_activeEntries(currVal_1_0_3,throwOnChange,false);
    if (this._ChartComponent_1_6.ngDoCheck(this,this._el_1,throwOnChange)) { this.compView_1.markAsCheckOnce(); }
    const currVal_5_0_0:any = this.context.results;
    this._GridPanelSeriesComponent_5_3.check_data(currVal_5_0_0,throwOnChange,false);
    const currVal_5_0_1:any = this.context.dims;
    this._GridPanelSeriesComponent_5_3.check_dims(currVal_5_0_1,throwOnChange,false);
    const currVal_5_0_2:any = this.context.groupScale;
    this._GridPanelSeriesComponent_5_3.check_xScale(currVal_5_0_2,throwOnChange,false);
    const currVal_5_0_3:any = this.context.valueScale;
    this._GridPanelSeriesComponent_5_3.check_yScale(currVal_5_0_3,throwOnChange,false);
    const currVal_5_0_4:any = 'vertical';
    this._GridPanelSeriesComponent_5_3.check_orient(currVal_5_0_4,throwOnChange,false);
    if (this._GridPanelSeriesComponent_5_3.ngDoCheck(this,this._el_5,throwOnChange)) { this.compView_5.markAsCheckOnce(); }
    const currVal_8_0_0:any = this.context.xAxis;
    this._NgIf_8_6.check_ngIf(currVal_8_0_0,throwOnChange,false);
    this._NgIf_8_6.ngDoCheck(this,this._anchor_8,throwOnChange);
    const currVal_10_0_0:any = this.context.yAxis;
    this._NgIf_10_6.check_ngIf(currVal_10_0_0,throwOnChange,false);
    this._NgIf_10_6.ngDoCheck(this,this._anchor_10,throwOnChange);
    const currVal_12_0_0:any = this.context.results;
    this._NgFor_12_6.check_ngForOf(currVal_12_0_0,throwOnChange,false);
    const currVal_12_0_1:any = this.context.trackBy;
    this._NgFor_12_6.check_ngForTrackBy(currVal_12_0_1,throwOnChange,false);
    this._NgFor_12_6.ngDoCheck(this,this._anchor_12,throwOnChange);
    this._vc_1.detectChangesInNestedViews(throwOnChange);
    this._vc_8.detectChangesInNestedViews(throwOnChange);
    this._vc_10.detectChangesInNestedViews(throwOnChange);
    this._vc_12.detectChangesInNestedViews(throwOnChange);
    const currVal_32:any = this.context.transform;
    if (import3.checkBinding(throwOnChange,this._expr_32,currVal_32)) {
      this.renderer.setElementAttribute(this._el_3,'transform',((currVal_32 == null)? (null as any): currVal_32.toString()));
      this._expr_32 = currVal_32;
    }
    this.compView_1.internalDetectChanges(throwOnChange);
    this.compView_5.internalDetectChanges(throwOnChange);
  }
  destroyInternal():void {
    this._vc_1.destroyNestedViews();
    this._vc_8.destroyNestedViews();
    this._vc_10.destroyNestedViews();
    this._vc_12.destroyNestedViews();
    this.compView_1.destroy();
    this.compView_5.destroy();
    this._ChartComponent_1_6.ngOnDestroy();
  }
  visitProjectableNodesInternal(nodeIndex:number,ngContentIndex:number,cb:any,ctx:any):void {
    if (((nodeIndex == 1) && (ngContentIndex == 0))) {
      cb(this._text_2,ctx);
      cb(this._el_3,ctx);
      cb(this._text_14,ctx);
    }
  }
  createEmbeddedViewInternal(nodeIndex:number):import2.AppView<any> {
    if ((nodeIndex == 8)) { return new View_BarVertical2DComponent1(this.viewUtils,this,8,this._anchor_8,this._vc_8); }
    if ((nodeIndex == 10)) { return new View_BarVertical2DComponent2(this.viewUtils,this,10,this._anchor_10,this._vc_10); }
    if ((nodeIndex == 12)) { return new View_BarVertical2DComponent3(this.viewUtils,this,12,this._anchor_12,this._vc_12); }
    return (null as any);
  }
  handleEvent_1(eventName:string,$event:any):boolean {
    this.markPathToRootAsCheckOnce();
    var result:boolean = true;
    if ((eventName == 'legendLabelActivate')) {
      const pd_sub_0:any = ((<any>this.context.onActivate($event)) !== false);
      result = (pd_sub_0 && result);
    }
    if ((eventName == 'legendLabelDeactivate')) {
      const pd_sub_1:any = ((<any>this.context.onDeactivate($event)) !== false);
      result = (pd_sub_1 && result);
    }
    if ((eventName == 'legendLabelClick')) {
      const pd_sub_2:any = ((<any>this.context.onClick($event)) !== false);
      result = (pd_sub_2 && result);
    }
    return result;
  }
}