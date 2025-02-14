// app/modules/voice_panel/native/controls/utils/createUseAnimatedScrollLock.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    oscar = argBar;
    zulu = argFred;
    golf = argPlugh;
    var _closure1_slot0 = oscar;
    var _closure1_slot1 = golf;
    entity = global;
    options = entity.Object;
    report = options.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = report.bind(options)(zulu, entity, tango);
    entity = 0;
    report = golf[entity];
    tango = argCorge;
    entity = undefined;
    options = tango.bind(entity)(report);
    tango = 1;
    tango = golf[tango];
    report = oscar.bind(entity)(tango);
    tango = report.isAndroid;
    tango = tango.bind(report)();
    var _closure1_slot2 = tango;
    report = options.createContext;
    tango = function() {
        entity = {};
        return entity;
    };
    tango = report.bind(options)(tango);
    report = {};
    options = 'function onBeginDrag_createUseAnimatedScrollLockTsx1(_,context){const{isDragScrolling}=this.__closure;context.momentumEndCount=0;isDragScrolling.set(true);}';
    report['code'] = options;
    var _closure1_slot3 = report;
    report = {};
    options = 'function onEndDrag_createUseAnimatedScrollLockTsx2(event){const{isDragScrolling,scrollLocked}=this.__closure;var _event$velocity$y,_event$velocity;isDragScrolling.set(false);if(Math.abs((_event$velocity$y=(_event$velocity=event.velocity)===null||_event$velocity===void 0?void 0:_event$velocity.y)!==null&&_event$velocity$y!==void 0?_event$velocity$y:0)===0){scrollLocked.set(false);}}';
    report['code'] = options;
    var _closure1_slot4 = report;
    report = {};
    options = 'function onMomentumEnd_createUseAnimatedScrollLockTsx3(event,context){const{IS_ANDROID,scrollLocked}=this.__closure;if(IS_ANDROID){var _context$momentumEndC;let count=(_context$momentumEndC=context===null||context===void 0?void 0:context.momentumEndCount)!==null&&_context$momentumEndC!==void 0?_context$momentumEndC:0;count+=1;if(count===3){scrollLocked.set(false);}else if(context!=null){context.momentumEndCount=count;}}else{scrollLocked.set(false);}}';
    report['code'] = options;
    var _closure1_slot5 = report;
    report = {};
    options = 'function onScroll_createUseAnimatedScrollLockTsx4(event){const{isDragScrolling,IS_ANDROID,scrollTo,scrollerRef,scrollOffsetValue,scrollLocked,onScrollHandler,runOnJS,onScrollHandlerWorkletized}=this.__closure;var _onScrollHandlerWorkl;const newScrollPosition=event.contentOffset.y;if(isDragScrolling.get()!==true){let scrollPosition=newScrollPosition;if(IS_ANDROID&&scrollPosition<0){scrollPosition=0;scrollTo(scrollerRef,0,0,false);}scrollOffsetValue.set(scrollPosition);}else{const isUp=newScrollPosition<scrollOffsetValue.get();if(scrollLocked.get()||isUp&&newScrollPosition<=0){if(!scrollLocked.get()){scrollLocked.set(true);}scrollTo(scrollerRef,0,0,false);scrollOffsetValue.set(0);}else{scrollOffsetValue.set(newScrollPosition);}}const{width:width,height:height}=event.layoutMeasurement;const{width:contentWidth,height:contentHeight}=event.contentSize;onScrollHandler!=null&&runOnJS(onScrollHandler)({width:width,height:height,offset:newScrollPosition,contentWidth:contentWidth,contentHeight:contentHeight});(_onScrollHandlerWorkl=onScrollHandlerWorkletized)===null||_onScrollHandlerWorkl===void 0||_onScrollHandlerWorkl({width:width,height:height,offset:newScrollPosition,contentWidth:contentWidth,contentHeight:contentHeight});}';
    report['code'] = options;
    var _closure1_slot6 = report;
    report = {};
    options = 'function createUseAnimatedScrollLockTsx5(){const{scrollLocked}=this.__closure;return{showsVerticalScrollIndicator:!scrollLocked.get()};}';
    report['code'] = options;
    var _closure1_slot7 = report;
    report = 3;
    report = golf[report];
    golf = oscar.bind(entity)(report);
    oscar = golf.fileFinishedImporting;
    report = 'modules/voice_panel/native/controls/utils/createUseAnimatedScrollLock.tsx';
    report = oscar.bind(golf)(report);
    zulu['ControlsGestureScrollLock'] = tango;
    mike = function(argFoo, argBar, argBaz, argCorge) { // Original name: createUseAnimatedScrollLock
        mike = argFoo;
        var _closure2_slot0 = mike;
        mike = argBar;
        var _closure2_slot1 = mike;
        mike = argBaz;
        var _closure2_slot2 = mike;
        mike = argCorge;
        var _closure2_slot3 = mike;
        entity = function() {
            _fun113446: for(var _fun113446_ip = 0; ; ) switch(_fun113446_ip) {
 0:
                entity = arguments[0];
                options = undefined;
                if(!(entity === options)) { _fun113446_ip = 13; continue _fun113446 }
 11:
                entity = {};
 13:
                output = entity.onScrollHandler;
                var _closure3_slot0 = output;
                sizing = entity.onScrollHandlerWorkletized;
                var _closure3_slot1 = sizing;
                var _closure3_slot2 = options;
                oscar = _closure1_slot0;
                offset = _closure1_slot1;
                report = 2;
                entity = offset[report];
                mike = oscar.bind(options)(entity);
                entity = mike.useAnimatedRef;
                zulu = entity.bind(mike)();
                _closure3_slot2 = zulu;
                entity = {};
                mike = offset[report];
                foxtrot = oscar.bind(options)(mike);
                romeo = foxtrot.useAnimatedScrollHandler;
                yankee = {};
                verify = function(argFoo, argBar) { // Original name: w
                    mike = 0;
                    entity = argBar;
                    entity['momentumEndCount'] = mike;
                    zulu = _closure2_slot3;
                    mike = zulu.set;
                    entity = true;
                    entity = mike.bind(zulu)(entity);
                    entity = undefined;
                    return entity;
                };
                backup = {};
                echo = _closure2_slot3;
                backup['isDragScrolling'] = echo;
                verify['__closure'] = backup;
                backup = 16433590303176.0;
                verify['__workletHash'] = backup;
                backup = _closure1_slot3;
                verify['__initData'] = backup;
                yankee['onBeginDrag'] = verify;
                backup = function(argFoo) { // Original name: H
                    _fun113448: for(var _fun113448_ip = 0; ; ) switch(_fun113448_ip) {
 0:
                        zulu = _closure2_slot3;
                        entity = zulu.set;
                        tango = false;
                        entity = entity.bind(zulu)(tango);
                        entity = global;
                        golf = entity.Math;
                        oscar = golf.abs;
                        entity = argFoo;
                        report = entity.velocity;
                        zulu = null;
                        verify = zulu == report;
                        entity = undefined;
                        options = undefined;
                        if(verify) { _fun113448_ip = 60; continue _fun113448 }
 55:
                        options = report.y;
 60:
                        verify = zulu != options;
                        report = 0;
                        zulu = 0;
                        if(!verify) { _fun113448_ip = 74; continue _fun113448 }
 71:
                        zulu = options;
 74:
                        zulu = oscar.bind(golf)(zulu);
                        if(!(report === zulu)) { _fun113448_ip = 97; continue _fun113448 }
 83:
                        zulu = _closure2_slot1;
                        mike = zulu.set;
                        mike = mike.bind(zulu)(tango);
 97:
                        return entity;
                    }
                };
                kilo = {};
                kilo['isDragScrolling'] = echo;
                verify = _closure2_slot1;
                kilo['scrollLocked'] = verify;
                backup['__closure'] = kilo;
                kilo = 1594981610850.0;
                backup['__workletHash'] = kilo;
                kilo = _closure1_slot4;
                backup['__initData'] = kilo;
                yankee['onEndDrag'] = backup;
                backup = function(argFoo, argBar) { // Original name: D
                    _fun113449: for(var _fun113449_ip = 0; ; ) switch(_fun113449_ip) {
 0:
                        mike = argBar;
                        entity = _closure1_slot2;
                        if(entity) { _fun113449_ip = 34; continue _fun113449 }
 13:
                        tango = _closure2_slot1;
                        zulu = tango.set;
                        entity = false;
                        entity = zulu.bind(tango)(entity);
                        _fun113449_ip = 108; continue _fun113449;
 34:
                        zulu = null;
                        tango = zulu == mike;
                        entity = undefined;
                        if(tango) { _fun113449_ip = 51; continue _fun113449 }
 45:
                        entity = mike.momentumEndCount;
 51:
                        report = zulu != entity;
                        tango = 0;
                        if(!report) { _fun113449_ip = 63; continue _fun113449 }
 60:
                        tango = entity;
 63:
                        entity = 1;
                        entity = tango + entity;
                        tango = 3;
                        if(!(tango !== entity)) { _fun113449_ip = 89; continue _fun113449 }
 77:
                        if(!(zulu != mike)) { _fun113449_ip = 108; continue _fun113449 }
 81:
                        mike['momentumEndCount'] = entity;
                        _fun113449_ip = 108; continue _fun113449;
 89:
                        zulu = _closure2_slot1;
                        mike = zulu.set;
                        entity = false;
                        entity = mike.bind(zulu)(entity);
 108:
                        entity = undefined;
                        return entity;
                    }
                };
                kilo = {};
                result = _closure1_slot2;
                kilo['IS_ANDROID'] = result;
                kilo['scrollLocked'] = verify;
                backup['__closure'] = kilo;
                kilo = 17525906195822.0;
                backup['__workletHash'] = kilo;
                kilo = _closure1_slot5;
                backup['__initData'] = kilo;
                yankee['onMomentumEnd'] = backup;
                backup = function(argFoo) { // Original name: k
                    _fun113450: for(var _fun113450_ip = 0; ; ) switch(_fun113450_ip) {
 0:
                        entity = argFoo;
                        mike = entity.contentOffset;
                        report = mike.y;
                        tango = _closure2_slot3;
                        zulu = tango.get;
                        zulu = zulu.bind(tango)();
                        oscar = true;
                        if(!(oscar === zulu)) { _fun113450_ip = 199; continue _fun113450 }
 39:
                        tango = _closure2_slot2;
                        zulu = tango.get;
                        zulu = zulu.bind(tango)();
                        zulu = report < zulu;
                        golf = _closure2_slot1;
                        tango = golf.get;
                        tango = tango.bind(golf)();
                        if(tango) { _fun113450_ip = 100; continue _fun113450 }
 72:
                        if(!zulu) { _fun113450_ip = 81; continue _fun113450 }
 75:
                        zulu = 0;
                        if(!(!(report <= zulu))) { _fun113450_ip = 100; continue _fun113450 }
 81:
                        tango = _closure2_slot2;
                        zulu = tango.set;
                        zulu = zulu.bind(tango)(report);
                        _fun113450_ip = 285; continue _fun113450;
 100:
                        tango = _closure2_slot1;
                        zulu = tango.get;
                        zulu = zulu.bind(tango)();
                        if(zulu) { _fun113450_ip = 130; continue _fun113450 }
 116:
                        tango = _closure2_slot1;
                        zulu = tango.set;
                        zulu = zulu.bind(tango)(oscar);
 130:
                        oscar = _closure1_slot0;
                        tango = _closure1_slot1;
                        zulu = 2;
                        tango = tango[zulu];
                        zulu = undefined;
                        options = oscar.bind(zulu)(tango);
                        golf = options.scrollTo;
                        kilo = _closure3_slot2;
                        oscar = 0;
                        romeo = false;
                        sizing = options;
                        backup = 0;
                        foxtrot = 0;
                        zulu = sizing[golf](kilo, backup, foxtrot, romeo, yankee);
                        tango = _closure2_slot2;
                        zulu = tango.set;
                        zulu = zulu.bind(tango)(oscar);
                        _fun113450_ip = 285; continue _fun113450;
 199:
                        oscar = _closure1_slot2;
                        if(!oscar) { _fun113450_ip = 215; continue _fun113450 }
 209:
                        tango = 0;
                        oscar = report < tango;
 215:
                        tango = report;
                        if(!oscar) { _fun113450_ip = 271; continue _fun113450 }
 221:
                        golf = _closure1_slot0;
                        oscar = _closure1_slot1;
                        zulu = 2;
                        oscar = oscar[zulu];
                        zulu = undefined;
                        verify = golf.bind(zulu)(oscar);
                        options = verify.scrollTo;
                        kilo = _closure3_slot2;
                        romeo = false;
                        sizing = verify;
                        backup = 0;
                        foxtrot = 0;
                        oscar = sizing[options](kilo, backup, foxtrot, romeo, yankee);
                        tango = 0;
 271:
                        zulu = _closure2_slot2;
                        mike = zulu.set;
                        mike = mike.bind(zulu)(tango);
 285:
                        mike = entity.layoutMeasurement;
                        golf = mike.width;
                        oscar = mike.height;
                        entity = entity.contentSize;
                        tango = entity.width;
                        entity = entity.height;
                        zulu = _closure3_slot0;
                        options = null;
                        if(!(options != zulu)) { _fun113450_ip = 399; continue _fun113450 }
 330:
                        verify = _closure1_slot0;
                        offset = _closure1_slot1;
                        zulu = 2;
                        zulu = offset[zulu];
                        offset = undefined;
                        yankee = verify.bind(offset)(zulu);
                        verify = yankee.runOnJS;
                        zulu = _closure3_slot0;
                        verify = verify.bind(yankee)(zulu);
                        zulu = {};
                        zulu['width'] = golf;
                        zulu['height'] = oscar;
                        zulu['offset'] = report;
                        zulu['contentWidth'] = tango;
                        zulu['contentHeight'] = entity;
                        zulu = verify.bind(offset)(zulu);
 399:
                        zulu = _closure3_slot1;
                        if(!(options != zulu)) { _fun113450_ip = 443; continue _fun113450 }
 407:
                        zulu = _closure3_slot1;
                        mike = {};
                        mike['width'] = golf;
                        mike['height'] = oscar;
                        mike['offset'] = report;
                        mike['contentWidth'] = tango;
                        mike['contentHeight'] = entity;
                        entity = undefined;
                        entity = zulu.bind(entity)(mike);
 443:
                        entity = undefined;
                        return entity;
                    }
                };
                kilo = {};
                kilo['isDragScrolling'] = echo;
                kilo['IS_ANDROID'] = result;
                result = offset[report];
                result = oscar.bind(options)(result);
                result = result.scrollTo;
                kilo['scrollTo'] = result;
                kilo['scrollerRef'] = zulu;
                result = _closure2_slot2;
                kilo['scrollOffsetValue'] = result;
                kilo['scrollLocked'] = verify;
                kilo['onScrollHandler'] = output;
                output = offset[report];
                output = oscar.bind(options)(output);
                output = output.runOnJS;
                kilo['runOnJS'] = output;
                kilo['onScrollHandlerWorkletized'] = sizing;
                backup['__closure'] = kilo;
                kilo = 13271628494164.0;
                backup['__workletHash'] = kilo;
                kilo = _closure1_slot6;
                backup['__initData'] = kilo;
                yankee['onScroll'] = backup;
                yankee = romeo.bind(foxtrot)(yankee);
                entity['onScroll'] = yankee;
                report = offset[report];
                oscar = oscar.bind(options)(report);
                report = oscar.useAnimatedProps;
                tango = function() { // Original name: L
                    entity = {};
                    zulu = _closure2_slot1;
                    mike = zulu.get;
                    mike = mike.bind(zulu)();
                    mike = !mike;
                    entity['showsVerticalScrollIndicator'] = mike;
                    return entity;
                };
                options = {};
                options['scrollLocked'] = verify;
                tango['__closure'] = options;
                options = 3670657775473.0;
                tango['__workletHash'] = options;
                golf = _closure1_slot7;
                tango['__initData'] = golf;
                tango = report.bind(oscar)(tango);
                entity['animatedProps'] = tango;
                entity['scrollerRef'] = zulu;
                mike = _closure2_slot0;
                entity['gestureRef'] = mike;
                return entity;
            }
        };
        return entity;
    };
    zulu['createUseAnimatedScrollLock'] = mike;
    return entity;
})();