// app/modules/expression_suggestions/ExpressionSuggestionsHooks.tsx
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
    option = oscard[tangon];
    tangon = argCor;
    tangon = tangon.bind(entity)(option);
    var _closure1_slot4 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot5 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot6 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    golfie = tangon.MAX_NUM_SUGGESTED_STICKERS;
    var _closure1_slot7 = golfie;
    golfie = tangon.MAX_NUM_USER_INPUT_WORDS;
    var _closure1_slot8 = golfie;
    golfie = tangon.DELAY_BEFORE_SUGGESTIONS_MS;
    var _closure1_slot9 = golfie;
    verify = tangon.REQUEST_THROTTLE_DURATION_MS;
    tangon = 5;
    tangon = oscard[tangon];
    option = report.bind(entity)(tangon);
    golfie = option.promiseThrottle;
    tangon = 6;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.fetchStickerPacks;
    tangon = golfie.bind(option)(tangon, verify);
    var _closure1_slot10 = tangon;
    tangon = 13;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/expression_suggestions/ExpressionSuggestionsHooks.tsx';
    tangon = report.bind(oscard)(tangon);
    tangon = function(argFoo, argBar, argBaz) {
        verify = argFoo;
        oscard = argBar;
        option = argBaz;
        var _closure2_slot0 = verify;
        var _closure2_slot1 = oscard;
        var _closure2_slot2 = option;
        report = _closure1_slot0;
        offset = _closure1_slot2;
        zuuluu = 7;
        zuuluu = offset[zuuluu];
        tangon = undefined;
        golfie = report.bind(tangon)(zuuluu);
        zuuluu = golfie.useHasSendableSticker;
        golfie = zuuluu.bind(golfie)(option);
        var _closure2_slot3 = golfie;
        zuuluu = 8;
        zuuluu = offset[zuuluu];
        offset = report.bind(tangon)(zuuluu);
        report = offset.useStateFromStores;
        zuuluu = _closure1_slot6;
        tangon = new Array(1);
        tangon[0] = zuuluu;
        zuuluu = function() {
            michal = _closure1_slot6;
            entity = michal.getCurrentUser;
            entity = entity.bind(michal)();
            return entity;
        };
        report = report.bind(offset)(tangon, zuuluu);
        var _closure2_slot4 = report;
        tangon = _closure1_slot4;
        zuuluu = tangon.useMemo;
        michal = new Array(5);
        michal[0] = verify;
        michal[1] = option;
        michal[2] = golfie;
        michal[3] = oscard;
        michal[4] = report;
        entity = function() {
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                zuuluu = _closure1_slot0;
                michal = _closure1_slot2;
                verify = 9;
                michal = michal[verify];
                option = undefined;
                oscard = zuuluu.bind(option)(michal);
                report = oscard.getQueriesFromUserInput;
                zuuluu = _closure2_slot0;
                offset = report.bind(oscard)(zuuluu);
                zuuluu = _closure2_slot1;
                if(zuuluu) { _fun00002_ip = 327; continue _fun00001 }
 55:
                report = _closure2_slot0;
                zuuluu = null;
                if(!(zuuluu != report)) { _fun00002_ip = 327; continue _fun00001 }
 68:
                report = _closure2_slot0;
                zuuluu = '';
                if(!(zuuluu !== report)) { _fun00002_ip = 327; continue _fun00001 }
 83:
                report = offset.length;
                zuuluu = _closure1_slot8;
                if(!(!(report > zuuluu))) { _fun00002_ip = 327; continue _fun00001 }
 99:
                zuuluu = _closure2_slot3;
                if(!zuuluu) { _fun00002_ip = 327; continue _fun00001 }
 109:
                golfie = new Array(0);
                var _closure3_slot0 = golfie;
                report = new Array(0);
                var _closure3_slot1 = report;
                oscard = _closure1_slot0;
                zuuluu = _closure1_slot2;
                zuuluu = zuuluu[verify];
                oscard = oscard.bind(option)(zuuluu);
                zuuluu = oscard.removePunctuation;
                michal = _closure2_slot0;
                oscard = zuuluu.bind(oscard)(michal);
                zuuluu = 0;
                michal = offset[zuuluu];
                verify = offset;
                if(!(oscard !== michal)) { _fun00002_ip = 194; continue _fun00001 }
 170:
                michal = new Array(1);
                michal[0] = oscard;
                yankee = 1;
                foxtra = michal;
                romeon = offset;
                oscard = arraySpread(foxtra, romeon, yankee);
                verify = michal;
 194:
                oscard = _closure1_slot1;
                offset = _closure1_slot2;
                michal = 10;
                michal = offset[michal];
                option = oscard.bind(option)(michal);
                oscard = option.queryStickers;
                michal = false;
                oscard = oscard.bind(option)(verify, michal);
                michal = oscard.forEach;
                entity = function(argFoo) {
                    _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                        entity = argFoo;
                        option = entity.sticker;
                        golfie = _closure1_slot0;
                        report = _closure1_slot2;
                        oscard = 11;
                        zuuluu = report[oscard];
                        entity = undefined;
                        offset = golfie.bind(entity)(zuuluu);
                        verify = offset.getStickerSendability;
                        tangon = _closure2_slot4;
                        zuuluu = _closure2_slot2;
                        zuuluu = verify.bind(offset)(option, tangon, zuuluu);
                        tangon = {};
                        tangon['sticker'] = option;
                        tangon['sendability'] = zuuluu;
                        report = report[oscard];
                        report = golfie.bind(entity)(report);
                        report = report.StickerSendability;
                        report = report.SENDABLE;
                        if(!(zuuluu !== report)) { _fun00004_ip = 147; continue _fun00003 }
 95:
                        report = _closure1_slot0;
                        michal = _closure1_slot2;
                        michal = michal[oscard];
                        michal = report.bind(entity)(michal);
                        michal = michal.StickerSendability;
                        michal = michal.SENDABLE_WITH_PREMIUM;
                        if(!(zuuluu === michal)) { _fun00004_ip = 164; continue _fun00003 }
 128:
                        zuuluu = _closure3_slot1;
                        michal = zuuluu.push;
                        michal = michal.bind(zuuluu)(tangon);
                        _fun00004_ip = 164; continue _fun00003;
 147:
                        zuuluu = _closure3_slot0;
                        michal = zuuluu.push;
                        michal = michal.bind(zuuluu)(tangon);
 164:
                        return entity;
                    }
                };
                entity = michal.bind(oscard)(entity);
                entity = new Array(0);
                michal = golfie.length;
                if(!(michal > zuuluu)) { _fun00002_ip = 325; continue _fun00001 }
 258:
                oscard = golfie.slice;
                michal = _closure1_slot7;
                michal = oscard.bind(golfie)(zuuluu, michal);
                oscard = report.length;
                entity = michal;
                if(!(zuuluu !== oscard)) { _fun00002_ip = 325; continue _fun00001 }
 285:
                oscard = michal.length;
                tangon = _closure1_slot7;
                if(!(oscard === tangon)) { _fun00002_ip = 308; continue _fun00001 }
 298:
                tangon = michal.pop;
                tangon = tangon.bind(michal)();
 308:
                tangon = michal.push;
                zuuluu = report[zuuluu];
                zuuluu = tangon.bind(michal)(zuuluu);
                entity = michal;
 325:
                return entity;
 327:
                entity = new Array(0);
                return entity;
            }
        };
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    zuuluu['useStickerSuggestionResults'] = tangon;
    michal = function(argFoo) {
        michal = argFoo;
        oscard = michal.setTextInputValue;
        var _closure2_slot0 = oscard;
        zuuluu = michal.setHasDismissed;
        var _closure2_slot1 = zuuluu;
        zuuluu = michal.setHasSelection;
        var _closure2_slot2 = zuuluu;
        zuuluu = michal.setFocusedSuggestionType;
        var _closure2_slot3 = zuuluu;
        michal = michal.delayBeforeSuggestions;
        var _closure2_slot4 = michal;
        report = _closure1_slot4;
        tangon = report.useRef;
        zuuluu = null;
        zuuluu = tangon.bind(report)(zuuluu);
        var _closure2_slot5 = zuuluu;
        zuuluu = report.useRef;
        tangon = false;
        zuuluu = zuuluu.bind(report)(tangon);
        var _closure2_slot6 = zuuluu;
        zuuluu = report.useRef;
        zuuluu = zuuluu.bind(report)(tangon);
        var _closure2_slot7 = zuuluu;
        tangon = report.useMemo;
        zuuluu = new Array(2);
        zuuluu[0] = oscard;
        zuuluu[1] = michal;
        michal = function() {
            _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                zuuluu = _closure1_slot1;
                tangon = _closure1_slot2;
                michal = 12;
                michal = tangon[michal];
                tangon = undefined;
                zuuluu = zuuluu.bind(tangon)(michal);
                michal = _closure2_slot0;
                golfie = _closure2_slot4;
                oscard = null;
                if(!(oscard == golfie)) { _fun00006_ip = 48; continue _fun00005 }
 42:
                entity = _closure1_slot9;
                _fun00006_ip = 52; continue _fun00005;
 48:
                entity = _closure2_slot4;
 52:
                entity = zuuluu.bind(tangon)(michal, entity);
                return entity;
            }
        };
        michal = tangon.bind(report)(michal, zuuluu);
        var _closure2_slot8 = michal;
        zuuluu = function() {
            tangon = _closure1_slot3;
            zuuluu = undefined;
            michal = function* (argFoo) {
                entity = function* (argFoo) { // Original name: ?anon_0_
                    _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                        StartGenerator();
                        verify = argFoo;
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(michal) { _fun00008_ip = 422; continue _fun00007 }
 13:
                        tangon = null;
                        if(!(tangon != verify)) { _fun00008_ip = 294; continue _fun00007 }
 22:
                        report = '';
                        if(!(report !== verify)) { _fun00008_ip = 294; continue _fun00007 }
 33:
                        zuuluu = _closure2_slot6;
                        zuuluu = zuuluu.current;
                        if(zuuluu) { _fun00008_ip = 417; continue _fun00007 }
 51:
                        zuuluu = verify.trim;
                        golfie = zuuluu.bind(verify)();
                        zuuluu = _closure2_slot5;
                        offset = zuuluu.current;
                        option = tangon == offset;
                        zuuluu = undefined;
                        oscard = undefined;
                        if(option) { _fun00008_ip = 91; continue _fun00007 }
 81:
                        option = offset.trim;
                        oscard = option.bind(offset)();
 91:
                        if(!(golfie !== oscard)) { _fun00008_ip = 417; continue _fun00007 }
 98:
                        oscard = _closure2_slot5;
                        oscard['current'] = verify;
                        option = _closure1_slot0;
                        offset = _closure1_slot2;
                        golfie = 9;
                        golfie = offset[golfie];
                        option = option.bind(zuuluu)(golfie);
                        golfie = option.getQueriesFromUserInput;
                        golfie = golfie.bind(option)(verify);
                        option = golfie.length;
                        golfie = _closure1_slot8;
                        if(!(!(option > golfie))) { _fun00008_ip = 254; continue _fun00007 }
 155:
                        golfie = _closure2_slot7;
                        golfie = golfie.current;
                        option = true;
                        if(!(option !== golfie)) { _fun00008_ip = 251; continue _fun00007 }
 170:
                        golfie = _closure1_slot5;
                        golfie = golfie.hasLoadedStickerPacks;
                        if(golfie) { _fun00008_ip = 228; continue _fun00007 }
 183:
                        golfie = _closure2_slot7;
                        golfie['current'] = option;
                        oscard = _closure1_slot10;
                        oscard = oscard.bind(zuuluu)();
                        SaveGenerator(address=205);
 203:
                        return oscard;
 205:
                        ResumeGenerator(result_out_reg=5, return_bool_out_reg=6);
                        if(golfie) { _fun00008_ip = 225; continue _fun00007 }
 211:
                        option = _closure2_slot7;
                        golfie = false;
                        option['current'] = golfie;
                        _fun00008_ip = 228; continue _fun00007;
 225:
                        return oscard;
 228:
                        golfie = _closure2_slot8;
                        oscard = _closure2_slot5;
                        oscard = oscard.current;
                        oscard = golfie.bind(zuuluu)(oscard);
                        _fun00008_ip = 417; continue _fun00007;
 251:
                        return zuuluu;
 254:
                        golfie = _closure2_slot6;
                        oscard = true;
                        golfie['current'] = oscard;
                        golfie = _closure2_slot8;
                        oscard = golfie.cancel;
                        oscard = oscard.bind(golfie)();
                        michal = _closure2_slot0;
                        michal = michal.bind(zuuluu)(report);
                        michal = undefined;
                        return michal;
 294:
                        report = _closure2_slot8;
                        zuuluu = report.cancel;
                        zuuluu = zuuluu.bind(report)();
                        zuuluu = _closure2_slot0;
                        if(!(tangon != zuuluu)) { _fun00008_ip = 334; continue _fun00007 }
 319:
                        oscard = _closure2_slot0;
                        report = undefined;
                        zuuluu = '';
                        zuuluu = oscard.bind(report)(zuuluu);
 334:
                        zuuluu = _closure2_slot1;
                        if(!(tangon != zuuluu)) { _fun00008_ip = 355; continue _fun00007 }
 342:
                        oscard = _closure2_slot1;
                        report = undefined;
                        zuuluu = false;
                        zuuluu = oscard.bind(report)(zuuluu);
 355:
                        zuuluu = _closure2_slot2;
                        if(!(tangon != zuuluu)) { _fun00008_ip = 376; continue _fun00007 }
 363:
                        oscard = _closure2_slot2;
                        report = undefined;
                        zuuluu = false;
                        zuuluu = oscard.bind(report)(zuuluu);
 376:
                        zuuluu = _closure2_slot3;
                        if(!(tangon != zuuluu)) { _fun00008_ip = 395; continue _fun00007 }
 384:
                        report = _closure2_slot3;
                        zuuluu = undefined;
                        zuuluu = report.bind(zuuluu)(tangon);
 395:
                        zuuluu = _closure2_slot5;
                        zuuluu['current'] = tangon;
                        zuuluu = _closure2_slot6;
                        michal = false;
                        zuuluu['current'] = michal;
 417:
                        michal = undefined;
                        return michal;
 422:
                        return entity;
                    }
                };
                return entity;
            };
            michal = tangon.bind(zuuluu)(michal);
            var _closure3_slot0 = michal;
            entity = function() {
                entity = undefined;
                tangon = _closure3_slot0;
                zuuluu = tangon.apply;
                entity = arguments;
                michal = entity;
                entity = this;
                entity = zuuluu.bind(tangon)(entity, michal);
                return entity;
            };
            return entity;
        };
        entity = undefined;
        zuuluu = zuuluu.bind(entity)();
        entity = {};
        entity['handleTextChange'] = zuuluu;
        entity['debouncedSetTextInputValue'] = michal;
        return entity;
    };
    zuuluu['useTextChangeHandler'] = michal;
    return entity;
})();