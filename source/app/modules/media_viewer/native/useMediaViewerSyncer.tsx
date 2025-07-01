// app/modules/media_viewer/native/useMediaViewerSyncer.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golfie;
    var _closure1_slot2 = oscard;
    entity = global;
    verify = entity.Object;
    option = verify.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, tangon);
    entity = 0;
    tangon = oscard[entity];
    entity = undefined;
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot3 = tangon;
    tangon = 1;
    golfie = oscard[tangon];
    tangon = argCor;
    tangon = tangon.bind(entity)(golfie);
    var _closure1_slot4 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    golfie = tangon.THUMBNAIL_MARGIN;
    var _closure1_slot5 = golfie;
    golfie = tangon.THUMBNAIL_HEIGHT;
    var _closure1_slot6 = golfie;
    golfie = tangon.THUMBNAIL_MAX_WIDTH;
    var _closure1_slot7 = golfie;
    golfie = tangon.THUMBNAIL_MIN_WIDTH;
    var _closure1_slot8 = golfie;
    tangon = tangon.THUMBNAIL_WIDTH_MARGIN;
    var _closure1_slot9 = tangon;
    tangon = {};
    golfie = "function useMediaViewerSyncerTsx1(){const{thumbnailsScrolling,SCROLLING_DRAG,swipeSource}=this.__closure;thumbnailsScrolling.set(thumbnailsScrolling.get()|SCROLLING_DRAG);swipeSource.set('thumbnails');}";
    tangon['code'] = golfie;
    var _closure1_slot10 = tangon;
    tangon = {};
    golfie = 'function useMediaViewerSyncerTsx2(){const{thumbnailsScrolling,SCROLLING_DRAG}=this.__closure;thumbnailsScrolling.set(thumbnailsScrolling.get()&~SCROLLING_DRAG);}';
    tangon['code'] = golfie;
    var _closure1_slot11 = tangon;
    tangon = {};
    golfie = "function useMediaViewerSyncerTsx3(event){const{variableWidthThumbnailsEnabled,thumbnailScrollPositions,thumbnailSize,swipeSource,maxIndex,thumbnailsIndex,thumbnailsAnimateTo,selectedIndex,viewerScrolling,thumbnailsScrolling,runOnJS,onSelectedIndexChange}=this.__closure;let thumbnails=0;if(variableWidthThumbnailsEnabled){if(event.contentOffset.x<0){thumbnails=0;}else if(event.contentOffset.x>=thumbnailScrollPositions[thumbnailScrollPositions.length-1].end){thumbnails=thumbnailScrollPositions.length-1;}else{for(let i=0;i<thumbnailScrollPositions.length;i++){const startPos=thumbnailScrollPositions[i].scrollStart;let endPos=i<thumbnailScrollPositions.length-1?thumbnailScrollPositions[i+1].scrollStart:startPos;if(i===thumbnailScrollPositions.length-1){endPos=thumbnailScrollPositions[i].end;}if(event.contentOffset.x>=startPos&&event.contentOffset.x<endPos){thumbnails=i+(event.contentOffset.x-startPos)/(endPos-startPos);break;}}}}else{thumbnails=event.contentOffset.x/thumbnailSize;}if(swipeSource.get()==='thumbnails'||Math.abs(Math.round(thumbnails)-thumbnails)<0.01){const index=Math.max(0,Math.min(Math.round(thumbnails),maxIndex));thumbnailsIndex.set(index);}if(thumbnailsAnimateTo.get()>=0){if(thumbnailsIndex.get()===thumbnailsAnimateTo.get()){thumbnailsAnimateTo.set(-1);selectedIndex.set(thumbnailsIndex.get());}return;}const wasTouched=viewerScrolling.get()!==0||thumbnailsScrolling.get()!==0;if(wasTouched&&thumbnailsIndex.get()!==selectedIndex.get()){selectedIndex.set(thumbnailsIndex.get());runOnJS(onSelectedIndexChange)();}}";
    tangon['code'] = golfie;
    var _closure1_slot12 = tangon;
    tangon = {};
    golfie = "function useMediaViewerSyncerTsx4(){const{thumbnailsScrolling,SCROLLING_MOMENTUM,swipeSource}=this.__closure;thumbnailsScrolling.set(thumbnailsScrolling.get()|SCROLLING_MOMENTUM);swipeSource.set('thumbnails');}";
    tangon['code'] = golfie;
    var _closure1_slot13 = tangon;
    tangon = {};
    golfie = 'function useMediaViewerSyncerTsx5(){const{thumbnailsScrolling,SCROLLING_MOMENTUM}=this.__closure;thumbnailsScrolling.set(thumbnailsScrolling.get()&~SCROLLING_MOMENTUM);}';
    tangon['code'] = golfie;
    var _closure1_slot14 = tangon;
    tangon = {};
    golfie = 'function useMediaViewerSyncerTsx6(){const{thumbnailsAnimateTo,variableWidthThumbnailsEnabled,runOnJS,scrollVarWidthThumbnails,scrollTo,ref,thumbnailSize}=this.__closure;if(thumbnailsAnimateTo.get()<0)return;if(variableWidthThumbnailsEnabled){runOnJS(scrollVarWidthThumbnails)(thumbnailsAnimateTo.get());}else{scrollTo(ref,thumbnailsAnimateTo.get()*thumbnailSize,0,true);}}';
    tangon['code'] = golfie;
    var _closure1_slot15 = tangon;
    tangon = {};
    golfie = 'function useMediaViewerSyncerTsx7(){const{viewerScrolling,thumbnailsIndex,viewerPos,variableWidthThumbnailsEnabled,runOnJS,lerpScrollVarWidthThumbnails,scrollTo,ref,thumbnailSize}=this.__closure;if(viewerScrolling.get()===0)return;else if(thumbnailsIndex.get()!==viewerPos.get()){if(variableWidthThumbnailsEnabled){runOnJS(lerpScrollVarWidthThumbnails)(viewerPos.get());}else{scrollTo(ref,viewerPos.get()*thumbnailSize,0,false);}}}';
    tangon['code'] = golfie;
    var _closure1_slot16 = tangon;
    tangon = {};
    golfie = "function useMediaViewerSyncerTsx8(){const{thumbnailsScrolling,interpolate,viewerPos,interpolateInput,interpolateOutput}=this.__closure;return thumbnailsScrolling.get()>0?0:-interpolate(viewerPos.get(),interpolateInput,interpolateOutput,'clamp');}";
    tangon['code'] = golfie;
    var _closure1_slot17 = tangon;
    tangon = {};
    golfie = 'function useMediaViewerSyncerTsx9(){const{viewerScrolling,headerBufferSize,margin,withSpring}=this.__closure;return{width:viewerScrolling.get()>0?headerBufferSize+margin.get():withSpring(headerBufferSize+margin.get(),{overshootClamping:true})};}';
    tangon['code'] = golfie;
    var _closure1_slot18 = tangon;
    tangon = {};
    golfie = 'function useMediaViewerSyncerTsx10(){const{viewerScrolling,footerBufferSize,margin,withSpring}=this.__closure;return{width:viewerScrolling.get()>0?footerBufferSize+margin.get():withSpring(footerBufferSize+margin.get(),{overshootClamping:true})};}';
    tangon['code'] = golfie;
    var _closure1_slot19 = tangon;
    tangon = {};
    golfie = "function useMediaViewerSyncerTsx11(){const{interpolate,viewerPos,index}=this.__closure;return interpolate(viewerPos.get(),[index-1,index,index+1],[0.4,1,0.4],'clamp');}";
    tangon['code'] = golfie;
    var _closure1_slot20 = tangon;
    tangon = {};
    golfie = "function useMediaViewerSyncerTsx13(){const{thumbnailsScrolling,THUMBNAIL_MIN_WIDTH,interpolate,viewerPos,index,sourceWidth}=this.__closure;return thumbnailsScrolling.get()>0?THUMBNAIL_MIN_WIDTH:interpolate(viewerPos.get(),[index-1,index,index+1],[THUMBNAIL_MIN_WIDTH,sourceWidth,THUMBNAIL_MIN_WIDTH],'clamp');}";
    tangon['code'] = golfie;
    var _closure1_slot21 = tangon;
    tangon = {};
    golfie = 'function useMediaViewerSyncerTsx14(){const{viewerScrolling,_width,withSpring,THUMBNAIL_HEIGHT,opacity}=this.__closure;return{width:viewerScrolling.get()>0?_width.get():withSpring(_width.get(),{overshootClamping:true}),height:THUMBNAIL_HEIGHT,opacity:opacity.get()};}';
    tangon['code'] = golfie;
    var _closure1_slot22 = tangon;
    tangon = {};
    golfie = 'function useMediaViewerSyncerTsx15(){const{zoomed}=this.__closure;return!zoomed.get();}';
    tangon['code'] = golfie;
    var _closure1_slot23 = tangon;
    tangon = {};
    golfie = 'function useMediaViewerSyncerTsx16(){const{thumbnailsAnimateTo,scrollTo,ref,screenWidth}=this.__closure;if(thumbnailsAnimateTo.get()===-1)return;scrollTo(ref,thumbnailsAnimateTo.get()*screenWidth,0,false);}';
    tangon['code'] = golfie;
    var _closure1_slot24 = tangon;
    tangon = {};
    golfie = 'function useMediaViewerSyncerTsx17(){const{thumbnailsScrolling,viewerScrolling,thumbnailsAnimateTo,scrollTo,ref,thumbnailsIndex,screenWidth}=this.__closure;if(thumbnailsScrolling.get()===0||viewerScrolling.get()>0||thumbnailsAnimateTo.get()!==-1)return;scrollTo(ref,thumbnailsIndex.get()*screenWidth,0,false);}';
    tangon['code'] = golfie;
    var _closure1_slot25 = tangon;
    tangon = {};
    golfie = "function useMediaViewerSyncerTsx18(){const{viewerScrolling,SCROLLING_DRAG,swipeSource}=this.__closure;viewerScrolling.set(viewerScrolling.get()|SCROLLING_DRAG);swipeSource.set('viewer');}";
    tangon['code'] = golfie;
    var _closure1_slot26 = tangon;
    tangon = {};
    golfie = 'function useMediaViewerSyncerTsx19(){const{viewerScrolling,SCROLLING_DRAG}=this.__closure;viewerScrolling.set(viewerScrolling.get()&~SCROLLING_DRAG);}';
    tangon['code'] = golfie;
    var _closure1_slot27 = tangon;
    tangon = {};
    golfie = 'function useMediaViewerSyncerTsx20(event){const{viewerScrolling,thumbnailsScrolling,thumbnailsAnimateTo,viewerPos,screenWidth}=this.__closure;if(viewerScrolling.get()===0&&thumbnailsScrolling.get()===0&&thumbnailsAnimateTo.get()===-1)return;viewerPos.set(event.contentOffset.x/screenWidth);}';
    tangon['code'] = golfie;
    var _closure1_slot28 = tangon;
    tangon = {};
    golfie = "function useMediaViewerSyncerTsx21(){const{viewerScrolling,SCROLLING_MOMENTUM,swipeSource}=this.__closure;viewerScrolling.set(viewerScrolling.get()|SCROLLING_MOMENTUM);swipeSource.set('viewer');}";
    tangon['code'] = golfie;
    var _closure1_slot29 = tangon;
    tangon = {};
    golfie = 'function useMediaViewerSyncerTsx22(){const{viewerScrolling,SCROLLING_MOMENTUM}=this.__closure;viewerScrolling.set(viewerScrolling.get()&~SCROLLING_MOMENTUM);}';
    tangon['code'] = golfie;
    var _closure1_slot30 = tangon;
    tangon = {};
    golfie = 'function useMediaViewerSyncerTsx23(){const{index,selectedIndex}=this.__closure;return index===selectedIndex.get();}';
    tangon['code'] = golfie;
    var _closure1_slot31 = tangon;
    tangon = {};
    golfie = 'function useMediaViewerSyncerTsx24(result,previous){const{runOnJS,setVisible}=this.__closure;if(previous==null||previous===result)return;runOnJS(setVisible)(result);}';
    tangon['code'] = golfie;
    var _closure1_slot32 = tangon;
    tangon = 11;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/media_viewer/native/useMediaViewerSyncer.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) { // Original name: useMediaViewerSyncer
        zuuluu = argFoo;
        option = zuuluu.sources;
        var _closure2_slot0 = option;
        michal = zuuluu.initialIndex;
        var _closure2_slot1 = michal;
        oscard = zuuluu.onEndReached;
        var _closure2_slot2 = oscard;
        report = zuuluu.onEndReachedThreshold;
        var _closure2_slot3 = report;
        tangon = _closure1_slot4;
        golfie = tangon.useMemo;
        zuuluu = new Array(1);
        zuuluu[0] = michal;
        michal = function() {
            verify = _closure2_slot1;
            entity = {};
            zuuluu = _closure1_slot0;
            report = _closure1_slot2;
            michal = 3;
            oscard = report[michal];
            tangon = undefined;
            golfie = zuuluu.bind(tangon)(oscard);
            oscard = golfie.makeMutable;
            oscard = oscard.bind(golfie)(verify);
            entity['selectedIndex'] = oscard;
            oscard = report[michal];
            golfie = zuuluu.bind(tangon)(oscard);
            oscard = golfie.makeMutable;
            oscard = oscard.bind(golfie)(verify);
            entity['thumbnailsIndex'] = oscard;
            oscard = report[michal];
            golfie = zuuluu.bind(tangon)(oscard);
            oscard = golfie.makeMutable;
            option = 0;
            oscard = oscard.bind(golfie)(option);
            entity['thumbnailsScrolling'] = oscard;
            oscard = report[michal];
            offset = zuuluu.bind(tangon)(oscard);
            golfie = offset.makeMutable;
            oscard = -1;
            oscard = golfie.bind(offset)(oscard);
            entity['thumbnailsAnimateTo'] = oscard;
            oscard = report[michal];
            golfie = zuuluu.bind(tangon)(oscard);
            oscard = golfie.makeMutable;
            oscard = oscard.bind(golfie)(verify);
            entity['viewerPos'] = oscard;
            oscard = report[michal];
            golfie = zuuluu.bind(tangon)(oscard);
            oscard = golfie.makeMutable;
            oscard = oscard.bind(golfie)(option);
            entity['viewerScrolling'] = oscard;
            oscard = report[michal];
            option = zuuluu.bind(tangon)(oscard);
            golfie = option.makeMutable;
            oscard = false;
            oscard = golfie.bind(option)(oscard);
            entity['zoomed'] = oscard;
            michal = report[michal];
            zuuluu = zuuluu.bind(tangon)(michal);
            michal = zuuluu.makeMutable;
            michal = michal.bind(zuuluu)(tangon);
            entity['swipeSource'] = michal;
            return entity;
        };
        golfie = golfie.bind(tangon)(michal, zuuluu);
        var _closure2_slot4 = golfie;
        zuuluu = tangon.useMemo;
        michal = new Array(4);
        michal[0] = option;
        michal[1] = golfie;
        michal[2] = oscard;
        michal[3] = report;
        entity = function() {
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                report = _closure2_slot0;
                tangon = new Array(0);
                michal = report.length;
                romeon = 0;
                michal = romeon < michal;
                yankee = global;
                offset = 2;
                option = 8;
                zuuluu = undefined;
                golfie = 0;
                oscard = 0;
                if(!michal) { _fun00002_ip = 261; continue _fun00001 }
 45:
                foxtra = _closure1_slot0;
                michal = _closure1_slot2;
                michal = michal[option];
                backup = foxtra.bind(zuuluu)(michal);
                foxtra = backup.flattenSource;
                michal = report[oscard];
                michal = foxtra.bind(backup)(michal);
                kiloes = yankee.Math;
                backup = kiloes.max;
                output = yankee.Math;
                sizing = output.min;
                foxtra = michal.width;
                result = _closure1_slot6;
                michal = michal.height;
                michal = result / michal;
                foxtra = foxtra * michal;
                michal = _closure1_slot7;
                foxtra = sizing.bind(output)(foxtra, michal);
                michal = _closure1_slot8;
                foxtra = backup.bind(kiloes)(foxtra, michal);
                michal = _closure1_slot5;
                michal = offset * michal;
                michal = foxtra + michal;
                foxtra = golfie + michal;
                kiloes = 0;
                if(!(kiloes !== oscard)) { _fun00002_ip = 218; continue _fun00001 }
 163:
                sizing = yankee.Math;
                backup = sizing.floor;
                michal = tangon[romeon];
                output = michal.end;
                michal = tangon[romeon];
                michal = michal.start;
                output = output - michal;
                michal = foxtra - golfie;
                michal = michal - output;
                michal = michal / offset;
                michal = golfie + michal;
                kiloes = backup.bind(sizing)(michal);
 218:
                backup = tangon.push;
                michal = {};
                michal['start'] = golfie;
                michal['end'] = foxtra;
                michal['scrollStart'] = kiloes;
                michal = backup.bind(tangon)(michal);
                oscard = oscard + 1;
                michal = report.length;
                golfie = foxtra;
                if(oscard < michal) { _fun00002_ip = 45; continue _fun00001 }
 261:
                michal = {};
                michal['sources'] = report;
                report = _closure2_slot4;
                michal['animProps'] = report;
                michal['thumbnailScrollPositions'] = tangon;
                tangon = _closure2_slot2;
                michal['onEndReached'] = tangon;
                entity = _closure2_slot3;
                michal['onEndReachedThreshold'] = entity;
                entity = function(argFoo) { // Original name: makeMediaViewerSyncer
                    _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                        michal = argFoo;
                        golfie = michal.sources;
                        var _closure4_slot0 = golfie;
                        entity = michal.animProps;
                        report = michal.thumbnailScrollPositions;
                        var _closure4_slot1 = report;
                        zuuluu = michal.onEndReached;
                        michal = michal.onEndReachedThreshold;
                        option = entity.selectedIndex;
                        var _closure4_slot2 = option;
                        oscard = entity.thumbnailsIndex;
                        var _closure4_slot3 = oscard;
                        oscard = entity.thumbnailsScrolling;
                        var _closure4_slot4 = oscard;
                        oscard = entity.thumbnailsAnimateTo;
                        var _closure4_slot5 = oscard;
                        oscard = entity.viewerPos;
                        var _closure4_slot6 = oscard;
                        oscard = entity.viewerScrolling;
                        var _closure4_slot7 = oscard;
                        oscard = entity.zoomed;
                        var _closure4_slot8 = oscard;
                        entity = entity.swipeSource;
                        var _closure4_slot9 = entity;
                        verify = report.length;
                        entity = 0;
                        if(!(verify > entity)) { _fun00004_ip = 152; continue _fun00003 }
 134:
                        verify = report[entity];
                        verify = verify.end;
                        entity = report[entity];
                        entity = entity.start;
 152:
                        entity = {};
                        entity['index'] = option;
                        entity['sources'] = golfie;
                        entity['zoomed'] = oscard;
                        entity['thumbnailScrollPositions'] = report;
                        report = false;
                        entity['variableWidthThumbnailsEnabled'] = report;
                        report = function(argFoo, argBar) { // Original name: useThumbnailsProps
                            verify = argFoo;
                            vacuum = argBar;
                            var _closure5_slot0 = verify;
                            var _closure5_slot1 = vacuum;
                            backup = _closure1_slot0;
                            sizing = _closure1_slot2;
                            entity = 3;
                            zuuluu = sizing[entity];
                            option = undefined;
                            tangon = backup.bind(option)(zuuluu);
                            zuuluu = tangon.useAnimatedRef;
                            foxtra = zuuluu.bind(tangon)();
                            var _closure5_slot2 = foxtra;
                            oscard = _closure1_slot1;
                            update = 4;
                            zuuluu = sizing[update];
                            zuuluu = oscard.bind(option)(zuuluu);
                            zuuluu = zuuluu.bind(option)();
                            tangon = zuuluu.width;
                            zuuluu = zuuluu.height;
                            report = 5;
                            report = sizing[report];
                            report = oscard.bind(option)(report);
                            report = report.bind(option)();
                            ctrled = function() { // Original name: onSelectedIndexChange
                                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                                    zuuluu = _closure4_slot9;
                                    michal = zuuluu.get;
                                    zuuluu = michal.bind(zuuluu)();
                                    michal = 'thumbnails';
                                    if(!(michal !== zuuluu)) { _fun00006_ip = 108; continue _fun00005 }
 26:
                                    michal = _closure4_slot9;
                                    entity = michal.get;
                                    michal = entity.bind(michal)();
                                    entity = 'viewer';
                                    if(!(entity === michal)) { _fun00006_ip = 165; continue _fun00005 }
 49:
                                    report = _closure1_slot0;
                                    oscard = _closure1_slot2;
                                    entity = 6;
                                    michal = oscard[entity];
                                    tangon = undefined;
                                    zuuluu = report.bind(tangon)(michal);
                                    michal = zuuluu.incrementMediaViewerAction;
                                    entity = oscard[entity];
                                    entity = report.bind(tangon)(entity);
                                    entity = entity.IncrementableMediaViewerActions;
                                    entity = entity.VIEWER_SWIPE;
                                    entity = michal.bind(zuuluu)(entity);
                                    _fun00006_ip = 165; continue _fun00005;
 108:
                                    report = _closure1_slot0;
                                    oscard = _closure1_slot2;
                                    entity = 6;
                                    michal = oscard[entity];
                                    tangon = undefined;
                                    zuuluu = report.bind(tangon)(michal);
                                    michal = zuuluu.incrementMediaViewerAction;
                                    entity = oscard[entity];
                                    entity = report.bind(tangon)(entity);
                                    entity = entity.IncrementableMediaViewerActions;
                                    entity = entity.THUMBNAIL_SWIPE;
                                    entity = michal.bind(zuuluu)(entity);
 165:
                                    report = _closure1_slot0;
                                    oscard = _closure1_slot2;
                                    michal = 6;
                                    zuuluu = oscard[michal];
                                    entity = undefined;
                                    tangon = report.bind(entity)(zuuluu);
                                    zuuluu = tangon.incrementMediaViewerAction;
                                    michal = oscard[michal];
                                    michal = report.bind(entity)(michal);
                                    michal = michal.IncrementableMediaViewerActions;
                                    michal = michal.SELECTED_ITEM_CHANGE;
                                    michal = zuuluu.bind(tangon)(michal);
                                    return entity;
                                }
                            };
                            var _closure5_slot3 = ctrled;
                            oscard = sizing[entity];
                            yankee = backup.bind(option)(oscard);
                            golfie = yankee.useAnimatedScrollHandler;
                            oscard = {};
                            romeon = function() { // Original name: V
                                tangon = _closure4_slot4;
                                zuuluu = tangon.set;
                                michal = tangon.get;
                                report = michal.bind(tangon)();
                                michal = 2;
                                michal = michal | report;
                                michal = zuuluu.bind(tangon)(michal);
                                zuuluu = _closure4_slot9;
                                michal = zuuluu.set;
                                entity = 'thumbnails';
                                entity = michal.bind(zuuluu)(entity);
                                entity = undefined;
                                return entity;
                            };
                            result = {};
                            record = _closure4_slot4;
                            result['thumbnailsScrolling'] = record;
                            offset = 2;
                            result['SCROLLING_DRAG'] = offset;
                            source = _closure4_slot9;
                            result['swipeSource'] = source;
                            romeon['__closure'] = result;
                            result = 16224520186325.0;
                            romeon['__workletHash'] = result;
                            result = _closure1_slot10;
                            romeon['__initData'] = result;
                            oscard['onBeginDrag'] = romeon;
                            romeon = function() { // Original name: H
                                zuuluu = _closure4_slot4;
                                michal = zuuluu.set;
                                entity = zuuluu.get;
                                tangon = entity.bind(zuuluu)();
                                entity = -3;
                                entity = entity & tangon;
                                entity = michal.bind(zuuluu)(entity);
                                entity = undefined;
                                return entity;
                            };
                            result = {};
                            result['thumbnailsScrolling'] = record;
                            result['SCROLLING_DRAG'] = offset;
                            romeon['__closure'] = result;
                            result = 5779899826871.0;
                            romeon['__workletHash'] = result;
                            result = _closure1_slot11;
                            romeon['__initData'] = result;
                            oscard['onEndDrag'] = romeon;
                            romeon = function(argFoo) { // Original name: D
                                _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                                    entity = argFoo;
                                    entity = entity.contentOffset;
                                    zuuluu = entity.x;
                                    entity = _closure5_slot0;
                                    verify = zuuluu / entity;
                                    tangon = _closure4_slot9;
                                    zuuluu = tangon.get;
                                    tangon = zuuluu.bind(tangon)();
                                    zuuluu = 'thumbnails';
                                    if(!(zuuluu !== tangon)) { _fun00008_ip = 104; continue _fun00007 }
 51:
                                    zuuluu = global;
                                    report = zuuluu.Math;
                                    tangon = report.abs;
                                    oscard = zuuluu.Math;
                                    zuuluu = oscard.round;
                                    zuuluu = zuuluu.bind(oscard)(verify);
                                    zuuluu = zuuluu - verify;
                                    tangon = tangon.bind(report)(zuuluu);
                                    zuuluu = 0.01;
                                    if(!(tangon < zuuluu)) { _fun00008_ip = 176; continue _fun00007 }
 104:
                                    zuuluu = global;
                                    oscard = zuuluu.Math;
                                    report = oscard.max;
                                    option = zuuluu.Math;
                                    golfie = option.min;
                                    tangon = zuuluu.Math;
                                    zuuluu = tangon.round;
                                    tangon = zuuluu.bind(tangon)(verify);
                                    zuuluu = _closure5_slot1;
                                    tangon = golfie.bind(option)(tangon, zuuluu);
                                    zuuluu = 0;
                                    report = report.bind(oscard)(zuuluu, tangon);
                                    tangon = _closure4_slot3;
                                    zuuluu = tangon.set;
                                    zuuluu = zuuluu.bind(tangon)(report);
 176:
                                    tangon = _closure4_slot5;
                                    zuuluu = tangon.get;
                                    zuuluu = zuuluu.bind(tangon)();
                                    report = 0;
                                    if(!(!(zuuluu >= report))) { _fun00008_ip = 346; continue _fun00007 }
 198:
                                    tangon = _closure4_slot7;
                                    zuuluu = tangon.get;
                                    zuuluu = zuuluu.bind(tangon)();
                                    zuuluu = report !== zuuluu;
                                    if(zuuluu) { _fun00008_ip = 235; continue _fun00007 }
 218:
                                    oscard = _closure4_slot4;
                                    tangon = oscard.get;
                                    tangon = tangon.bind(oscard)();
                                    zuuluu = report !== tangon;
 235:
                                    if(!zuuluu) { _fun00008_ip = 268; continue _fun00007 }
 238:
                                    report = _closure4_slot3;
                                    tangon = report.get;
                                    report = tangon.bind(report)();
                                    oscard = _closure4_slot2;
                                    tangon = oscard.get;
                                    tangon = tangon.bind(oscard)();
                                    zuuluu = report !== tangon;
 268:
                                    if(!zuuluu) { _fun00008_ip = 423; continue _fun00007 }
 274:
                                    report = _closure4_slot2;
                                    tangon = report.set;
                                    oscard = _closure4_slot3;
                                    zuuluu = oscard.get;
                                    zuuluu = zuuluu.bind(oscard)();
                                    zuuluu = tangon.bind(report)(zuuluu);
                                    report = _closure1_slot0;
                                    tangon = _closure1_slot2;
                                    zuuluu = 3;
                                    tangon = tangon[zuuluu];
                                    zuuluu = undefined;
                                    report = report.bind(zuuluu)(tangon);
                                    tangon = report.runOnJS;
                                    michal = _closure5_slot3;
                                    michal = tangon.bind(report)(michal);
                                    michal = michal.bind(zuuluu)();
                                    _fun00008_ip = 423; continue _fun00007;
 346:
                                    zuuluu = _closure4_slot3;
                                    michal = zuuluu.get;
                                    zuuluu = michal.bind(zuuluu)();
                                    tangon = _closure4_slot5;
                                    michal = tangon.get;
                                    michal = michal.bind(tangon)();
                                    if(!(zuuluu === michal)) { _fun00008_ip = 423; continue _fun00007 }
 376:
                                    tangon = _closure4_slot5;
                                    zuuluu = tangon.set;
                                    michal = -1;
                                    michal = zuuluu.bind(tangon)(michal);
                                    zuuluu = _closure4_slot2;
                                    michal = zuuluu.set;
                                    tangon = _closure4_slot3;
                                    entity = tangon.get;
                                    entity = entity.bind(tangon)();
                                    entity = michal.bind(zuuluu)(entity);
 423:
                                    entity = undefined;
                                    return entity;
                                }
                            };
                            result = {};
                            sequen = false;
                            result['variableWidthThumbnailsEnabled'] = sequen;
                            echoed = _closure4_slot1;
                            result['thumbnailScrollPositions'] = echoed;
                            result['thumbnailSize'] = verify;
                            result['swipeSource'] = source;
                            result['maxIndex'] = vacuum;
                            config = _closure4_slot3;
                            result['thumbnailsIndex'] = config;
                            cntext = _closure4_slot5;
                            result['thumbnailsAnimateTo'] = cntext;
                            vacuum = _closure4_slot2;
                            result['selectedIndex'] = vacuum;
                            vacuum = _closure4_slot7;
                            result['viewerScrolling'] = vacuum;
                            result['thumbnailsScrolling'] = record;
                            papara = sizing[entity];
                            papara = backup.bind(option)(papara);
                            papara = papara.runOnJS;
                            result['runOnJS'] = papara;
                            result['onSelectedIndexChange'] = ctrled;
                            romeon['__closure'] = result;
                            result = 10605529664479.0;
                            romeon['__workletHash'] = result;
                            result = _closure1_slot12;
                            romeon['__initData'] = result;
                            oscard['onScroll'] = romeon;
                            romeon = function() { // Original name: N
                                tangon = _closure4_slot4;
                                zuuluu = tangon.set;
                                michal = tangon.get;
                                report = michal.bind(tangon)();
                                michal = 4;
                                michal = michal | report;
                                michal = zuuluu.bind(tangon)(michal);
                                zuuluu = _closure4_slot9;
                                michal = zuuluu.set;
                                entity = 'thumbnails';
                                entity = michal.bind(zuuluu)(entity);
                                entity = undefined;
                                return entity;
                            };
                            result = {};
                            result['thumbnailsScrolling'] = record;
                            result['SCROLLING_MOMENTUM'] = update;
                            result['swipeSource'] = source;
                            romeon['__closure'] = result;
                            result = 4138169755088.0;
                            romeon['__workletHash'] = result;
                            result = _closure1_slot13;
                            romeon['__initData'] = result;
                            oscard['onMomentumBegin'] = romeon;
                            romeon = function() { // Original name: L
                                zuuluu = _closure4_slot4;
                                michal = zuuluu.set;
                                entity = zuuluu.get;
                                tangon = entity.bind(zuuluu)();
                                entity = -5;
                                entity = entity & tangon;
                                entity = michal.bind(zuuluu)(entity);
                                entity = undefined;
                                return entity;
                            };
                            result = {};
                            result['thumbnailsScrolling'] = record;
                            result['SCROLLING_MOMENTUM'] = update;
                            romeon['__closure'] = result;
                            result = 1471443652144.0;
                            romeon['__workletHash'] = result;
                            result = _closure1_slot14;
                            romeon['__initData'] = result;
                            oscard['onMomentumEnd'] = romeon;
                            golfie = golfie.bind(yankee)(oscard);
                            update = _closure1_slot4;
                            romeon = update.useCallback;
                            yankee = function(argFoo) {
                                _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                                    zuuluu = _closure4_slot8;
                                    michal = zuuluu.get;
                                    michal = michal.bind(zuuluu)();
                                    if(michal) { _fun00010_ip = 56; continue _fun00009 }
 19:
                                    tangon = _closure4_slot5;
                                    zuuluu = tangon.set;
                                    michal = argFoo;
                                    michal = zuuluu.bind(tangon)(michal);
                                    zuuluu = _closure4_slot9;
                                    michal = zuuluu.set;
                                    entity = 'thumbnails';
                                    entity = michal.bind(zuuluu)(entity);
 56:
                                    entity = undefined;
                                    return entity;
                                }
                            };
                            oscard = new Array(0);
                            oscard = romeon.bind(update)(yankee, oscard);
                            result = update.useCallback;
                            romeon = new Array(1);
                            romeon[0] = foxtra;
                            yankee = function(argFoo) {
                                michal = _closure4_slot1;
                                entity = argFoo;
                                entity = michal[entity];
                                offset = entity.scrollStart;
                                zuuluu = _closure1_slot0;
                                michal = _closure1_slot2;
                                entity = 3;
                                michal = michal[entity];
                                entity = undefined;
                                oscard = zuuluu.bind(entity)(michal);
                                report = oscard.scrollTo;
                                yankee = _closure5_slot2;
                                verify = 0;
                                option = true;
                                romeon = oscard;
                                michal = romeon[report](yankee, offset, verify, option, golfie);
                                return entity;
                            };
                            ctrled = result.bind(update)(yankee, romeon);
                            yankee = sizing[entity];
                            result = backup.bind(option)(yankee);
                            romeon = result.useDerivedValue;
                            yankee = function() { // Original name: P
                                _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                                    zuuluu = _closure4_slot5;
                                    entity = zuuluu.get;
                                    entity = entity.bind(zuuluu)();
                                    oscard = 0;
                                    if(!(!(entity < oscard))) { _fun00012_ip = 92; continue _fun00011 }
 22:
                                    tangon = _closure1_slot0;
                                    zuuluu = _closure1_slot2;
                                    entity = 3;
                                    zuuluu = zuuluu[entity];
                                    entity = undefined;
                                    report = tangon.bind(entity)(zuuluu);
                                    tangon = report.scrollTo;
                                    yankee = _closure5_slot2;
                                    golfie = _closure4_slot5;
                                    michal = golfie.get;
                                    michal = michal.bind(golfie)();
                                    entity = _closure5_slot0;
                                    offset = michal * entity;
                                    option = true;
                                    romeon = report;
                                    verify = 0;
                                    entity = romeon[tangon](yankee, offset, verify, option, golfie);
 92:
                                    entity = undefined;
                                    return entity;
                                }
                            };
                            source = {};
                            source['thumbnailsAnimateTo'] = cntext;
                            source['variableWidthThumbnailsEnabled'] = sequen;
                            cntext = sizing[entity];
                            cntext = backup.bind(option)(cntext);
                            cntext = cntext.runOnJS;
                            source['runOnJS'] = cntext;
                            source['scrollVarWidthThumbnails'] = ctrled;
                            ctrled = sizing[entity];
                            ctrled = backup.bind(option)(ctrled);
                            ctrled = ctrled.scrollTo;
                            source['scrollTo'] = ctrled;
                            source['ref'] = foxtra;
                            source['thumbnailSize'] = verify;
                            yankee['__closure'] = source;
                            source = 1697086875584.0;
                            yankee['__workletHash'] = source;
                            source = _closure1_slot15;
                            yankee['__initData'] = source;
                            yankee = romeon.bind(result)(yankee);
                            result = update.useCallback;
                            romeon = new Array(1);
                            romeon[0] = foxtra;
                            yankee = function(argFoo) {
                                zuuluu = _closure1_slot0;
                                tangon = _closure1_slot2;
                                entity = 7;
                                michal = tangon[entity];
                                entity = undefined;
                                golfie = zuuluu.bind(entity)(michal);
                                oscard = golfie.lerpVarWidthThumbnailScrollBounds;
                                report = _closure4_slot1;
                                michal = argFoo;
                                offset = oscard.bind(golfie)(report, michal);
                                michal = 3;
                                michal = tangon[michal];
                                oscard = zuuluu.bind(entity)(michal);
                                report = oscard.scrollTo;
                                yankee = _closure5_slot2;
                                verify = 0;
                                option = false;
                                romeon = oscard;
                                michal = romeon[report](yankee, offset, verify, option, golfie);
                                return entity;
                            };
                            ctrled = result.bind(update)(yankee, romeon);
                            yankee = sizing[entity];
                            result = backup.bind(option)(yankee);
                            romeon = result.useDerivedValue;
                            yankee = function() { // Original name: Z
                                _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                                    zuuluu = _closure4_slot7;
                                    entity = zuuluu.get;
                                    entity = entity.bind(zuuluu)();
                                    oscard = 0;
                                    entity = oscard !== entity;
                                    if(!entity) { _fun00014_ip = 55; continue _fun00013 }
 25:
                                    tangon = _closure4_slot3;
                                    zuuluu = tangon.get;
                                    tangon = zuuluu.bind(tangon)();
                                    report = _closure4_slot6;
                                    zuuluu = report.get;
                                    zuuluu = zuuluu.bind(report)();
                                    entity = tangon !== zuuluu;
 55:
                                    if(!entity) { _fun00014_ip = 128; continue _fun00013 }
 58:
                                    tangon = _closure1_slot0;
                                    zuuluu = _closure1_slot2;
                                    entity = 3;
                                    zuuluu = zuuluu[entity];
                                    entity = undefined;
                                    report = tangon.bind(entity)(zuuluu);
                                    tangon = report.scrollTo;
                                    yankee = _closure5_slot2;
                                    golfie = _closure4_slot6;
                                    michal = golfie.get;
                                    michal = michal.bind(golfie)();
                                    entity = _closure5_slot0;
                                    offset = michal * entity;
                                    option = false;
                                    romeon = report;
                                    verify = 0;
                                    entity = romeon[tangon](yankee, offset, verify, option, golfie);
 128:
                                    entity = undefined;
                                    return entity;
                                }
                            };
                            source = {};
                            source['viewerScrolling'] = vacuum;
                            source['thumbnailsIndex'] = config;
                            config = _closure4_slot6;
                            source['viewerPos'] = config;
                            source['variableWidthThumbnailsEnabled'] = sequen;
                            sequen = sizing[entity];
                            sequen = backup.bind(option)(sequen);
                            sequen = sequen.runOnJS;
                            source['runOnJS'] = sequen;
                            source['lerpScrollVarWidthThumbnails'] = ctrled;
                            ctrled = sizing[entity];
                            ctrled = backup.bind(option)(ctrled);
                            ctrled = ctrled.scrollTo;
                            source['scrollTo'] = ctrled;
                            source['ref'] = foxtra;
                            source['thumbnailSize'] = verify;
                            yankee['__closure'] = source;
                            source = 10477949154269.0;
                            yankee['__workletHash'] = source;
                            source = _closure1_slot16;
                            yankee['__initData'] = source;
                            yankee = romeon.bind(result)(yankee);
                            result = _closure4_slot0;
                            romeon = result.map;
                            yankee = function(argFoo, argBar) {
                                entity = argBar;
                                return entity;
                            };
                            sequen = romeon.bind(result)(yankee);
                            var _closure5_slot4 = sequen;
                            romeon = result.map;
                            yankee = function(argFoo) {
                                tangon = _closure1_slot0;
                                zuuluu = _closure1_slot2;
                                entity = 8;
                                zuuluu = zuuluu[entity];
                                entity = undefined;
                                tangon = tangon.bind(entity)(zuuluu);
                                zuuluu = tangon.flattenSource;
                                entity = argFoo;
                                entity = zuuluu.bind(tangon)(entity);
                                report = global;
                                tangon = report.Math;
                                zuuluu = tangon.max;
                                golfie = report.Math;
                                oscard = golfie.min;
                                report = entity.width;
                                option = _closure1_slot6;
                                entity = entity.height;
                                entity = option / entity;
                                report = report * entity;
                                entity = _closure1_slot7;
                                entity = oscard.bind(golfie)(report, entity);
                                michal = _closure1_slot8;
                                entity = zuuluu.bind(tangon)(entity, michal);
                                michal = entity - michal;
                                entity = 2;
                                entity = michal / entity;
                                return entity;
                            };
                            ctrled = romeon.bind(result)(yankee);
                            var _closure5_slot5 = ctrled;
                            yankee = sizing[entity];
                            result = backup.bind(option)(yankee);
                            romeon = result.useDerivedValue;
                            yankee = function() { // Original name: ee
                                _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                                    zuuluu = _closure4_slot4;
                                    entity = zuuluu.get;
                                    zuuluu = entity.bind(zuuluu)();
                                    entity = 0;
                                    zuuluu = zuuluu > entity;
                                    if(zuuluu) { _fun00016_ip = 94; continue _fun00015 }
 25:
                                    report = _closure1_slot0;
                                    tangon = _closure1_slot2;
                                    zuuluu = 3;
                                    tangon = tangon[zuuluu];
                                    zuuluu = undefined;
                                    golfie = report.bind(zuuluu)(tangon);
                                    oscard = golfie.interpolate;
                                    zuuluu = _closure4_slot6;
                                    michal = zuuluu.get;
                                    yankee = michal.bind(zuuluu)();
                                    offset = _closure5_slot4;
                                    verify = _closure5_slot5;
                                    option = 'clamp';
                                    romeon = golfie;
                                    michal = romeon[oscard](yankee, offset, verify, option, golfie);
                                    entity = -michal;
 94:
                                    return entity;
                                }
                            };
                            source = {};
                            source['thumbnailsScrolling'] = record;
                            record = sizing[entity];
                            record = backup.bind(option)(record);
                            record = record.interpolate;
                            source['interpolate'] = record;
                            source['viewerPos'] = config;
                            source['interpolateInput'] = sequen;
                            source['interpolateOutput'] = ctrled;
                            yankee['__closure'] = source;
                            source = 10097839523885.0;
                            yankee['__workletHash'] = source;
                            source = _closure1_slot17;
                            yankee['__initData'] = source;
                            ctrled = romeon.bind(result)(yankee);
                            var _closure5_slot6 = ctrled;
                            yankee = tangon - verify;
                            romeon = yankee / offset;
                            yankee = report.left;
                            yankee = romeon - yankee;
                            var _closure5_slot7 = yankee;
                            romeon = sizing[entity];
                            sequen = backup.bind(option)(romeon);
                            result = sequen.useAnimatedStyle;
                            romeon = function() { // Original name: te
                                _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                                    entity = {};
                                    zuuluu = _closure4_slot7;
                                    michal = zuuluu.get;
                                    zuuluu = michal.bind(zuuluu)();
                                    michal = 0;
                                    if(!(!(zuuluu > michal))) { _fun00018_ip = 95; continue _fun00017 }
 24:
                                    tangon = _closure1_slot0;
                                    zuuluu = _closure1_slot2;
                                    michal = 9;
                                    zuuluu = zuuluu[michal];
                                    michal = undefined;
                                    report = tangon.bind(michal)(zuuluu);
                                    tangon = report.withSpring;
                                    zuuluu = _closure5_slot7;
                                    oscard = _closure5_slot6;
                                    michal = oscard.get;
                                    michal = michal.bind(oscard)();
                                    zuuluu = zuuluu + michal;
                                    michal = {};
                                    oscard = true;
                                    michal['overshootClamping'] = oscard;
                                    michal = tangon.bind(report)(zuuluu, michal);
                                    _fun00018_ip = 119; continue _fun00017;
 95:
                                    tangon = _closure5_slot7;
                                    report = _closure5_slot6;
                                    zuuluu = report.get;
                                    zuuluu = zuuluu.bind(report)();
                                    michal = tangon + zuuluu;
 119:
                                    entity['width'] = michal;
                                    return entity;
                                }
                            };
                            config = {};
                            config['viewerScrolling'] = vacuum;
                            config['headerBufferSize'] = yankee;
                            config['margin'] = ctrled;
                            source = 9;
                            record = sizing[source];
                            record = backup.bind(option)(record);
                            record = record.withSpring;
                            config['withSpring'] = record;
                            romeon['__closure'] = config;
                            config = 11328769587377.0;
                            romeon['__workletHash'] = config;
                            config = _closure1_slot18;
                            romeon['__initData'] = config;
                            romeon = result.bind(sequen)(romeon);
                            sequen = echoed.length;
                            result = 1;
                            result = sequen - result;
                            result = echoed[result];
                            verify = tangon - verify;
                            verify = verify / offset;
                            report = report.right;
                            verify = verify - report;
                            var _closure5_slot8 = verify;
                            report = sizing[entity];
                            result = backup.bind(option)(report);
                            offset = result.useAnimatedStyle;
                            report = function() { // Original name: ie
                                _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
                                    entity = {};
                                    zuuluu = _closure4_slot7;
                                    michal = zuuluu.get;
                                    zuuluu = michal.bind(zuuluu)();
                                    michal = 0;
                                    if(!(!(zuuluu > michal))) { _fun00020_ip = 95; continue _fun00019 }
 24:
                                    tangon = _closure1_slot0;
                                    zuuluu = _closure1_slot2;
                                    michal = 9;
                                    zuuluu = zuuluu[michal];
                                    michal = undefined;
                                    report = tangon.bind(michal)(zuuluu);
                                    tangon = report.withSpring;
                                    zuuluu = _closure5_slot8;
                                    oscard = _closure5_slot6;
                                    michal = oscard.get;
                                    michal = michal.bind(oscard)();
                                    zuuluu = zuuluu + michal;
                                    michal = {};
                                    oscard = true;
                                    michal['overshootClamping'] = oscard;
                                    michal = tangon.bind(report)(zuuluu, michal);
                                    _fun00020_ip = 119; continue _fun00019;
 95:
                                    tangon = _closure5_slot8;
                                    report = _closure5_slot6;
                                    zuuluu = report.get;
                                    zuuluu = zuuluu.bind(report)();
                                    michal = tangon + zuuluu;
 119:
                                    entity['width'] = michal;
                                    return entity;
                                }
                            };
                            echoed = {};
                            echoed['viewerScrolling'] = vacuum;
                            echoed['footerBufferSize'] = verify;
                            echoed['margin'] = ctrled;
                            source = sizing[source];
                            source = backup.bind(option)(source);
                            source = source.withSpring;
                            echoed['withSpring'] = source;
                            report['__closure'] = echoed;
                            echoed = 10532164558483.0;
                            report['__workletHash'] = echoed;
                            echoed = _closure1_slot19;
                            report['__initData'] = echoed;
                            offset = offset.bind(result)(report);
                            echoed = update.useCallback;
                            result = function(argFoo, argBar) {
                                zuuluu = argFoo;
                                kiloes = argBar;
                                var _closure6_slot0 = kiloes;
                                offset = _closure1_slot0;
                                yankee = _closure1_slot2;
                                michal = 3;
                                report = yankee[michal];
                                verify = undefined;
                                golfie = offset.bind(verify)(report);
                                oscard = golfie.useDerivedValue;
                                report = function() { // Original name: n
                                    zuuluu = _closure1_slot0;
                                    michal = _closure1_slot2;
                                    entity = 3;
                                    michal = michal[entity];
                                    entity = undefined;
                                    oscard = zuuluu.bind(entity)(michal);
                                    report = oscard.interpolate;
                                    michal = _closure4_slot6;
                                    entity = michal.get;
                                    yankee = entity.bind(michal)();
                                    michal = _closure6_slot0;
                                    entity = 1;
                                    golfie = michal - entity;
                                    zuuluu = new Array(3);
                                    zuuluu[0] = golfie;
                                    zuuluu[1] = michal;
                                    entity = michal + entity;
                                    zuuluu[2] = entity;
                                    verify = [0.4, 1, 0.4];
                                    option = 'clamp';
                                    romeon = oscard;
                                    offset = zuuluu;
                                    entity = romeon[report](yankee, offset, verify, option, golfie);
                                    return entity;
                                };
                                option = {};
                                romeon = yankee[michal];
                                romeon = offset.bind(verify)(romeon);
                                romeon = romeon.interpolate;
                                option['interpolate'] = romeon;
                                sizing = _closure4_slot6;
                                option['viewerPos'] = sizing;
                                option['index'] = kiloes;
                                report['__closure'] = option;
                                option = 5784737783661.0;
                                report['__workletHash'] = option;
                                option = _closure1_slot20;
                                report['__initData'] = option;
                                oscard = oscard.bind(golfie)(report);
                                var _closure6_slot1 = oscard;
                                golfie = global;
                                option = golfie.Math;
                                report = option.max;
                                output = golfie.Math;
                                backup = output.min;
                                foxtra = zuuluu.width;
                                golfie = _closure1_slot6;
                                zuuluu = zuuluu.height;
                                zuuluu = golfie / zuuluu;
                                foxtra = foxtra * zuuluu;
                                zuuluu = _closure1_slot7;
                                zuuluu = backup.bind(output)(foxtra, zuuluu);
                                output = _closure1_slot8;
                                backup = report.bind(option)(zuuluu, output);
                                var _closure6_slot2 = backup;
                                zuuluu = yankee[michal];
                                option = offset.bind(verify)(zuuluu);
                                report = option.useDerivedValue;
                                zuuluu = function() { // Original name: l
                                    _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
                                        zuuluu = _closure4_slot4;
                                        entity = zuuluu.get;
                                        zuuluu = entity.bind(zuuluu)();
                                        entity = 0;
                                        if(!(!(zuuluu > entity))) { _fun00022_ip = 146; continue _fun00021 }
 25:
                                        report = _closure1_slot0;
                                        tangon = _closure1_slot2;
                                        zuuluu = 3;
                                        tangon = tangon[zuuluu];
                                        zuuluu = undefined;
                                        oscard = report.bind(zuuluu)(tangon);
                                        report = oscard.interpolate;
                                        zuuluu = _closure4_slot6;
                                        michal = zuuluu.get;
                                        foxtra = michal.bind(zuuluu)();
                                        option = _closure6_slot0;
                                        michal = 1;
                                        verify = option - michal;
                                        zuuluu = new Array(3);
                                        zuuluu[0] = verify;
                                        zuuluu[1] = option;
                                        michal = option + michal;
                                        zuuluu[2] = michal;
                                        entity = _closure1_slot8;
                                        michal = new Array(3);
                                        michal[0] = entity;
                                        golfie = _closure6_slot2;
                                        michal[1] = golfie;
                                        michal[2] = entity;
                                        offset = 'clamp';
                                        backup = oscard;
                                        romeon = zuuluu;
                                        yankee = michal;
                                        entity = backup[report](foxtra, romeon, yankee, offset, verify);
                                        _fun00022_ip = 153; continue _fun00021;
 146:
                                        entity = _closure1_slot8;
 153:
                                        return entity;
                                    }
                                };
                                foxtra = {};
                                result = _closure4_slot4;
                                foxtra['thumbnailsScrolling'] = result;
                                foxtra['THUMBNAIL_MIN_WIDTH'] = output;
                                output = yankee[michal];
                                output = offset.bind(verify)(output);
                                output = output.interpolate;
                                foxtra['interpolate'] = output;
                                foxtra['viewerPos'] = sizing;
                                foxtra['index'] = kiloes;
                                foxtra['sourceWidth'] = backup;
                                zuuluu['__closure'] = foxtra;
                                foxtra = 12440745987072.0;
                                zuuluu['__workletHash'] = foxtra;
                                foxtra = _closure1_slot21;
                                zuuluu['__initData'] = foxtra;
                                option = report.bind(option)(zuuluu);
                                var _closure6_slot3 = option;
                                michal = yankee[michal];
                                zuuluu = offset.bind(verify)(michal);
                                michal = zuuluu.useAnimatedStyle;
                                entity = function() { // Original name: c
                                    _fun00023: for(var _fun00024_ip = 0; ; ) switch(_fun00024_ip) {
 0:
                                        entity = {};
                                        zuuluu = _closure4_slot7;
                                        michal = zuuluu.get;
                                        zuuluu = michal.bind(zuuluu)();
                                        michal = 0;
                                        if(!(!(zuuluu > michal))) { _fun00024_ip = 87; continue _fun00023 }
 24:
                                        tangon = _closure1_slot0;
                                        zuuluu = _closure1_slot2;
                                        michal = 9;
                                        zuuluu = zuuluu[michal];
                                        michal = undefined;
                                        report = tangon.bind(michal)(zuuluu);
                                        tangon = report.withSpring;
                                        zuuluu = _closure6_slot3;
                                        michal = zuuluu.get;
                                        zuuluu = michal.bind(zuuluu)();
                                        michal = {};
                                        oscard = true;
                                        michal['overshootClamping'] = oscard;
                                        michal = tangon.bind(report)(zuuluu, michal);
                                        _fun00024_ip = 103; continue _fun00023;
 87:
                                        tangon = _closure6_slot3;
                                        zuuluu = tangon.get;
                                        michal = zuuluu.bind(tangon)();
 103:
                                        entity['width'] = michal;
                                        michal = _closure1_slot6;
                                        entity['height'] = michal;
                                        zuuluu = _closure6_slot1;
                                        michal = zuuluu.get;
                                        michal = michal.bind(zuuluu)();
                                        entity['opacity'] = michal;
                                        return entity;
                                    }
                                };
                                report = {};
                                romeon = _closure4_slot7;
                                report['viewerScrolling'] = romeon;
                                report['_width'] = option;
                                option = 9;
                                option = yankee[option];
                                option = offset.bind(verify)(option);
                                option = option.withSpring;
                                report['withSpring'] = option;
                                report['THUMBNAIL_HEIGHT'] = golfie;
                                report['opacity'] = oscard;
                                entity['__closure'] = report;
                                report = 513826663139.0;
                                entity['__workletHash'] = report;
                                tangon = _closure1_slot22;
                                entity['__initData'] = tangon;
                                entity = michal.bind(zuuluu)(entity);
                                return entity;
                            };
                            report = new Array(0);
                            report = echoed.bind(update)(result, report);
                            entity = sizing[entity];
                            backup = backup.bind(option)(entity);
                            option = backup.useDerivedValue;
                            entity = function() { // Original name: ne
                                michal = _closure4_slot8;
                                entity = michal.get;
                                entity = entity.bind(michal)();
                                entity = !entity;
                                return entity;
                            };
                            sizing = {};
                            output = _closure4_slot8;
                            sizing['zoomed'] = output;
                            entity['__closure'] = sizing;
                            sizing = 7667674289153.0;
                            entity['__workletHash'] = sizing;
                            kiloes = _closure1_slot23;
                            entity['__initData'] = kiloes;
                            option = option.bind(backup)(entity);
                            entity = {};
                            entity['ref'] = foxtra;
                            entity['headerBufferStyle'] = romeon;
                            entity['headerBufferSize'] = yankee;
                            entity['footerBufferStyle'] = offset;
                            entity['footerBufferSize'] = verify;
                            entity['scrollEnabled'] = option;
                            entity['onScroll'] = golfie;
                            entity['onSelect'] = oscard;
                            entity['useThumbnailStyle'] = report;
                            entity['screenWidth'] = tangon;
                            entity['screenHeight'] = zuuluu;
                            michal = function(argFoo, argBar) { // Original name: itemSize
                                entity = _closure1_slot9;
                                return entity;
                            };
                            entity['itemSize'] = michal;
                            return entity;
                        };
                        entity['useThumbnailsProps'] = report;
                        tangon = function() { // Original name: useViewerProps
                            offset = _closure1_slot0;
                            yankee = _closure1_slot2;
                            zuuluu = 3;
                            michal = yankee[zuuluu];
                            option = undefined;
                            tangon = offset.bind(option)(michal);
                            michal = tangon.useAnimatedRef;
                            report = michal.bind(tangon)();
                            var _closure5_slot0 = report;
                            tangon = _closure1_slot1;
                            backup = 4;
                            michal = yankee[backup];
                            michal = tangon.bind(option)(michal);
                            michal = michal.bind(option)();
                            verify = michal.width;
                            var _closure5_slot1 = verify;
                            michal = michal.height;
                            var _closure5_slot2 = michal;
                            tangon = yankee[zuuluu];
                            romeon = offset.bind(option)(tangon);
                            golfie = romeon.useDerivedValue;
                            tangon = function() { // Original name: n
                                _fun00025: for(var _fun00026_ip = 0; ; ) switch(_fun00026_ip) {
 0:
                                    zuuluu = _closure4_slot5;
                                    entity = zuuluu.get;
                                    zuuluu = entity.bind(zuuluu)();
                                    entity = -1;
                                    if(!(entity !== zuuluu)) { _fun00026_ip = 96; continue _fun00025 }
 26:
                                    tangon = _closure1_slot0;
                                    zuuluu = _closure1_slot2;
                                    entity = 3;
                                    zuuluu = zuuluu[entity];
                                    entity = undefined;
                                    oscard = tangon.bind(entity)(zuuluu);
                                    report = oscard.scrollTo;
                                    offset = _closure5_slot0;
                                    zuuluu = _closure4_slot5;
                                    michal = zuuluu.get;
                                    michal = michal.bind(zuuluu)();
                                    entity = _closure5_slot1;
                                    verify = michal * entity;
                                    option = 0;
                                    golfie = false;
                                    yankee = oscard;
                                    entity = yankee[report](offset, verify, option, golfie, oscard);
 96:
                                    entity = undefined;
                                    return entity;
                                }
                            };
                            foxtra = {};
                            result = _closure4_slot5;
                            foxtra['thumbnailsAnimateTo'] = result;
                            kiloes = yankee[zuuluu];
                            kiloes = offset.bind(option)(kiloes);
                            kiloes = kiloes.scrollTo;
                            foxtra['scrollTo'] = kiloes;
                            foxtra['ref'] = report;
                            foxtra['screenWidth'] = verify;
                            tangon['__closure'] = foxtra;
                            foxtra = 11860326453239.0;
                            tangon['__workletHash'] = foxtra;
                            foxtra = _closure1_slot24;
                            tangon['__initData'] = foxtra;
                            tangon = golfie.bind(romeon)(tangon);
                            tangon = yankee[zuuluu];
                            romeon = offset.bind(option)(tangon);
                            golfie = romeon.useDerivedValue;
                            tangon = function() { // Original name: l
                                _fun00027: for(var _fun00028_ip = 0; ; ) switch(_fun00028_ip) {
 0:
                                    zuuluu = _closure4_slot4;
                                    entity = zuuluu.get;
                                    entity = entity.bind(zuuluu)();
                                    oscard = 0;
                                    entity = oscard === entity;
                                    if(entity) { _fun00028_ip = 42; continue _fun00027 }
 25:
                                    tangon = _closure4_slot7;
                                    zuuluu = tangon.get;
                                    zuuluu = zuuluu.bind(tangon)();
                                    entity = zuuluu > oscard;
 42:
                                    if(entity) { _fun00028_ip = 68; continue _fun00027 }
 45:
                                    tangon = _closure4_slot5;
                                    zuuluu = tangon.get;
                                    tangon = zuuluu.bind(tangon)();
                                    zuuluu = -1;
                                    entity = zuuluu !== tangon;
 68:
                                    if(entity) { _fun00028_ip = 141; continue _fun00027 }
 71:
                                    tangon = _closure1_slot0;
                                    zuuluu = _closure1_slot2;
                                    entity = 3;
                                    zuuluu = zuuluu[entity];
                                    entity = undefined;
                                    report = tangon.bind(entity)(zuuluu);
                                    tangon = report.scrollTo;
                                    yankee = _closure5_slot0;
                                    golfie = _closure4_slot3;
                                    michal = golfie.get;
                                    michal = michal.bind(golfie)();
                                    entity = _closure5_slot1;
                                    offset = michal * entity;
                                    option = false;
                                    romeon = report;
                                    verify = 0;
                                    entity = romeon[tangon](yankee, offset, verify, option, golfie);
 141:
                                    entity = undefined;
                                    return entity;
                                }
                            };
                            foxtra = {};
                            echoed = _closure4_slot4;
                            foxtra['thumbnailsScrolling'] = echoed;
                            kiloes = _closure4_slot7;
                            foxtra['viewerScrolling'] = kiloes;
                            foxtra['thumbnailsAnimateTo'] = result;
                            sizing = yankee[zuuluu];
                            sizing = offset.bind(option)(sizing);
                            sizing = sizing.scrollTo;
                            foxtra['scrollTo'] = sizing;
                            foxtra['ref'] = report;
                            sizing = _closure4_slot3;
                            foxtra['thumbnailsIndex'] = sizing;
                            foxtra['screenWidth'] = verify;
                            tangon['__closure'] = foxtra;
                            foxtra = 16855593341498.0;
                            tangon['__workletHash'] = foxtra;
                            foxtra = _closure1_slot25;
                            tangon['__initData'] = foxtra;
                            tangon = golfie.bind(romeon)(tangon);
                            zuuluu = yankee[zuuluu];
                            golfie = offset.bind(option)(zuuluu);
                            tangon = golfie.useAnimatedScrollHandler;
                            zuuluu = {};
                            romeon = function() { // Original name: w
                                tangon = _closure4_slot7;
                                zuuluu = tangon.set;
                                michal = tangon.get;
                                report = michal.bind(tangon)();
                                michal = 2;
                                michal = michal | report;
                                michal = zuuluu.bind(tangon)(michal);
                                zuuluu = _closure4_slot9;
                                michal = zuuluu.set;
                                entity = 'viewer';
                                entity = michal.bind(zuuluu)(entity);
                                entity = undefined;
                                return entity;
                            };
                            foxtra = {};
                            foxtra['viewerScrolling'] = kiloes;
                            update = 2;
                            foxtra['SCROLLING_DRAG'] = update;
                            sizing = _closure4_slot9;
                            foxtra['swipeSource'] = sizing;
                            romeon['__closure'] = foxtra;
                            foxtra = 1082965969005.0;
                            romeon['__workletHash'] = foxtra;
                            foxtra = _closure1_slot26;
                            romeon['__initData'] = foxtra;
                            zuuluu['onBeginDrag'] = romeon;
                            romeon = function() { // Original name: b
                                zuuluu = _closure4_slot7;
                                michal = zuuluu.set;
                                entity = zuuluu.get;
                                tangon = entity.bind(zuuluu)();
                                entity = -3;
                                entity = entity & tangon;
                                entity = michal.bind(zuuluu)(entity);
                                entity = undefined;
                                return entity;
                            };
                            foxtra = {};
                            foxtra['viewerScrolling'] = kiloes;
                            foxtra['SCROLLING_DRAG'] = update;
                            romeon['__closure'] = foxtra;
                            foxtra = 1722948238280.0;
                            romeon['__workletHash'] = foxtra;
                            foxtra = _closure1_slot27;
                            romeon['__initData'] = foxtra;
                            zuuluu['onEndDrag'] = romeon;
                            romeon = function(argFoo) { // Original name: S
                                _fun00029: for(var _fun00030_ip = 0; ; ) switch(_fun00030_ip) {
 0:
                                    zuuluu = _closure4_slot7;
                                    michal = zuuluu.get;
                                    michal = michal.bind(zuuluu)();
                                    tangon = 0;
                                    michal = tangon === michal;
                                    if(!michal) { _fun00030_ip = 42; continue _fun00029 }
 25:
                                    report = _closure4_slot4;
                                    zuuluu = report.get;
                                    zuuluu = zuuluu.bind(report)();
                                    michal = tangon === zuuluu;
 42:
                                    if(!michal) { _fun00030_ip = 68; continue _fun00029 }
 45:
                                    tangon = _closure4_slot5;
                                    zuuluu = tangon.get;
                                    tangon = zuuluu.bind(tangon)();
                                    zuuluu = -1;
                                    michal = zuuluu === tangon;
 68:
                                    if(michal) { _fun00030_ip = 110; continue _fun00029 }
 71:
                                    zuuluu = _closure4_slot6;
                                    michal = zuuluu.set;
                                    entity = argFoo;
                                    entity = entity.contentOffset;
                                    tangon = entity.x;
                                    entity = _closure5_slot1;
                                    entity = tangon / entity;
                                    entity = michal.bind(zuuluu)(entity);
 110:
                                    entity = undefined;
                                    return entity;
                                }
                            };
                            foxtra = {};
                            foxtra['viewerScrolling'] = kiloes;
                            foxtra['thumbnailsScrolling'] = echoed;
                            foxtra['thumbnailsAnimateTo'] = result;
                            output = _closure4_slot6;
                            foxtra['viewerPos'] = output;
                            foxtra['screenWidth'] = verify;
                            romeon['__closure'] = foxtra;
                            foxtra = 2738090250956.0;
                            romeon['__workletHash'] = foxtra;
                            foxtra = _closure1_slot28;
                            romeon['__initData'] = foxtra;
                            zuuluu['onScroll'] = romeon;
                            romeon = function() { // Original name: _
                                tangon = _closure4_slot7;
                                zuuluu = tangon.set;
                                michal = tangon.get;
                                report = michal.bind(tangon)();
                                michal = 4;
                                michal = michal | report;
                                michal = zuuluu.bind(tangon)(michal);
                                zuuluu = _closure4_slot9;
                                michal = zuuluu.set;
                                entity = 'viewer';
                                entity = michal.bind(zuuluu)(entity);
                                entity = undefined;
                                return entity;
                            };
                            foxtra = {};
                            foxtra['viewerScrolling'] = kiloes;
                            foxtra['SCROLLING_MOMENTUM'] = backup;
                            foxtra['swipeSource'] = sizing;
                            romeon['__closure'] = foxtra;
                            foxtra = 16635271467463.0;
                            romeon['__workletHash'] = foxtra;
                            foxtra = _closure1_slot29;
                            romeon['__initData'] = foxtra;
                            zuuluu['onMomentumBegin'] = romeon;
                            romeon = function() { // Original name: h
                                zuuluu = _closure4_slot7;
                                michal = zuuluu.set;
                                entity = zuuluu.get;
                                tangon = entity.bind(zuuluu)();
                                entity = -5;
                                entity = entity & tangon;
                                entity = michal.bind(zuuluu)(entity);
                                entity = undefined;
                                return entity;
                            };
                            foxtra = {};
                            foxtra['viewerScrolling'] = kiloes;
                            foxtra['SCROLLING_MOMENTUM'] = backup;
                            romeon['__closure'] = foxtra;
                            foxtra = 8806989101472.0;
                            romeon['__workletHash'] = foxtra;
                            foxtra = _closure1_slot30;
                            romeon['__initData'] = foxtra;
                            zuuluu['onMomentumEnd'] = romeon;
                            tangon = tangon.bind(golfie)(zuuluu);
                            zuuluu = 10;
                            golfie = yankee[zuuluu];
                            romeon = offset.bind(option)(golfie);
                            golfie = romeon.useOrientation;
                            golfie = golfie.bind(romeon)();
                            zuuluu = yankee[zuuluu];
                            zuuluu = offset.bind(option)(zuuluu);
                            zuuluu = zuuluu.OrientationType;
                            zuuluu = zuuluu.LANDSCAPE;
                            zuuluu = golfie === zuuluu;
                            var _closure5_slot3 = zuuluu;
                            golfie = _closure1_slot4;
                            option = golfie.useCallback;
                            oscard = new Array(4);
                            oscard[0] = report;
                            oscard[1] = zuuluu;
                            oscard[2] = verify;
                            oscard[3] = michal;
                            zuuluu = function() {
                                _fun00031: for(var _fun00032_ip = 0; ; ) switch(_fun00032_ip) {
 0:
                                    michal = _closure5_slot3;
                                    zuuluu = global;
                                    oscard = zuuluu.Math;
                                    if(michal) { _fun00032_ip = 39; continue _fun00031 }
 18:
                                    tangon = oscard.min;
                                    zuuluu = _closure5_slot1;
                                    michal = _closure5_slot2;
                                    zuuluu = tangon.bind(oscard)(zuuluu, michal);
                                    _fun00032_ip = 58; continue _fun00031;
 39:
                                    report = oscard.max;
                                    tangon = _closure5_slot1;
                                    michal = _closure5_slot2;
                                    zuuluu = report.bind(oscard)(tangon, michal);
 58:
                                    tangon = _closure4_slot2;
                                    michal = tangon.get;
                                    michal = michal.bind(tangon)();
                                    tangon = michal * zuuluu;
                                    entity = _closure5_slot0;
                                    zuuluu = entity.current;
                                    entity = null;
                                    if(!(entity != zuuluu)) { _fun00032_ip = 107; continue _fun00031 }
 93:
                                    michal = zuuluu.scrollTo;
                                    entity = false;
                                    entity = michal.bind(zuuluu)(tangon, entity);
 107:
                                    entity = undefined;
                                    return entity;
                                }
                            };
                            zuuluu = option.bind(golfie)(zuuluu, oscard);
                            option = golfie.useEffect;
                            oscard = new Array(3);
                            oscard[0] = verify;
                            oscard[1] = michal;
                            oscard[2] = report;
                            michal = function() {
                                _fun00033: for(var _fun00034_ip = 0; ; ) switch(_fun00034_ip) {
 0:
                                    entity = _closure5_slot0;
                                    michal = entity.current;
                                    entity = null;
                                    if(!(entity != michal)) { _fun00034_ip = 28; continue _fun00033 }
 18:
                                    entity = michal.reset;
                                    entity = entity.bind(michal)();
 28:
                                    entity = undefined;
                                    return entity;
                                }
                            };
                            michal = option.bind(golfie)(michal, oscard);
                            oscard = golfie.useCallback;
                            michal = function(argFoo) {
                                backup = argFoo;
                                var _closure6_slot0 = backup;
                                tangon = _closure1_slot4;
                                zuuluu = tangon.useState;
                                foxtra = _closure4_slot2;
                                entity = foxtra.get;
                                entity = entity.bind(foxtra)();
                                entity = backup === entity;
                                tangon = zuuluu.bind(tangon)(entity);
                                zuuluu = _closure1_slot3;
                                yankee = undefined;
                                entity = 2;
                                tangon = zuuluu.bind(yankee)(tangon, entity);
                                entity = 0;
                                entity = tangon[entity];
                                zuuluu = 1;
                                option = tangon[zuuluu];
                                var _closure6_slot1 = option;
                                offset = _closure1_slot0;
                                romeon = _closure1_slot2;
                                verify = 3;
                                zuuluu = romeon[verify];
                                report = offset.bind(yankee)(zuuluu);
                                tangon = report.useAnimatedReaction;
                                zuuluu = function() { // Original name: o
                                    michal = _closure6_slot0;
                                    zuuluu = _closure4_slot2;
                                    entity = zuuluu.get;
                                    entity = entity.bind(zuuluu)();
                                    entity = michal === entity;
                                    return entity;
                                };
                                golfie = {};
                                golfie['index'] = backup;
                                golfie['selectedIndex'] = foxtra;
                                zuuluu['__closure'] = golfie;
                                golfie = 16460720517812.0;
                                zuuluu['__workletHash'] = golfie;
                                golfie = _closure1_slot31;
                                zuuluu['__initData'] = golfie;
                                michal = function(argFoo, argBar) { // Original name: l
                                    _fun00035: for(var _fun00036_ip = 0; ; ) switch(_fun00036_ip) {
 0:
                                        zuuluu = argFoo;
                                        michal = argBar;
                                        entity = null;
                                        entity = entity != michal;
                                        if(!entity) { _fun00036_ip = 19; continue _fun00035 }
 15:
                                        entity = michal !== zuuluu;
 19:
                                        if(!entity) { _fun00036_ip = 69; continue _fun00035 }
 22:
                                        tangon = _closure1_slot0;
                                        michal = _closure1_slot2;
                                        entity = 3;
                                        entity = michal[entity];
                                        michal = undefined;
                                        report = tangon.bind(michal)(entity);
                                        tangon = report.runOnJS;
                                        entity = _closure6_slot1;
                                        entity = tangon.bind(report)(entity);
                                        entity = entity.bind(michal)(zuuluu);
 69:
                                        entity = undefined;
                                        return entity;
                                    }
                                };
                                golfie = {};
                                verify = romeon[verify];
                                verify = offset.bind(yankee)(verify);
                                verify = verify.runOnJS;
                                golfie['runOnJS'] = verify;
                                golfie['setVisible'] = option;
                                michal['__closure'] = golfie;
                                golfie = 2991686939184.0;
                                michal['__workletHash'] = golfie;
                                oscard = _closure1_slot32;
                                michal['__initData'] = oscard;
                                michal = tangon.bind(report)(zuuluu, michal);
                                return entity;
                            };
                            entity = new Array(0);
                            michal = oscard.bind(golfie)(michal, entity);
                            entity = {};
                            entity['ref'] = report;
                            entity['onScroll'] = tangon;
                            entity['onContentSizeChange'] = zuuluu;
                            entity['useItemVisible'] = michal;
                            return entity;
                        };
                        entity['useViewerProps'] = tangon;
                        entity['onEndReached'] = zuuluu;
                        entity['onEndReachedThreshold'] = michal;
                        return entity;
                    }
                };
                entity = entity.bind(zuuluu)(michal);
                return entity;
            }
        };
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    zuuluu['useMediaViewerSyncer'] = michal;
    return entity;
})();