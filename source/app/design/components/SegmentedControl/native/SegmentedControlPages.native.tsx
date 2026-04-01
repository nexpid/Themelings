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
        var15 = var6.reportedPageIndex;
        var _closure2_slot0 = var15;
        var17 = var6.pageIndex;
        var _closure2_slot1 = var17;
        var16 = var6.scrollTargetPageIndex;
        var _closure2_slot2 = var16;
        var5 = var6.index;
        var _closure2_slot3 = var5;
        var12 = var6.item;
        var19 = var6.activePageRangeStart;
        var _closure2_slot4 = var19;
        var18 = var6.activePageRangeEnd;
        var _closure2_slot5 = var18;
        var4 = {'reportedPageIndex': 0, 'pageIndex': 0, 'scrollTargetPageIndex': 0, 'index': 0, 'item': 0, 'activePageRangeStart': 0, 'activePageRangeEnd': 0};
        var21 = null;
        var22 = var4;
        var2 = silentSetPrototypeOf(var22, var21);
        var2 = 0;
        var22 = {};
        var21 = var6;
        var20 = var4;
        var6 = copyDataProperties(var22, var21, var20);
        var7 = _closure1_slot0;
        var14 = _closure1_slot2;
        var9 = 4;
        var3 = var14[var9];
        var4 = undefined;
        var10 = var7.bind(var4)(var3);
        var8 = var10.useDerivedValue;
        var3 = function h() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                var3 = global;
                var5 = var3.Math;
                var4 = var5.floor;
                var6 = _closure2_slot1;
                var1 = var6.get;
                var1 = var1.bind(var6)();
                var4 = var4.bind(var5)(var1);
                var1 = _closure2_slot3;
                var1 = var4 === var1;
                if(var1) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                var5 = var3.Math;
                var4 = var5.ceil;
                var6 = _closure2_slot1;
                var3 = var6.get;
                var3 = var3.bind(var6)();
                var4 = var4.bind(var5)(var3);
                var3 = _closure2_slot3;
                var1 = var4 === var3;
case 2:
                if(var1) { _fun0001_ip = 4; continue _fun0001 }
case 5:
                var4 = _closure2_slot2;
                var3 = var4.get;
                var3 = var3.bind(var4)();
                var2 = _closure2_slot3;
                var1 = var3 === var2;
