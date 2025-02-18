// app/modules/voice_panel/native/controls/utils/createUseAnimatedScrollLock.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    oscard = argBar;
    zuuluu = argFre;
    golfie = argPlu;
    var _closure1_slot0 = oscard;
    var _closure1_slot1 = golfie;
    entity = global;
    option = entity.Object;
    report = option.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = report.bind(option)(zuuluu, entity, tangon);
    entity = 0;
    report = golfie[entity];
    tangon = argCor;
    entity = undefined;
    option = tangon.bind(entity)(report);
    tangon = 1;
    tangon = golfie[tangon];
    report = oscard.bind(entity)(tangon);
    tangon = report.isAndroid;
    tangon = tangon.bind(report)();
    var _closure1_slot2 = tangon;
    report = option.createContext;
    tangon = function() {
        entity = {};
        return entity;
    };
    tangon = report.bind(option)(tangon);
    report = {};
    option = 'function onBeginDrag_createUseAnimatedScrollLockTsx1(_,context){const{isDragScrolling}=this.__closure;context.momentumEndCount=0;isDragScrolling.set(true);}';
    report['code'] = option;
    var _closure1_slot3 = report;
    report = {};
    option = 'function onEndDrag_createUseAnimatedScrollLockTsx2(event){const{isDragScrolling,scrollLocked}=this.__closure;var _event$velocity$y,_event$velocity;isDragScrolling.set(false);if(Math.abs((_event$velocity$y=(_event$velocity=event.velocity)===null||_event$velocity===void 0?void 0:_event$velocity.y)!==null&&_event$velocity$y!==void 0?_event$velocity$y:0)===0){scrollLocked.set(false);}}';
    report['code'] = option;
    var _closure1_slot4 = report;
    report = {};
    option = 'function onMomentumEnd_createUseAnimatedScrollLockTsx3(event,context){const{IS_ANDROID,scrollLocked}=this.__closure;if(IS_ANDROID){var _context$momentumEndC;let count=(_context$momentumEndC=context===null||context===void 0?void 0:context.momentumEndCount)!==null&&_context$momentumEndC!==void 0?_context$momentumEndC:0;count+=1;if(count===3){scrollLocked.set(false);}else if(context!=null){context.momentumEndCount=count;}}else{scrollLocked.set(false);}}';
    report['code'] = option;
    var _closure1_slot5 = report;
    report = {};
    option = 'function onScroll_createUseAnimatedScrollLockTsx4(event){const{isDragScrolling,IS_ANDROID,scrollTo,scrollerRef,scrollOffsetValue,scrollLocked,onScrollHandler,runOnJS,onScrollHandlerWorkletized}=this.__closure;var _onScrollHandlerWorkl;const newScrollPosition=event.contentOffset.y;if(isDragScrolling.get()!==true){let scrollPosition=newScrollPosition;if(IS_ANDROID&&scrollPosition<0){scrollPosition=0;scrollTo(scrollerRef,0,0,false);}scrollOffsetValue.set(scrollPosition);}else{const isUp=newScrollPosition<scrollOffsetValue.get();if(scrollLocked.get()||isUp&&newScrollPosition<=0){if(!scrollLocked.get()){scrollLocked.set(true);}scrollTo(scrollerRef,0,0,false);scrollOffsetValue.set(0);}else{scrollOffsetValue.set(newScrollPosition);}}const{width:width,height:height}=event.layoutMeasurement;const{width:contentWidth,height:contentHeight}=event.contentSize;onScrollHandler!=null&&runOnJS(onScrollHandler)({width:width,height:height,offset:newScrollPosition,contentWidth:contentWidth,contentHeight:contentHeight});(_onScrollHandlerWorkl=onScrollHandlerWorkletized)===null||_onScrollHandlerWorkl===void 0||_onScrollHandlerWorkl({width:width,height:height,offset:newScrollPosition,contentWidth:contentWidth,contentHeight:contentHeight});}';
    report['code'] = option;
    var _closure1_slot6 = report;
    report = {};
    option = 'function createUseAnimatedScrollLockTsx5(){const{scrollLocked}=this.__closure;return{showsVerticalScrollIndicator:!scrollLocked.get()};}';
    report['code'] = option;
    var _closure1_slot7 = report;
    report = 3;
    report = golfie[report];
    golfie = oscard.bind(entity)(report);
    oscard = golfie.fileFinishedImporting;
    report = 'modules/voice_panel/native/controls/utils/createUseAnimatedScrollLock.tsx';
    report = oscard.bind(golfie)(report);
    zuuluu['ControlsGestureScrollLock'] = tangon;
    michal = function(argFoo, argBar, argBaz, argCor) { // Original name: createUseAnimatedScrollLock
        michal = argFoo;
        var _closure2_slot0 = michal;
        michal = argBar;
        var _closure2_slot1 = michal;
        michal = argBaz;
        var _closure2_slot2 = michal;
        michal = argCor;
        var _closure2_slot3 = michal;
        entity = function() {
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                entity = arguments[0];
                option = undefined;
                if(!(entity === option)) { _fun00002_ip = 13; continue _fun00001 }
 11:
                entity = {};
 13:
                output = entity.onScrollHandler;
                var _closure3_slot0 = output;
                sizing = entity.onScrollHandlerWorkletized;
                var _closure3_slot1 = sizing;
                var _closure3_slot2 = option;
                oscard = _closure1_slot0;
                offset = _closure1_slot1;
                report = 2;
                entity = offset[report];
                michal = oscard.bind(option)(entity);
                entity = michal.useAnimatedRef;
                zuuluu = entity.bind(michal)();
                _closure3_slot2 = zuuluu;
                entity = {};
                michal = offset[report];
                foxtra = oscard.bind(option)(michal);
                romeon = foxtra.useAnimatedScrollHandler;
                yankee = {};
                verify = function(argFoo, argBar) { // Original name: w
                    michal = 0;
                    entity = argBar;
                    entity['momentumEndCount'] = michal;
                    zuuluu = _closure2_slot3;
                    michal = zuuluu.set;
                    entity = true;
                    entity = michal.bind(zuuluu)(entity);
                    entity = undefined;
                    return entity;
                };
                backup = {};
                echoed = _closure2_slot3;
                backup['isDragScrolling'] = echoed;
                verify['__closure'] = backup;
                backup = 16433590303176.0;
                verify['__workletHash'] = backup;
                backup = _closure1_slot3;
                verify['__initData'] = backup;
                yankee['onBeginDrag'] = verify;
                backup = function(argFoo) { // Original name: H
                    _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                        zuuluu = _closure2_slot3;
                        entity = zuuluu.set;
                        tangon = false;
                        entity = entity.bind(zuuluu)(tangon);
                        entity = global;
                        golfie = entity.Math;
                        oscard = golfie.abs;
                        entity = argFoo;
                        report = entity.velocity;
                        zuuluu = null;
                        verify = zuuluu == report;
                        entity = undefined;
                        option = undefined;
                        if(verify) { _fun00004_ip = 60; continue _fun00003 }
 55:
                        option = report.y;
 60:
                        verify = zuuluu != option;
                        report = 0;
                        zuuluu = 0;
                        if(!verify) { _fun00004_ip = 74; continue _fun00003 }
 71:
                        zuuluu = option;
 74:
                        zuuluu = oscard.bind(golfie)(zuuluu);
                        if(!(report === zuuluu)) { _fun00004_ip = 97; continue _fun00003 }
 83:
                        zuuluu = _closure2_slot1;
                        michal = zuuluu.set;
                        michal = michal.bind(zuuluu)(tangon);
 97:
                        return entity;
                    }
                };
                kiloes = {};
                kiloes['isDragScrolling'] = echoed;
                verify = _closure2_slot1;
                kiloes['scrollLocked'] = verify;
                backup['__closure'] = kiloes;
                kiloes = 1594981610850.0;
                backup['__workletHash'] = kiloes;
                kiloes = _closure1_slot4;
                backup['__initData'] = kiloes;
                yankee['onEndDrag'] = backup;
                backup = function(argFoo, argBar) { // Original name: D
                    _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                        michal = argBar;
                        entity = _closure1_slot2;
                        if(entity) { _fun00006_ip = 34; continue _fun00005 }
 13:
                        tangon = _closure2_slot1;
                        zuuluu = tangon.set;
                        entity = false;
                        entity = zuuluu.bind(tangon)(entity);
                        _fun00006_ip = 108; continue _fun00005;
 34:
                        zuuluu = null;
                        tangon = zuuluu == michal;
                        entity = undefined;
                        if(tangon) { _fun00006_ip = 51; continue _fun00005 }
 45:
                        entity = michal.momentumEndCount;
 51:
                        report = zuuluu != entity;
                        tangon = 0;
                        if(!report) { _fun00006_ip = 63; continue _fun00005 }
 60:
                        tangon = entity;
 63:
                        entity = 1;
                        entity = tangon + entity;
                        tangon = 3;
                        if(!(tangon !== entity)) { _fun00006_ip = 89; continue _fun00005 }
 77:
                        if(!(zuuluu != michal)) { _fun00006_ip = 108; continue _fun00005 }
 81:
                        michal['momentumEndCount'] = entity;
                        _fun00006_ip = 108; continue _fun00005;
 89:
                        zuuluu = _closure2_slot1;
                        michal = zuuluu.set;
                        entity = false;
                        entity = michal.bind(zuuluu)(entity);
 108:
                        entity = undefined;
                        return entity;
                    }
                };
                kiloes = {};
                result = _closure1_slot2;
                kiloes['IS_ANDROID'] = result;
                kiloes['scrollLocked'] = verify;
                backup['__closure'] = kiloes;
                kiloes = 17525906195822.0;
                backup['__workletHash'] = kiloes;
                kiloes = _closure1_slot5;
                backup['__initData'] = kiloes;
                yankee['onMomentumEnd'] = backup;
                backup = function(argFoo) { // Original name: k
                    _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                        entity = argFoo;
                        michal = entity.contentOffset;
                        report = michal.y;
                        tangon = _closure2_slot3;
                        zuuluu = tangon.get;
                        zuuluu = zuuluu.bind(tangon)();
                        oscard = true;
                        if(!(oscard === zuuluu)) { _fun00008_ip = 199; continue _fun00007 }
 39:
                        tangon = _closure2_slot2;
                        zuuluu = tangon.get;
                        zuuluu = zuuluu.bind(tangon)();
                        zuuluu = report < zuuluu;
                        golfie = _closure2_slot1;
                        tangon = golfie.get;
                        tangon = tangon.bind(golfie)();
                        if(tangon) { _fun00008_ip = 100; continue _fun00007 }
 72:
                        if(!zuuluu) { _fun00008_ip = 81; continue _fun00007 }
 75:
                        zuuluu = 0;
                        if(!(!(report <= zuuluu))) { _fun00008_ip = 100; continue _fun00007 }
 81:
                        tangon = _closure2_slot2;
                        zuuluu = tangon.set;
                        zuuluu = zuuluu.bind(tangon)(report);
                        _fun00008_ip = 285; continue _fun00007;
 100:
                        tangon = _closure2_slot1;
                        zuuluu = tangon.get;
                        zuuluu = zuuluu.bind(tangon)();
                        if(zuuluu) { _fun00008_ip = 130; continue _fun00007 }
 116:
                        tangon = _closure2_slot1;
                        zuuluu = tangon.set;
                        zuuluu = zuuluu.bind(tangon)(oscard);
 130:
                        oscard = _closure1_slot0;
                        tangon = _closure1_slot1;
                        zuuluu = 2;
                        tangon = tangon[zuuluu];
                        zuuluu = undefined;
                        option = oscard.bind(zuuluu)(tangon);
                        golfie = option.scrollTo;
                        kiloes = _closure3_slot2;
                        oscard = 0;
                        romeon = false;
                        sizing = option;
                        backup = 0;
                        foxtra = 0;
                        zuuluu = sizing[golfie](kiloes, backup, foxtra, romeon, yankee);
                        tangon = _closure2_slot2;
                        zuuluu = tangon.set;
                        zuuluu = zuuluu.bind(tangon)(oscard);
                        _fun00008_ip = 285; continue _fun00007;
 199:
                        oscard = _closure1_slot2;
                        if(!oscard) { _fun00008_ip = 215; continue _fun00007 }
 209:
                        tangon = 0;
                        oscard = report < tangon;
 215:
                        tangon = report;
                        if(!oscard) { _fun00008_ip = 271; continue _fun00007 }
 221:
                        golfie = _closure1_slot0;
                        oscard = _closure1_slot1;
                        zuuluu = 2;
                        oscard = oscard[zuuluu];
                        zuuluu = undefined;
                        verify = golfie.bind(zuuluu)(oscard);
                        option = verify.scrollTo;
                        kiloes = _closure3_slot2;
                        romeon = false;
                        sizing = verify;
                        backup = 0;
                        foxtra = 0;
                        oscard = sizing[option](kiloes, backup, foxtra, romeon, yankee);
                        tangon = 0;
 271:
                        zuuluu = _closure2_slot2;
                        michal = zuuluu.set;
                        michal = michal.bind(zuuluu)(tangon);
 285:
                        michal = entity.layoutMeasurement;
                        golfie = michal.width;
                        oscard = michal.height;
                        entity = entity.contentSize;
                        tangon = entity.width;
                        entity = entity.height;
                        zuuluu = _closure3_slot0;
                        option = null;
                        if(!(option != zuuluu)) { _fun00008_ip = 399; continue _fun00007 }
 330:
                        verify = _closure1_slot0;
                        offset = _closure1_slot1;
                        zuuluu = 2;
                        zuuluu = offset[zuuluu];
                        offset = undefined;
                        yankee = verify.bind(offset)(zuuluu);
                        verify = yankee.runOnJS;
                        zuuluu = _closure3_slot0;
                        verify = verify.bind(yankee)(zuuluu);
                        zuuluu = {};
                        zuuluu['width'] = golfie;
                        zuuluu['height'] = oscard;
                        zuuluu['offset'] = report;
                        zuuluu['contentWidth'] = tangon;
                        zuuluu['contentHeight'] = entity;
                        zuuluu = verify.bind(offset)(zuuluu);
 399:
                        zuuluu = _closure3_slot1;
                        if(!(option != zuuluu)) { _fun00008_ip = 443; continue _fun00007 }
 407:
                        zuuluu = _closure3_slot1;
                        michal = {};
                        michal['width'] = golfie;
                        michal['height'] = oscard;
                        michal['offset'] = report;
                        michal['contentWidth'] = tangon;
                        michal['contentHeight'] = entity;
                        entity = undefined;
                        entity = zuuluu.bind(entity)(michal);
 443:
                        entity = undefined;
                        return entity;
                    }
                };
                kiloes = {};
                kiloes['isDragScrolling'] = echoed;
                kiloes['IS_ANDROID'] = result;
                result = offset[report];
                result = oscard.bind(option)(result);
                result = result.scrollTo;
                kiloes['scrollTo'] = result;
                kiloes['scrollerRef'] = zuuluu;
                result = _closure2_slot2;
                kiloes['scrollOffsetValue'] = result;
                kiloes['scrollLocked'] = verify;
                kiloes['onScrollHandler'] = output;
                output = offset[report];
                output = oscard.bind(option)(output);
                output = output.runOnJS;
                kiloes['runOnJS'] = output;
                kiloes['onScrollHandlerWorkletized'] = sizing;
                backup['__closure'] = kiloes;
                kiloes = 13271628494164.0;
                backup['__workletHash'] = kiloes;
                kiloes = _closure1_slot6;
                backup['__initData'] = kiloes;
                yankee['onScroll'] = backup;
                yankee = romeon.bind(foxtra)(yankee);
                entity['onScroll'] = yankee;
                report = offset[report];
                oscard = oscard.bind(option)(report);
                report = oscard.useAnimatedProps;
                tangon = function() { // Original name: L
                    entity = {};
                    zuuluu = _closure2_slot1;
                    michal = zuuluu.get;
                    michal = michal.bind(zuuluu)();
                    michal = !michal;
                    entity['showsVerticalScrollIndicator'] = michal;
                    return entity;
                };
                option = {};
                option['scrollLocked'] = verify;
                tangon['__closure'] = option;
                option = 3670657775473.0;
                tangon['__workletHash'] = option;
                golfie = _closure1_slot7;
                tangon['__initData'] = golfie;
                tangon = report.bind(oscard)(tangon);
                entity['animatedProps'] = tangon;
                entity['scrollerRef'] = zuuluu;
                michal = _closure2_slot0;
                entity['gestureRef'] = michal;
                return entity;
            }
        };
        return entity;
    };
    zuuluu['createUseAnimatedScrollLock'] = michal;
    return entity;
})();