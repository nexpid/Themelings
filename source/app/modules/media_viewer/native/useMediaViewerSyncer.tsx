// app/modules/media_viewer/native/useMediaViewerSyncer.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
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
    var7 = var6[var4];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.THUMBNAIL_MARGIN;
    var _closure1_slot5 = var7;
    var7 = var4.THUMBNAIL_HEIGHT;
    var _closure1_slot6 = var7;
    var7 = var4.THUMBNAIL_MAX_WIDTH;
    var _closure1_slot7 = var7;
    var7 = var4.THUMBNAIL_MIN_WIDTH;
    var _closure1_slot8 = var7;
    var4 = var4.THUMBNAIL_WIDTH_MARGIN;
    var _closure1_slot9 = var4;
    var4 = {};
    var7 = "function useMediaViewerSyncerTsx1(){const{thumbnailsScrolling,SCROLLING_DRAG,swipeSource}=this.__closure;thumbnailsScrolling.set(thumbnailsScrolling.get()|SCROLLING_DRAG);swipeSource.set('thumbnails');}";
    var4['code'] = var7;
    var _closure1_slot10 = var4;
    var4 = {};
    var7 = 'function useMediaViewerSyncerTsx2(){const{thumbnailsScrolling,SCROLLING_DRAG}=this.__closure;thumbnailsScrolling.set(thumbnailsScrolling.get()&~SCROLLING_DRAG);}';
    var4['code'] = var7;
    var _closure1_slot11 = var4;
    var4 = {};
    var7 = "function useMediaViewerSyncerTsx3(event){const{variableWidthThumbnailsEnabled,thumbnailScrollPositions,thumbnailSize,swipeSource,maxIndex,thumbnailsIndex,thumbnailsAnimateTo,selectedIndex,viewerScrolling,thumbnailsScrolling,runOnJS,onSelectedIndexChange}=this.__closure;let thumbnails=0;if(variableWidthThumbnailsEnabled){if(event.contentOffset.x<0){thumbnails=0;}else if(event.contentOffset.x>=thumbnailScrollPositions[thumbnailScrollPositions.length-1].end){thumbnails=thumbnailScrollPositions.length-1;}else{for(let i=0;i<thumbnailScrollPositions.length;i++){const startPos=thumbnailScrollPositions[i].scrollStart;let endPos=i<thumbnailScrollPositions.length-1?thumbnailScrollPositions[i+1].scrollStart:startPos;if(i===thumbnailScrollPositions.length-1){endPos=thumbnailScrollPositions[i].end;}if(event.contentOffset.x>=startPos&&event.contentOffset.x<endPos){thumbnails=i+(event.contentOffset.x-startPos)/(endPos-startPos);break;}}}}else{thumbnails=event.contentOffset.x/thumbnailSize;}if(swipeSource.get()==='thumbnails'||Math.abs(Math.round(thumbnails)-thumbnails)<0.01){const index=Math.max(0,Math.min(Math.round(thumbnails),maxIndex));thumbnailsIndex.set(index);}if(thumbnailsAnimateTo.get()>=0){if(thumbnailsIndex.get()===thumbnailsAnimateTo.get()){thumbnailsAnimateTo.set(-1);selectedIndex.set(thumbnailsIndex.get());}return;}const wasTouched=viewerScrolling.get()!==0||thumbnailsScrolling.get()!==0;if(wasTouched&&thumbnailsIndex.get()!==selectedIndex.get()){selectedIndex.set(thumbnailsIndex.get());runOnJS(onSelectedIndexChange)();}}";
    var4['code'] = var7;
    var _closure1_slot12 = var4;
    var4 = {};
    var7 = "function useMediaViewerSyncerTsx4(){const{thumbnailsScrolling,SCROLLING_MOMENTUM,swipeSource}=this.__closure;thumbnailsScrolling.set(thumbnailsScrolling.get()|SCROLLING_MOMENTUM);swipeSource.set('thumbnails');}";
    var4['code'] = var7;
    var _closure1_slot13 = var4;
    var4 = {};
    var7 = 'function useMediaViewerSyncerTsx5(){const{thumbnailsScrolling,SCROLLING_MOMENTUM}=this.__closure;thumbnailsScrolling.set(thumbnailsScrolling.get()&~SCROLLING_MOMENTUM);}';
    var4['code'] = var7;
    var _closure1_slot14 = var4;
    var4 = {};
    var7 = 'function useMediaViewerSyncerTsx6(){const{thumbnailsAnimateTo,variableWidthThumbnailsEnabled,runOnJS,scrollVarWidthThumbnails,scrollTo,ref,thumbnailSize}=this.__closure;if(thumbnailsAnimateTo.get()<0)return;if(variableWidthThumbnailsEnabled){runOnJS(scrollVarWidthThumbnails)(thumbnailsAnimateTo.get());}else{scrollTo(ref,thumbnailsAnimateTo.get()*thumbnailSize,0,true);}}';
    var4['code'] = var7;
    var _closure1_slot15 = var4;
    var4 = {};
    var7 = 'function useMediaViewerSyncerTsx7(){const{viewerScrolling,thumbnailsIndex,viewerPos,variableWidthThumbnailsEnabled,runOnJS,lerpScrollVarWidthThumbnails,scrollTo,ref,thumbnailSize}=this.__closure;if(viewerScrolling.get()===0)return;else if(thumbnailsIndex.get()!==viewerPos.get()){if(variableWidthThumbnailsEnabled){runOnJS(lerpScrollVarWidthThumbnails)(viewerPos.get());}else{scrollTo(ref,viewerPos.get()*thumbnailSize,0,false);}}}';
    var4['code'] = var7;
    var _closure1_slot16 = var4;
    var4 = {};
    var7 = "function useMediaViewerSyncerTsx8(){const{thumbnailsScrolling,interpolate,viewerPos,interpolateInput,interpolateOutput}=this.__closure;return thumbnailsScrolling.get()>0?0:-interpolate(viewerPos.get(),interpolateInput,interpolateOutput,'clamp');}";
    var4['code'] = var7;
    var _closure1_slot17 = var4;
    var4 = {};
    var7 = 'function useMediaViewerSyncerTsx9(){const{viewerScrolling,headerBufferSize,margin,withSpring}=this.__closure;return{width:viewerScrolling.get()>0?headerBufferSize+margin.get():withSpring(headerBufferSize+margin.get(),{overshootClamping:true})};}';
    var4['code'] = var7;
    var _closure1_slot18 = var4;
    var4 = {};
    var7 = 'function useMediaViewerSyncerTsx10(){const{viewerScrolling,footerBufferSize,margin,withSpring}=this.__closure;return{width:viewerScrolling.get()>0?footerBufferSize+margin.get():withSpring(footerBufferSize+margin.get(),{overshootClamping:true})};}';
    var4['code'] = var7;
    var _closure1_slot19 = var4;
    var4 = {};
    var7 = "function useMediaViewerSyncerTsx11(){const{interpolate,viewerPos,index}=this.__closure;return interpolate(viewerPos.get(),[index-1,index,index+1],[0.4,1,0.4],'clamp');}";
    var4['code'] = var7;
    var _closure1_slot20 = var4;
    var4 = {};
    var7 = "function useMediaViewerSyncerTsx13(){const{thumbnailsScrolling,THUMBNAIL_MIN_WIDTH,interpolate,viewerPos,index,sourceWidth}=this.__closure;return thumbnailsScrolling.get()>0?THUMBNAIL_MIN_WIDTH:interpolate(viewerPos.get(),[index-1,index,index+1],[THUMBNAIL_MIN_WIDTH,sourceWidth,THUMBNAIL_MIN_WIDTH],'clamp');}";
    var4['code'] = var7;
    var _closure1_slot21 = var4;
    var4 = {};
    var7 = 'function useMediaViewerSyncerTsx14(){const{viewerScrolling,_width,withSpring,THUMBNAIL_HEIGHT,opacity}=this.__closure;return{width:viewerScrolling.get()>0?_width.get():withSpring(_width.get(),{overshootClamping:true}),height:THUMBNAIL_HEIGHT,opacity:opacity.get()};}';
    var4['code'] = var7;
    var _closure1_slot22 = var4;
    var4 = {};
    var7 = 'function useMediaViewerSyncerTsx15(){const{zoomed}=this.__closure;return!zoomed.get();}';
    var4['code'] = var7;
    var _closure1_slot23 = var4;
    var4 = {};
    var7 = 'function useMediaViewerSyncerTsx16(){const{thumbnailsAnimateTo,scrollTo,ref,screenWidth}=this.__closure;if(thumbnailsAnimateTo.get()===-1)return;scrollTo(ref,thumbnailsAnimateTo.get()*screenWidth,0,false);}';
    var4['code'] = var7;
    var _closure1_slot24 = var4;
    var4 = {};
    var7 = 'function useMediaViewerSyncerTsx17(){const{thumbnailsScrolling,viewerScrolling,thumbnailsAnimateTo,scrollTo,ref,thumbnailsIndex,screenWidth}=this.__closure;if(thumbnailsScrolling.get()===0||viewerScrolling.get()>0||thumbnailsAnimateTo.get()!==-1)return;scrollTo(ref,thumbnailsIndex.get()*screenWidth,0,false);}';
    var4['code'] = var7;
    var _closure1_slot25 = var4;
    var4 = {};
    var7 = "function useMediaViewerSyncerTsx18(){const{viewerScrolling,SCROLLING_DRAG,swipeSource}=this.__closure;viewerScrolling.set(viewerScrolling.get()|SCROLLING_DRAG);swipeSource.set('viewer');}";
    var4['code'] = var7;
    var _closure1_slot26 = var4;
    var4 = {};
    var7 = 'function useMediaViewerSyncerTsx19(){const{viewerScrolling,SCROLLING_DRAG}=this.__closure;viewerScrolling.set(viewerScrolling.get()&~SCROLLING_DRAG);}';
    var4['code'] = var7;
    var _closure1_slot27 = var4;
    var4 = {};
    var7 = 'function useMediaViewerSyncerTsx20(event){const{viewerScrolling,thumbnailsScrolling,thumbnailsAnimateTo,viewerPos,screenWidth}=this.__closure;if(viewerScrolling.get()===0&&thumbnailsScrolling.get()===0&&thumbnailsAnimateTo.get()===-1)return;viewerPos.set(event.contentOffset.x/screenWidth);}';
    var4['code'] = var7;
    var _closure1_slot28 = var4;
    var4 = {};
    var7 = "function useMediaViewerSyncerTsx21(){const{viewerScrolling,SCROLLING_MOMENTUM,swipeSource}=this.__closure;viewerScrolling.set(viewerScrolling.get()|SCROLLING_MOMENTUM);swipeSource.set('viewer');}";
    var4['code'] = var7;
    var _closure1_slot29 = var4;
    var4 = {};
    var7 = 'function useMediaViewerSyncerTsx22(){const{viewerScrolling,SCROLLING_MOMENTUM}=this.__closure;viewerScrolling.set(viewerScrolling.get()&~SCROLLING_MOMENTUM);}';
    var4['code'] = var7;
    var _closure1_slot30 = var4;
    var4 = {};
    var7 = 'function useMediaViewerSyncerTsx23(){const{index,selectedIndex}=this.__closure;return index===selectedIndex.get();}';
    var4['code'] = var7;
    var _closure1_slot31 = var4;
    var4 = {};
    var7 = 'function useMediaViewerSyncerTsx24(result,previous){const{runOnJS,setVisible}=this.__closure;if(previous==null||previous===result)return;runOnJS(setVisible)(result);}';
    var4['code'] = var7;
    var _closure1_slot32 = var4;
    var4 = 11;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/media_viewer/native/useMediaViewerSyncer.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useMediaViewerSyncer(arg1) {
        var3 = arg1;
        var8 = var3.sources;
        var _closure2_slot0 = var8;
        var2 = var3.initialIndex;
        var _closure2_slot1 = var2;
        var6 = var3.onEndReached;
        var _closure2_slot2 = var6;
        var5 = var3.onEndReachedThreshold;
        var _closure2_slot3 = var5;
        var4 = _closure1_slot4;
        var7 = var4.useMemo;
        var3 = new Array(1);
        var3[0] = var2;
        var2 = function() {
            var9 = _closure2_slot1;
            var1 = {};
            var3 = _closure1_slot0;
            var5 = _closure1_slot2;
            var2 = 3;
            var6 = var5[var2];
            var4 = undefined;
            var7 = var3.bind(var4)(var6);
            var6 = var7.makeMutable;
            var6 = var6.bind(var7)(var9);
            var1['selectedIndex'] = var6;
            var6 = var5[var2];
            var7 = var3.bind(var4)(var6);
            var6 = var7.makeMutable;
            var6 = var6.bind(var7)(var9);
            var1['thumbnailsIndex'] = var6;
            var6 = var5[var2];
            var7 = var3.bind(var4)(var6);
            var6 = var7.makeMutable;
            var8 = 0;
            var6 = var6.bind(var7)(var8);
            var1['thumbnailsScrolling'] = var6;
            var6 = var5[var2];
            var10 = var3.bind(var4)(var6);
            var7 = var10.makeMutable;
            var6 = -1;
            var6 = var7.bind(var10)(var6);
            var1['thumbnailsAnimateTo'] = var6;
            var6 = var5[var2];
            var7 = var3.bind(var4)(var6);
            var6 = var7.makeMutable;
            var6 = var6.bind(var7)(var9);
            var1['viewerPos'] = var6;
            var6 = var5[var2];
            var7 = var3.bind(var4)(var6);
            var6 = var7.makeMutable;
            var6 = var6.bind(var7)(var8);
            var1['viewerScrolling'] = var6;
            var6 = var5[var2];
            var8 = var3.bind(var4)(var6);
            var7 = var8.makeMutable;
            var6 = false;
            var6 = var7.bind(var8)(var6);
            var1['zoomed'] = var6;
            var2 = var5[var2];
            var3 = var3.bind(var4)(var2);
            var2 = var3.makeMutable;
            var2 = var2.bind(var3)(var4);
            var1['swipeSource'] = var2;
            return var1;
        };
        var7 = var7.bind(var4)(var2, var3);
        var _closure2_slot4 = var7;
        var3 = var4.useMemo;
        var2 = new Array(4);
        var2[0] = var8;
        var2[1] = var7;
        var2[2] = var6;
        var2[3] = var5;
        var1 = function() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                var5 = _closure2_slot0;
                var4 = new Array(0);
                var2 = var5.length;
                var17 = 0;
                var2 = var17 < var2;
                var3 = undefined;
                var16 = global;
                var15 = 2;
                var13 = 8;
                var12 = null;
                var11 = 0;
                var10 = 0;
                var9 = undefined;
                var8 = undefined;
                var7 = undefined;
                var6 = undefined;
                if(!var2) { _fun0001_ip = 323; continue _fun0001 }
 55:
                var18 = _closure1_slot0;
                var2 = _closure1_slot2;
                var2 = var2[var13];
                var19 = var18.bind(var3)(var2);
                var18 = var19.flattenSource;
                var2 = var5[var10];
                var2 = var18.bind(var19)(var2);
                if(!(var12 == var2)) { _fun0001_ip = 124; continue _fun0001 }
 91:
                var19 = var4.push;
                var18 = {};
                var18['start'] = var11;
                var18['end'] = var11;
                var18['scrollStart'] = var11;
                var18 = var19.bind(var4)(var18);
                var18 = var11;
                _fun0001_ip = 305; continue _fun0001;
 124:
                var21 = var16.Math;
                var20 = var21.max;
                var23 = var16.Math;
                var22 = var23.min;
                var19 = var2.width;
                var24 = _closure1_slot6;
                var2 = var2.height;
                var2 = var24 / var2;
                var19 = var19 * var2;
                var2 = _closure1_slot7;
                var19 = var22.bind(var23)(var19, var2);
                var2 = _closure1_slot8;
                var19 = var20.bind(var21)(var19, var2);
                var2 = _closure1_slot5;
                var2 = var15 * var2;
                var20 = var19 + var2;
                var19 = var11 + var20;
                var2 = var19 - var11;
                var23 = 0;
                if(!(var23 !== var10)) { _fun0001_ip = 265; continue _fun0001 }
 214:
                var24 = var16.Math;
                var22 = var24.floor;
                var21 = var4[var17];
                var25 = var21.end;
                var21 = var4[var17];
                var21 = var21.start;
                var21 = var25 - var21;
                var21 = var2 - var21;
                var21 = var21 / var15;
                var21 = var11 + var21;
                var23 = var22.bind(var24)(var21);
 265:
                var22 = var4.push;
                var21 = {};
                var21['start'] = var11;
                var21['end'] = var19;
                var21['scrollStart'] = var23;
                var21 = var22.bind(var4)(var21);
                var18 = var19;
                var9 = var20;
                var8 = var11;
                var7 = var18;
                var6 = var2;
 305:
                var10 = var10 + 1;
                var2 = var5.length;
                var11 = var18;
                if(var10 < var2) { _fun0001_ip = 55; continue _fun0001 }
 323:
                var2 = {};
                var2['sources'] = var5;
                var5 = _closure2_slot4;
                var2['animProps'] = var5;
                var2['thumbnailScrollPositions'] = var4;
                var4 = _closure2_slot2;
                var2['onEndReached'] = var4;
                var1 = _closure2_slot3;
                var2['onEndReachedThreshold'] = var1;
                var1 = function makeMediaViewerSyncer(arg1) {
                    _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                        var2 = arg1;
                        var7 = var2.sources;
                        var _closure4_slot0 = var7;
                        var1 = var2.animProps;
                        var5 = var2.thumbnailScrollPositions;
                        var _closure4_slot1 = var5;
                        var3 = var2.onEndReached;
                        var2 = var2.onEndReachedThreshold;
                        var8 = var1.selectedIndex;
                        var _closure4_slot2 = var8;
                        var6 = var1.thumbnailsIndex;
                        var _closure4_slot3 = var6;
                        var6 = var1.thumbnailsScrolling;
                        var _closure4_slot4 = var6;
                        var6 = var1.thumbnailsAnimateTo;
                        var _closure4_slot5 = var6;
                        var6 = var1.viewerPos;
                        var _closure4_slot6 = var6;
                        var6 = var1.viewerScrolling;
                        var _closure4_slot7 = var6;
                        var6 = var1.zoomed;
                        var _closure4_slot8 = var6;
                        var1 = var1.swipeSource;
                        var _closure4_slot9 = var1;
                        var9 = var5.length;
                        var1 = 0;
                        if(!(var9 > var1)) { _fun0002_ip = 152; continue _fun0002 }
 134:
                        var9 = var5[var1];
                        var9 = var9.end;
                        var1 = var5[var1];
                        var1 = var1.start;
 152:
                        var1 = {};
                        var1['index'] = var8;
                        var1['sources'] = var7;
                        var1['zoomed'] = var6;
                        var1['thumbnailScrollPositions'] = var5;
                        var5 = false;
                        var1['variableWidthThumbnailsEnabled'] = var5;
                        var5 = function useThumbnailsProps(arg1, arg2) {
                            var9 = arg1;
                            var23 = arg2;
                            var _closure5_slot0 = var9;
                            var _closure5_slot1 = var23;
                            var14 = _closure1_slot0;
                            var16 = _closure1_slot2;
                            var1 = 3;
                            var3 = var16[var1];
                            var8 = undefined;
                            var4 = var14.bind(var8)(var3);
                            var3 = var4.useAnimatedRef;
                            var13 = var3.bind(var4)();
                            var _closure5_slot2 = var13;
                            var6 = _closure1_slot1;
                            var20 = 4;
                            var3 = var16[var20];
                            var3 = var6.bind(var8)(var3);
                            var3 = var3.bind(var8)();
                            var4 = var3.width;
                            var3 = var3.height;
                            var5 = 5;
                            var5 = var16[var5];
                            var5 = var6.bind(var8)(var5);
                            var5 = var5.bind(var8)();
                            var22 = function onSelectedIndexChange() {
                                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                                    var3 = _closure4_slot9;
                                    var2 = var3.get;
                                    var3 = var2.bind(var3)();
                                    var2 = 'thumbnails';
                                    if(!(var2 !== var3)) { _fun0003_ip = 108; continue _fun0003 }
 26:
                                    var2 = _closure4_slot9;
                                    var1 = var2.get;
                                    var2 = var1.bind(var2)();
                                    var1 = 'viewer';
                                    if(!(var1 === var2)) { _fun0003_ip = 165; continue _fun0003 }
 49:
                                    var5 = _closure1_slot0;
                                    var6 = _closure1_slot2;
                                    var1 = 6;
                                    var2 = var6[var1];
                                    var4 = undefined;
                                    var3 = var5.bind(var4)(var2);
                                    var2 = var3.incrementMediaViewerAction;
                                    var1 = var6[var1];
                                    var1 = var5.bind(var4)(var1);
                                    var1 = var1.IncrementableMediaViewerActions;
                                    var1 = var1.VIEWER_SWIPE;
                                    var1 = var2.bind(var3)(var1);
                                    _fun0003_ip = 165; continue _fun0003;
 108:
                                    var5 = _closure1_slot0;
                                    var6 = _closure1_slot2;
                                    var1 = 6;
                                    var2 = var6[var1];
                                    var4 = undefined;
                                    var3 = var5.bind(var4)(var2);
                                    var2 = var3.incrementMediaViewerAction;
                                    var1 = var6[var1];
                                    var1 = var5.bind(var4)(var1);
                                    var1 = var1.IncrementableMediaViewerActions;
                                    var1 = var1.THUMBNAIL_SWIPE;
                                    var1 = var2.bind(var3)(var1);
 165:
                                    var5 = _closure1_slot0;
                                    var6 = _closure1_slot2;
                                    var2 = 6;
                                    var3 = var6[var2];
                                    var1 = undefined;
                                    var4 = var5.bind(var1)(var3);
                                    var3 = var4.incrementMediaViewerAction;
                                    var2 = var6[var2];
                                    var2 = var5.bind(var1)(var2);
                                    var2 = var2.IncrementableMediaViewerActions;
                                    var2 = var2.SELECTED_ITEM_CHANGE;
                                    var2 = var3.bind(var4)(var2);
                                    return var1;
                                }
                            };
                            var _closure5_slot3 = var22;
                            var6 = var16[var1];
                            var11 = var14.bind(var8)(var6);
                            var7 = var11.useAnimatedScrollHandler;
                            var6 = {};
                            var12 = function V() {
                                var4 = _closure4_slot4;
                                var3 = var4.set;
                                var2 = var4.get;
                                var5 = var2.bind(var4)();
                                var2 = 2;
                                var2 = var2 | var5;
                                var2 = var3.bind(var4)(var2);
                                var3 = _closure4_slot9;
                                var2 = var3.set;
                                var1 = 'thumbnails';
                                var1 = var2.bind(var3)(var1);
                                var1 = undefined;
                                return var1;
                            };
                            var18 = {};
                            var26 = _closure4_slot4;
                            var18['thumbnailsScrolling'] = var26;
                            var10 = 2;
                            var18['SCROLLING_DRAG'] = var10;
                            var21 = _closure4_slot9;
                            var18['swipeSource'] = var21;
                            var12['__closure'] = var18;
                            var18 = 16224520186325.0;
                            var12['__workletHash'] = var18;
                            var18 = _closure1_slot10;
                            var12['__initData'] = var18;
                            var6['onBeginDrag'] = var12;
                            var12 = function H() {
                                var3 = _closure4_slot4;
                                var2 = var3.set;
                                var1 = var3.get;
                                var4 = var1.bind(var3)();
                                var1 = -3;
                                var1 = var1 & var4;
                                var1 = var2.bind(var3)(var1);
                                var1 = undefined;
                                return var1;
                            };
                            var18 = {};
                            var18['thumbnailsScrolling'] = var26;
                            var18['SCROLLING_DRAG'] = var10;
                            var12['__closure'] = var18;
                            var18 = 5779899826871.0;
                            var12['__workletHash'] = var18;
                            var18 = _closure1_slot11;
                            var12['__initData'] = var18;
                            var6['onEndDrag'] = var12;
                            var12 = function D(arg1) {
                                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                                    var1 = arg1;
                                    var1 = var1.contentOffset;
                                    var3 = var1.x;
                                    var1 = _closure5_slot0;
                                    var9 = var3 / var1;
                                    var4 = _closure4_slot9;
                                    var3 = var4.get;
                                    var4 = var3.bind(var4)();
                                    var3 = 'thumbnails';
                                    if(!(var3 !== var4)) { _fun0004_ip = 104; continue _fun0004 }
 51:
                                    var3 = global;
                                    var5 = var3.Math;
                                    var4 = var5.abs;
                                    var6 = var3.Math;
                                    var3 = var6.round;
                                    var3 = var3.bind(var6)(var9);
                                    var3 = var3 - var9;
                                    var4 = var4.bind(var5)(var3);
                                    var3 = 0.01;
                                    if(!(var4 < var3)) { _fun0004_ip = 176; continue _fun0004 }
 104:
                                    var3 = global;
                                    var6 = var3.Math;
                                    var5 = var6.max;
                                    var8 = var3.Math;
                                    var7 = var8.min;
                                    var4 = var3.Math;
                                    var3 = var4.round;
                                    var4 = var3.bind(var4)(var9);
                                    var3 = _closure5_slot1;
                                    var4 = var7.bind(var8)(var4, var3);
                                    var3 = 0;
                                    var5 = var5.bind(var6)(var3, var4);
                                    var4 = _closure4_slot3;
                                    var3 = var4.set;
                                    var3 = var3.bind(var4)(var5);
 176:
                                    var4 = _closure4_slot5;
                                    var3 = var4.get;
                                    var3 = var3.bind(var4)();
                                    var5 = 0;
                                    if(!(!(var3 >= var5))) { _fun0004_ip = 346; continue _fun0004 }
 198:
                                    var4 = _closure4_slot7;
                                    var3 = var4.get;
                                    var3 = var3.bind(var4)();
                                    var3 = var5 !== var3;
                                    if(var3) { _fun0004_ip = 235; continue _fun0004 }
 218:
                                    var6 = _closure4_slot4;
                                    var4 = var6.get;
                                    var4 = var4.bind(var6)();
                                    var3 = var5 !== var4;
 235:
                                    if(!var3) { _fun0004_ip = 268; continue _fun0004 }
 238:
                                    var5 = _closure4_slot3;
                                    var4 = var5.get;
                                    var5 = var4.bind(var5)();
                                    var6 = _closure4_slot2;
                                    var4 = var6.get;
                                    var4 = var4.bind(var6)();
                                    var3 = var5 !== var4;
 268:
                                    if(!var3) { _fun0004_ip = 423; continue _fun0004 }
 274:
                                    var5 = _closure4_slot2;
                                    var4 = var5.set;
                                    var6 = _closure4_slot3;
                                    var3 = var6.get;
                                    var3 = var3.bind(var6)();
                                    var3 = var4.bind(var5)(var3);
                                    var5 = _closure1_slot0;
                                    var4 = _closure1_slot2;
                                    var3 = 3;
                                    var4 = var4[var3];
                                    var3 = undefined;
                                    var5 = var5.bind(var3)(var4);
                                    var4 = var5.runOnJS;
                                    var2 = _closure5_slot3;
                                    var2 = var4.bind(var5)(var2);
                                    var2 = var2.bind(var3)();
                                    _fun0004_ip = 423; continue _fun0004;
 346:
                                    var3 = _closure4_slot3;
                                    var2 = var3.get;
                                    var3 = var2.bind(var3)();
                                    var4 = _closure4_slot5;
                                    var2 = var4.get;
                                    var2 = var2.bind(var4)();
                                    if(!(var3 === var2)) { _fun0004_ip = 423; continue _fun0004 }
 376:
                                    var4 = _closure4_slot5;
                                    var3 = var4.set;
                                    var2 = -1;
                                    var2 = var3.bind(var4)(var2);
                                    var3 = _closure4_slot2;
                                    var2 = var3.set;
                                    var4 = _closure4_slot3;
                                    var1 = var4.get;
                                    var1 = var1.bind(var4)();
                                    var1 = var2.bind(var3)(var1);
 423:
                                    var1 = undefined;
                                    return var1;
                                }
                            };
                            var18 = {};
                            var24 = false;
                            var18['variableWidthThumbnailsEnabled'] = var24;
                            var19 = _closure4_slot1;
                            var18['thumbnailScrollPositions'] = var19;
                            var18['thumbnailSize'] = var9;
                            var18['swipeSource'] = var21;
                            var18['maxIndex'] = var23;
                            var25 = _closure4_slot3;
                            var18['thumbnailsIndex'] = var25;
                            var27 = _closure4_slot5;
                            var18['thumbnailsAnimateTo'] = var27;
                            var23 = _closure4_slot2;
                            var18['selectedIndex'] = var23;
                            var23 = _closure4_slot7;
                            var18['viewerScrolling'] = var23;
                            var18['thumbnailsScrolling'] = var26;
                            var28 = var16[var1];
                            var28 = var14.bind(var8)(var28);
                            var28 = var28.runOnJS;
                            var18['runOnJS'] = var28;
                            var18['onSelectedIndexChange'] = var22;
                            var12['__closure'] = var18;
                            var18 = 10605529664479.0;
                            var12['__workletHash'] = var18;
                            var18 = _closure1_slot12;
                            var12['__initData'] = var18;
                            var6['onScroll'] = var12;
                            var12 = function N() {
                                var4 = _closure4_slot4;
                                var3 = var4.set;
                                var2 = var4.get;
                                var5 = var2.bind(var4)();
                                var2 = 4;
                                var2 = var2 | var5;
                                var2 = var3.bind(var4)(var2);
                                var3 = _closure4_slot9;
                                var2 = var3.set;
                                var1 = 'thumbnails';
                                var1 = var2.bind(var3)(var1);
                                var1 = undefined;
                                return var1;
                            };
                            var18 = {};
                            var18['thumbnailsScrolling'] = var26;
                            var18['SCROLLING_MOMENTUM'] = var20;
                            var18['swipeSource'] = var21;
                            var12['__closure'] = var18;
                            var18 = 4138169755088.0;
                            var12['__workletHash'] = var18;
                            var18 = _closure1_slot13;
                            var12['__initData'] = var18;
                            var6['onMomentumBegin'] = var12;
                            var12 = function L() {
                                var3 = _closure4_slot4;
                                var2 = var3.set;
                                var1 = var3.get;
                                var4 = var1.bind(var3)();
                                var1 = -5;
                                var1 = var1 & var4;
                                var1 = var2.bind(var3)(var1);
                                var1 = undefined;
                                return var1;
                            };
                            var18 = {};
                            var18['thumbnailsScrolling'] = var26;
                            var18['SCROLLING_MOMENTUM'] = var20;
                            var12['__closure'] = var18;
                            var18 = 1471443652144.0;
                            var12['__workletHash'] = var18;
                            var18 = _closure1_slot14;
                            var12['__initData'] = var18;
                            var6['onMomentumEnd'] = var12;
                            var7 = var7.bind(var11)(var6);
                            var20 = _closure1_slot4;
                            var12 = var20.useCallback;
                            var11 = function(arg1) {
                                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                                    var3 = _closure4_slot8;
                                    var2 = var3.get;
                                    var2 = var2.bind(var3)();
                                    if(var2) { _fun0005_ip = 56; continue _fun0005 }
 19:
                                    var4 = _closure4_slot5;
                                    var3 = var4.set;
                                    var2 = arg1;
                                    var2 = var3.bind(var4)(var2);
                                    var3 = _closure4_slot9;
                                    var2 = var3.set;
                                    var1 = 'thumbnails';
                                    var1 = var2.bind(var3)(var1);
 56:
                                    var1 = undefined;
                                    return var1;
                                }
                            };
                            var6 = new Array(0);
                            var6 = var12.bind(var20)(var11, var6);
                            var18 = var20.useCallback;
                            var12 = new Array(1);
                            var12[0] = var13;
                            var11 = function(arg1) {
                                var2 = _closure4_slot1;
                                var1 = arg1;
                                var1 = var2[var1];
                                var10 = var1.scrollStart;
                                var3 = _closure1_slot0;
                                var2 = _closure1_slot2;
                                var1 = 3;
                                var2 = var2[var1];
                                var1 = undefined;
                                var6 = var3.bind(var1)(var2);
                                var5 = var6.scrollTo;
                                var11 = _closure5_slot2;
                                var9 = 0;
                                var8 = true;
                                var12 = var6;
                                var2 = var12[var5](var11, var10, var9, var8, var7);
                                return var1;
                            };
                            var22 = var18.bind(var20)(var11, var12);
                            var11 = var16[var1];
                            var18 = var14.bind(var8)(var11);
                            var12 = var18.useDerivedValue;
                            var11 = function P() {
                                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                                    var3 = _closure4_slot5;
                                    var1 = var3.get;
                                    var1 = var1.bind(var3)();
                                    var6 = 0;
                                    if(!(!(var1 < var6))) { _fun0006_ip = 92; continue _fun0006 }
 22:
                                    var4 = _closure1_slot0;
                                    var3 = _closure1_slot2;
                                    var1 = 3;
                                    var3 = var3[var1];
                                    var1 = undefined;
                                    var5 = var4.bind(var1)(var3);
                                    var4 = var5.scrollTo;
                                    var11 = _closure5_slot2;
                                    var7 = _closure4_slot5;
                                    var2 = var7.get;
                                    var2 = var2.bind(var7)();
                                    var1 = _closure5_slot0;
                                    var10 = var2 * var1;
                                    var8 = true;
                                    var12 = var5;
                                    var9 = 0;
                                    var1 = var12[var4](var11, var10, var9, var8, var7);
 92:
                                    var1 = undefined;
                                    return var1;
                                }
                            };
                            var21 = {};
                            var21['thumbnailsAnimateTo'] = var27;
                            var21['variableWidthThumbnailsEnabled'] = var24;
                            var27 = var16[var1];
                            var27 = var14.bind(var8)(var27);
                            var27 = var27.runOnJS;
                            var21['runOnJS'] = var27;
                            var21['scrollVarWidthThumbnails'] = var22;
                            var22 = var16[var1];
                            var22 = var14.bind(var8)(var22);
                            var22 = var22.scrollTo;
                            var21['scrollTo'] = var22;
                            var21['ref'] = var13;
                            var21['thumbnailSize'] = var9;
                            var11['__closure'] = var21;
                            var21 = 1697086875584.0;
                            var11['__workletHash'] = var21;
                            var21 = _closure1_slot15;
                            var11['__initData'] = var21;
                            var11 = var12.bind(var18)(var11);
                            var18 = var20.useCallback;
                            var12 = new Array(1);
                            var12[0] = var13;
                            var11 = function(arg1) {
                                var3 = _closure1_slot0;
                                var4 = _closure1_slot2;
                                var1 = 7;
                                var2 = var4[var1];
                                var1 = undefined;
                                var7 = var3.bind(var1)(var2);
                                var6 = var7.lerpVarWidthThumbnailScrollBounds;
                                var5 = _closure4_slot1;
                                var2 = arg1;
                                var10 = var6.bind(var7)(var5, var2);
                                var2 = 3;
                                var2 = var4[var2];
                                var6 = var3.bind(var1)(var2);
                                var5 = var6.scrollTo;
                                var11 = _closure5_slot2;
                                var9 = 0;
                                var8 = false;
                                var12 = var6;
                                var2 = var12[var5](var11, var10, var9, var8, var7);
                                return var1;
                            };
                            var22 = var18.bind(var20)(var11, var12);
                            var11 = var16[var1];
                            var18 = var14.bind(var8)(var11);
                            var12 = var18.useDerivedValue;
                            var11 = function Z() {
                                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                                    var3 = _closure4_slot7;
                                    var1 = var3.get;
                                    var1 = var1.bind(var3)();
                                    var6 = 0;
                                    var1 = var6 !== var1;
                                    if(!var1) { _fun0007_ip = 55; continue _fun0007 }
 25:
                                    var4 = _closure4_slot3;
                                    var3 = var4.get;
                                    var4 = var3.bind(var4)();
                                    var5 = _closure4_slot6;
                                    var3 = var5.get;
                                    var3 = var3.bind(var5)();
                                    var1 = var4 !== var3;
 55:
                                    if(!var1) { _fun0007_ip = 128; continue _fun0007 }
 58:
                                    var4 = _closure1_slot0;
                                    var3 = _closure1_slot2;
                                    var1 = 3;
                                    var3 = var3[var1];
                                    var1 = undefined;
                                    var5 = var4.bind(var1)(var3);
                                    var4 = var5.scrollTo;
                                    var11 = _closure5_slot2;
                                    var7 = _closure4_slot6;
                                    var2 = var7.get;
                                    var2 = var2.bind(var7)();
                                    var1 = _closure5_slot0;
                                    var10 = var2 * var1;
                                    var8 = false;
                                    var12 = var5;
                                    var9 = 0;
                                    var1 = var12[var4](var11, var10, var9, var8, var7);
 128:
                                    var1 = undefined;
                                    return var1;
                                }
                            };
                            var21 = {};
                            var21['viewerScrolling'] = var23;
                            var21['thumbnailsIndex'] = var25;
                            var25 = _closure4_slot6;
                            var21['viewerPos'] = var25;
                            var21['variableWidthThumbnailsEnabled'] = var24;
                            var24 = var16[var1];
                            var24 = var14.bind(var8)(var24);
                            var24 = var24.runOnJS;
                            var21['runOnJS'] = var24;
                            var21['lerpScrollVarWidthThumbnails'] = var22;
                            var22 = var16[var1];
                            var22 = var14.bind(var8)(var22);
                            var22 = var22.scrollTo;
                            var21['scrollTo'] = var22;
                            var21['ref'] = var13;
                            var21['thumbnailSize'] = var9;
                            var11['__closure'] = var21;
                            var21 = 10477949154269.0;
                            var11['__workletHash'] = var21;
                            var21 = _closure1_slot16;
                            var11['__initData'] = var21;
                            var11 = var12.bind(var18)(var11);
                            var18 = _closure4_slot0;
                            var12 = var18.map;
                            var11 = function(arg1, arg2) {
                                var1 = arg2;
                                return var1;
                            };
                            var24 = var12.bind(var18)(var11);
                            var _closure5_slot4 = var24;
                            var12 = var18.map;
                            var11 = function(arg1) {
                                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                                    var4 = _closure1_slot0;
                                    var2 = _closure1_slot2;
                                    var1 = 8;
                                    var2 = var2[var1];
                                    var1 = undefined;
                                    var4 = var4.bind(var1)(var2);
                                    var2 = var4.flattenSource;
                                    var1 = arg1;
                                    var2 = var2.bind(var4)(var1);
                                    var1 = null;
                                    var4 = var1 == var2;
                                    var1 = 0;
                                    if(var4) { _fun0008_ip = 127; continue _fun0008 }
 50:
                                    var6 = global;
                                    var5 = var6.Math;
                                    var4 = var5.max;
                                    var8 = var6.Math;
                                    var7 = var8.min;
                                    var6 = var2.width;
                                    var9 = _closure1_slot6;
                                    var2 = var2.height;
                                    var2 = var9 / var2;
                                    var6 = var6 * var2;
                                    var2 = _closure1_slot7;
                                    var2 = var7.bind(var8)(var6, var2);
                                    var3 = _closure1_slot8;
                                    var2 = var4.bind(var5)(var2, var3);
                                    var3 = var2 - var3;
                                    var2 = 2;
                                    var1 = var3 / var2;
 127:
                                    return var1;
                                }
                            };
                            var22 = var12.bind(var18)(var11);
                            var _closure5_slot5 = var22;
                            var11 = var16[var1];
                            var18 = var14.bind(var8)(var11);
                            var12 = var18.useDerivedValue;
                            var11 = function ee() {
                                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
                                    var3 = _closure4_slot4;
                                    var1 = var3.get;
                                    var3 = var1.bind(var3)();
                                    var1 = 0;
                                    var3 = var3 > var1;
                                    if(var3) { _fun0009_ip = 94; continue _fun0009 }
 25:
                                    var5 = _closure1_slot0;
                                    var4 = _closure1_slot2;
                                    var3 = 3;
                                    var4 = var4[var3];
                                    var3 = undefined;
                                    var7 = var5.bind(var3)(var4);
                                    var6 = var7.interpolate;
                                    var3 = _closure4_slot6;
                                    var2 = var3.get;
                                    var11 = var2.bind(var3)();
                                    var10 = _closure5_slot4;
                                    var9 = _closure5_slot5;
                                    var8 = 'clamp';
                                    var12 = var7;
                                    var2 = var12[var6](var11, var10, var9, var8, var7);
                                    var1 = -var2;
 94:
                                    return var1;
                                }
                            };
                            var21 = {};
                            var21['thumbnailsScrolling'] = var26;
                            var26 = var16[var1];
                            var26 = var14.bind(var8)(var26);
                            var26 = var26.interpolate;
                            var21['interpolate'] = var26;
                            var21['viewerPos'] = var25;
                            var21['interpolateInput'] = var24;
                            var21['interpolateOutput'] = var22;
                            var11['__closure'] = var21;
                            var21 = 10097839523885.0;
                            var11['__workletHash'] = var21;
                            var21 = _closure1_slot17;
                            var11['__initData'] = var21;
                            var22 = var12.bind(var18)(var11);
                            var _closure5_slot6 = var22;
                            var11 = var4 - var9;
                            var12 = var11 / var10;
                            var11 = var5.left;
                            var11 = var12 - var11;
                            var _closure5_slot7 = var11;
                            var12 = var16[var1];
                            var24 = var14.bind(var8)(var12);
                            var18 = var24.useAnimatedStyle;
                            var12 = function te() {
                                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
                                    var1 = {};
                                    var3 = _closure4_slot7;
                                    var2 = var3.get;
                                    var3 = var2.bind(var3)();
                                    var2 = 0;
                                    if(!(!(var3 > var2))) { _fun0010_ip = 95; continue _fun0010 }
 24:
                                    var4 = _closure1_slot0;
                                    var3 = _closure1_slot2;
                                    var2 = 9;
                                    var3 = var3[var2];
                                    var2 = undefined;
                                    var5 = var4.bind(var2)(var3);
                                    var4 = var5.withSpring;
                                    var3 = _closure5_slot7;
                                    var6 = _closure5_slot6;
                                    var2 = var6.get;
                                    var2 = var2.bind(var6)();
                                    var3 = var3 + var2;
                                    var2 = {};
                                    var6 = true;
                                    var2['overshootClamping'] = var6;
                                    var2 = var4.bind(var5)(var3, var2);
                                    _fun0010_ip = 119; continue _fun0010;
 95:
                                    var4 = _closure5_slot7;
                                    var5 = _closure5_slot6;
                                    var3 = var5.get;
                                    var3 = var3.bind(var5)();
                                    var2 = var4 + var3;
 119:
                                    var1['width'] = var2;
                                    return var1;
                                }
                            };
                            var25 = {};
                            var25['viewerScrolling'] = var23;
                            var25['headerBufferSize'] = var11;
                            var25['margin'] = var22;
                            var21 = 9;
                            var26 = var16[var21];
                            var26 = var14.bind(var8)(var26);
                            var26 = var26.withSpring;
                            var25['withSpring'] = var26;
                            var12['__closure'] = var25;
                            var25 = 11328769587377.0;
                            var12['__workletHash'] = var25;
                            var25 = _closure1_slot18;
                            var12['__initData'] = var25;
                            var12 = var18.bind(var24)(var12);
                            var24 = var19.length;
                            var18 = 1;
                            var18 = var24 - var18;
                            var18 = var19[var18];
                            var9 = var4 - var9;
                            var9 = var9 / var10;
                            var5 = var5.right;
                            var9 = var9 - var5;
                            var _closure5_slot8 = var9;
                            var5 = var16[var1];
                            var18 = var14.bind(var8)(var5);
                            var10 = var18.useAnimatedStyle;
                            var5 = function ie() {
                                _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
 0:
                                    var1 = {};
                                    var3 = _closure4_slot7;
                                    var2 = var3.get;
                                    var3 = var2.bind(var3)();
                                    var2 = 0;
                                    if(!(!(var3 > var2))) { _fun0011_ip = 95; continue _fun0011 }
 24:
                                    var4 = _closure1_slot0;
                                    var3 = _closure1_slot2;
                                    var2 = 9;
                                    var3 = var3[var2];
                                    var2 = undefined;
                                    var5 = var4.bind(var2)(var3);
                                    var4 = var5.withSpring;
                                    var3 = _closure5_slot8;
                                    var6 = _closure5_slot6;
                                    var2 = var6.get;
                                    var2 = var2.bind(var6)();
                                    var3 = var3 + var2;
                                    var2 = {};
                                    var6 = true;
                                    var2['overshootClamping'] = var6;
                                    var2 = var4.bind(var5)(var3, var2);
                                    _fun0011_ip = 119; continue _fun0011;
 95:
                                    var4 = _closure5_slot8;
                                    var5 = _closure5_slot6;
                                    var3 = var5.get;
                                    var3 = var3.bind(var5)();
                                    var2 = var4 + var3;
 119:
                                    var1['width'] = var2;
                                    return var1;
                                }
                            };
                            var19 = {};
                            var19['viewerScrolling'] = var23;
                            var19['footerBufferSize'] = var9;
                            var19['margin'] = var22;
                            var21 = var16[var21];
                            var21 = var14.bind(var8)(var21);
                            var21 = var21.withSpring;
                            var19['withSpring'] = var21;
                            var5['__closure'] = var19;
                            var19 = 10532164558483.0;
                            var5['__workletHash'] = var19;
                            var19 = _closure1_slot19;
                            var5['__initData'] = var19;
                            var10 = var10.bind(var18)(var5);
                            var19 = var20.useCallback;
                            var18 = function(arg1, arg2) {
                                var3 = arg1;
                                var15 = arg2;
                                var _closure6_slot0 = var15;
                                var10 = _closure1_slot0;
                                var11 = _closure1_slot2;
                                var2 = 3;
                                var5 = var11[var2];
                                var9 = undefined;
                                var7 = var10.bind(var9)(var5);
                                var6 = var7.useDerivedValue;
                                var5 = function n() {
                                    var3 = _closure1_slot0;
                                    var2 = _closure1_slot2;
                                    var1 = 3;
                                    var2 = var2[var1];
                                    var1 = undefined;
                                    var6 = var3.bind(var1)(var2);
                                    var5 = var6.interpolate;
                                    var2 = _closure4_slot6;
                                    var1 = var2.get;
                                    var11 = var1.bind(var2)();
                                    var2 = _closure6_slot0;
                                    var1 = 1;
                                    var7 = var2 - var1;
                                    var3 = new Array(3);
                                    var3[0] = var7;
                                    var3[1] = var2;
                                    var1 = var2 + var1;
                                    var3[2] = var1;
                                    var9 = [0.4, 1, 0.4];
                                    var8 = 'clamp';
                                    var12 = var6;
                                    var10 = var3;
                                    var1 = var12[var5](var11, var10, var9, var8, var7);
                                    return var1;
                                };
                                var8 = {};
                                var12 = var11[var2];
                                var12 = var10.bind(var9)(var12);
                                var12 = var12.interpolate;
                                var8['interpolate'] = var12;
                                var16 = _closure4_slot6;
                                var8['viewerPos'] = var16;
                                var8['index'] = var15;
                                var5['__closure'] = var8;
                                var8 = 5784737783661.0;
                                var5['__workletHash'] = var8;
                                var8 = _closure1_slot20;
                                var5['__initData'] = var8;
                                var6 = var6.bind(var7)(var5);
                                var _closure6_slot1 = var6;
                                var7 = global;
                                var8 = var7.Math;
                                var5 = var8.max;
                                var17 = var7.Math;
                                var14 = var17.min;
                                var13 = var3.width;
                                var7 = _closure1_slot6;
                                var3 = var3.height;
                                var3 = var7 / var3;
                                var13 = var13 * var3;
                                var3 = _closure1_slot7;
                                var3 = var14.bind(var17)(var13, var3);
                                var17 = _closure1_slot8;
                                var14 = var5.bind(var8)(var3, var17);
                                var _closure6_slot2 = var14;
                                var3 = var11[var2];
                                var8 = var10.bind(var9)(var3);
                                var5 = var8.useDerivedValue;
                                var3 = function l() {
                                    _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
 0:
                                        var3 = _closure4_slot4;
                                        var1 = var3.get;
                                        var3 = var1.bind(var3)();
                                        var1 = 0;
                                        if(!(!(var3 > var1))) { _fun0012_ip = 146; continue _fun0012 }
 25:
                                        var5 = _closure1_slot0;
                                        var4 = _closure1_slot2;
                                        var3 = 3;
                                        var4 = var4[var3];
                                        var3 = undefined;
                                        var6 = var5.bind(var3)(var4);
                                        var5 = var6.interpolate;
                                        var3 = _closure4_slot6;
                                        var2 = var3.get;
                                        var13 = var2.bind(var3)();
                                        var8 = _closure6_slot0;
                                        var2 = 1;
                                        var9 = var8 - var2;
                                        var3 = new Array(3);
                                        var3[0] = var9;
                                        var3[1] = var8;
                                        var2 = var8 + var2;
                                        var3[2] = var2;
                                        var1 = _closure1_slot8;
                                        var2 = new Array(3);
                                        var2[0] = var1;
                                        var7 = _closure6_slot2;
                                        var2[1] = var7;
                                        var2[2] = var1;
                                        var10 = 'clamp';
                                        var14 = var6;
                                        var12 = var3;
                                        var11 = var2;
                                        var1 = var14[var5](var13, var12, var11, var10, var9);
                                        _fun0012_ip = 153; continue _fun0012;
 146:
                                        var1 = _closure1_slot8;
 153:
                                        return var1;
                                    }
                                };
                                var13 = {};
                                var18 = _closure4_slot4;
                                var13['thumbnailsScrolling'] = var18;
                                var13['THUMBNAIL_MIN_WIDTH'] = var17;
                                var17 = var11[var2];
                                var17 = var10.bind(var9)(var17);
                                var17 = var17.interpolate;
                                var13['interpolate'] = var17;
                                var13['viewerPos'] = var16;
                                var13['index'] = var15;
                                var13['sourceWidth'] = var14;
                                var3['__closure'] = var13;
                                var13 = 12440745987072.0;
                                var3['__workletHash'] = var13;
                                var13 = _closure1_slot21;
                                var3['__initData'] = var13;
                                var8 = var5.bind(var8)(var3);
                                var _closure6_slot3 = var8;
                                var2 = var11[var2];
                                var3 = var10.bind(var9)(var2);
                                var2 = var3.useAnimatedStyle;
                                var1 = function c() {
                                    _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
 0:
                                        var1 = {};
                                        var3 = _closure4_slot7;
                                        var2 = var3.get;
                                        var3 = var2.bind(var3)();
                                        var2 = 0;
                                        if(!(!(var3 > var2))) { _fun0013_ip = 87; continue _fun0013 }
 24:
                                        var4 = _closure1_slot0;
                                        var3 = _closure1_slot2;
                                        var2 = 9;
                                        var3 = var3[var2];
                                        var2 = undefined;
                                        var5 = var4.bind(var2)(var3);
                                        var4 = var5.withSpring;
                                        var3 = _closure6_slot3;
                                        var2 = var3.get;
                                        var3 = var2.bind(var3)();
                                        var2 = {};
                                        var6 = true;
                                        var2['overshootClamping'] = var6;
                                        var2 = var4.bind(var5)(var3, var2);
                                        _fun0013_ip = 103; continue _fun0013;
 87:
                                        var4 = _closure6_slot3;
                                        var3 = var4.get;
                                        var2 = var3.bind(var4)();
 103:
                                        var1['width'] = var2;
                                        var2 = _closure1_slot6;
                                        var1['height'] = var2;
                                        var3 = _closure6_slot1;
                                        var2 = var3.get;
                                        var2 = var2.bind(var3)();
                                        var1['opacity'] = var2;
                                        return var1;
                                    }
                                };
                                var5 = {};
                                var12 = _closure4_slot7;
                                var5['viewerScrolling'] = var12;
                                var5['_width'] = var8;
                                var8 = 9;
                                var8 = var11[var8];
                                var8 = var10.bind(var9)(var8);
                                var8 = var8.withSpring;
                                var5['withSpring'] = var8;
                                var5['THUMBNAIL_HEIGHT'] = var7;
                                var5['opacity'] = var6;
                                var1['__closure'] = var5;
                                var5 = 513826663139.0;
                                var1['__workletHash'] = var5;
                                var4 = _closure1_slot22;
                                var1['__initData'] = var4;
                                var1 = var2.bind(var3)(var1);
                                return var1;
                            };
                            var5 = new Array(0);
                            var5 = var19.bind(var20)(var18, var5);
                            var1 = var16[var1];
                            var14 = var14.bind(var8)(var1);
                            var8 = var14.useDerivedValue;
                            var1 = function ne() {
                                var2 = _closure4_slot8;
                                var1 = var2.get;
                                var1 = var1.bind(var2)();
                                var1 = !var1;
                                return var1;
                            };
                            var16 = {};
                            var17 = _closure4_slot8;
                            var16['zoomed'] = var17;
                            var1['__closure'] = var16;
                            var16 = 7667674289153.0;
                            var1['__workletHash'] = var16;
                            var15 = _closure1_slot23;
                            var1['__initData'] = var15;
                            var8 = var8.bind(var14)(var1);
                            var1 = {};
                            var1['ref'] = var13;
                            var1['headerBufferStyle'] = var12;
                            var1['headerBufferSize'] = var11;
                            var1['footerBufferStyle'] = var10;
                            var1['footerBufferSize'] = var9;
                            var1['scrollEnabled'] = var8;
                            var1['onScroll'] = var7;
                            var1['onSelect'] = var6;
                            var1['useThumbnailStyle'] = var5;
                            var1['screenWidth'] = var4;
                            var1['screenHeight'] = var3;
                            var2 = function itemSize(arg1, arg2) {
                                var1 = _closure1_slot9;
                                return var1;
                            };
                            var1['itemSize'] = var2;
                            return var1;
                        };
                        var1['useThumbnailsProps'] = var5;
                        var4 = function useViewerProps() {
                            var10 = _closure1_slot0;
                            var11 = _closure1_slot2;
                            var3 = 3;
                            var2 = var11[var3];
                            var8 = undefined;
                            var4 = var10.bind(var8)(var2);
                            var2 = var4.useAnimatedRef;
                            var5 = var2.bind(var4)();
                            var _closure5_slot0 = var5;
                            var4 = _closure1_slot1;
                            var14 = 4;
                            var2 = var11[var14];
                            var2 = var4.bind(var8)(var2);
                            var2 = var2.bind(var8)();
                            var9 = var2.width;
                            var _closure5_slot1 = var9;
                            var2 = var2.height;
                            var _closure5_slot2 = var2;
                            var4 = var11[var3];
                            var12 = var10.bind(var8)(var4);
                            var7 = var12.useDerivedValue;
                            var4 = function n() {
                                _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
 0:
                                    var3 = _closure4_slot5;
                                    var1 = var3.get;
                                    var3 = var1.bind(var3)();
                                    var1 = -1;
                                    if(!(var1 !== var3)) { _fun0014_ip = 96; continue _fun0014 }
 26:
                                    var4 = _closure1_slot0;
                                    var3 = _closure1_slot2;
                                    var1 = 3;
                                    var3 = var3[var1];
                                    var1 = undefined;
                                    var6 = var4.bind(var1)(var3);
                                    var5 = var6.scrollTo;
                                    var10 = _closure5_slot0;
                                    var3 = _closure4_slot5;
                                    var2 = var3.get;
                                    var2 = var2.bind(var3)();
                                    var1 = _closure5_slot1;
                                    var9 = var2 * var1;
                                    var8 = 0;
                                    var7 = false;
                                    var11 = var6;
                                    var1 = var11[var5](var10, var9, var8, var7, var6);
 96:
                                    var1 = undefined;
                                    return var1;
                                }
                            };
                            var13 = {};
                            var18 = _closure4_slot5;
                            var13['thumbnailsAnimateTo'] = var18;
                            var15 = var11[var3];
                            var15 = var10.bind(var8)(var15);
                            var15 = var15.scrollTo;
                            var13['scrollTo'] = var15;
                            var13['ref'] = var5;
                            var13['screenWidth'] = var9;
                            var4['__closure'] = var13;
                            var13 = 11860326453239.0;
                            var4['__workletHash'] = var13;
                            var13 = _closure1_slot24;
                            var4['__initData'] = var13;
                            var4 = var7.bind(var12)(var4);
                            var4 = var11[var3];
                            var12 = var10.bind(var8)(var4);
                            var7 = var12.useDerivedValue;
                            var4 = function l() {
                                _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
 0:
                                    var3 = _closure4_slot4;
                                    var1 = var3.get;
                                    var1 = var1.bind(var3)();
                                    var6 = 0;
                                    var1 = var6 === var1;
                                    if(var1) { _fun0015_ip = 42; continue _fun0015 }
 25:
                                    var4 = _closure4_slot7;
                                    var3 = var4.get;
                                    var3 = var3.bind(var4)();
                                    var1 = var3 > var6;
 42:
                                    if(var1) { _fun0015_ip = 68; continue _fun0015 }
 45:
                                    var4 = _closure4_slot5;
                                    var3 = var4.get;
                                    var4 = var3.bind(var4)();
                                    var3 = -1;
                                    var1 = var3 !== var4;
 68:
                                    if(var1) { _fun0015_ip = 141; continue _fun0015 }
 71:
                                    var4 = _closure1_slot0;
                                    var3 = _closure1_slot2;
                                    var1 = 3;
                                    var3 = var3[var1];
                                    var1 = undefined;
                                    var5 = var4.bind(var1)(var3);
                                    var4 = var5.scrollTo;
                                    var11 = _closure5_slot0;
                                    var7 = _closure4_slot3;
                                    var2 = var7.get;
                                    var2 = var2.bind(var7)();
                                    var1 = _closure5_slot1;
                                    var10 = var2 * var1;
                                    var8 = false;
                                    var12 = var5;
                                    var9 = 0;
                                    var1 = var12[var4](var11, var10, var9, var8, var7);
 141:
                                    var1 = undefined;
                                    return var1;
                                }
                            };
                            var13 = {};
                            var19 = _closure4_slot4;
                            var13['thumbnailsScrolling'] = var19;
                            var15 = _closure4_slot7;
                            var13['viewerScrolling'] = var15;
                            var13['thumbnailsAnimateTo'] = var18;
                            var16 = var11[var3];
                            var16 = var10.bind(var8)(var16);
                            var16 = var16.scrollTo;
                            var13['scrollTo'] = var16;
                            var13['ref'] = var5;
                            var16 = _closure4_slot3;
                            var13['thumbnailsIndex'] = var16;
                            var13['screenWidth'] = var9;
                            var4['__closure'] = var13;
                            var13 = 16855593341498.0;
                            var4['__workletHash'] = var13;
                            var13 = _closure1_slot25;
                            var4['__initData'] = var13;
                            var4 = var7.bind(var12)(var4);
                            var3 = var11[var3];
                            var7 = var10.bind(var8)(var3);
                            var4 = var7.useAnimatedScrollHandler;
                            var3 = {};
                            var12 = function w() {
                                var4 = _closure4_slot7;
                                var3 = var4.set;
                                var2 = var4.get;
                                var5 = var2.bind(var4)();
                                var2 = 2;
                                var2 = var2 | var5;
                                var2 = var3.bind(var4)(var2);
                                var3 = _closure4_slot9;
                                var2 = var3.set;
                                var1 = 'viewer';
                                var1 = var2.bind(var3)(var1);
                                var1 = undefined;
                                return var1;
                            };
                            var13 = {};
                            var13['viewerScrolling'] = var15;
                            var20 = 2;
                            var13['SCROLLING_DRAG'] = var20;
                            var16 = _closure4_slot9;
                            var13['swipeSource'] = var16;
                            var12['__closure'] = var13;
                            var13 = 1082965969005.0;
                            var12['__workletHash'] = var13;
                            var13 = _closure1_slot26;
                            var12['__initData'] = var13;
                            var3['onBeginDrag'] = var12;
                            var12 = function b() {
                                var3 = _closure4_slot7;
                                var2 = var3.set;
                                var1 = var3.get;
                                var4 = var1.bind(var3)();
                                var1 = -3;
                                var1 = var1 & var4;
                                var1 = var2.bind(var3)(var1);
                                var1 = undefined;
                                return var1;
                            };
                            var13 = {};
                            var13['viewerScrolling'] = var15;
                            var13['SCROLLING_DRAG'] = var20;
                            var12['__closure'] = var13;
                            var13 = 1722948238280.0;
                            var12['__workletHash'] = var13;
                            var13 = _closure1_slot27;
                            var12['__initData'] = var13;
                            var3['onEndDrag'] = var12;
                            var12 = function S(arg1) {
                                _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
 0:
                                    var3 = _closure4_slot7;
                                    var2 = var3.get;
                                    var2 = var2.bind(var3)();
                                    var4 = 0;
                                    var2 = var4 === var2;
                                    if(!var2) { _fun0016_ip = 42; continue _fun0016 }
 25:
                                    var5 = _closure4_slot4;
                                    var3 = var5.get;
                                    var3 = var3.bind(var5)();
                                    var2 = var4 === var3;
 42:
                                    if(!var2) { _fun0016_ip = 68; continue _fun0016 }
 45:
                                    var4 = _closure4_slot5;
                                    var3 = var4.get;
                                    var4 = var3.bind(var4)();
                                    var3 = -1;
                                    var2 = var3 === var4;
 68:
                                    if(var2) { _fun0016_ip = 110; continue _fun0016 }
 71:
                                    var3 = _closure4_slot6;
                                    var2 = var3.set;
                                    var1 = arg1;
                                    var1 = var1.contentOffset;
                                    var4 = var1.x;
                                    var1 = _closure5_slot1;
                                    var1 = var4 / var1;
                                    var1 = var2.bind(var3)(var1);
 110:
                                    var1 = undefined;
                                    return var1;
                                }
                            };
                            var13 = {};
                            var13['viewerScrolling'] = var15;
                            var13['thumbnailsScrolling'] = var19;
                            var13['thumbnailsAnimateTo'] = var18;
                            var17 = _closure4_slot6;
                            var13['viewerPos'] = var17;
                            var13['screenWidth'] = var9;
                            var12['__closure'] = var13;
                            var13 = 2738090250956.0;
                            var12['__workletHash'] = var13;
                            var13 = _closure1_slot28;
                            var12['__initData'] = var13;
                            var3['onScroll'] = var12;
                            var12 = function _() {
                                var4 = _closure4_slot7;
                                var3 = var4.set;
                                var2 = var4.get;
                                var5 = var2.bind(var4)();
                                var2 = 4;
                                var2 = var2 | var5;
                                var2 = var3.bind(var4)(var2);
                                var3 = _closure4_slot9;
                                var2 = var3.set;
                                var1 = 'viewer';
                                var1 = var2.bind(var3)(var1);
                                var1 = undefined;
                                return var1;
                            };
                            var13 = {};
                            var13['viewerScrolling'] = var15;
                            var13['SCROLLING_MOMENTUM'] = var14;
                            var13['swipeSource'] = var16;
                            var12['__closure'] = var13;
                            var13 = 16635271467463.0;
                            var12['__workletHash'] = var13;
                            var13 = _closure1_slot29;
                            var12['__initData'] = var13;
                            var3['onMomentumBegin'] = var12;
                            var12 = function h() {
                                var3 = _closure4_slot7;
                                var2 = var3.set;
                                var1 = var3.get;
                                var4 = var1.bind(var3)();
                                var1 = -5;
                                var1 = var1 & var4;
                                var1 = var2.bind(var3)(var1);
                                var1 = undefined;
                                return var1;
                            };
                            var13 = {};
                            var13['viewerScrolling'] = var15;
                            var13['SCROLLING_MOMENTUM'] = var14;
                            var12['__closure'] = var13;
                            var13 = 8806989101472.0;
                            var12['__workletHash'] = var13;
                            var13 = _closure1_slot30;
                            var12['__initData'] = var13;
                            var3['onMomentumEnd'] = var12;
                            var4 = var4.bind(var7)(var3);
                            var3 = 10;
                            var7 = var11[var3];
                            var12 = var10.bind(var8)(var7);
                            var7 = var12.useOrientation;
                            var7 = var7.bind(var12)();
                            var3 = var11[var3];
                            var3 = var10.bind(var8)(var3);
                            var3 = var3.OrientationType;
                            var3 = var3.LANDSCAPE;
                            var3 = var7 === var3;
                            var _closure5_slot3 = var3;
                            var7 = _closure1_slot4;
                            var8 = var7.useCallback;
                            var6 = new Array(4);
                            var6[0] = var5;
                            var6[1] = var3;
                            var6[2] = var9;
                            var6[3] = var2;
                            var3 = function() {
                                _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
 0:
                                    var2 = _closure5_slot3;
                                    var3 = global;
                                    var6 = var3.Math;
                                    if(var2) { _fun0017_ip = 39; continue _fun0017 }
 18:
                                    var4 = var6.min;
                                    var3 = _closure5_slot1;
                                    var2 = _closure5_slot2;
                                    var3 = var4.bind(var6)(var3, var2);
                                    _fun0017_ip = 58; continue _fun0017;
 39:
                                    var5 = var6.max;
                                    var4 = _closure5_slot1;
                                    var2 = _closure5_slot2;
                                    var3 = var5.bind(var6)(var4, var2);
 58:
                                    var4 = _closure4_slot2;
                                    var2 = var4.get;
                                    var2 = var2.bind(var4)();
                                    var4 = var2 * var3;
                                    var1 = _closure5_slot0;
                                    var3 = var1.current;
                                    var1 = null;
                                    if(!(var1 != var3)) { _fun0017_ip = 107; continue _fun0017 }
 93:
                                    var2 = var3.scrollTo;
                                    var1 = false;
                                    var1 = var2.bind(var3)(var4, var1);
 107:
                                    var1 = undefined;
                                    return var1;
                                }
                            };
                            var3 = var8.bind(var7)(var3, var6);
                            var8 = var7.useEffect;
                            var6 = new Array(3);
                            var6[0] = var9;
                            var6[1] = var2;
                            var6[2] = var5;
                            var2 = function() {
                                _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
 0:
                                    var1 = _closure5_slot0;
                                    var2 = var1.current;
                                    var1 = null;
                                    if(!(var1 != var2)) { _fun0018_ip = 28; continue _fun0018 }
 18:
                                    var1 = var2.reset;
                                    var1 = var1.bind(var2)();
 28:
                                    var1 = undefined;
                                    return var1;
                                }
                            };
                            var2 = var8.bind(var7)(var2, var6);
                            var6 = var7.useCallback;
                            var2 = function(arg1) {
                                var14 = arg1;
                                var _closure6_slot0 = var14;
                                var4 = _closure1_slot4;
                                var3 = var4.useState;
                                var13 = _closure4_slot2;
                                var1 = var13.get;
                                var1 = var1.bind(var13)();
                                var1 = var14 === var1;
                                var4 = var3.bind(var4)(var1);
                                var3 = _closure1_slot3;
                                var11 = undefined;
                                var1 = 2;
                                var4 = var3.bind(var11)(var4, var1);
                                var1 = 0;
                                var1 = var4[var1];
                                var3 = 1;
                                var8 = var4[var3];
                                var _closure6_slot1 = var8;
                                var10 = _closure1_slot0;
                                var12 = _closure1_slot2;
                                var9 = 3;
                                var3 = var12[var9];
                                var5 = var10.bind(var11)(var3);
                                var4 = var5.useAnimatedReaction;
                                var3 = function o() {
                                    var2 = _closure6_slot0;
                                    var3 = _closure4_slot2;
                                    var1 = var3.get;
                                    var1 = var1.bind(var3)();
                                    var1 = var2 === var1;
                                    return var1;
                                };
                                var7 = {};
                                var7['index'] = var14;
                                var7['selectedIndex'] = var13;
                                var3['__closure'] = var7;
                                var7 = 16460720517812.0;
                                var3['__workletHash'] = var7;
                                var7 = _closure1_slot31;
                                var3['__initData'] = var7;
                                var2 = function l(arg1, arg2) {
                                    _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
 0:
                                        var3 = arg1;
                                        var2 = arg2;
                                        var1 = null;
                                        var1 = var1 != var2;
                                        if(!var1) { _fun0019_ip = 19; continue _fun0019 }
 15:
                                        var1 = var2 !== var3;
 19:
                                        if(!var1) { _fun0019_ip = 69; continue _fun0019 }
 22:
                                        var4 = _closure1_slot0;
                                        var2 = _closure1_slot2;
                                        var1 = 3;
                                        var1 = var2[var1];
                                        var2 = undefined;
                                        var5 = var4.bind(var2)(var1);
                                        var4 = var5.runOnJS;
                                        var1 = _closure6_slot1;
                                        var1 = var4.bind(var5)(var1);
                                        var1 = var1.bind(var2)(var3);
 69:
                                        var1 = undefined;
                                        return var1;
                                    }
                                };
                                var7 = {};
                                var9 = var12[var9];
                                var9 = var10.bind(var11)(var9);
                                var9 = var9.runOnJS;
                                var7['runOnJS'] = var9;
                                var7['setVisible'] = var8;
                                var2['__closure'] = var7;
                                var7 = 2991686939184.0;
                                var2['__workletHash'] = var7;
                                var6 = _closure1_slot32;
                                var2['__initData'] = var6;
                                var2 = var4.bind(var5)(var3, var2);
                                return var1;
                            };
                            var1 = new Array(0);
                            var2 = var6.bind(var7)(var2, var1);
                            var1 = {};
                            var1['ref'] = var5;
                            var1['onScroll'] = var4;
                            var1['onContentSizeChange'] = var3;
                            var1['useItemVisible'] = var2;
                            return var1;
                        };
                        var1['useViewerProps'] = var4;
                        var1['onEndReached'] = var3;
                        var1['onEndReachedThreshold'] = var2;
                        return var1;
                    }
                };
                var1 = var1.bind(var3)(var2);
                return var1;
            }
        };
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['useMediaViewerSyncer'] = var2;
    return var1;
})();