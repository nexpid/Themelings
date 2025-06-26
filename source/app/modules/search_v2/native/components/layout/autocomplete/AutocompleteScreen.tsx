// app/modules/search_v2/native/components/layout/autocomplete/AutocompleteScreen.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    report = argBar;
    option = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = option;
    var _closure1_slot2 = oscard;
    entity = global;
    verify = entity.Object;
    golfie = verify.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = golfie.bind(verify)(zuuluu, entity, tangon);
    entity = 0;
    tangon = oscard[entity];
    entity = undefined;
    tangon = option.bind(entity)(tangon);
    var _closure1_slot3 = tangon;
    tangon = 1;
    golfie = oscard[tangon];
    tangon = argCor;
    golfie = tangon.bind(entity)(golfie);
    var _closure1_slot4 = golfie;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = option.bind(entity)(tangon);
    var _closure1_slot5 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    tangon = option.bind(entity)(tangon);
    var _closure1_slot6 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    tangon = option.bind(entity)(tangon);
    var _closure1_slot7 = tangon;
    tangon = 5;
    tangon = oscard[tangon];
    tangon = option.bind(entity)(tangon);
    var _closure1_slot8 = tangon;
    tangon = 6;
    tangon = oscard[tangon];
    tangon = option.bind(entity)(tangon);
    var _closure1_slot9 = tangon;
    tangon = 7;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    option = tangon.SearchListItemTypes;
    var _closure1_slot10 = option;
    option = tangon.SearchQueryTagTypes;
    var _closure1_slot11 = option;
    tangon = tangon.USER_ESTIMATED_ITEM_SIZE;
    var _closure1_slot12 = tangon;
    tangon = 8;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.SearchTokenTypes;
    var _closure1_slot13 = tangon;
    tangon = 9;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.jsx;
    var _closure1_slot14 = tangon;
    tangon = new Array(0);
    var _closure1_slot15 = tangon;
    tangon = golfie.memo;
    michal = function(argFoo) { // Original name: AutocompleteScreen
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argFoo;
            offset = entity.searchContext;
            var _closure2_slot0 = offset;
            golfie = _closure1_slot0;
            verify = _closure1_slot2;
            entity = 10;
            zuuluu = verify[entity];
            report = undefined;
            romeon = golfie.bind(report)(zuuluu);
            yankee = romeon.useStateFromStores;
            zuuluu = _closure1_slot7;
            option = new Array(1);
            option[0] = zuuluu;
            tangon = new Array(1);
            tangon[0] = offset;
            entity = verify[entity];
            entity = golfie.bind(report)(entity);
            update = entity.statesWillNeverBeEqual;
            ctrled = function() {
                tangon = _closure1_slot0;
                zuuluu = _closure1_slot2;
                michal = 11;
                zuuluu = zuuluu[michal];
                michal = undefined;
                tangon = tangon.bind(michal)(zuuluu);
                zuuluu = tangon.getBackwardCompatibilitySearchId;
                michal = _closure2_slot0;
                zuuluu = zuuluu.bind(tangon)(michal);
                michal = _closure1_slot7;
                entity = michal.getState;
                entity = entity.bind(michal)(zuuluu);
                entity = entity.autocompletes;
                return entity;
            };
            sequen = romeon;
            vacuum = option;
            source = tangon;
            output = sequen[yankee](vacuum, ctrled, source, update, echoed);
            var _closure2_slot1 = output;
            romeon = _closure1_slot4;
            zuuluu = romeon.useState;
            entity = new Array(0);
            entity = zuuluu.bind(romeon)(entity);
            option = _closure1_slot3;
            zuuluu = 2;
            entity = option.bind(report)(entity, zuuluu);
            tangon = 0;
            result = entity[tangon];
            var _closure2_slot2 = result;
            backup = 1;
            entity = entity[backup];
            var _closure2_slot3 = entity;
            yankee = romeon.useState;
            entity = false;
            entity = yankee.bind(romeon)(entity);
            zuuluu = option.bind(report)(entity, zuuluu);
            entity = zuuluu[tangon];
            var _closure2_slot4 = entity;
            zuuluu = zuuluu[backup];
            var _closure2_slot5 = zuuluu;
            yankee = _closure1_slot9;
            option = yankee.useState;
            zuuluu = function(argFoo) {
                michal = argFoo;
                entity = michal.isTextInputValueEmpty;
                entity = entity.bind(michal)();
                return entity;
            };
            zuuluu = option.bind(yankee)(offset, zuuluu);
            var _closure2_slot6 = zuuluu;
            option = 12;
            option = verify[option];
            foxtra = golfie.bind(report)(option);
            yankee = foxtra.useFullscreenPlaceholderCount;
            option = {};
            kiloes = _closure1_slot12;
            option['placeholderHeight'] = kiloes;
            option['numColumns'] = backup;
            foxtra = yankee.bind(foxtra)(option);
            var _closure2_slot7 = foxtra;
            backup = romeon.useCallback;
            yankee = new Array(1);
            yankee[0] = offset;
            option = function() {
                zuuluu = _closure1_slot1;
                report = _closure1_slot2;
                michal = 13;
                tangon = report[michal];
                entity = undefined;
                golfie = zuuluu.bind(entity)(tangon);
                oscard = golfie.syncAutocomplete;
                tangon = _closure2_slot0;
                oscard = oscard.bind(golfie)(tangon);
                michal = report[michal];
                zuuluu = zuuluu.bind(entity)(michal);
                michal = zuuluu.fetchInitialMessages;
                michal = michal.bind(zuuluu)(tangon);
                return entity;
            };
            option = backup.bind(romeon)(option, yankee);
            var _closure2_slot8 = option;
            kiloes = romeon.useCallback;
            backup = new Array(2);
            backup[0] = option;
            backup[1] = offset;
            yankee = function(argFoo) {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    entity = argFoo;
                    var _closure3_slot0 = entity;
                    golfie = _closure1_slot9;
                    oscard = golfie.getState;
                    report = _closure2_slot0;
                    tangon = function(argFoo) {
                        michal = argFoo;
                        entity = michal.getPrefixTag;
                        entity = entity.bind(michal)();
                        return entity;
                    };
                    oscard = oscard.bind(golfie)(report, tangon);
                    tangon = null;
                    if(!(tangon != oscard)) { _fun00004_ip = 143; continue _fun00003 }
 48:
                    report = _closure1_slot9;
                    tangon = report.setState;
                    golfie = _closure2_slot0;
                    zuuluu = function(argFoo) {
                        zuuluu = argFoo;
                        michal = zuuluu.setTextInputValue;
                        entity = '';
                        entity = michal.bind(zuuluu)(entity);
                        michal = zuuluu.addTag;
                        entity = {};
                        tangon = _closure1_slot11;
                        tangon = tangon.ANSWER;
                        entity['type'] = tangon;
                        tangon = _closure3_slot0;
                        entity['text'] = tangon;
                        entity = michal.bind(zuuluu)(entity);
                        entity = undefined;
                        return entity;
                    };
                    zuuluu = tangon.bind(report)(golfie, zuuluu);
                    tangon = _closure1_slot0;
                    zuuluu = _closure1_slot2;
                    michal = 14;
                    zuuluu = zuuluu[michal];
                    michal = undefined;
                    report = tangon.bind(michal)(zuuluu);
                    tangon = report.trackSearchFilterAdd;
                    zuuluu = {};
                    zuuluu['searchContext'] = golfie;
                    golfie = oscard.searchTokenType;
                    zuuluu['searchTokenType'] = golfie;
                    oscard = oscard.location;
                    zuuluu['location'] = oscard;
                    zuuluu = tangon.bind(report)(zuuluu);
                    entity = _closure2_slot8;
                    entity = entity.bind(michal)();
 143:
                    entity = undefined;
                    return entity;
                }
            };
            kiloes = kiloes.bind(romeon)(yankee, backup);
            var _closure2_slot9 = kiloes;
            sizing = romeon.useCallback;
            backup = new Array(2);
            backup[0] = option;
            backup[1] = offset;
            yankee = function(argFoo) {
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    report = _closure1_slot8;
                    tangon = report.getUser;
                    entity = argFoo;
                    entity = tangon.bind(report)(entity);
                    var _closure3_slot0 = entity;
                    tangon = null;
                    if(!(tangon != entity)) { _fun00006_ip = 165; continue _fun00005 }
 36:
                    option = _closure1_slot9;
                    golfie = option.getState;
                    oscard = _closure2_slot0;
                    report = function(argFoo) {
                        michal = argFoo;
                        entity = michal.getPrefixTag;
                        entity = entity.bind(michal)();
                        return entity;
                    };
                    oscard = golfie.bind(option)(oscard, report);
                    if(!(tangon != oscard)) { _fun00006_ip = 165; continue _fun00005 }
 70:
                    report = _closure1_slot9;
                    tangon = report.setState;
                    golfie = _closure2_slot0;
                    zuuluu = function(argFoo) {
                        tangon = argFoo;
                        michal = tangon.setTextInputValue;
                        entity = '';
                        entity = michal.bind(tangon)(entity);
                        zuuluu = tangon.addTag;
                        michal = {};
                        report = _closure1_slot11;
                        report = report.ANSWER;
                        michal['type'] = report;
                        oscard = _closure1_slot1;
                        report = _closure1_slot2;
                        entity = 15;
                        report = report[entity];
                        entity = undefined;
                        golfie = oscard.bind(entity)(report);
                        oscard = golfie.getUserTag;
                        report = _closure3_slot0;
                        oscard = oscard.bind(golfie)(report);
                        michal['text'] = oscard;
                        report = report.id;
                        michal['userId'] = report;
                        michal = zuuluu.bind(tangon)(michal);
                        return entity;
                    };
                    zuuluu = tangon.bind(report)(golfie, zuuluu);
                    tangon = _closure1_slot0;
                    zuuluu = _closure1_slot2;
                    michal = 14;
                    zuuluu = zuuluu[michal];
                    michal = undefined;
                    report = tangon.bind(michal)(zuuluu);
                    tangon = report.trackSearchFilterAdd;
                    zuuluu = {};
                    zuuluu['searchContext'] = golfie;
                    golfie = oscard.searchTokenType;
                    zuuluu['searchTokenType'] = golfie;
                    oscard = oscard.location;
                    zuuluu['location'] = oscard;
                    zuuluu = tangon.bind(report)(zuuluu);
                    entity = _closure2_slot8;
                    entity = entity.bind(michal)();
 165:
                    entity = undefined;
                    return entity;
                }
            };
            backup = sizing.bind(romeon)(yankee, backup);
            var _closure2_slot10 = backup;
            sizing = romeon.useCallback;
            yankee = new Array(2);
            yankee[0] = option;
            yankee[1] = offset;
            option = function(argFoo) {
                _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                    report = argFoo;
                    var _closure3_slot0 = report;
                    tangon = _closure1_slot5;
                    entity = tangon.getChannel;
                    entity = entity.bind(tangon)(report);
                    var _closure3_slot1 = entity;
                    tangon = null;
                    if(!(tangon != entity)) { _fun00008_ip = 168; continue _fun00007 }
 39:
                    option = _closure1_slot9;
                    golfie = option.getState;
                    oscard = _closure2_slot0;
                    report = function(argFoo) {
                        michal = argFoo;
                        entity = michal.getPrefixTag;
                        entity = entity.bind(michal)();
                        return entity;
                    };
                    oscard = golfie.bind(option)(oscard, report);
                    if(!(tangon != oscard)) { _fun00008_ip = 168; continue _fun00007 }
 73:
                    report = _closure1_slot9;
                    tangon = report.setState;
                    golfie = _closure2_slot0;
                    zuuluu = function(argFoo) {
                        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                            zuuluu = argFoo;
                            michal = zuuluu.setTextInputValue;
                            entity = '';
                            entity = michal.bind(zuuluu)(entity);
                            michal = zuuluu.addTag;
                            entity = {};
                            tangon = _closure1_slot11;
                            tangon = tangon.ANSWER;
                            entity['type'] = tangon;
                            report = _closure3_slot1;
                            golfie = report.name;
                            oscard = golfie.includes;
                            report = ' ';
                            report = oscard.bind(golfie)(report);
                            oscard = _closure3_slot1;
                            option = oscard.name;
                            if(report) { _fun00010_ip = 86; continue _fun00009 }
 81:
                            report = option;
                            _fun00010_ip = 109; continue _fun00009;
 86:
                            oscard = global;
                            oscard = oscard.HermesInternal;
                            golfie = oscard.concat;
                            oscard = '"';
                            report = golfie.bind(oscard)(option, oscard);
 109:
                            entity['text'] = report;
                            tangon = _closure3_slot0;
                            entity['channelId'] = tangon;
                            entity = michal.bind(zuuluu)(entity);
                            entity = undefined;
                            return entity;
                        }
                    };
                    zuuluu = tangon.bind(report)(golfie, zuuluu);
                    tangon = _closure1_slot0;
                    zuuluu = _closure1_slot2;
                    michal = 14;
                    zuuluu = zuuluu[michal];
                    michal = undefined;
                    report = tangon.bind(michal)(zuuluu);
                    tangon = report.trackSearchFilterAdd;
                    zuuluu = {};
                    zuuluu['searchContext'] = golfie;
                    golfie = oscard.searchTokenType;
                    zuuluu['searchTokenType'] = golfie;
                    oscard = oscard.location;
                    zuuluu['location'] = oscard;
                    zuuluu = tangon.bind(report)(zuuluu);
                    entity = _closure2_slot8;
                    entity = entity.bind(michal)();
 168:
                    entity = undefined;
                    return entity;
                }
            };
            sizing = sizing.bind(romeon)(option, yankee);
            var _closure2_slot11 = sizing;
            echoed = romeon.useEffect;
            yankee = new Array(4);
            yankee[0] = offset;
            yankee[1] = sizing;
            yankee[2] = kiloes;
            yankee[3] = backup;
            option = function() {
                report = _closure1_slot9;
                tangon = report.subscribeTextInputValue;
                zuuluu = _closure2_slot0;
                michal = {};
                entity = true;
                michal['fireImmediately'] = entity;
                entity = function(argFoo, argBar) {
                    _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                        romeon = argFoo;
                        entity = argBar;
                        if(!(romeon !== entity)) { _fun00012_ip = 28; continue _fun00011 }
 12:
                        zuuluu = _closure2_slot5;
                        michal = undefined;
                        entity = true;
                        entity = zuuluu.bind(michal)(entity);
 28:
                        zuuluu = new Array(0);
                        var _closure4_slot0 = zuuluu;
                        oscard = function(argFoo) { // Original name: addItem
                            _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                                zuuluu = argFoo;
                                entity = null;
                                if(!(entity != zuuluu)) { _fun00014_ip = 26; continue _fun00013 }
 9:
                                michal = _closure4_slot0;
                                entity = michal.push;
                                entity = entity.bind(michal)(zuuluu);
 26:
                                entity = undefined;
                                return entity;
                            }
                        };
                        var _closure4_slot1 = oscard;
                        entity = romeon.trim;
                        michal = entity.bind(romeon)();
                        entity = '';
                        if(!(entity !== michal)) { _fun00012_ip = 290; continue _fun00011 }
 68:
                        golfie = _closure1_slot0;
                        entity = _closure1_slot2;
                        option = 16;
                        entity = entity[option];
                        michal = undefined;
                        offset = golfie.bind(michal)(entity);
                        verify = offset.isUserFilterPrefixAutocomplete;
                        golfie = _closure2_slot0;
                        golfie = verify.bind(offset)(golfie);
                        if(!golfie) { _fun00012_ip = 178; continue _fun00011 }
 114:
                        verify = _closure1_slot0;
                        golfie = _closure1_slot2;
                        offset = golfie[option];
                        yankee = verify.bind(michal)(offset);
                        offset = yankee.getUserExactMatch;
                        foxtra = _closure2_slot0;
                        yankee = offset.bind(yankee)(foxtra, romeon);
                        golfie = golfie[option];
                        offset = verify.bind(michal)(golfie);
                        verify = offset.toSearchListUserItem;
                        golfie = _closure2_slot10;
                        golfie = verify.bind(offset)(foxtra, yankee, golfie);
                        golfie = oscard.bind(michal)(golfie);
 178:
                        verify = _closure1_slot0;
                        golfie = _closure1_slot2;
                        golfie = golfie[option];
                        offset = verify.bind(michal)(golfie);
                        verify = offset.isChannelFilterPrefixAutocomplete;
                        golfie = _closure2_slot0;
                        golfie = verify.bind(offset)(golfie);
                        if(!golfie) { _fun00012_ip = 276; continue _fun00011 }
 213:
                        golfie = _closure1_slot0;
                        report = _closure1_slot2;
                        verify = report[option];
                        yankee = golfie.bind(michal)(verify);
                        offset = yankee.getChannelExactMatch;
                        verify = _closure2_slot0;
                        verify = offset.bind(yankee)(verify, romeon);
                        report = report[option];
                        option = golfie.bind(michal)(report);
                        golfie = option.toSearchListChannelItem;
                        report = _closure2_slot11;
                        report = golfie.bind(option)(verify, report);
                        report = oscard.bind(michal)(report);
 276:
                        entity = _closure2_slot3;
                        entity = entity.bind(michal)(zuuluu);
                        _fun00012_ip = 478; continue _fun00011;
 290:
                        oscard = _closure1_slot0;
                        entity = _closure1_slot2;
                        golfie = 16;
                        entity = entity[golfie];
                        michal = undefined;
                        verify = oscard.bind(michal)(entity);
                        option = verify.isUserFilterPrefixAutocomplete;
                        oscard = _closure2_slot0;
                        oscard = option.bind(verify)(oscard);
                        if(!oscard) { _fun00012_ip = 385; continue _fun00011 }
 336:
                        option = _closure1_slot0;
                        oscard = _closure1_slot2;
                        oscard = oscard[golfie];
                        verify = option.bind(michal)(oscard);
                        option = verify.getUserEmptyState;
                        oscard = _closure2_slot0;
                        verify = option.bind(verify)(oscard);
                        option = verify.forEach;
                        oscard = function(argFoo) {
                            zuuluu = _closure4_slot1;
                            tangon = _closure1_slot0;
                            michal = _closure1_slot2;
                            entity = 16;
                            entity = michal[entity];
                            michal = undefined;
                            golfie = tangon.bind(michal)(entity);
                            oscard = golfie.toSearchListUserItem;
                            report = _closure2_slot0;
                            tangon = _closure2_slot10;
                            entity = argFoo;
                            entity = oscard.bind(golfie)(report, entity, tangon);
                            entity = zuuluu.bind(michal)(entity);
                            return entity;
                        };
                        oscard = option.bind(verify)(oscard);
 385:
                        option = _closure1_slot0;
                        oscard = _closure1_slot2;
                        oscard = oscard[golfie];
                        verify = option.bind(michal)(oscard);
                        option = verify.isChannelFilterPrefixAutocomplete;
                        oscard = _closure2_slot0;
                        oscard = option.bind(verify)(oscard);
                        if(!oscard) { _fun00012_ip = 469; continue _fun00011 }
 420:
                        oscard = _closure1_slot0;
                        report = _closure1_slot2;
                        report = report[golfie];
                        golfie = oscard.bind(michal)(report);
                        oscard = golfie.getChannelEmptyState;
                        report = _closure2_slot0;
                        oscard = oscard.bind(golfie)(report);
                        report = oscard.forEach;
                        tangon = function(argFoo) {
                            zuuluu = _closure4_slot1;
                            tangon = _closure1_slot0;
                            michal = _closure1_slot2;
                            entity = 16;
                            entity = michal[entity];
                            michal = undefined;
                            oscard = tangon.bind(michal)(entity);
                            report = oscard.toSearchListChannelItem;
                            tangon = _closure2_slot11;
                            entity = argFoo;
                            entity = report.bind(oscard)(entity, tangon);
                            entity = zuuluu.bind(michal)(entity);
                            return entity;
                        };
                        tangon = report.bind(oscard)(tangon);
 469:
                        entity = _closure2_slot3;
                        entity = entity.bind(michal)(zuuluu);
 478:
                        entity = undefined;
                        return entity;
                    }
                };
                entity = tangon.bind(report)(zuuluu, entity, michal);
                return entity;
            };
            option = echoed.bind(romeon)(option, yankee);
            echoed = romeon.useEffect;
            yankee = new Array(1);
            yankee[0] = output;
            option = function() {
                zuuluu = _closure2_slot5;
                entity = undefined;
                michal = false;
                michal = zuuluu.bind(entity)(michal);
                return entity;
            };
            option = echoed.bind(romeon)(option, yankee);
            yankee = romeon.useMemo;
            option = new Array(9);
            option[0] = result;
            option[1] = output;
            option[2] = sizing;
            option[3] = kiloes;
            option[4] = backup;
            option[5] = zuuluu;
            option[6] = entity;
            option[7] = foxtra;
            option[8] = offset;
            oscard = function() {
                _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                    entity = new Array(0);
                    var _closure3_slot0 = entity;
                    zuuluu = _closure2_slot4;
                    if(zuuluu) { _fun00016_ip = 266; continue _fun00015 }
 23:
                    offset = global;
                    foxtra = offset.Set;
                    option = _closure1_slot0;
                    verify = _closure1_slot2;
                    tangon = 16;
                    oscard = verify[tangon];
                    report = undefined;
                    romeon = option.bind(report)(oscard);
                    yankee = romeon.getSearchQueryUserIds;
                    oscard = _closure2_slot0;
                    backup = yankee.bind(romeon)(oscard);
                    romeon = foxtra.prototype;
                    romeon = Object.create(romeon, {constructor: {value: foxtra}});
                    kiloes = romeon;
                    yankee = new kiloes[foxtra](backup, foxtra);
                    yankee = yankee instanceof Object ? yankee : romeon;
                    var _closure3_slot1 = yankee;
                    romeon = offset.Set;
                    offset = verify[tangon];
                    yankee = option.bind(report)(offset);
                    offset = yankee.getSearchQueryChannelIds;
                    backup = offset.bind(yankee)(oscard);
                    yankee = romeon.prototype;
                    yankee = Object.create(yankee, {constructor: {value: romeon}});
                    kiloes = yankee;
                    offset = new kiloes[romeon](backup, foxtra);
                    offset = offset instanceof Object ? offset : yankee;
                    var _closure3_slot2 = offset;
                    offset = function(argFoo) { // Original name: maybeAddUserItem
                        _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                            tangon = argFoo;
                            zuuluu = null;
                            michal = zuuluu == tangon;
                            entity = undefined;
                            oscard = undefined;
                            if(michal) { _fun00018_ip = 31; continue _fun00017 }
 16:
                            michal = tangon.props;
                            michal = michal.user;
                            oscard = michal.id;
 31:
                            michal = zuuluu == tangon;
                            if(michal) { _fun00018_ip = 42; continue _fun00017 }
 38:
                            michal = zuuluu == oscard;
 42:
                            if(michal) { _fun00018_ip = 62; continue _fun00017 }
 45:
                            report = _closure3_slot1;
                            zuuluu = report.has;
                            michal = zuuluu.bind(report)(oscard);
 62:
                            if(michal) { _fun00018_ip = 83; continue _fun00017 }
 65:
                            report = _closure1_slot6;
                            zuuluu = report.isBlockedOrIgnored;
                            michal = zuuluu.bind(report)(oscard);
 83:
                            if(michal) { _fun00018_ip = 117; continue _fun00017 }
 86:
                            report = _closure3_slot1;
                            zuuluu = report.add;
                            zuuluu = zuuluu.bind(report)(oscard);
                            zuuluu = _closure3_slot0;
                            michal = zuuluu.push;
                            michal = michal.bind(zuuluu)(tangon);
 117:
                            return entity;
                        }
                    };
                    var _closure3_slot3 = offset;
                    offset = function(argFoo) { // Original name: maybeAddChannelItem
                        _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
                            tangon = argFoo;
                            zuuluu = null;
                            michal = zuuluu == tangon;
                            entity = undefined;
                            oscard = undefined;
                            if(michal) { _fun00020_ip = 31; continue _fun00019 }
 16:
                            michal = tangon.props;
                            michal = michal.channel;
                            oscard = michal.id;
 31:
                            michal = zuuluu == tangon;
                            if(michal) { _fun00020_ip = 42; continue _fun00019 }
 38:
                            michal = zuuluu == oscard;
 42:
                            if(michal) { _fun00020_ip = 62; continue _fun00019 }
 45:
                            report = _closure3_slot2;
                            zuuluu = report.has;
                            michal = zuuluu.bind(report)(oscard);
 62:
                            if(michal) { _fun00020_ip = 96; continue _fun00019 }
 65:
                            report = _closure3_slot2;
                            zuuluu = report.add;
                            zuuluu = zuuluu.bind(report)(oscard);
                            zuuluu = _closure3_slot0;
                            michal = zuuluu.push;
                            michal = michal.bind(zuuluu)(tangon);
 96:
                            return entity;
                        }
                    };
                    var _closure3_slot4 = offset;
                    tangon = verify[tangon];
                    report = option.bind(report)(tangon);
                    tangon = report.isHasFilterPrefixAutocomplete;
                    report = tangon.bind(report)(oscard);
                    var _closure3_slot5 = report;
                    tangon = _closure2_slot6;
                    if(!tangon) { _fun00016_ip = 201; continue _fun00015 }
 198:
                    tangon = !report;
 201:
                    if(tangon) { _fun00016_ip = 225; continue _fun00015 }
 204:
                    oscard = _closure2_slot1;
                    report = oscard.forEach;
                    tangon = function(argFoo) {
                        _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
                            zuuluu = argFoo;
                            report = _closure1_slot0;
                            tangon = _closure1_slot2;
                            entity = 11;
                            tangon = tangon[entity];
                            entity = undefined;
                            report = report.bind(entity)(tangon);
                            tangon = report.isNonEmptyAutocompleteGroup;
                            tangon = tangon.bind(report)(zuuluu);
                            if(!tangon) { _fun00022_ip = 108; continue _fun00021 }
 42:
                            report = zuuluu.group;
                            tangon = zuuluu.results;
                            zuuluu = global;
                            oscard = zuuluu.Object;
                            zuuluu = oscard.values;
                            michal = _closure1_slot13;
                            zuuluu = zuuluu.bind(oscard)(michal);
                            michal = zuuluu.includes;
                            michal = michal.bind(zuuluu)(report);
                            if(!michal) { _fun00022_ip = 108; continue _fun00021 }
 89:
                            zuuluu = tangon.forEach;
                            michal = function(argFoo) {
                                _fun00023: for(var _fun00024_ip = 0; ; ) switch(_fun00024_ip) {
 0:
                                    entity = argFoo;
                                    foxtra = entity.user;
                                    option = entity.channel;
                                    verify = entity.text;
                                    tangon = _closure1_slot0;
                                    zuuluu = _closure1_slot2;
                                    offset = 16;
                                    michal = zuuluu[offset];
                                    entity = undefined;
                                    romeon = tangon.bind(entity)(michal);
                                    yankee = romeon.toSearchListUserItem;
                                    report = _closure2_slot0;
                                    michal = _closure2_slot10;
                                    yankee = yankee.bind(romeon)(report, foxtra, michal);
                                    report = _closure3_slot3;
                                    report = report.bind(entity)(yankee);
                                    zuuluu = zuuluu[offset];
                                    report = tangon.bind(entity)(zuuluu);
                                    tangon = report.toSearchListChannelItem;
                                    zuuluu = _closure2_slot11;
                                    tangon = tangon.bind(report)(option, zuuluu);
                                    zuuluu = _closure3_slot4;
                                    zuuluu = zuuluu.bind(entity)(tangon);
                                    zuuluu = _closure3_slot5;
                                    if(!zuuluu) { _fun00024_ip = 126; continue _fun00023 }
 120:
                                    tangon = null;
                                    zuuluu = tangon != verify;
 126:
                                    if(!zuuluu) { _fun00024_ip = 209; continue _fun00023 }
 129:
                                    tangon = _closure3_slot0;
                                    zuuluu = tangon.push;
                                    michal = {};
                                    report = _closure1_slot10;
                                    report = report.GENERIC;
                                    michal['type'] = report;
                                    report = {};
                                    report['text'] = verify;
                                    option = _closure1_slot0;
                                    golfie = _closure1_slot2;
                                    golfie = golfie[offset];
                                    option = option.bind(entity)(golfie);
                                    golfie = option.getSearchFilterHasIcon;
                                    golfie = golfie.bind(option)(verify);
                                    report['icon'] = golfie;
                                    oscard = _closure2_slot9;
                                    report['onPress'] = oscard;
                                    michal['props'] = report;
                                    michal = zuuluu.bind(tangon)(michal);
 209:
                                    return entity;
                                }
                            };
                            michal = zuuluu.bind(tangon)(michal);
 108:
                            return entity;
                        }
                    };
                    tangon = report.bind(oscard)(tangon);
 225:
                    report = _closure2_slot2;
                    tangon = report.forEach;
                    michal = function(argFoo) {
                        _fun00025: for(var _fun00026_ip = 0; ; ) switch(_fun00026_ip) {
 0:
                            zuuluu = argFoo;
                            tangon = zuuluu.type;
                            michal = _closure1_slot10;
                            michal = michal.DM;
                            if(!(tangon !== michal)) { _fun00026_ip = 60; continue _fun00025 }
 25:
                            michal = zuuluu.type;
                            entity = _closure1_slot10;
                            entity = entity.GUILD_TEXT_CHANNEL;
                            if(!(michal === entity)) { _fun00026_ip = 74; continue _fun00025 }
 44:
                            michal = _closure3_slot4;
                            entity = undefined;
                            entity = michal.bind(entity)(zuuluu);
                            _fun00026_ip = 74; continue _fun00025;
 60:
                            michal = _closure3_slot3;
                            entity = undefined;
                            entity = michal.bind(entity)(zuuluu);
 74:
                            entity = undefined;
                            return entity;
                        }
                    };
                    michal = tangon.bind(report)(michal);
                    report = entity.length;
                    tangon = 0;
                    michal = entity;
                    if(!(!(report > tangon))) { _fun00016_ip = 264; continue _fun00015 }
 260:
                    michal = _closure1_slot15;
 264:
                    return michal;
 266:
                    michal = _closure2_slot7;
                    oscard = 0;
                    michal = oscard < michal;
                    tangon = global;
                    zuuluu = 'message-placeholder-';
                    if(!michal) { _fun00016_ip = 347; continue _fun00015 }
 290:
                    option = entity.push;
                    michal = {};
                    verify = _closure1_slot10;
                    verify = verify.MESSAGE_PLACEHOLDER;
                    michal['type'] = verify;
                    verify = tangon.HermesInternal;
                    verify = verify.concat;
                    verify = verify.bind(zuuluu)(oscard);
                    michal['key'] = verify;
                    michal = option.bind(entity)(michal);
                    oscard = oscard + 1;
                    michal = _closure2_slot7;
                    if(oscard < michal) { _fun00016_ip = 290; continue _fun00015 }
 347:
                    return entity;
                }
            };
            option = yankee.bind(romeon)(oscard, option);
            oscard = 17;
            oscard = verify[oscard];
            verify = golfie.bind(report)(oscard);
            golfie = verify.useMessageTabCountsErrorText;
            oscard = {};
            oscard['searchContext'] = offset;
            oscard = golfie.bind(verify)(oscard);
            golfie = null;
            if(!(golfie == oscard)) { _fun00002_ip = 811; continue _fun00001 }
 552:
            if(!zuuluu) { _fun00002_ip = 567; continue _fun00001 }
 555:
            golfie = option.length;
            if(!(tangon !== golfie)) { _fun00002_ip = 720; continue _fun00001 }
 567:
            if(zuuluu) { _fun00002_ip = 673; continue _fun00001 }
 570:
            zuuluu = option.length;
            if(!(tangon === zuuluu)) { _fun00002_ip = 673; continue _fun00001 }
 579:
            if(entity) { _fun00002_ip = 673; continue _fun00001 }
 582:
            tangon = _closure1_slot14;
            zuuluu = _closure1_slot1;
            romeon = _closure1_slot2;
            entity = 18;
            entity = romeon[entity];
            zuuluu = zuuluu.bind(report)(entity);
            entity = {};
            yankee = _closure1_slot0;
            golfie = 19;
            verify = romeon[golfie];
            verify = yankee.bind(report)(verify);
            offset = verify.intl;
            verify = offset.string;
            golfie = romeon[golfie];
            golfie = yankee.bind(report)(golfie);
            golfie = golfie.t;
            golfie = golfie.Dr1vkp;
            golfie = verify.bind(offset)(golfie);
            entity['text'] = golfie;
            entity = tangon.bind(report)(zuuluu, entity);
            _fun00002_ip = 718; continue _fun00001;
 673:
            golfie = _closure1_slot14;
            tangon = _closure1_slot1;
            verify = _closure1_slot2;
            zuuluu = 20;
            zuuluu = verify[zuuluu];
            tangon = tangon.bind(report)(zuuluu);
            zuuluu = {};
            verify = _closure1_slot12;
            zuuluu['estimatedItemSize'] = verify;
            zuuluu['data'] = option;
            entity = golfie.bind(report)(tangon, zuuluu);
 718:
            _fun00002_ip = 809; continue _fun00001;
 720:
            golfie = _closure1_slot14;
            tangon = _closure1_slot1;
            romeon = _closure1_slot2;
            zuuluu = 18;
            zuuluu = romeon[zuuluu];
            tangon = tangon.bind(report)(zuuluu);
            zuuluu = {};
            yankee = _closure1_slot0;
            option = 19;
            verify = romeon[option];
            verify = yankee.bind(report)(verify);
            offset = verify.intl;
            verify = offset.string;
            option = romeon[option];
            option = yankee.bind(report)(option);
            option = option.t;
            option = option.E4HqQ0;
            option = verify.bind(offset)(option);
            zuuluu['text'] = option;
            entity = golfie.bind(report)(tangon, zuuluu);
 809:
            _fun00002_ip = 847; continue _fun00001;
 811:
            tangon = _closure1_slot14;
            zuuluu = _closure1_slot1;
            golfie = _closure1_slot2;
            michal = 18;
            michal = golfie[michal];
            zuuluu = zuuluu.bind(report)(michal);
            michal = {};
            michal['text'] = oscard;
            entity = tangon.bind(report)(zuuluu, michal);
 847:
            return entity;
        }
    };
    michal = tangon.bind(golfie)(michal);
    tangon = 21;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/search_v2/native/components/layout/autocomplete/AutocompleteScreen.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();