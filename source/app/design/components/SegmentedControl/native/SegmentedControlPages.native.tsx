// app/design/components/SegmentedControl/native/SegmentedControlPages.native.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = function SegmentedControlPage(arg1) {
        var6 = arg1;
        var15 = var6.pageIndex;
        var _closure2_slot0 = var15;
        var5 = var6.index;
        var _closure2_slot1 = var5;
        var9 = var6.item;
        var18 = var6.activePageRangeStart;
        var _closure2_slot2 = var18;
        var17 = var6.activePageRangeEnd;
        var _closure2_slot3 = var17;
        var4 = {'pageIndex': 0, 'index': 0, 'item': 0, 'activePageRangeStart': 0, 'activePageRangeEnd': 0};
        var20 = null;
        var21 = var4;
        var1 = silentSetPrototypeOf(var21, var20);
        var3 = 0;
        var21 = {};
        var20 = var6;
        var19 = var4;
        var8 = copyDataProperties(var21, var20, var19);
        var7 = _closure1_slot0;
        var11 = _closure1_slot2;
        var1 = 4;
        var10 = var11[var1];
        var4 = undefined;
        var13 = var7.bind(var4)(var10);
        var12 = var13.useAnimatedProps;
        var10 = function v() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                var3 = _closure2_slot0;
                var2 = var3.get;
                var2 = var2.bind(var3)();
                var1 = _closure2_slot1;
                var2 = var2 !== var1;
                var1 = {};
                var3 = 'box-none';
                if(!var2) { _fun0001_ip = 39; continue _fun0001 }
 35:
                var3 = 'none';
 39:
                var1['pointerEvents'] = var3;
                var3 = 'auto';
                if(!var2) { _fun0001_ip = 57; continue _fun0001 }
 51:
                var3 = 'no-hide-descendants';
 57:
                var1['importantForAccessibility'] = var3;
                var1['accessibilityElementsHidden'] = var2;
                return var1;
            }
        };
        var14 = {};
        var14['pageIndex'] = var15;
        var14['index'] = var5;
        var10['__closure'] = var14;
        var14 = 85201436921.0;
        var10['__workletHash'] = var14;
        var14 = _closure1_slot14;
        var10['__initData'] = var14;
        var12 = var12.bind(var13)(var10);
        var14 = _closure1_slot4;
        var13 = var14.useState;
        var10 = function() {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                var3 = _closure2_slot1;
                var4 = _closure2_slot2;
                var1 = var4.get;
                var1 = var1.bind(var4)();
                var1 = var3 >= var1;
                if(!var1) { _fun0002_ip = 48; continue _fun0002 }
 27:
                var3 = _closure2_slot1;
                var4 = _closure2_slot3;
                var2 = var4.get;
                var2 = var2.bind(var4)();
                var1 = var3 <= var2;
 48:
                var1 = !var1;
                return var1;
            }
        };
        var14 = var13.bind(var14)(var10);
        var13 = _closure1_slot3;
        var10 = 2;
        var13 = var13.bind(var4)(var14, var10);
        var10 = var13[var3];
        var3 = 1;
        var16 = var13[var3];
        var _closure2_slot4 = var16;
        var3 = var11[var1];
        var14 = var7.bind(var4)(var3);
        var13 = var14.useAnimatedReaction;
        var3 = function h() {
            var3 = _closure2_slot2;
            var1 = var3.get;
            var3 = var1.bind(var3)();
            var1 = new Array(2);
            var1[0] = var3;
            var3 = _closure2_slot3;
            var2 = var3.get;
            var2 = var2.bind(var3)();
            var1[1] = var2;
            return var1;
        };
        var15 = {};
        var15['activePageRangeStart'] = var18;
        var15['activePageRangeEnd'] = var17;
        var3['__closure'] = var15;
        var15 = 14405037686827.0;
        var3['__workletHash'] = var15;
        var15 = _closure1_slot15;
        var3['__initData'] = var15;
        var2 = function _(arg1) {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                var4 = arg1;
                var2 = var4[Symbol.iterator];
                var4 = var2().next;
                var5 = var4().value;
                var3 = var2;
                var1 = undefined;
                var3 = var3 === var1;
                var6 = undefined;
                if(var3) { _fun0003_ip = 27; continue _fun0003 }
 24:
                var6 = var5;
 27:
                var5 = undefined;
                if(var3) { _fun0003_ip = 57; continue _fun0003 }
 32:
                var7 = var4().value;
                var4 = var2;
                var4 = var4 === var1;
                var5 = undefined;
                var3 = var4;
                if(var4) { _fun0003_ip = 57; continue _fun0003 }
 51:
                var5 = var7;
                var3 = var4;
 57:
                if(var3) { _fun0003_ip = 63; continue _fun0003 }
 60:
                var2.return();
 63:
                var3 = _closure1_slot0;
                var4 = _closure1_slot2;
                var2 = 4;
                var2 = var4[var2];
                var7 = var3.bind(var1)(var2);
                var3 = var7.runOnJS;
                var2 = _closure2_slot4;
                var3 = var3.bind(var7)(var2);
                var2 = _closure2_slot1;
                var2 = var2 >= var6;
                if(!var2) { _fun0003_ip = 122; continue _fun0003 }
 114:
                var4 = _closure2_slot1;
                var2 = var4 <= var5;
 122:
                var2 = !var2;
                var2 = var3.bind(var1)(var2);
                return var1;
            }
        };
        var15 = {};
        var15['index'] = var5;
        var17 = var11[var1];
        var17 = var7.bind(var4)(var17);
        var17 = var17.runOnJS;
        var15['runOnJS'] = var17;
        var15['setFreeze'] = var16;
        var2['__closure'] = var15;
        var15 = 15562965085515.0;
        var2['__workletHash'] = var15;
        var15 = _closure1_slot16;
        var2['__initData'] = var15;
        var2 = var13.bind(var14)(var3, var2);
        var3 = _closure1_slot5;
        var2 = _closure1_slot1;
        var1 = var11[var1];
        var1 = var2.bind(var4)(var1);
        var2 = var1.View;
        var1 = {};
        var21 = var1;
        var20 = var8;
        var8 = copyDataProperties(var21, var20);
        var8 = 'animatedProps';
        var1[var8] = var12;
        var8 = _closure1_slot5;
        var6 = 8;
        var6 = var11[var6];
        var6 = var7.bind(var4)(var6);
        var7 = var6.Freeze;
        var6 = {};
        var6['freeze'] = var10;
        var9 = var9.page;
        var6['children'] = var9;
        var7 = var8.bind(var4)(var7, var6);
        var6 = 'children';
        var1[var6] = var7;
        var1 = var3.bind(var4)(var2, var1, var5);
        return var1;
    };
    var _closure1_slot20 = var1;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var8 = var6[var4];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var8);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.ScrollView;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot5 = var4;
    var4 = 4;
    var4 = var6[var4];
    var7 = var7.bind(var1)(var4);
    var4 = var7.createAnimatedComponent;
    var4 = var4.bind(var7)(var8);
    var _closure1_slot6 = var4;
    var4 = {};
    var7 = 'function SegmentedControlPagesNativeTsx1(){const{activeIndex}=this.__closure;return activeIndex.get();}';
    var4['code'] = var7;
    var _closure1_slot7 = var4;
    var4 = {};
    var7 = 'function SegmentedControlPagesNativeTsx2(value){const{runOnJS,updateCurrentActiveIndex}=this.__closure;runOnJS(updateCurrentActiveIndex)(value);}';
    var4['code'] = var7;
    var _closure1_slot8 = var4;
    var4 = {};
    var7 = 'function SegmentedControlPagesNativeTsx3(){const{pageIndex}=this.__closure;return pageIndex.get();}';
    var4['code'] = var7;
    var _closure1_slot9 = var4;
    var4 = {};
    var7 = 'function SegmentedControlPagesNativeTsx4(value){const{activeIndex}=this.__closure;activeIndex.set(value);}';
    var4['code'] = var7;
    var _closure1_slot10 = var4;
    var4 = {};
    var7 = 'function SegmentedControlPagesNativeTsx5(contentOffset,contentSize){const{pageIndex,roundIfClose,pageWidth,reportedPageIndex,runOnJS,onPageChanged}=this.__closure;pageIndex.set(Math.min(Math.max(roundIfClose(contentOffset.x/pageWidth,1e-4),0),roundIfClose(contentSize.width/pageWidth,1e-4)-1));const pageFullyVisible=pageIndex.get()%1===0;if(pageFullyVisible&&reportedPageIndex.get()!==pageIndex.get()){reportedPageIndex.set(pageIndex.get());runOnJS(onPageChanged)(pageIndex.get());}}';
    var4['code'] = var7;
    var _closure1_slot11 = var4;
    var4 = {};
    var7 = 'function SegmentedControlPagesNativeTsx6({contentOffset:contentOffset,contentSize:contentSize}){const{scrollTarget,roundIfClose,runOnJS,refreshScrollOffset,resolvePageIndex}=this.__closure;if(scrollTarget.get()!==-1){const hasReachedTarget=roundIfClose(contentOffset.x-scrollTarget.get(),1e-4)===0;if(hasReachedTarget){scrollTarget.set(-1);}else{const page=scrollTarget.get();runOnJS(refreshScrollOffset)(page);}}resolvePageIndex(contentOffset,contentSize);}';
    var4['code'] = var7;
    var _closure1_slot12 = var4;
    var4 = {};
    var7 = 'function SegmentedControlPagesNativeTsx7(event){const{lastScrollOffsetX,onScrollWorklet,itemCount,pageWidth,activeIndex,runOnJS,refreshScrollOffset,scrollOverflow,scrollTarget,roundIfClose,resolvePageIndex}=this.__closure;var _onScrollWorklet;const{contentOffset:contentOffset,contentSize:contentSize}=event;if(contentSize.width===0){return;}if(lastScrollOffsetX.get()===contentOffset.x){return;}lastScrollOffsetX.set(contentOffset.x);(_onScrollWorklet=onScrollWorklet)===null||_onScrollWorklet===void 0||_onScrollWorklet(event);const expectedContentSize=itemCount*pageWidth;if(Math.round(expectedContentSize)%Math.round(contentSize.width)!==0){const page=activeIndex.get()*pageWidth;runOnJS(refreshScrollOffset)(page);return;}if(contentOffset.x<0){scrollOverflow.set(contentOffset.x);}else if(contentOffset.x>contentSize.width-pageWidth){scrollOverflow.set(contentOffset.x-(contentSize.width-pageWidth));}else{scrollOverflow.set(0);}if(scrollTarget.get()!==-1){const hasReachedTarget=roundIfClose(contentOffset.x-scrollTarget.get(),1e-4)===0;if(hasReachedTarget){scrollTarget.set(-1);}else{return;}}resolvePageIndex(contentOffset,contentSize);}';
    var4['code'] = var7;
    var _closure1_slot13 = var4;
    var4 = {};
    var7 = "function SegmentedControlPagesNativeTsx8(){const{pageIndex,index}=this.__closure;const isHidden=pageIndex.get()!==index;return{pointerEvents:isHidden?'none':'box-none',importantForAccessibility:isHidden?'no-hide-descendants':'auto',accessibilityElementsHidden:isHidden};}";
    var4['code'] = var7;
    var _closure1_slot14 = var4;
    var4 = {};
    var7 = 'function SegmentedControlPagesNativeTsx9(){const{activePageRangeStart,activePageRangeEnd}=this.__closure;return[activePageRangeStart.get(),activePageRangeEnd.get()];}';
    var4['code'] = var7;
    var _closure1_slot15 = var4;
    var4 = {};
    var7 = 'function SegmentedControlPagesNativeTsx10([start,end]){const{index,runOnJS,setFreeze}=this.__closure;const isInActiveRange=index>=start&&index<=end;runOnJS(setFreeze)(!isInActiveRange);}';
    var4['code'] = var7;
    var _closure1_slot16 = var4;
    var4 = {};
    var7 = 'function SegmentedControlPagesNativeTsx11(min,max){const{activePageRangeStart,activePageRangeEnd}=this.__closure;activePageRangeStart.set(Math.min(activePageRangeStart.get(),min));activePageRangeEnd.set(Math.max(activePageRangeEnd.get(),max));}';
    var4['code'] = var7;
    var _closure1_slot17 = var4;
    var4 = {};
    var7 = 'function SegmentedControlPagesNativeTsx12(){const{activeIndex,pressedIndex}=this.__closure;return{activeIndex:activeIndex.get(),pressedIndex:pressedIndex.get()};}';
    var4['code'] = var7;
    var _closure1_slot18 = var4;
    var4 = {};
    var7 = 'function SegmentedControlPagesNativeTsx13({activeIndex:activeIndex,pressedIndex:pressedIndex}){const{expandActivePageRange}=this.__closure;let min=activeIndex;let max=activeIndex;if(pressedIndex!==-1){min=Math.min(activeIndex,pressedIndex);max=Math.max(activeIndex,pressedIndex);}expandActivePageRange(Math.floor(min),Math.ceil(max));}';
    var4['code'] = var7;
    var _closure1_slot19 = var4;
    var4 = 9;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'design/components/SegmentedControl/native/SegmentedControlPages.native.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function SegmentedControlPages(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var2 = arg1;
            var1 = var2.state;
            var14 = var2.style;
            var11 = var2.bounces;
            var7 = var2.nativeGesture;
            var17 = var2.onBeginDragWorklet;
            var16 = var2.onEndDragWorklet;
            var27 = var2.onScrollWorklet;
            var _closure2_slot0 = var27;
            var9 = var1.items;
            var4 = var1.activeIndex;
            var _closure2_slot1 = var4;
            var13 = var1.pagerRef;
            var _closure2_slot2 = var13;
            var22 = var1.scrollTarget;
            var _closure2_slot3 = var22;
            var23 = var1.scrollOverflow;
            var _closure2_slot4 = var23;
            var3 = var1.pressedIndex;
            var8 = var1.onPageChangeRef;
            var _closure2_slot5 = var8;
            var12 = var1.pageWidth;
            var _closure2_slot6 = var12;
            var20 = _closure1_slot0;
            var21 = _closure1_slot2;
            var25 = 4;
            var1 = var21[var25];
            var5 = undefined;
            var15 = var20.bind(var5)(var1);
            var10 = var15.useSharedValue;
            var1 = var4.get;
            var1 = var1.bind(var4)();
            var1 = var10.bind(var15)(var1);
            var _closure2_slot7 = var1;
            var10 = var21[var25];
            var18 = var20.bind(var5)(var10);
            var15 = var18.useSharedValue;
            var10 = var4.get;
            var10 = var10.bind(var4)();
            var29 = var15.bind(var18)(var10);
            var _closure2_slot8 = var29;
            var26 = var9.length;
            var _closure2_slot9 = var26;
            var10 = var21[var25];
            var15 = var20.bind(var5)(var10);
            var10 = var15.useSharedValue;
            var28 = var10.bind(var15)(var5);
            var _closure2_slot10 = var28;
            var18 = _closure1_slot4;
            var15 = var18.useRef;
            var10 = false;
            var10 = var15.bind(var18)(var10);
            var _closure2_slot11 = var10;
            var18 = _closure1_slot4;
            var15 = var18.useRef;
            var10 = var4.get;
            var10 = var10.bind(var4)();
            var10 = var15.bind(var18)(var10);
            var _closure2_slot12 = var10;
            var19 = _closure1_slot4;
            var18 = var19.useCallback;
            var15 = function(arg1) {
                var2 = _closure2_slot12;
                var1 = arg1;
                var2['current'] = var1;
                var1 = undefined;
                return var1;
            };
            var10 = new Array(0);
            var30 = var18.bind(var19)(var15, var10);
            var _closure2_slot13 = var30;
            var10 = var21[var25];
            var19 = var20.bind(var5)(var10);
            var18 = var19.useAnimatedReaction;
            var15 = function b() {
                var2 = _closure2_slot1;
                var1 = var2.get;
                var1 = var1.bind(var2)();
                return var1;
            };
            var10 = {};
            var10['activeIndex'] = var4;
            var15['__closure'] = var10;
            var10 = 4275537317596.0;
            var15['__workletHash'] = var10;
            var10 = _closure1_slot7;
            var15['__initData'] = var10;
            var10 = function k(arg1) {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 4;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.runOnJS;
                var2 = _closure2_slot13;
                var3 = var3.bind(var4)(var2);
                var2 = arg1;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var24 = {};
            var31 = var21[var25];
            var31 = var20.bind(var5)(var31);
            var31 = var31.runOnJS;
            var24['runOnJS'] = var31;
            var24['updateCurrentActiveIndex'] = var30;
            var10['__closure'] = var24;
            var24 = 1219187007872.0;
            var10['__workletHash'] = var24;
            var24 = _closure1_slot8;
            var10['__initData'] = var24;
            var10 = var18.bind(var19)(var15, var10);
            var10 = var21[var25];
            var19 = var20.bind(var5)(var10);
            var18 = var19.useAnimatedReaction;
            var15 = function M() {
                var2 = _closure2_slot7;
                var1 = var2.get;
                var1 = var1.bind(var2)();
                return var1;
            };
            var10 = {};
            var10['pageIndex'] = var1;
            var15['__closure'] = var10;
            var10 = 3363652844798.0;
            var15['__workletHash'] = var10;
            var10 = _closure1_slot9;
            var15['__initData'] = var10;
            var10 = function J(arg1) {
                var3 = _closure2_slot1;
                var2 = var3.set;
                var1 = arg1;
                var1 = var2.bind(var3)(var1);
                var1 = undefined;
                return var1;
            };
            var24 = {};
            var24['activeIndex'] = var4;
            var10['__closure'] = var24;
            var24 = 10225590895783.0;
            var10['__workletHash'] = var24;
            var24 = _closure1_slot10;
            var10['__initData'] = var24;
            var10 = var18.bind(var19)(var15, var10);
            var18 = _closure1_slot4;
            var15 = var18.useCallback;
            var10 = new Array(1);
            var10[0] = var8;
            var8 = function(arg1) {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                    var2 = _closure2_slot5;
                    var4 = null;
                    var2 = var4 == var2;
                    if(var2) { _fun0005_ip = 29; continue _fun0005 }
 16:
                    var3 = _closure2_slot5;
                    var3 = var3.current;
                    var2 = var4 == var3;
 29:
                    if(var2) { _fun0005_ip = 49; continue _fun0005 }
 32:
                    var3 = _closure2_slot5;
                    var2 = var3.current;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
 49:
                    var1 = undefined;
                    return var1;
                }
            };
            var30 = var15.bind(var18)(var8, var10);
            var _closure2_slot14 = var30;
            var18 = _closure1_slot4;
            var15 = var18.useCallback;
            var10 = new Array(2);
            var10[0] = var13;
            var10[1] = var22;
            var8 = function(arg1) {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                    var5 = arg1;
                    var2 = _closure2_slot3;
                    var1 = var2.set;
                    var1 = var1.bind(var2)(var5);
                    var1 = _closure2_slot2;
                    var6 = null;
                    var2 = var6 == var1;
                    var1 = undefined;
                    var4 = undefined;
                    if(var2) { _fun0006_ip = 53; continue _fun0006 }
 37:
                    var3 = _closure2_slot2;
                    var3 = var3.current;
                    var2 = var6 == var3;
                    var4 = var3;
 53:
                    if(var2) { _fun0006_ip = 80; continue _fun0006 }
 56:
                    var3 = var4.scrollTo;
                    var2 = {};
                    var2['x'] = var5;
                    var5 = false;
                    var2['animated'] = var5;
                    var2 = var3.bind(var4)(var2);
 80:
                    return var1;
                }
            };
            var24 = var15.bind(var18)(var8, var10);
            var _closure2_slot15 = var24;
            var18 = _closure1_slot4;
            var15 = var18.useEffect;
            var10 = new Array(2);
            var10[0] = var12;
            var10[1] = var24;
            var8 = function() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                    var2 = _closure2_slot6;
                    var3 = 0;
                    if(!(var2 > var3)) { _fun0007_ip = 78; continue _fun0007 }
 13:
                    var2 = _closure2_slot11;
                    var2 = var2.current;
                    if(var2) { _fun0007_ip = 78; continue _fun0007 }
 25:
                    var4 = _closure2_slot11;
                    var2 = true;
                    var4['current'] = var2;
                    var2 = _closure2_slot12;
                    var2 = var2.current;
                    if(!(var2 > var3)) { _fun0007_ip = 78; continue _fun0007 }
 50:
                    var2 = _closure2_slot12;
                    var3 = var2.current;
                    var2 = _closure2_slot6;
                    var3 = var3 * var2;
                    var2 = _closure2_slot15;
                    var1 = undefined;
                    var1 = var2.bind(var1)(var3);
 78:
                    var1 = undefined;
                    return var1;
                }
            };
            var8 = var15.bind(var18)(var8, var10);
            var18 = _closure1_slot4;
            var15 = var18.useCallback;
            var10 = function Q(arg1, arg2) {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                    var7 = _closure2_slot7;
                    var8 = var7.set;
                    var1 = global;
                    var11 = var1.Math;
                    var10 = var11.min;
                    var16 = var1.Math;
                    var15 = var16.max;
                    var6 = _closure1_slot0;
                    var12 = _closure1_slot2;
                    var4 = 5;
                    var5 = var12[var4];
                    var1 = undefined;
                    var17 = var6.bind(var1)(var5);
                    var9 = var17.roundIfClose;
                    var5 = arg1;
                    var5 = var5.x;
                    var14 = _closure2_slot6;
                    var5 = var5 / var14;
                    var13 = 0.0001;
                    var9 = var9.bind(var17)(var5, var13);
                    var5 = 0;
                    var9 = var15.bind(var16)(var9, var5);
                    var4 = var12[var4];
                    var12 = var6.bind(var1)(var4);
                    var6 = var12.roundIfClose;
                    var4 = arg2;
                    var4 = var4.width;
                    var4 = var4 / var14;
                    var4 = var6.bind(var12)(var4, var13);
                    var6 = 1;
                    var4 = var4 - var6;
                    var4 = var10.bind(var11)(var9, var4);
                    var4 = var8.bind(var7)(var4);
                    var4 = var7.get;
                    var4 = var4.bind(var7)();
                    var4 = var4 % var6;
                    var4 = var4 === var5;
                    if(!var4) { _fun0008_ip = 208; continue _fun0008 }
 178:
                    var6 = _closure2_slot8;
                    var5 = var6.get;
                    var6 = var5.bind(var6)();
                    var7 = _closure2_slot7;
                    var5 = var7.get;
                    var5 = var5.bind(var7)();
                    var4 = var6 !== var5;
 208:
                    if(!var4) { _fun0008_ip = 286; continue _fun0008 }
 211:
                    var7 = _closure2_slot8;
                    var6 = var7.set;
                    var4 = _closure2_slot7;
                    var5 = var4.get;
                    var5 = var5.bind(var4)();
                    var5 = var6.bind(var7)(var5);
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var3 = 4;
                    var3 = var6[var3];
                    var5 = var5.bind(var1)(var3);
                    var3 = var5.runOnJS;
                    var2 = _closure2_slot14;
                    var3 = var3.bind(var5)(var2);
                    var2 = var4.get;
                    var2 = var2.bind(var4)();
                    var2 = var3.bind(var1)(var2);
 286:
                    return var1;
                }
            };
            var8 = {};
            var8['pageIndex'] = var1;
            var19 = 5;
            var31 = var21[var19];
            var31 = var20.bind(var5)(var31);
            var31 = var31.roundIfClose;
            var8['roundIfClose'] = var31;
            var8['pageWidth'] = var12;
            var8['reportedPageIndex'] = var29;
            var31 = var21[var25];
            var31 = var20.bind(var5)(var31);
            var31 = var31.runOnJS;
            var8['runOnJS'] = var31;
            var8['onPageChanged'] = var30;
            var10['__closure'] = var8;
            var8 = 4668517096289.0;
            var10['__workletHash'] = var8;
            var8 = _closure1_slot11;
            var10['__initData'] = var8;
            var8 = new Array(4);
            var8[0] = var30;
            var8[1] = var1;
            var8[2] = var12;
            var8[3] = var29;
            var18 = var15.bind(var18)(var10, var8);
            var _closure2_slot16 = var18;
            var8 = var21[var25];
            var15 = var20.bind(var5)(var8);
            var10 = var15.useAnimatedScrollHandler;
            var8 = {};
            var8['onBeginDrag'] = var17;
            var8['onEndDrag'] = var16;
            var16 = function Y(arg1) {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
                    var1 = arg1;
                    var4 = var1.contentOffset;
                    var3 = var1.contentSize;
                    var5 = _closure2_slot3;
                    var2 = var5.get;
                    var2 = var2.bind(var5)();
                    var6 = -1;
                    if(!(var6 !== var2)) { _fun0009_ip = 187; continue _fun0009 }
 44:
                    var8 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var5 = 5;
                    var5 = var7[var5];
                    var7 = undefined;
                    var10 = var8.bind(var7)(var5);
                    var9 = var10.roundIfClose;
                    var8 = var4.x;
                    var11 = _closure2_slot3;
                    var5 = var11.get;
                    var5 = var5.bind(var11)();
                    var8 = var8 - var5;
                    var5 = 0.0001;
                    var8 = var9.bind(var10)(var8, var5);
                    var5 = 0;
                    if(!(var5 !== var8)) { _fun0009_ip = 173; continue _fun0009 }
 119:
                    var8 = _closure2_slot3;
                    var5 = var8.get;
                    var5 = var5.bind(var8)();
                    var8 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var2 = 4;
                    var2 = var9[var2];
                    var9 = var8.bind(var7)(var2);
                    var8 = var9.runOnJS;
                    var2 = _closure2_slot15;
                    var2 = var8.bind(var9)(var2);
                    var2 = var2.bind(var7)(var5);
                    _fun0009_ip = 187; continue _fun0009;
 173:
                    var5 = _closure2_slot3;
                    var2 = var5.set;
                    var2 = var2.bind(var5)(var6);
 187:
                    var2 = _closure2_slot16;
                    var1 = undefined;
                    var2 = var2.bind(var1)(var4, var3);
                    return var1;
                }
            };
            var17 = {};
            var17['scrollTarget'] = var22;
            var29 = var21[var19];
            var29 = var20.bind(var5)(var29);
            var29 = var29.roundIfClose;
            var17['roundIfClose'] = var29;
            var29 = var21[var25];
            var29 = var20.bind(var5)(var29);
            var29 = var29.runOnJS;
            var17['runOnJS'] = var29;
            var17['refreshScrollOffset'] = var24;
            var17['resolvePageIndex'] = var18;
            var16['__closure'] = var17;
            var17 = 2232161314533.0;
            var16['__workletHash'] = var17;
            var17 = _closure1_slot12;
            var16['__initData'] = var17;
            var8['onMomentumEnd'] = var16;
            var16 = function U(arg1) {
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
                    var7 = arg1;
                    var5 = var7.contentOffset;
                    var4 = var7.contentSize;
                    var1 = var4.width;
                    var6 = 0;
                    if(!(var6 !== var1)) { _fun0010_ip = 452; continue _fun0010 }
 29:
                    var3 = _closure2_slot10;
                    var1 = var3.get;
                    var3 = var1.bind(var3)();
                    var1 = var5.x;
                    if(!(var3 !== var1)) { _fun0010_ip = 452; continue _fun0010 }
 57:
                    var8 = _closure2_slot10;
                    var3 = var8.set;
                    var1 = var5.x;
                    var1 = var3.bind(var8)(var1);
                    var3 = _closure2_slot0;
                    var1 = null;
                    if(!(var1 != var3)) { _fun0010_ip = 97; continue _fun0010 }
 86:
                    var3 = _closure2_slot0;
                    var1 = undefined;
                    var1 = var3.bind(var1)(var7);
 97:
                    var1 = global;
                    var8 = var1.Math;
                    var7 = var8.round;
                    var9 = _closure2_slot9;
                    var3 = _closure2_slot6;
                    var3 = var9 * var3;
                    var3 = var7.bind(var8)(var3);
                    var8 = var1.Math;
                    var7 = var8.round;
                    var1 = var4.width;
                    var1 = var7.bind(var8)(var1);
                    var1 = var3 % var1;
                    if(!(var1 != var6)) { _fun0010_ip = 226; continue _fun0010 }
 156:
                    var3 = _closure2_slot1;
                    var1 = var3.get;
                    var3 = var1.bind(var3)();
                    var1 = _closure2_slot6;
                    var7 = var3 * var1;
                    var8 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var1 = 4;
                    var1 = var3[var1];
                    var3 = undefined;
                    var9 = var8.bind(var3)(var1);
                    var8 = var9.runOnJS;
                    var1 = _closure2_slot15;
                    var1 = var8.bind(var9)(var1);
                    var1 = var1.bind(var3)(var7);
                    _fun0010_ip = 452; continue _fun0010;
 226:
                    var1 = var5.x;
                    if(!(!(var1 < var6))) { _fun0010_ip = 311; continue _fun0010 }
 235:
                    var3 = var5.x;
                    var7 = var4.width;
                    var1 = _closure2_slot6;
                    var1 = var7 - var1;
                    if(!(!(var3 > var1))) { _fun0010_ip = 273; continue _fun0010 }
 257:
                    var3 = _closure2_slot4;
                    var1 = var3.set;
                    var1 = var1.bind(var3)(var6);
                    _fun0010_ip = 330; continue _fun0010;
 273:
                    var7 = _closure2_slot4;
                    var3 = var7.set;
                    var8 = var5.x;
                    var9 = var4.width;
                    var1 = _closure2_slot6;
                    var1 = var9 - var1;
                    var1 = var8 - var1;
                    var1 = var3.bind(var7)(var1);
                    _fun0010_ip = 330; continue _fun0010;
 311:
                    var7 = _closure2_slot4;
                    var3 = var7.set;
                    var1 = var5.x;
                    var1 = var3.bind(var7)(var1);
 330:
                    var3 = _closure2_slot3;
                    var1 = var3.get;
                    var1 = var1.bind(var3)();
                    var7 = -1;
                    if(!(var7 !== var1)) { _fun0010_ip = 440; continue _fun0010 }
 353:
                    var8 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var1 = 5;
                    var3 = var3[var1];
                    var1 = undefined;
                    var10 = var8.bind(var1)(var3);
                    var9 = var10.roundIfClose;
                    var8 = var5.x;
                    var11 = _closure2_slot3;
                    var3 = var11.get;
                    var3 = var3.bind(var11)();
                    var8 = var8 - var3;
                    var3 = 0.0001;
                    var3 = var9.bind(var10)(var8, var3);
                    if(!(var6 === var3)) { _fun0010_ip = 456; continue _fun0010 }
 426:
                    var6 = _closure2_slot3;
                    var3 = var6.set;
                    var3 = var3.bind(var6)(var7);
 440:
                    var3 = _closure2_slot16;
                    var2 = undefined;
                    var2 = var3.bind(var2)(var5, var4);
 452:
                    var2 = undefined;
                    return var2;
 456:
                    return var1;
                }
            };
            var17 = {};
            var17['lastScrollOffsetX'] = var28;
            var17['onScrollWorklet'] = var27;
            var17['itemCount'] = var26;
            var17['pageWidth'] = var12;
            var17['activeIndex'] = var4;
            var25 = var21[var25];
            var25 = var20.bind(var5)(var25);
            var25 = var25.runOnJS;
            var17['runOnJS'] = var25;
            var17['refreshScrollOffset'] = var24;
            var17['scrollOverflow'] = var23;
            var17['scrollTarget'] = var22;
            var19 = var21[var19];
            var19 = var20.bind(var5)(var19);
            var19 = var19.roundIfClose;
            var17['roundIfClose'] = var19;
            var17['resolvePageIndex'] = var18;
            var16['__closure'] = var17;
            var17 = 17043534389385.0;
            var16['__workletHash'] = var17;
            var17 = _closure1_slot13;
            var16['__initData'] = var17;
            var8['onScroll'] = var16;
            var10 = var10.bind(var15)(var8);
            var17 = _closure1_slot4;
            var16 = var17.useMemo;
            var15 = new Array(1);
            var15[0] = var12;
            var8 = function() {
                var1 = {};
                var2 = 1;
                var1['flex'] = var2;
                var2 = _closure2_slot6;
                var1['width'] = var2;
                return var1;
            };
            var15 = var16.bind(var17)(var8, var15);
            var _closure2_slot17 = var15;
            var17 = _closure1_slot4;
            var16 = var17.useMemo;
            var8 = new Array(2);
            var8[0] = var1;
            var8[1] = var12;
            var1 = function() {
                _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
 0:
                    var1 = {};
                    var4 = _closure2_slot7;
                    var2 = var4.get;
                    var5 = var2.bind(var4)();
                    var2 = null;
                    var6 = var2 != var5;
                    var2 = 0;
                    var4 = 0;
                    if(!var6) { _fun0011_ip = 34; continue _fun0011 }
 31:
                    var4 = var5;
 34:
                    var3 = _closure2_slot6;
                    var3 = var4 * var3;
                    var1['x'] = var3;
                    var1['y'] = var2;
                    return var1;
                }
            };
            var8 = var16.bind(var17)(var1, var8);
            var1 = function useFrozenPageIndices(arg1, arg2) {
                var11 = arg1;
                var _closure3_slot0 = var11;
                var2 = arg2;
                var _closure3_slot1 = var2;
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var4 = 4;
                var2 = var6[var4];
                var7 = undefined;
                var9 = var5.bind(var7)(var2);
                var3 = var9.useSharedValue;
                var2 = var11.get;
                var2 = var2.bind(var11)();
                var3 = var3.bind(var9)(var2);
                var _closure3_slot2 = var3;
                var2 = var6[var4];
                var10 = var5.bind(var7)(var2);
                var9 = var10.useSharedValue;
                var2 = var11.get;
                var2 = var2.bind(var11)();
                var2 = var9.bind(var10)(var2);
                var _closure3_slot3 = var2;
                var11 = _closure1_slot4;
                var10 = var11.useCallback;
                var9 = function u(arg1, arg2) {
                    var5 = _closure3_slot2;
                    var4 = var5.set;
                    var1 = global;
                    var8 = var1.Math;
                    var7 = var8.min;
                    var3 = var5.get;
                    var6 = var3.bind(var5)();
                    var3 = arg1;
                    var3 = var7.bind(var8)(var6, var3);
                    var3 = var4.bind(var5)(var3);
                    var3 = _closure3_slot3;
                    var2 = var3.set;
                    var6 = var1.Math;
                    var5 = var6.max;
                    var1 = var3.get;
                    var4 = var1.bind(var3)();
                    var1 = arg2;
                    var1 = var5.bind(var6)(var4, var1);
                    var1 = var2.bind(var3)(var1);
                    var1 = undefined;
                    return var1;
                };
                var12 = {};
                var12['activePageRangeStart'] = var3;
                var12['activePageRangeEnd'] = var2;
                var9['__closure'] = var12;
                var12 = 13405449006164.0;
                var9['__workletHash'] = var12;
                var8 = _closure1_slot17;
                var9['__initData'] = var8;
                var8 = new Array(2);
                var8[0] = var2;
                var8[1] = var3;
                var8 = var10.bind(var11)(var9, var8);
                var _closure3_slot4 = var8;
                var4 = var6[var4];
                var6 = var5.bind(var7)(var4);
                var5 = var6.useAnimatedReaction;
                var4 = function() {
                    var1 = function SegmentedControlPagesNativeTsx12() {
                        var1 = {};
                        var4 = _closure3_slot0;
                        var3 = var4.get;
                        var3 = var3.bind(var4)();
                        var1['activeIndex'] = var3;
                        var3 = _closure3_slot1;
                        var2 = var3.get;
                        var2 = var2.bind(var3)();
                        var1['pressedIndex'] = var2;
                        return var1;
                    };
                    var2 = {};
                    var4 = _closure3_slot0;
                    var2['activeIndex'] = var4;
                    var3 = _closure3_slot1;
                    var2['pressedIndex'] = var3;
                    var1['__closure'] = var2;
                    var2 = 10516121681115.0;
                    var1['__workletHash'] = var2;
                    var2 = _closure1_slot18;
                    var1['__initData'] = var2;
                    return var1;
                };
                var4 = var4.bind(var7)();
                var1 = function() {
                    var1 = function SegmentedControlPagesNativeTsx13(arg1) {
                        _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
 0:
                            var1 = arg1;
                            var7 = var1.activeIndex;
                            var4 = var1.pressedIndex;
                            var1 = -1;
                            var6 = var7;
                            var5 = var6;
                            if(!(var1 !== var4)) { _fun0012_ip = 67; continue _fun0012 }
 31:
                            var1 = global;
                            var3 = var1.Math;
                            var2 = var3.min;
                            var6 = var2.bind(var3)(var7, var4);
                            var3 = var1.Math;
                            var1 = var3.max;
                            var5 = var1.bind(var3)(var7, var4);
 67:
                            var4 = _closure3_slot4;
                            var1 = global;
                            var3 = var1.Math;
                            var2 = var3.floor;
                            var3 = var2.bind(var3)(var6);
                            var2 = var1.Math;
                            var1 = var2.ceil;
                            var2 = var1.bind(var2)(var5);
                            var1 = undefined;
                            var2 = var4.bind(var1)(var3, var2);
                            return var1;
                        }
                    };
                    var2 = {};
                    var3 = _closure3_slot4;
                    var2['expandActivePageRange'] = var3;
                    var1['__closure'] = var2;
                    var2 = 804225994157.0;
                    var1['__workletHash'] = var2;
                    var2 = _closure1_slot19;
                    var1['__initData'] = var2;
                    return var1;
                };
                var1 = var1.bind(var7)();
                var1 = var5.bind(var6)(var4, var1);
                var1 = new Array(2);
                var1[0] = var3;
                var1[1] = var2;
                return var1;
            };
            var4 = var1.bind(var5)(var4, var3);
            var3 = _closure1_slot3;
            var1 = 2;
            var4 = var3.bind(var5)(var4, var1);
            var1 = 0;
            var3 = var4[var1];
            var _closure2_slot18 = var3;
            var3 = 1;
            var3 = var4[var3];
            var _closure2_slot19 = var3;
            if(!(var1 !== var12)) { _fun0004_ip = 1431; continue _fun0004 }
 1191:
            var4 = _closure1_slot5;
            var3 = _closure1_slot6;
            var1 = {'ref': null, 'style': null, 'contentOffset': null, 'keyboardShouldPersistTaps': 'handled', 'showsHorizontalScrollIndicator': false, 'pagingEnabled': true};
            var1['ref'] = var13;
            var13 = new Array(2);
            var13[0] = var15;
            var13[1] = var14;
            var1['style'] = var13;
            var1['contentOffset'] = var8;
            var8 = true;
            var1['snapToInterval'] = var12;
            var12 = 'center';
            var1['snapToAlignment'] = var12;
            var12 = 'fast';
            var1['decelerationRate'] = var12;
            var1['centerContent'] = var8;
            var1['bounces'] = var11;
            var1['horizontal'] = var8;
            var11 = 'none';
            var1['accessibilityRole'] = var11;
            var1['onScroll'] = var10;
            var1['disableIntervalMomentum'] = var8;
            var10 = _closure1_slot0;
            var11 = _closure1_slot2;
            var8 = 6;
            var8 = var11[var8];
            var10 = var10.bind(var5)(var8);
            var8 = var10.isIOS;
            var10 = var8.bind(var10)();
            var8 = undefined;
            if(!var10) { _fun0004_ip = 1341; continue _fun0004 }
 1338:
            var8 = 32;
 1341:
            var1['scrollEventThrottle'] = var8;
            var8 = var9.map;
            var6 = function(arg1, arg2) {
                var5 = arg2;
                var4 = _closure1_slot5;
                var3 = _closure1_slot20;
                var2 = {};
                var2['index'] = var5;
                var6 = _closure2_slot18;
                var2['activePageRangeStart'] = var6;
                var6 = _closure2_slot19;
                var2['activePageRangeEnd'] = var6;
                var6 = _closure2_slot8;
                var2['pageIndex'] = var6;
                var1 = _closure2_slot17;
                var2['style'] = var1;
                var1 = arg1;
                var2['item'] = var1;
                var1 = undefined;
                var1 = var4.bind(var1)(var3, var2, var5);
                return var1;
            };
            var6 = var8.bind(var9)(var6);
            var1['children'] = var6;
            var6 = var4.bind(var5)(var3, var1);
            var3 = null;
            var1 = var6;
            if(!(var3 != var7)) { _fun0004_ip = 1429; continue _fun0004 }
 1382:
            var4 = _closure1_slot5;
            var3 = _closure1_slot0;
            var8 = _closure1_slot2;
            var2 = 7;
            var2 = var8[var2];
            var2 = var3.bind(var5)(var2);
            var3 = var2.GestureDetector;
            var2 = {};
            var2['gesture'] = var7;
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
 1429:
            return var1;
 1431:
            var1 = null;
            return var1;
        }
    };
    var3['SegmentedControlPages'] = var2;
    return var1;
})();