case 4:
                return var1;
            }
        };
        var13 = {};
        var13['pageIndex'] = var17;
        var13['index'] = var5;
        var13['scrollTargetPageIndex'] = var16;
        var3['__closure'] = var13;
        var13 = 6900520842811.0;
        var3['__workletHash'] = var13;
        var13 = _closure1_slot17;
        var3['__initData'] = var13;
        var16 = var8.bind(var10)(var3);
        var _closure2_slot6 = var16;
        var3 = var14[var9];
        var10 = var7.bind(var4)(var3);
        var8 = var10.useAnimatedProps;
        var3 = function S() {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var3 = _closure2_slot0;
                var2 = var3.get;
                var2 = var2.bind(var3)();
                var1 = _closure2_slot3;
                var2 = var2 !== var1;
                var1 = {};
                var3 = 'box-none';
                if(!var2) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                var3 = 'none';
case 6:
                var1['pointerEvents'] = var3;
                var3 = 'auto';
                if(!var2) { _fun0002_ip = 8; continue _fun0002 }
case 9:
                var3 = 'no-hide-descendants';
case 8:
                var1['importantForAccessibility'] = var3;
                var1['accessibilityElementsHidden'] = var2;
                return var1;
            }
        };
        var13 = {};
        var13['reportedPageIndex'] = var15;
        var13['index'] = var5;
        var3['__closure'] = var13;
        var13 = 1529128641730.0;
        var3['__workletHash'] = var13;
        var13 = _closure1_slot18;
        var3['__initData'] = var13;
        var8 = var8.bind(var10)(var3);
        var3 = var14[var9];
        var13 = var7.bind(var4)(var3);
        var10 = var13.useAnimatedStyle;
        var3 = function I() {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                var1 = {};
                var3 = _closure2_slot6;
                var2 = var3.get;
                var3 = var2.bind(var3)();
                var2 = 'none';
                if(!var3) { _fun0003_ip = 10; continue _fun0003 }
case 11:
                var2 = 'flex';
case 10:
                var1['display'] = var2;
                var2 = 1;
                var1['flex'] = var2;
                return var1;
            }
        };
        var15 = {};
        var15['isVisibleOnScreen'] = var16;
        var3['__closure'] = var15;
        var15 = 5473502966785.0;
        var3['__workletHash'] = var15;
        var15 = _closure1_slot19;
        var3['__initData'] = var15;
        var13 = var10.bind(var13)(var3);
        var15 = _closure1_slot4;
        var10 = var15.useState;
        var3 = function() {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                var3 = _closure2_slot3;
                var4 = _closure2_slot4;
                var1 = var4.get;
                var1 = var1.bind(var4)();
                var1 = var3 >= var1;
                if(!var1) { _fun0004_ip = 12; continue _fun0004 }
case 13:
                var3 = _closure2_slot3;
                var4 = _closure2_slot5;
                var2 = var4.get;
                var2 = var2.bind(var4)();
                var1 = var3 <= var2;
case 12:
                var1 = !var1;
                return var1;
            }
        };
        var15 = var10.bind(var15)(var3);
        var10 = _closure1_slot3;
        var3 = 2;
        var3 = var10.bind(var4)(var15, var3);
        var15 = var3[var2];
        var2 = 1;
        var17 = var3[var2];
        var _closure2_slot7 = var17;
        var2 = var14[var9];
        var10 = var7.bind(var4)(var2);
        var3 = var10.useAnimatedReaction;
        var2 = function w() {
            var3 = _closure2_slot4;
            var1 = var3.get;
            var3 = var1.bind(var3)();
            var1 = new Array(2);
            var1[0] = var3;
            var3 = _closure2_slot5;
            var2 = var3.get;
            var2 = var2.bind(var3)();
            var1[1] = var2;
            return var1;
        };
        var16 = {};
        var16['activePageRangeStart'] = var19;
        var16['activePageRangeEnd'] = var18;
        var2['__closure'] = var16;
        var16 = 3118324785079.0;
        var2['__workletHash'] = var16;
        var16 = _closure1_slot20;
        var2['__initData'] = var16;
        var1 = function p(arg1) {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                var4 = arg1;
                var2 = var4[Symbol.iterator];
                var4 = var2().next;
                var5 = var4().value;
                var3 = var2;
                var1 = undefined;
                var3 = var3 === var1;
                var6 = undefined;
                if(var3) { _fun0005_ip = 13; continue _fun0005 }
case 14:
                var6 = var5;
case 13:
                var5 = undefined;
                if(var3) { _fun0005_ip = 8; continue _fun0005 }
case 15:
                var7 = var4().value;
                var4 = var2;
                var4 = var4 === var1;
                var5 = undefined;
                var3 = var4;
                if(var4) { _fun0005_ip = 8; continue _fun0005 }
case 9:
                var5 = var7;
                var3 = var4;
case 8:
                if(var3) { _fun0005_ip = 16; continue _fun0005 }
case 17:
                var2.return();
case 16:
                var3 = _closure1_slot0;
                var4 = _closure1_slot2;
                var2 = 4;
                var2 = var4[var2];
                var7 = var3.bind(var1)(var2);
                var3 = var7.runOnJS;
                var2 = _closure2_slot7;
                var3 = var3.bind(var7)(var2);
                var2 = _closure2_slot3;
                var2 = var2 >= var6;
                if(!var2) { _fun0005_ip = 18; continue _fun0005 }
case 19:
                var4 = _closure2_slot3;
                var2 = var4 <= var5;
case 18:
                var2 = !var2;
                var2 = var3.bind(var1)(var2);
                return var1;
            }
        };
        var16 = {};
        var16['index'] = var5;
        var18 = var14[var9];
        var18 = var7.bind(var4)(var18);
        var18 = var18.runOnJS;
        var16['runOnJS'] = var18;
        var16['setFreeze'] = var17;
        var1['__closure'] = var16;
        var16 = 9933150501902.0;
        var1['__workletHash'] = var16;
        var16 = _closure1_slot21;
        var1['__initData'] = var16;
        var1 = var3.bind(var10)(var2, var1);
        var3 = _closure1_slot5;
        var10 = _closure1_slot1;
        var1 = var14[var9];
        var1 = var10.bind(var4)(var1);
        var2 = var1.View;
        var1 = {};
        var22 = var1;
        var21 = var6;
        var6 = copyDataProperties(var22, var21);
        var6 = 'animatedProps';
        var1[5] = var8;
        var8 = _closure1_slot5;
        var6 = 8;
        var6 = var14[var6];
        var6 = var7.bind(var4)(var6);
        var7 = var6.Freeze;
        var6 = {};
        var6['freeze'] = var15;
        var11 = _closure1_slot5;
        var9 = var14[var9];
        var9 = var10.bind(var4)(var9);
        var10 = var9.View;
        var9 = {};
        var9['style'] = var13;
        var12 = var12.page;
        var9['children'] = var12;
        var9 = var11.bind(var4)(var10, var9);
        var6['children'] = var9;
        var7 = var8.bind(var4)(var7, var6);
        var6 = 'children';
        var1[5] = var7;
        var1 = var3.bind(var4)(var2, var1, var5);
        return var1;
    };
    var _closure1_slot25 = var1;
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
    var7 = 'function SegmentedControlPagesNativeTsx6(event){const{onBeginDragWorklet}=this.__closure;var _onBeginDragWorklet;(_onBeginDragWorklet=onBeginDragWorklet)===null||_onBeginDragWorklet===void 0||_onBeginDragWorklet(event);}';
    var4['code'] = var7;
    var _closure1_slot12 = var4;
    var4 = {};
    var7 = 'function SegmentedControlPagesNativeTsx7(event){const{onEndDragWorklet}=this.__closure;var _onEndDragWorklet;(_onEndDragWorklet=onEndDragWorklet)===null||_onEndDragWorklet===void 0||_onEndDragWorklet(event);}';
    var4['code'] = var7;
    var _closure1_slot13 = var4;
    var4 = {};
    var7 = 'function SegmentedControlPagesNativeTsx8({contentOffset:contentOffset,contentSize:contentSize}){const{scrollTarget,roundIfClose,runOnJS,refreshScrollOffset,resolvePageIndex}=this.__closure;if(scrollTarget.get()!==-1){const hasReachedTarget=roundIfClose(contentOffset.x-scrollTarget.get(),1e-4)===0;if(hasReachedTarget){scrollTarget.set(-1);}else{const page=scrollTarget.get();runOnJS(refreshScrollOffset)(page);}}resolvePageIndex(contentOffset,contentSize);}';
    var4['code'] = var7;
    var _closure1_slot14 = var4;
    var4 = {};
    var7 = 'function SegmentedControlPagesNativeTsx9(event){const{lastScrollOffsetX,onScrollWorklet,itemCount,pageWidth,activeIndex,runOnJS,refreshScrollOffset,scrollOverflow,scrollTarget,roundIfClose,resolvePageIndex}=this.__closure;var _onScrollWorklet;const{contentOffset:contentOffset,contentSize:contentSize}=event;if(contentSize.width===0){return;}if(lastScrollOffsetX.get()===contentOffset.x){return;}lastScrollOffsetX.set(contentOffset.x);(_onScrollWorklet=onScrollWorklet)===null||_onScrollWorklet===void 0||_onScrollWorklet(event);const expectedContentSize=itemCount*pageWidth;if(Math.round(expectedContentSize)%Math.round(contentSize.width)!==0){const page=activeIndex.get()*pageWidth;runOnJS(refreshScrollOffset)(page);return;}if(contentOffset.x<0){scrollOverflow.set(contentOffset.x);}else if(contentOffset.x>contentSize.width-pageWidth){scrollOverflow.set(contentOffset.x-(contentSize.width-pageWidth));}else{scrollOverflow.set(0);}if(scrollTarget.get()!==-1){const hasReachedTarget=roundIfClose(contentOffset.x-scrollTarget.get(),1e-4)===0;if(hasReachedTarget){scrollTarget.set(-1);}else{return;}}resolvePageIndex(contentOffset,contentSize);}';
    var4['code'] = var7;
    var _closure1_slot15 = var4;
    var4 = {};
    var7 = 'function SegmentedControlPagesNativeTsx10(){const{scrollTarget,roundIfClose,pageWidth}=this.__closure;if(scrollTarget.get()===-1){return-1;}return roundIfClose(scrollTarget.get()/pageWidth,1e-4);}';
    var4['code'] = var7;
    var _closure1_slot16 = var4;
    var4 = {};
    var7 = 'function SegmentedControlPagesNativeTsx11(){const{pageIndex,index,scrollTargetPageIndex}=this.__closure;if(Math.floor(pageIndex.get())===index||Math.ceil(pageIndex.get())===index){return true;}if(scrollTargetPageIndex.get()===index){return true;}return false;}';
    var4['code'] = var7;
    var _closure1_slot17 = var4;
    var4 = {};
    var7 = "function SegmentedControlPagesNativeTsx12(){const{reportedPageIndex,index}=this.__closure;const isHidden=reportedPageIndex.get()!==index;return{pointerEvents:isHidden?'none':'box-none',importantForAccessibility:isHidden?'no-hide-descendants':'auto',accessibilityElementsHidden:isHidden};}";
    var4['code'] = var7;
    var _closure1_slot18 = var4;
    var4 = {};
    var7 = "function SegmentedControlPagesNativeTsx13(){const{isVisibleOnScreen}=this.__closure;return{display:isVisibleOnScreen.get()?'flex':'none',flex:1};}";
    var4['code'] = var7;
    var _closure1_slot19 = var4;
    var4 = {};
    var7 = 'function SegmentedControlPagesNativeTsx14(){const{activePageRangeStart,activePageRangeEnd}=this.__closure;return[activePageRangeStart.get(),activePageRangeEnd.get()];}';
    var4['code'] = var7;
    var _closure1_slot20 = var4;
    var4 = {};
    var7 = 'function SegmentedControlPagesNativeTsx15([start,end]){const{index,runOnJS,setFreeze}=this.__closure;const isInActiveRange=index>=start&&index<=end;runOnJS(setFreeze)(!isInActiveRange);}';
    var4['code'] = var7;
    var _closure1_slot21 = var4;
    var4 = {};
    var7 = 'function SegmentedControlPagesNativeTsx16(min,max){const{activePageRangeStart,activePageRangeEnd}=this.__closure;activePageRangeStart.set(Math.min(activePageRangeStart.get(),min));activePageRangeEnd.set(Math.max(activePageRangeEnd.get(),max));}';
    var4['code'] = var7;
    var _closure1_slot22 = var4;
    var4 = {};
    var7 = 'function SegmentedControlPagesNativeTsx17(){const{activeIndex,pressedIndex}=this.__closure;return{activeIndex:activeIndex.get(),pressedIndex:pressedIndex.get()};}';
    var4['code'] = var7;
    var _closure1_slot23 = var4;
    var4 = {};
    var7 = 'function SegmentedControlPagesNativeTsx18({activeIndex:activeIndex,pressedIndex:pressedIndex}){const{expandActivePageRange}=this.__closure;let min=activeIndex;let max=activeIndex;if(pressedIndex!==-1){min=Math.min(activeIndex,pressedIndex);max=Math.max(activeIndex,pressedIndex);}expandActivePageRange(Math.floor(min),Math.ceil(max));}';
    var4['code'] = var7;
    var _closure1_slot24 = var4;
    var4 = 9;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'design/components/SegmentedControl/native/SegmentedControlPages.native.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function SegmentedControlPages(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var2 = arg1;
            var1 = var2.state;
            var14 = var2.style;
            var11 = var2.bounces;
            var7 = var2.nativeGesture;
            var30 = var2.onBeginDragWorklet;
            var _closure2_slot0 = var30;
            var29 = var2.onEndDragWorklet;
            var _closure2_slot1 = var29;
            var27 = var2.onScrollWorklet;
            var _closure2_slot2 = var27;
            var9 = var1.items;
            var16 = var1.activeIndex;
            var _closure2_slot3 = var16;
            var13 = var1.pagerRef;
            var _closure2_slot4 = var13;
            var21 = var1.scrollTarget;
            var _closure2_slot5 = var21;
            var24 = var1.scrollOverflow;
            var _closure2_slot6 = var24;
            var4 = var1.pressedIndex;
            var8 = var1.onPageChangeRef;
            var _closure2_slot7 = var8;
            var12 = var1.pageWidth;
            var _closure2_slot8 = var12;
            var19 = _closure1_slot0;
            var20 = _closure1_slot2;
            var3 = 4;
            var1 = var20[var3];
            var5 = undefined;
            var15 = var19.bind(var5)(var1);
            var10 = var15.useSharedValue;
            var1 = var16.get;
            var1 = var1.bind(var16)();
            var1 = var10.bind(var15)(var1);
            var _closure2_slot9 = var1;
            var10 = var20[var3];
            var17 = var19.bind(var5)(var10);
            var15 = var17.useSharedValue;
            var10 = var16.get;
            var10 = var10.bind(var16)();
            var22 = var15.bind(var17)(var10);
            var _closure2_slot10 = var22;
            var26 = var9.length;
            var _closure2_slot11 = var26;
            var10 = var20[var3];
            var15 = var19.bind(var5)(var10);
            var10 = var15.useSharedValue;
            var28 = var10.bind(var15)(var5);
            var _closure2_slot12 = var28;
            var17 = _closure1_slot4;
            var15 = var17.useRef;
            var10 = false;
            var10 = var15.bind(var17)(var10);
            var _closure2_slot13 = var10;
            var17 = _closure1_slot4;
            var15 = var17.useRef;
            var10 = var16.get;
            var10 = var10.bind(var16)();
            var10 = var15.bind(var17)(var10);
            var _closure2_slot14 = var10;
            var18 = _closure1_slot4;
            var17 = var18.useCallback;
            var15 = function(arg1) {
                var2 = _closure2_slot14;
                var1 = arg1;
                var2['current'] = var1;
                var1 = undefined;
                return var1;
            };
            var10 = new Array(0);
            var25 = var17.bind(var18)(var15, var10);
            var _closure2_slot15 = var25;
            var10 = var20[var3];
            var18 = var19.bind(var5)(var10);
            var17 = var18.useAnimatedReaction;
            var15 = function M() {
                var2 = _closure2_slot3;
                var1 = var2.get;
                var1 = var1.bind(var2)();
                return var1;
            };
            var10 = {};
            var10['activeIndex'] = var16;
            var15['__closure'] = var10;
            var10 = 4275537317596.0;
            var15['__workletHash'] = var10;
            var10 = _closure1_slot7;
            var15['__initData'] = var10;
            var10 = function b(arg1) {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 4;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.runOnJS;
                var2 = _closure2_slot15;
                var3 = var3.bind(var4)(var2);
                var2 = arg1;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var23 = {};
            var31 = var20[var3];
            var31 = var19.bind(var5)(var31);
            var31 = var31.runOnJS;
            var23['runOnJS'] = var31;
            var23['updateCurrentActiveIndex'] = var25;
            var10['__closure'] = var23;
            var23 = 1219187007872.0;
            var10['__workletHash'] = var23;
            var23 = _closure1_slot8;
            var10['__initData'] = var23;
            var10 = var17.bind(var18)(var15, var10);
            var10 = var20[var3];
            var18 = var19.bind(var5)(var10);
            var17 = var18.useAnimatedReaction;
            var15 = function H() {
                var2 = _closure2_slot9;
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
            var10 = function E(arg1) {
                var3 = _closure2_slot3;
                var2 = var3.set;
                var1 = arg1;
                var1 = var2.bind(var3)(var1);
                var1 = undefined;
                return var1;
            };
            var23 = {};
            var23['activeIndex'] = var16;
            var10['__closure'] = var23;
            var23 = 10225590895783.0;
            var10['__workletHash'] = var23;
            var23 = _closure1_slot10;
            var10['__initData'] = var23;
            var10 = var17.bind(var18)(var15, var10);
            var17 = _closure1_slot4;
            var15 = var17.useCallback;
            var10 = new Array(1);
            var10[0] = var8;
            var8 = function(arg1) {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    var2 = _closure2_slot7;
                    var4 = null;
                    var2 = var4 == var2;
                    if(var2) { _fun0007_ip = 10; continue _fun0007 }
case 20:
                    var3 = _closure2_slot7;
                    var3 = var3.current;
                    var2 = var4 == var3;
case 10:
                    if(var2) { _fun0007_ip = 21; continue _fun0007 }
case 15:
                    var3 = _closure2_slot7;
                    var2 = var3.current;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
case 21:
                    var1 = undefined;
                    return var1;
                }
            };
            var23 = var15.bind(var17)(var8, var10);
            var _closure2_slot16 = var23;
            var17 = _closure1_slot4;
            var15 = var17.useCallback;
            var10 = new Array(2);
            var10[0] = var13;
            var10[1] = var21;
            var8 = function(arg1) {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                    var5 = arg1;
                    var2 = _closure2_slot5;
                    var1 = var2.set;
                    var1 = var1.bind(var2)(var5);
                    var1 = _closure2_slot4;
                    var6 = null;
                    var2 = var6 == var1;
                    var1 = undefined;
                    var4 = undefined;
                    if(var2) { _fun0008_ip = 22; continue _fun0008 }
case 23:
                    var3 = _closure2_slot4;
                    var3 = var3.current;
                    var2 = var6 == var3;
                    var4 = var3;
case 22:
                    if(var2) { _fun0008_ip = 24; continue _fun0008 }
case 25:
                    var3 = var4.scrollTo;
                    var2 = {};
                    var2['x'] = var5;
                    var5 = false;
                    var2['animated'] = var5;
                    var2 = var3.bind(var4)(var2);
case 24:
                    return var1;
                }
            };
            var25 = var15.bind(var17)(var8, var10);
            var _closure2_slot17 = var25;
            var17 = _closure1_slot4;
            var15 = var17.useEffect;
            var10 = new Array(2);
            var10[0] = var12;
            var10[1] = var25;
            var8 = function() {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                    var2 = _closure2_slot8;
                    var3 = 0;
                    if(!(var2 > var3)) { _fun0009_ip = 26; continue _fun0009 }
case 27:
                    var2 = _closure2_slot13;
                    var2 = var2.current;
                    if(var2) { _fun0009_ip = 26; continue _fun0009 }
case 11:
                    var4 = _closure2_slot13;
                    var2 = true;
                    var4['current'] = var2;
                    var2 = _closure2_slot14;
                    var2 = var2.current;
                    if(!(var2 > var3)) { _fun0009_ip = 26; continue _fun0009 }
case 28:
                    var2 = _closure2_slot14;
                    var3 = var2.current;
                    var2 = _closure2_slot8;
                    var3 = var3 * var2;
                    var2 = _closure2_slot17;
                    var1 = undefined;
                    var1 = var2.bind(var1)(var3);
case 26:
                    var1 = undefined;
                    return var1;
                }
            };
            var8 = var15.bind(var17)(var8, var10);
            var17 = _closure1_slot4;
            var15 = var17.useCallback;
            var10 = function Z(arg1, arg2) {
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                    var7 = _closure2_slot9;
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
                    var14 = _closure2_slot8;
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
                    if(!var4) { _fun0010_ip = 29; continue _fun0010 }
case 30:
                    var6 = _closure2_slot10;
                    var5 = var6.get;
                    var6 = var5.bind(var6)();
                    var7 = _closure2_slot9;
                    var5 = var7.get;
                    var5 = var5.bind(var7)();
                    var4 = var6 !== var5;
case 29:
                    if(!var4) { _fun0010_ip = 31; continue _fun0010 }
case 32:
                    var7 = _closure2_slot10;
                    var6 = var7.set;
                    var4 = _closure2_slot9;
                    var5 = var4.get;
                    var5 = var5.bind(var4)();
                    var5 = var6.bind(var7)(var5);
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var3 = 4;
                    var3 = var6[var3];
                    var5 = var5.bind(var1)(var3);
                    var3 = var5.runOnJS;
                    var2 = _closure2_slot16;
                    var3 = var3.bind(var5)(var2);
                    var2 = var4.get;
                    var2 = var2.bind(var4)();
                    var2 = var3.bind(var1)(var2);
case 31:
                    return var1;
                }
            };
            var8 = {};
            var8['pageIndex'] = var1;
            var18 = 5;
            var31 = var20[var18];
            var31 = var19.bind(var5)(var31);
            var31 = var31.roundIfClose;
            var8['roundIfClose'] = var31;
            var8['pageWidth'] = var12;
            var8['reportedPageIndex'] = var22;
            var31 = var20[var3];
            var31 = var19.bind(var5)(var31);
            var31 = var31.runOnJS;
            var8['runOnJS'] = var31;
            var8['onPageChanged'] = var23;
            var10['__closure'] = var8;
            var8 = 4668517096289.0;
            var10['__workletHash'] = var8;
            var8 = _closure1_slot11;
            var10['__initData'] = var8;
            var8 = new Array(4);
            var8[0] = var23;
            var8[1] = var1;
            var8[2] = var12;
            var8[3] = var22;
            var23 = var15.bind(var17)(var10, var8);
            var _closure2_slot18 = var23;
            var8 = var20[var3];
            var15 = var19.bind(var5)(var8);
            var10 = var15.useAnimatedScrollHandler;
            var8 = {};
            var17 = function ne(arg1) {
                _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                    var3 = _closure2_slot0;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0011_ip = 13; continue _fun0011 }
