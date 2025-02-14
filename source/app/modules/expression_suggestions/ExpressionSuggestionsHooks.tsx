// app/modules/expression_suggestions/ExpressionSuggestionsHooks.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golf;
    var _closure1_slot2 = oscar;
    entity = global;
    verify = entity.Object;
    options = verify.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = options.bind(verify)(zulu, entity, tango);
    entity = 0;
    tango = oscar[entity];
    entity = undefined;
    tango = golf.bind(entity)(tango);
    var _closure1_slot3 = tango;
    tango = 1;
    options = oscar[tango];
    tango = argCorge;
    tango = tango.bind(entity)(options);
    var _closure1_slot4 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot5 = tango;
    tango = 3;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot6 = tango;
    tango = 4;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    golf = tango.MAX_NUM_SUGGESTED_STICKERS;
    var _closure1_slot7 = golf;
    golf = tango.MAX_NUM_USER_INPUT_WORDS;
    var _closure1_slot8 = golf;
    golf = tango.DELAY_BEFORE_SUGGESTIONS_MS;
    var _closure1_slot9 = golf;
    verify = tango.REQUEST_THROTTLE_DURATION_MS;
    tango = 5;
    tango = oscar[tango];
    options = report.bind(entity)(tango);
    golf = options.promiseThrottle;
    tango = 6;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.fetchStickerPacks;
    tango = golf.bind(options)(tango, verify);
    var _closure1_slot10 = tango;
    tango = 13;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/expression_suggestions/ExpressionSuggestionsHooks.tsx';
    tango = report.bind(oscar)(tango);
    tango = function(argFoo, argBar, argBaz) {
        verify = argFoo;
        oscar = argBar;
        options = argBaz;
        var _closure2_slot0 = verify;
        var _closure2_slot1 = oscar;
        var _closure2_slot2 = options;
        report = _closure1_slot0;
        offset = _closure1_slot2;
        zulu = 7;
        zulu = offset[zulu];
        tango = undefined;
        golf = report.bind(tango)(zulu);
        zulu = golf.useHasSendableSticker;
        golf = zulu.bind(golf)(options);
        var _closure2_slot3 = golf;
        zulu = 8;
        zulu = offset[zulu];
        offset = report.bind(tango)(zulu);
        report = offset.useStateFromStores;
        zulu = _closure1_slot6;
        tango = new Array(1);
        tango[0] = zulu;
        zulu = function() {
            mike = _closure1_slot6;
            entity = mike.getCurrentUser;
            entity = entity.bind(mike)();
            return entity;
        };
        report = report.bind(offset)(tango, zulu);
        var _closure2_slot4 = report;
        tango = _closure1_slot4;
        zulu = tango.useMemo;
        mike = new Array(5);
        mike[0] = verify;
        mike[1] = options;
        mike[2] = golf;
        mike[3] = oscar;
        mike[4] = report;
        entity = function() {
            _fun100748: for(var _fun100748_ip = 0; ; ) switch(_fun100748_ip) {
 0:
                zulu = _closure1_slot0;
                mike = _closure1_slot2;
                verify = 9;
                mike = mike[verify];
                options = undefined;
                oscar = zulu.bind(options)(mike);
                report = oscar.getQueriesFromUserInput;
                zulu = _closure2_slot0;
                offset = report.bind(oscar)(zulu);
                zulu = _closure2_slot1;
                if(zulu) { _fun100748_ip = 327; continue _fun100748 }
 55:
                report = _closure2_slot0;
                zulu = null;
                if(!(zulu != report)) { _fun100748_ip = 327; continue _fun100748 }
 68:
                report = _closure2_slot0;
                zulu = '';
                if(!(zulu !== report)) { _fun100748_ip = 327; continue _fun100748 }
 83:
                report = offset.length;
                zulu = _closure1_slot8;
                if(!(!(report > zulu))) { _fun100748_ip = 327; continue _fun100748 }
 99:
                zulu = _closure2_slot3;
                if(!zulu) { _fun100748_ip = 327; continue _fun100748 }
 109:
                golf = new Array(0);
                var _closure3_slot0 = golf;
                report = new Array(0);
                var _closure3_slot1 = report;
                oscar = _closure1_slot0;
                zulu = _closure1_slot2;
                zulu = zulu[verify];
                oscar = oscar.bind(options)(zulu);
                zulu = oscar.removePunctuation;
                mike = _closure2_slot0;
                oscar = zulu.bind(oscar)(mike);
                zulu = 0;
                mike = offset[zulu];
                verify = offset;
                if(!(oscar !== mike)) { _fun100748_ip = 194; continue _fun100748 }
 170:
                mike = new Array(1);
                mike[0] = oscar;
                yankee = 1;
                foxtrot = mike;
                romeo = offset;
                oscar = arraySpread(foxtrot, romeo, yankee);
                verify = mike;
 194:
                oscar = _closure1_slot1;
                offset = _closure1_slot2;
                mike = 10;
                mike = offset[mike];
                options = oscar.bind(options)(mike);
                oscar = options.queryStickers;
                mike = false;
                oscar = oscar.bind(options)(verify, mike);
                mike = oscar.forEach;
                entity = function(argFoo) {
                    _fun100749: for(var _fun100749_ip = 0; ; ) switch(_fun100749_ip) {
 0:
                        entity = argFoo;
                        options = entity.sticker;
                        golf = _closure1_slot0;
                        report = _closure1_slot2;
                        oscar = 11;
                        zulu = report[oscar];
                        entity = undefined;
                        offset = golf.bind(entity)(zulu);
                        verify = offset.getStickerSendability;
                        tango = _closure2_slot4;
                        zulu = _closure2_slot2;
                        zulu = verify.bind(offset)(options, tango, zulu);
                        tango = {};
                        tango['sticker'] = options;
                        tango['sendability'] = zulu;
                        report = report[oscar];
                        report = golf.bind(entity)(report);
                        report = report.StickerSendability;
                        report = report.SENDABLE;
                        if(!(zulu !== report)) { _fun100749_ip = 147; continue _fun100749 }
 95:
                        report = _closure1_slot0;
                        mike = _closure1_slot2;
                        mike = mike[oscar];
                        mike = report.bind(entity)(mike);
                        mike = mike.StickerSendability;
                        mike = mike.SENDABLE_WITH_PREMIUM;
                        if(!(zulu === mike)) { _fun100749_ip = 164; continue _fun100749 }
 128:
                        zulu = _closure3_slot1;
                        mike = zulu.push;
                        mike = mike.bind(zulu)(tango);
                        _fun100749_ip = 164; continue _fun100749;
 147:
                        zulu = _closure3_slot0;
                        mike = zulu.push;
                        mike = mike.bind(zulu)(tango);
 164:
                        return entity;
                    }
                };
                entity = mike.bind(oscar)(entity);
                entity = new Array(0);
                mike = golf.length;
                if(!(mike > zulu)) { _fun100748_ip = 325; continue _fun100748 }
 258:
                oscar = golf.slice;
                mike = _closure1_slot7;
                mike = oscar.bind(golf)(zulu, mike);
                oscar = report.length;
                entity = mike;
                if(!(zulu !== oscar)) { _fun100748_ip = 325; continue _fun100748 }
 285:
                oscar = mike.length;
                tango = _closure1_slot7;
                if(!(oscar === tango)) { _fun100748_ip = 308; continue _fun100748 }
 298:
                tango = mike.pop;
                tango = tango.bind(mike)();
 308:
                tango = mike.push;
                zulu = report[zulu];
                zulu = tango.bind(mike)(zulu);
                entity = mike;
 325:
                return entity;
 327:
                entity = new Array(0);
                return entity;
            }
        };
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    zulu['useStickerSuggestionResults'] = tango;
    mike = function(argFoo) {
        mike = argFoo;
        oscar = mike.setTextInputValue;
        var _closure2_slot0 = oscar;
        zulu = mike.setHasDismissed;
        var _closure2_slot1 = zulu;
        zulu = mike.setHasSelection;
        var _closure2_slot2 = zulu;
        zulu = mike.setFocusedSuggestionType;
        var _closure2_slot3 = zulu;
        mike = mike.delayBeforeSuggestions;
        var _closure2_slot4 = mike;
        report = _closure1_slot4;
        tango = report.useRef;
        zulu = null;
        zulu = tango.bind(report)(zulu);
        var _closure2_slot5 = zulu;
        zulu = report.useRef;
        tango = false;
        zulu = zulu.bind(report)(tango);
        var _closure2_slot6 = zulu;
        zulu = report.useRef;
        zulu = zulu.bind(report)(tango);
        var _closure2_slot7 = zulu;
        tango = report.useMemo;
        zulu = new Array(2);
        zulu[0] = oscar;
        zulu[1] = mike;
        mike = function() {
            _fun100751: for(var _fun100751_ip = 0; ; ) switch(_fun100751_ip) {
 0:
                zulu = _closure1_slot1;
                tango = _closure1_slot2;
                mike = 12;
                mike = tango[mike];
                tango = undefined;
                zulu = zulu.bind(tango)(mike);
                mike = _closure2_slot0;
                golf = _closure2_slot4;
                oscar = null;
                if(!(oscar == golf)) { _fun100751_ip = 48; continue _fun100751 }
 42:
                entity = _closure1_slot9;
                _fun100751_ip = 52; continue _fun100751;
 48:
                entity = _closure2_slot4;
 52:
                entity = zulu.bind(tango)(mike, entity);
                return entity;
            }
        };
        mike = tango.bind(report)(mike, zulu);
        var _closure2_slot8 = mike;
        zulu = function() {
            tango = _closure1_slot3;
            zulu = undefined;
            mike = function* (argFoo) {
                entity = function* (argFoo) { // Original name: ?anon_0_
                    _fun100754: for(var _fun100754_ip = 0; ; ) switch(_fun100754_ip) {
 0:
                        StartGenerator();
                        verify = argFoo;
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(mike) { _fun100754_ip = 422; continue _fun100754 }
 13:
                        tango = null;
                        if(!(tango != verify)) { _fun100754_ip = 294; continue _fun100754 }
 22:
                        report = '';
                        if(!(report !== verify)) { _fun100754_ip = 294; continue _fun100754 }
 33:
                        zulu = _closure2_slot6;
                        zulu = zulu.current;
                        if(zulu) { _fun100754_ip = 417; continue _fun100754 }
 51:
                        zulu = verify.trim;
                        golf = zulu.bind(verify)();
                        zulu = _closure2_slot5;
                        offset = zulu.current;
                        options = tango == offset;
                        zulu = undefined;
                        oscar = undefined;
                        if(options) { _fun100754_ip = 91; continue _fun100754 }
 81:
                        options = offset.trim;
                        oscar = options.bind(offset)();
 91:
                        if(!(golf !== oscar)) { _fun100754_ip = 417; continue _fun100754 }
 98:
                        oscar = _closure2_slot5;
                        oscar['current'] = verify;
                        options = _closure1_slot0;
                        offset = _closure1_slot2;
                        golf = 9;
                        golf = offset[golf];
                        options = options.bind(zulu)(golf);
                        golf = options.getQueriesFromUserInput;
                        golf = golf.bind(options)(verify);
                        options = golf.length;
                        golf = _closure1_slot8;
                        if(!(!(options > golf))) { _fun100754_ip = 254; continue _fun100754 }
 155:
                        golf = _closure2_slot7;
                        golf = golf.current;
                        options = true;
                        if(!(options !== golf)) { _fun100754_ip = 251; continue _fun100754 }
 170:
                        golf = _closure1_slot5;
                        golf = golf.hasLoadedStickerPacks;
                        if(golf) { _fun100754_ip = 228; continue _fun100754 }
 183:
                        golf = _closure2_slot7;
                        golf['current'] = options;
                        oscar = _closure1_slot10;
                        oscar = oscar.bind(zulu)();
                        SaveGenerator(address=205);
 203:
                        return oscar;
 205:
                        ResumeGenerator(result_out_reg=5, return_bool_out_reg=6);
                        if(golf) { _fun100754_ip = 225; continue _fun100754 }
 211:
                        options = _closure2_slot7;
                        golf = false;
                        options['current'] = golf;
                        _fun100754_ip = 228; continue _fun100754;
 225:
                        return oscar;
 228:
                        golf = _closure2_slot8;
                        oscar = _closure2_slot5;
                        oscar = oscar.current;
                        oscar = golf.bind(zulu)(oscar);
                        _fun100754_ip = 417; continue _fun100754;
 251:
                        return zulu;
 254:
                        golf = _closure2_slot6;
                        oscar = true;
                        golf['current'] = oscar;
                        golf = _closure2_slot8;
                        oscar = golf.cancel;
                        oscar = oscar.bind(golf)();
                        mike = _closure2_slot0;
                        mike = mike.bind(zulu)(report);
                        mike = undefined;
                        return mike;
 294:
                        report = _closure2_slot8;
                        zulu = report.cancel;
                        zulu = zulu.bind(report)();
                        zulu = _closure2_slot0;
                        if(!(tango != zulu)) { _fun100754_ip = 334; continue _fun100754 }
 319:
                        oscar = _closure2_slot0;
                        report = undefined;
                        zulu = '';
                        zulu = oscar.bind(report)(zulu);
 334:
                        zulu = _closure2_slot1;
                        if(!(tango != zulu)) { _fun100754_ip = 355; continue _fun100754 }
 342:
                        oscar = _closure2_slot1;
                        report = undefined;
                        zulu = false;
                        zulu = oscar.bind(report)(zulu);
 355:
                        zulu = _closure2_slot2;
                        if(!(tango != zulu)) { _fun100754_ip = 376; continue _fun100754 }
 363:
                        oscar = _closure2_slot2;
                        report = undefined;
                        zulu = false;
                        zulu = oscar.bind(report)(zulu);
 376:
                        zulu = _closure2_slot3;
                        if(!(tango != zulu)) { _fun100754_ip = 395; continue _fun100754 }
 384:
                        report = _closure2_slot3;
                        zulu = undefined;
                        zulu = report.bind(zulu)(tango);
 395:
                        zulu = _closure2_slot5;
                        zulu['current'] = tango;
                        zulu = _closure2_slot6;
                        mike = false;
                        zulu['current'] = mike;
 417:
                        mike = undefined;
                        return mike;
 422:
                        return entity;
                    }
                };
                return entity;
            };
            mike = tango.bind(zulu)(mike);
            var _closure3_slot0 = mike;
            entity = function() {
                entity = undefined;
                tango = _closure3_slot0;
                zulu = tango.apply;
                entity = arguments;
                mike = entity;
                entity = this;
                entity = zulu.bind(tango)(entity, mike);
                return entity;
            };
            return entity;
        };
        entity = undefined;
        zulu = zulu.bind(entity)();
        entity = {};
        entity['handleTextChange'] = zulu;
        entity['debouncedSetTextInputValue'] = mike;
        return entity;
    };
    zulu['useTextChangeHandler'] = mike;
    return entity;
})();