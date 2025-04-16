// app/modules/main_tabs_v2/native/shared_components/happening_now/happeningNowRankingUtils.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    oscard = argBar;
    report = argBaz;
    zuuluu = argFre;
    golfie = argPlu;
    var _closure1_slot0 = oscard;
    var _closure1_slot1 = report;
    var _closure1_slot2 = golfie;
    entity = global;
    verify = entity.Object;
    option = verify.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, tangon);
    entity = 0;
    tangon = golfie[entity];
    entity = undefined;
    tangon = report.bind(entity)(tangon);
    var _closure1_slot3 = tangon;
    tangon = 1;
    tangon = golfie[tangon];
    tangon = report.bind(entity)(tangon);
    var _closure1_slot4 = tangon;
    tangon = 2;
    tangon = golfie[tangon];
    tangon = oscard.bind(entity)(tangon);
    report = tangon.HAPPENING_NOW_CARD_WIDTH_NORMAL_WITH_MARGIN;
    var _closure1_slot5 = report;
    report = tangon.HAPPENING_NOW_CARD_WIDTH_SMALL_WITH_MARGIN;
    var _closure1_slot6 = report;
    tangon = tangon.HAPPENING_NOW_CARD_WIDTH_XSMALL_WITH_MARGIN;
    var _closure1_slot7 = tangon;
    tangon = function(argFoo) { // Original name: cardSize
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            tangon = argFoo;
            michal = tangon.kind;
            entity = 'placeholder';
            if(!(entity !== michal)) { _fun00002_ip = 202; continue _fun00001 }
 19:
            entity = 'voice';
            if(!(entity !== michal)) { _fun00002_ip = 202; continue _fun00001 }
 30:
            entity = 'activity';
            if(!(entity !== michal)) { _fun00002_ip = 202; continue _fun00001 }
 41:
            entity = 'guild-event';
            if(!(entity !== michal)) { _fun00002_ip = 202; continue _fun00001 }
 54:
            entity = 'active-channel';
            if(!(entity !== michal)) { _fun00002_ip = 202; continue _fun00001 }
 67:
            entity = 'live-guild-stage';
            if(!(entity !== michal)) { _fun00002_ip = 202; continue _fun00001 }
 80:
            entity = 'embedded-activity';
            if(!(entity !== michal)) { _fun00002_ip = 202; continue _fun00001 }
 90:
            entity = 'unified-vc';
            if(!(entity !== michal)) { _fun00002_ip = 202; continue _fun00001 }
 100:
            entity = 'user';
            if(!(entity !== michal)) { _fun00002_ip = 193; continue _fun00001 }
 108:
            entity = 'invite';
            if(!(entity !== michal)) { _fun00002_ip = 184; continue _fun00001 }
 116:
            entity = 'create-channel';
            if(!(entity !== michal)) { _fun00002_ip = 184; continue _fun00001 }
 126:
            entity = 'customize-guild';
            if(!(entity !== michal)) { _fun00002_ip = 184; continue _fun00001 }
 136:
            entity = 'student-hub-add-channel';
            if(!(entity !== michal)) { _fun00002_ip = 184; continue _fun00001 }
 146:
            zuuluu = _closure1_slot0;
            michal = _closure1_slot2;
            entity = 3;
            michal = michal[entity];
            entity = undefined;
            zuuluu = zuuluu.bind(entity)(michal);
            michal = zuuluu.assertNever;
            michal = michal.bind(zuuluu)(tangon);
            return entity;
 184:
            entity = _closure1_slot6;
            return entity;
 193:
            entity = _closure1_slot7;
            return entity;
 202:
            entity = _closure1_slot5;
            return entity;
        }
    };
    var _closure1_slot8 = tangon;
    report = 5;
    report = golfie[report];
    golfie = oscard.bind(entity)(report);
    oscard = golfie.fileFinishedImporting;
    report = 'modules/main_tabs_v2/native/shared_components/happening_now/happeningNowRankingUtils.tsx';
    report = oscard.bind(golfie)(report);
    zuuluu['cardSize'] = tangon;
    tangon = {'Stage': 7, 'Voice': 6, 'Stream': 5, 'Game': 4, 'Listening': 3, 'CustomStatus': 3, 'User': 2, 'Base': 1};
    zuuluu['HappeningNowWeights'] = tangon;
    tangon = -1000;
    zuuluu['HAPPENING_NOW_OFFLINE_PENALTY'] = tangon;
    tangon = function(argFoo) { // Original name: filterHappeningNowCards
        zuuluu = argFoo;
        michal = function(argFoo) { // Original name: hasNoDiscoverableVoiceStates
            zuuluu = function(argFoo) { // Original name: cardHasNoDiscoverableVoiceStates
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    michal = argFoo;
                    entity = 'voiceState';
                    entity = entity in michal;
                    if(!entity) { _fun00004_ip = 117; continue _fun00003 }
 14:
                    zuuluu = michal.voiceState;
                    entity = null;
                    if(!(entity != zuuluu)) { _fun00004_ip = 117; continue _fun00003 }
 26:
                    michal = michal.voiceState;
                    report = michal.channelId;
                    if(!(entity != report)) { _fun00004_ip = 113; continue _fun00003 }
 41:
                    entity = global;
                    zuuluu = entity.Object;
                    michal = zuuluu.values;
                    tangon = _closure1_slot4;
                    entity = tangon.getVoiceStatesForChannel;
                    entity = entity.bind(tangon)(report);
                    tangon = michal.bind(zuuluu)(entity);
                    michal = tangon.length;
                    entity = 0;
                    entity = michal > entity;
                    if(!entity) { _fun00004_ip = 111; continue _fun00003 }
 91:
                    zuuluu = tangon.every;
                    michal = function(argFoo) {
                        entity = argFoo;
                        michal = entity.discoverable;
                        entity = false;
                        entity = entity === michal;
                        return entity;
                    };
                    entity = zuuluu.bind(tangon)(michal);
 111:
                    return entity;
 113:
                    entity = false;
                    return entity;
 117:
                    entity = false;
                    return entity;
                }
            };
            michal = undefined;
            entity = argFoo;
            entity = zuuluu.bind(michal)(entity);
            return entity;
        };
        var _closure2_slot0 = michal;
        michal = function(argFoo) { // Original name: hasBlockedOrIgnoredUserInChannel
            zuuluu = function(argFoo) { // Original name: cardHasBlockedOrIgnoredUserInVoiceChannel
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    zuuluu = argFoo;
                    entity = 'voiceState';
                    entity = entity in zuuluu;
                    if(!entity) { _fun00006_ip = 177; continue _fun00005 }
 19:
                    tangon = zuuluu.voiceState;
                    entity = null;
                    if(!(entity != tangon)) { _fun00006_ip = 177; continue _fun00005 }
 34:
                    zuuluu = zuuluu.voiceState;
                    oscard = zuuluu.channelId;
                    if(!(entity != oscard)) { _fun00006_ip = 173; continue _fun00005 }
 52:
                    report = _closure1_slot4;
                    tangon = report.getVoiceStatesForChannel;
                    report = tangon.bind(report)(oscard);
                    entity = entity != report;
                    if(!entity) { _fun00006_ip = 171; continue _fun00005 }
 77:
                    oscard = _closure1_slot1;
                    option = _closure1_slot2;
                    tangon = 4;
                    tangon = option[tangon];
                    golfie = undefined;
                    tangon = oscard.bind(golfie)(tangon);
                    oscard = tangon.bind(golfie)(report);
                    report = oscard.map;
                    tangon = function(argFoo) {
                        entity = argFoo;
                        entity = entity.userId;
                        return entity;
                    };
                    report = report.bind(oscard)(tangon);
                    tangon = report.filter;
                    oscard = _closure1_slot0;
                    zuuluu = 3;
                    zuuluu = option[zuuluu];
                    zuuluu = oscard.bind(golfie)(zuuluu);
                    zuuluu = zuuluu.isNotNullish;
                    tangon = tangon.bind(report)(zuuluu);
                    zuuluu = tangon.some;
                    michal = function(argFoo) {
                        zuuluu = _closure1_slot3;
                        michal = zuuluu.isBlockedOrIgnored;
                        entity = argFoo;
                        entity = michal.bind(zuuluu)(entity);
                        return entity;
                    };
                    entity = zuuluu.bind(tangon)(michal);
 171:
                    return entity;
 173:
                    entity = false;
                    return entity;
 177:
                    entity = false;
                    return entity;
                }
            };
            michal = undefined;
            entity = argFoo;
            entity = zuuluu.bind(michal)(entity);
            return entity;
        };
        var _closure2_slot1 = michal;
        michal = zuuluu.filter;
        entity = function(argFoo) {
            _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                tangon = argFoo;
                entity = _closure2_slot0;
                zuuluu = undefined;
                entity = entity.bind(zuuluu)(tangon);
                entity = !entity;
                if(!entity) { _fun00008_ip = 35; continue _fun00007 }
 23:
                michal = _closure2_slot1;
                michal = michal.bind(zuuluu)(tangon);
                entity = !michal;
 35:
                return entity;
            }
        };
        entity = michal.bind(zuuluu)(entity);
        return entity;
    };
    zuuluu['filterHappeningNowCards'] = tangon;
    michal = function(argFoo) { // Original name: sortHappeningNowCards
        tangon = _closure1_slot0;
        zuuluu = _closure1_slot2;
        michal = 4;
        zuuluu = zuuluu[michal];
        michal = undefined;
        report = tangon.bind(michal)(zuuluu);
        tangon = report.orderBy;
        zuuluu = new Array(2);
        michal = function(argFoo) {
            _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                tangon = _closure1_slot8;
                zuuluu = undefined;
                michal = argFoo;
                zuuluu = tangon.bind(zuuluu)(michal);
                michal = _closure1_slot5;
                entity = 1;
                if(!(zuuluu === michal)) { _fun00010_ip = 30; continue _fun00009 }
 28:
                entity = 0;
 30:
                return entity;
            }
        };
        zuuluu[0] = michal;
        entity = function(argFoo) {
            zuuluu = function(argFoo) { // Original name: cardHasNonDiscoverableVoiceStates
                _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                    michal = argFoo;
                    entity = 'voiceState';
                    entity = entity in michal;
                    if(!entity) { _fun00012_ip = 118; continue _fun00011 }
 14:
                    zuuluu = michal.voiceState;
                    entity = null;
                    if(!(entity != zuuluu)) { _fun00012_ip = 118; continue _fun00011 }
 26:
                    michal = michal.voiceState;
                    tangon = michal.discoverable;
                    zuuluu = false;
                    if(!(zuuluu !== tangon)) { _fun00012_ip = 114; continue _fun00011 }
 44:
                    oscard = michal.channelId;
                    entity = entity != oscard;
                    if(!entity) { _fun00012_ip = 112; continue _fun00011 }
 56:
                    michal = global;
                    tangon = michal.Object;
                    zuuluu = tangon.values;
                    report = _closure1_slot4;
                    michal = report.getVoiceStatesForChannel;
                    michal = michal.bind(report)(oscard);
                    tangon = zuuluu.bind(tangon)(michal);
                    zuuluu = tangon.some;
                    michal = function(argFoo) {
                        entity = argFoo;
                        michal = entity.discoverable;
                        entity = false;
                        entity = entity === michal;
                        return entity;
                    };
                    entity = zuuluu.bind(tangon)(michal);
 112:
                    return entity;
 114:
                    entity = true;
                    return entity;
 118:
                    entity = false;
                    return entity;
                }
            };
            michal = undefined;
            entity = argFoo;
            entity = zuuluu.bind(michal)(entity);
            return entity;
        };
        zuuluu[1] = entity;
        michal = argFoo;
        entity = ['asc', 'asc'];
        entity = tangon.bind(report)(michal, zuuluu, entity);
        return entity;
    };
    zuuluu['sortHappeningNowCards'] = michal;
    return entity;
})();