case 27:
                    var3 = _closure2_slot0;
                    var2 = undefined;
                    var1 = arg1;
                    var1 = var3.bind(var2)(var1);
case 13:
                    var1 = undefined;
                    return var1;
                }
            };
            var22 = {};
            var22['onBeginDragWorklet'] = var30;
            var17['__closure'] = var22;
            var22 = 2903273634804.0;
            var17['__workletHash'] = var22;
            var22 = _closure1_slot12;
            var17['__initData'] = var22;
            var8['onBeginDrag'] = var17;
            var17 = function te(arg1) {
                _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                    var3 = _closure2_slot1;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0012_ip = 13; continue _fun0012 }
case 27:
                    var3 = _closure2_slot1;
                    var2 = undefined;
                    var1 = arg1;
                    var1 = var3.bind(var2)(var1);
case 13:
                    var1 = undefined;
                    return var1;
                }
            };
            var22 = {};
            var22['onEndDragWorklet'] = var29;
            var17['__closure'] = var22;
            var22 = 14857102500821.0;
            var17['__workletHash'] = var22;
            var22 = _closure1_slot13;
            var17['__initData'] = var22;
            var8['onEndDrag'] = var17;
            var17 = function ee(arg1) {
                _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
                    var1 = arg1;
                    var4 = var1.contentOffset;
                    var3 = var1.contentSize;
                    var5 = _closure2_slot5;
                    var2 = var5.get;
                    var2 = var2.bind(var5)();
                    var6 = -1;
                    if(!(var6 !== var2)) { _fun0013_ip = 33; continue _fun0013 }
case 34:
                    var8 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var5 = 5;
                    var5 = var7[var5];
                    var7 = undefined;
                    var10 = var8.bind(var7)(var5);
                    var9 = var10.roundIfClose;
                    var8 = var4.x;
                    var11 = _closure2_slot5;
                    var5 = var11.get;
                    var5 = var5.bind(var11)();
                    var8 = var8 - var5;
                    var5 = 0.0001;
                    var8 = var9.bind(var10)(var8, var5);
                    var5 = 0;
                    if(!(var5 !== var8)) { _fun0013_ip = 35; continue _fun0013 }
case 36:
                    var8 = _closure2_slot5;
                    var5 = var8.get;
                    var5 = var5.bind(var8)();
                    var8 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var2 = 4;
                    var2 = var9[var2];
                    var9 = var8.bind(var7)(var2);
                    var8 = var9.runOnJS;
                    var2 = _closure2_slot17;
                    var2 = var8.bind(var9)(var2);
                    var2 = var2.bind(var7)(var5);
                    _fun0013_ip = 33; continue _fun0013;
case 35:
                    var5 = _closure2_slot5;
                    var2 = var5.set;
                    var2 = var2.bind(var5)(var6);
case 33:
                    var2 = _closure2_slot18;
                    var1 = undefined;
                    var2 = var2.bind(var1)(var4, var3);
                    return var1;
                }
            };
            var22 = {};
            var22['scrollTarget'] = var21;
            var29 = var20[var18];
            var29 = var19.bind(var5)(var29);
            var29 = var29.roundIfClose;
            var22['roundIfClose'] = var29;
            var29 = var20[var3];
            var29 = var19.bind(var5)(var29);
            var29 = var29.runOnJS;
            var22['runOnJS'] = var29;
            var22['refreshScrollOffset'] = var25;
            var22['resolvePageIndex'] = var23;
            var17['__closure'] = var22;
            var22 = 10636475595563.0;
            var17['__workletHash'] = var22;
            var22 = _closure1_slot14;
            var17['__initData'] = var22;
            var8['onMomentumEnd'] = var17;
            var17 = function $(arg1) {
                _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
                    var7 = arg1;
                    var5 = var7.contentOffset;
                    var4 = var7.contentSize;
                    var1 = var4.width;
                    var6 = 0;
                    if(!(var6 !== var1)) { _fun0014_ip = 37; continue _fun0014 }
case 10:
                    var3 = _closure2_slot12;
                    var1 = var3.get;
                    var3 = var1.bind(var3)();
                    var1 = var5.x;
                    if(!(var3 !== var1)) { _fun0014_ip = 37; continue _fun0014 }
case 8:
                    var8 = _closure2_slot12;
                    var3 = var8.set;
                    var1 = var5.x;
                    var1 = var3.bind(var8)(var1);
                    var3 = _closure2_slot2;
                    var1 = null;
                    if(!(var1 != var3)) { _fun0014_ip = 38; continue _fun0014 }
case 39:
                    var3 = _closure2_slot2;
                    var1 = undefined;
                    var1 = var3.bind(var1)(var7);
case 38:
                    var1 = global;
                    var8 = var1.Math;
                    var7 = var8.round;
                    var9 = _closure2_slot11;
                    var3 = _closure2_slot8;
                    var3 = var9 * var3;
                    var3 = var7.bind(var8)(var3);
                    var8 = var1.Math;
                    var7 = var8.round;
                    var1 = var4.width;
                    var1 = var7.bind(var8)(var1);
                    var1 = var3 % var1;
                    if(!(var1 != var6)) { _fun0014_ip = 40; continue _fun0014 }
case 41:
                    var3 = _closure2_slot3;
                    var1 = var3.get;
                    var3 = var1.bind(var3)();
                    var1 = _closure2_slot8;
                    var7 = var3 * var1;
                    var8 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var1 = 4;
                    var1 = var3[var1];
                    var3 = undefined;
                    var9 = var8.bind(var3)(var1);
                    var8 = var9.runOnJS;
                    var1 = _closure2_slot17;
                    var1 = var8.bind(var9)(var1);
                    var1 = var1.bind(var3)(var7);
                    _fun0014_ip = 37; continue _fun0014;
case 40:
                    var1 = var5.x;
                    if(!(!(var1 < var6))) { _fun0014_ip = 42; continue _fun0014 }
case 43:
                    var3 = var5.x;
                    var7 = var4.width;
                    var1 = _closure2_slot8;
                    var1 = var7 - var1;
                    if(!(!(var3 > var1))) { _fun0014_ip = 44; continue _fun0014 }
case 45:
                    var3 = _closure2_slot6;
                    var1 = var3.set;
                    var1 = var1.bind(var3)(var6);
                    _fun0014_ip = 46; continue _fun0014;
case 44:
                    var7 = _closure2_slot6;
                    var3 = var7.set;
                    var8 = var5.x;
                    var9 = var4.width;
                    var1 = _closure2_slot8;
                    var1 = var9 - var1;
                    var1 = var8 - var1;
                    var1 = var3.bind(var7)(var1);
                    _fun0014_ip = 46; continue _fun0014;
case 42:
                    var7 = _closure2_slot6;
                    var3 = var7.set;
                    var1 = var5.x;
                    var1 = var3.bind(var7)(var1);
case 46:
                    var3 = _closure2_slot5;
                    var1 = var3.get;
                    var1 = var1.bind(var3)();
                    var7 = -1;
                    if(!(var7 !== var1)) { _fun0014_ip = 47; continue _fun0014 }
case 48:
                    var8 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var1 = 5;
                    var3 = var3[var1];
                    var1 = undefined;
                    var10 = var8.bind(var1)(var3);
                    var9 = var10.roundIfClose;
                    var8 = var5.x;
                    var11 = _closure2_slot5;
                    var3 = var11.get;
                    var3 = var3.bind(var11)();
                    var8 = var8 - var3;
                    var3 = 0.0001;
                    var3 = var9.bind(var10)(var8, var3);
                    if(!(var6 === var3)) { _fun0014_ip = 49; continue _fun0014 }
case 50:
                    var6 = _closure2_slot5;
                    var3 = var6.set;
                    var3 = var3.bind(var6)(var7);
case 47:
                    var3 = _closure2_slot18;
                    var2 = undefined;
                    var2 = var3.bind(var2)(var5, var4);
case 37:
                    var2 = undefined;
                    return var2;
case 49:
                    return var1;
                }
            };
            var22 = {};
            var22['lastScrollOffsetX'] = var28;
            var22['onScrollWorklet'] = var27;
            var22['itemCount'] = var26;
            var22['pageWidth'] = var12;
            var22['activeIndex'] = var16;
            var26 = var20[var3];
            var26 = var19.bind(var5)(var26);
            var26 = var26.runOnJS;
            var22['runOnJS'] = var26;
            var22['refreshScrollOffset'] = var25;
            var22['scrollOverflow'] = var24;
            var22['scrollTarget'] = var21;
            var24 = var20[var18];
            var24 = var19.bind(var5)(var24);
            var24 = var24.roundIfClose;
            var22['roundIfClose'] = var24;
            var22['resolvePageIndex'] = var23;
            var17['__closure'] = var22;
            var22 = 9933659944135.0;
            var17['__workletHash'] = var22;
            var22 = _closure1_slot15;
            var17['__initData'] = var22;
            var8['onScroll'] = var17;
            var10 = var10.bind(var15)(var8);
            var22 = _closure1_slot4;
            var17 = var22.useMemo;
            var15 = new Array(1);
            var15[0] = var12;
            var8 = function() {
                var1 = {};
                var2 = 1;
                var1['flex'] = var2;
                var2 = _closure2_slot8;
                var1['width'] = var2;
                return var1;
            };
            var15 = var17.bind(var22)(var8, var15);
            var _closure2_slot19 = var15;
            var22 = _closure1_slot4;
            var17 = var22.useMemo;
            var8 = new Array(2);
            var8[0] = var1;
            var8[1] = var12;
            var1 = function() {
                _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
                    var1 = {};
                    var4 = _closure2_slot9;
                    var2 = var4.get;
                    var5 = var2.bind(var4)();
                    var2 = null;
                    var6 = var2 != var5;
                    var2 = 0;
                    var4 = 0;
                    if(!var6) { _fun0015_ip = 51; continue _fun0015 }
case 52:
                    var4 = var5;
case 51:
                    var3 = _closure2_slot8;
                    var3 = var4 * var3;
                    var1['x'] = var3;
                    var1['y'] = var2;
                    return var1;
                }
            };
            var8 = var17.bind(var22)(var1, var8);
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
                var12 = 16200218459027.0;
                var9['__workletHash'] = var12;
                var8 = _closure1_slot22;
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
                    var1 = function SegmentedControlPagesNativeTsx17() {
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
                    var2 = 4890602064798.0;
                    var1['__workletHash'] = var2;
                    var2 = _closure1_slot23;
                    var1['__initData'] = var2;
                    return var1;
                };
                var4 = var4.bind(var7)();
                var1 = function() {
                    var1 = function SegmentedControlPagesNativeTsx18(arg1) {
                        _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
                            var1 = arg1;
                            var7 = var1.activeIndex;
                            var4 = var1.pressedIndex;
                            var1 = -1;
                            var6 = var7;
                            var5 = var6;
                            if(!(var1 !== var4)) { _fun0016_ip = 53; continue _fun0016 }
case 52:
                            var1 = global;
                            var3 = var1.Math;
                            var2 = var3.min;
                            var6 = var2.bind(var3)(var7, var4);
                            var3 = var1.Math;
                            var1 = var3.max;
                            var5 = var1.bind(var3)(var7, var4);
case 53:
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
                    var2 = 3630301102822.0;
                    var1['__workletHash'] = var2;
                    var2 = _closure1_slot24;
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
            var16 = var1.bind(var5)(var16, var4);
            var4 = _closure1_slot3;
            var1 = 2;
            var16 = var4.bind(var5)(var16, var1);
            var1 = 0;
            var4 = var16[var1];
            var _closure2_slot20 = var4;
            var4 = 1;
            var4 = var16[var4];
            var _closure2_slot21 = var4;
            var3 = var20[var3];
            var16 = var19.bind(var5)(var3);
            var4 = var16.useDerivedValue;
            var3 = function re() {
                _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
case 0:
                    var3 = _closure2_slot5;
                    var1 = var3.get;
                    var3 = var1.bind(var3)();
                    var1 = -1;
                    if(!(var1 !== var3)) { _fun0017_ip = 54; continue _fun0017 }
case 55:
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var3 = 5;
                    var4 = var4[var3];
                    var3 = undefined;
                    var5 = var5.bind(var3)(var4);
                    var4 = var5.roundIfClose;
                    var6 = _closure2_slot5;
                    var3 = var6.get;
                    var3 = var3.bind(var6)();
                    var2 = _closure2_slot8;
                    var3 = var3 / var2;
                    var2 = 0.0001;
                    var1 = var4.bind(var5)(var3, var2);
case 54:
                    return var1;
                }
            };
            var17 = {};
            var17['scrollTarget'] = var21;
            var18 = var20[var18];
            var18 = var19.bind(var5)(var18);
            var18 = var18.roundIfClose;
            var17['roundIfClose'] = var18;
            var17['pageWidth'] = var12;
            var3['__closure'] = var17;
            var17 = 7742060999778.0;
            var3['__workletHash'] = var17;
            var17 = _closure1_slot16;
            var3['__initData'] = var17;
            var3 = var4.bind(var16)(var3);
            var _closure2_slot22 = var3;
            if(!(var1 !== var12)) { _fun0006_ip = 56; continue _fun0006 }
case 57:
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
            if(!var10) { _fun0006_ip = 58; continue _fun0006 }
case 59:
            var8 = 32;
case 58:
            var1['scrollEventThrottle'] = var8;
            var8 = var9.map;
            var6 = function(arg1, arg2) {
                var5 = arg2;
                var4 = _closure1_slot5;
                var3 = _closure1_slot25;
                var2 = {};
                var2['index'] = var5;
                var6 = _closure2_slot20;
                var2['activePageRangeStart'] = var6;
                var6 = _closure2_slot21;
                var2['activePageRangeEnd'] = var6;
                var6 = _closure2_slot10;
                var2['reportedPageIndex'] = var6;
                var6 = _closure2_slot9;
                var2['pageIndex'] = var6;
                var6 = _closure2_slot22;
                var2['scrollTargetPageIndex'] = var6;
                var1 = _closure2_slot19;
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
            if(!(var3 != var7)) { _fun0006_ip = 60; continue _fun0006 }
case 61:
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
case 60:
            return var1;
case 56:
            var1 = null;
            return var1;
        }
    };
    var3['SegmentedControlPages'] = var2;
    return var1;
})();