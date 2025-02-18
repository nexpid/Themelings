// app/modules/main_tabs_v2/native/shared_components/happening_now/happeningNowRankingUtils.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    oscard = argBar;
    report = argBaz;
    zuuluu = argFre;
    golfie = argPlu;
    var _closure1_slot0 = oscard;
    var _closure1_slot1 = report;
    var _closure1_slot2 = golfie;
    entity = function(argFoo) { // Original name: cardHasNoDiscoverableVoiceStates
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            michal = argFoo;
            entity = 'voiceState';
            entity = entity in michal;
            if(!entity) { _fun00002_ip = 117; continue _fun00001 }
 14:
            zuuluu = michal.voiceState;
            entity = null;
            if(!(entity != zuuluu)) { _fun00002_ip = 117; continue _fun00001 }
 26:
            michal = michal.voiceState;
            report = michal.channelId;
            if(!(entity != report)) { _fun00002_ip = 113; continue _fun00001 }
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
            if(!entity) { _fun00002_ip = 111; continue _fun00001 }
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
    var _closure1_slot10 = entity;
    entity = function(argFoo) { // Original name: cardHasBlockedOrIgnoredUserInVoiceChannel
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            zuuluu = argFoo;
            entity = 'voiceState';
            entity = entity in zuuluu;
            if(!entity) { _fun00004_ip = 177; continue _fun00003 }
 19:
            tangon = zuuluu.voiceState;
            entity = null;
            if(!(entity != tangon)) { _fun00004_ip = 177; continue _fun00003 }
 34:
            zuuluu = zuuluu.voiceState;
            oscard = zuuluu.channelId;
            if(!(entity != oscard)) { _fun00004_ip = 173; continue _fun00003 }
 52:
            report = _closure1_slot4;
            tangon = report.getVoiceStatesForChannel;
            report = tangon.bind(report)(oscard);
            entity = entity != report;
            if(!entity) { _fun00004_ip = 171; continue _fun00003 }
 77:
            oscard = _closure1_slot1;
            option = _closure1_slot2;
            tangon = 5;
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
            zuuluu = 4;
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
    var _closure1_slot11 = entity;
    entity = function(argFoo) { // Original name: cardHasNonDiscoverableVoiceStates
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            michal = argFoo;
            entity = 'voiceState';
            entity = entity in michal;
            if(!entity) { _fun00006_ip = 118; continue _fun00005 }
 14:
            zuuluu = michal.voiceState;
            entity = null;
            if(!(entity != zuuluu)) { _fun00006_ip = 118; continue _fun00005 }
 26:
            michal = michal.voiceState;
            tangon = michal.discoverable;
            zuuluu = false;
            if(!(zuuluu !== tangon)) { _fun00006_ip = 114; continue _fun00005 }
 44:
            oscard = michal.channelId;
            entity = entity != oscard;
            if(!entity) { _fun00006_ip = 112; continue _fun00005 }
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
    var _closure1_slot12 = entity;
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
    tangon = 3;
    tangon = golfie[tangon];
    tangon = oscard.bind(entity)(tangon);
    tangon = tangon.AnalyticEvents;
    var _closure1_slot8 = tangon;
    tangon = function(argFoo) { // Original name: cardSize
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            tangon = argFoo;
            michal = tangon.kind;
            entity = 'placeholder';
            if(!(entity !== michal)) { _fun00008_ip = 202; continue _fun00007 }
 19:
            entity = 'voice';
            if(!(entity !== michal)) { _fun00008_ip = 202; continue _fun00007 }
 30:
            entity = 'activity';
            if(!(entity !== michal)) { _fun00008_ip = 202; continue _fun00007 }
 41:
            entity = 'guild-event';
            if(!(entity !== michal)) { _fun00008_ip = 202; continue _fun00007 }
 54:
            entity = 'active-channel';
            if(!(entity !== michal)) { _fun00008_ip = 202; continue _fun00007 }
 67:
            entity = 'live-guild-stage';
            if(!(entity !== michal)) { _fun00008_ip = 202; continue _fun00007 }
 80:
            entity = 'embedded-activity';
            if(!(entity !== michal)) { _fun00008_ip = 202; continue _fun00007 }
 90:
            entity = 'unified-vc';
            if(!(entity !== michal)) { _fun00008_ip = 202; continue _fun00007 }
 100:
            entity = 'user';
            if(!(entity !== michal)) { _fun00008_ip = 193; continue _fun00007 }
 108:
            entity = 'invite';
            if(!(entity !== michal)) { _fun00008_ip = 184; continue _fun00007 }
 116:
            entity = 'create-channel';
            if(!(entity !== michal)) { _fun00008_ip = 184; continue _fun00007 }
 126:
            entity = 'customize-guild';
            if(!(entity !== michal)) { _fun00008_ip = 184; continue _fun00007 }
 136:
            entity = 'student-hub-add-channel';
            if(!(entity !== michal)) { _fun00008_ip = 184; continue _fun00007 }
 146:
            zuuluu = _closure1_slot0;
            michal = _closure1_slot2;
            entity = 4;
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
    var _closure1_slot9 = tangon;
    report = 9;
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
    tangon = function(argFoo, argBar) { // Original name: maybeFilterHappeningNowCards
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            tangon = argFoo;
            entity = argBar;
            report = entity.blockeeExperimentEnabled;
            zuuluu = entity.blockerExperimentEnabled;
            entity = entity.analyticsEligible;
            oscard = {};
            oscard['blockeeExperimentEnabled'] = report;
            oscard['blockerExperimentEnabled'] = zuuluu;
            oscard['analyticsEligible'] = entity;
            report = function(argFoo, argBar) { // Original name: trackBlockingOrIgnoredVoiceStatesAnalytics
                _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                    zuuluu = argFoo;
                    michal = argBar;
                    tangon = michal.blockerExperimentEnabled;
                    var _closure3_slot0 = tangon;
                    tangon = michal.blockeeExperimentEnabled;
                    var _closure3_slot1 = tangon;
                    michal = michal.analyticsEligible;
                    if(!michal) { _fun00012_ip = 54; continue _fun00011 }
 37:
                    michal = zuuluu.forEach;
                    entity = function(argFoo) {
                        _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                            romeon = argFoo;
                            entity = 'voiceState';
                            entity = entity in romeon;
                            if(!entity) { _fun00014_ip = 529; continue _fun00013 }
 19:
                            michal = romeon.voiceState;
                            entity = null;
                            if(!(entity != michal)) { _fun00014_ip = 529; continue _fun00013 }
 34:
                            michal = romeon.voiceState;
                            oscard = michal.channelId;
                            if(!(entity == oscard)) { _fun00014_ip = 53; continue _fun00013 }
 49:
                            yankee = {};
                            _fun00014_ip = 71; continue _fun00013;
 53:
                            michal = _closure1_slot4;
                            entity = michal.getVoiceStatesForChannel;
                            yankee = entity.bind(michal)(oscard);
 71:
                            zuuluu = _closure1_slot0;
                            offset = _closure1_slot2;
                            michal = 6;
                            report = offset[michal];
                            tangon = undefined;
                            verify = zuuluu.bind(tangon)(report);
                            option = verify.match;
                            report = {};
                            report['card'] = romeon;
                            foxtra = _closure3_slot1;
                            report['blockeeExperimentEnabled'] = foxtra;
                            romeon = _closure3_slot0;
                            report['blockerExperimentEnabled'] = romeon;
                            option = option.bind(verify)(report);
                            report = option.returnType;
                            foxtra = report.bind(option)();
                            verify = foxtra.with;
                            option = {};
                            romeon = true;
                            option['blockerExperimentEnabled'] = romeon;
                            report = offset[michal];
                            report = zuuluu.bind(tangon)(report);
                            kiloes = report.P;
                            backup = kiloes.when;
                            report = _closure1_slot11;
                            report = backup.bind(kiloes)(report);
                            option['card'] = report;
                            report = function() {
                                zuuluu = _closure1_slot0;
                                michal = _closure1_slot2;
                                entity = 7;
                                michal = michal[entity];
                                entity = undefined;
                                entity = zuuluu.bind(entity)(michal);
                                entity = entity.BlockingVoiceStateTreatments;
                                entity = entity.HIDE;
                                return entity;
                            };
                            foxtra = verify.bind(foxtra)(option, report);
                            verify = foxtra.with;
                            option = {};
                            option['blockeeExperimentEnabled'] = romeon;
                            report = offset[michal];
                            report = zuuluu.bind(tangon)(report);
                            kiloes = report.P;
                            backup = kiloes.when;
                            report = _closure1_slot10;
                            report = backup.bind(kiloes)(report);
                            option['card'] = report;
                            report = function() {
                                zuuluu = _closure1_slot0;
                                michal = _closure1_slot2;
                                entity = 7;
                                michal = michal[entity];
                                entity = undefined;
                                entity = zuuluu.bind(entity)(michal);
                                entity = entity.BlockingVoiceStateTreatments;
                                entity = entity.HIDE;
                                return entity;
                            };
                            verify = verify.bind(foxtra)(option, report);
                            option = verify.with;
                            report = {};
                            report['blockeeExperimentEnabled'] = romeon;
                            michal = offset[michal];
                            michal = zuuluu.bind(tangon)(michal);
                            foxtra = michal.P;
                            romeon = foxtra.when;
                            michal = _closure1_slot12;
                            michal = romeon.bind(foxtra)(michal);
                            report['card'] = michal;
                            michal = function() {
                                zuuluu = _closure1_slot0;
                                michal = _closure1_slot2;
                                entity = 7;
                                michal = michal[entity];
                                entity = undefined;
                                entity = zuuluu.bind(entity)(michal);
                                entity = entity.BlockingVoiceStateTreatments;
                                entity = entity.DERANK;
                                return entity;
                            };
                            option = option.bind(verify)(report, michal);
                            report = option.otherwise;
                            michal = function() {
                                zuuluu = _closure1_slot0;
                                michal = _closure1_slot2;
                                entity = 7;
                                michal = michal[entity];
                                entity = undefined;
                                entity = zuuluu.bind(entity)(michal);
                                entity = entity.BlockingVoiceStateTreatments;
                                entity = entity.SHOW;
                                return entity;
                            };
                            report = report.bind(option)(michal);
                            michal = 5;
                            option = offset[michal];
                            verify = zuuluu.bind(tangon)(option);
                            option = verify.map;
                            golfie = function(argFoo) {
                                zuuluu = argFoo;
                                tangon = _closure1_slot3;
                                michal = tangon.getRelationshipType;
                                entity = zuuluu.userId;
                                michal = michal.bind(tangon)(entity);
                                entity = {};
                                tangon = zuuluu.userId;
                                entity['userId'] = tangon;
                                zuuluu = zuuluu.discoverable;
                                entity['discoverable'] = zuuluu;
                                entity['relationshipType'] = michal;
                                return entity;
                            };
                            yankee = option.bind(verify)(yankee, golfie);
                            golfie = offset[michal];
                            verify = zuuluu.bind(tangon)(golfie);
                            option = verify.map;
                            golfie = 'userId';
                            verify = option.bind(verify)(yankee, golfie);
                            golfie = offset[michal];
                            romeon = zuuluu.bind(tangon)(golfie);
                            option = romeon.map;
                            golfie = 'discoverable';
                            option = option.bind(romeon)(yankee, golfie);
                            michal = offset[michal];
                            golfie = zuuluu.bind(tangon)(michal);
                            zuuluu = golfie.map;
                            michal = 'relationshipType';
                            golfie = zuuluu.bind(golfie)(yankee, michal);
                            zuuluu = _closure1_slot1;
                            michal = 8;
                            michal = offset[michal];
                            tangon = zuuluu.bind(tangon)(michal);
                            zuuluu = tangon.track;
                            entity = _closure1_slot8;
                            michal = entity.PARTY_VOICE_ACTIVITY_VIEWED;
                            entity = {};
                            entity['activity_user_ids'] = verify;
                            entity['discoverable'] = option;
                            entity['relationship_types'] = golfie;
                            entity['voice_channel_id'] = oscard;
                            entity['treatment'] = report;
                            report = 'happening-now';
                            entity['surface'] = report;
                            entity = zuuluu.bind(tangon)(michal, entity);
 529:
                            entity = undefined;
                            return entity;
                        }
                    };
                    entity = michal.bind(zuuluu)(entity);
 54:
                    entity = undefined;
                    return entity;
                }
            };
            entity = undefined;
            entity = report.bind(entity)(tangon, oscard);
            entity = tangon;
            if(!zuuluu) { _fun00010_ip = 81; continue _fun00009 }
 64:
            zuuluu = tangon.filter;
            michal = function(argFoo) {
                _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                    tangon = argFoo;
                    entity = _closure1_slot10;
                    zuuluu = undefined;
                    entity = entity.bind(zuuluu)(tangon);
                    entity = !entity;
                    if(!entity) { _fun00016_ip = 35; continue _fun00015 }
 23:
                    michal = _closure1_slot11;
                    michal = michal.bind(zuuluu)(tangon);
                    entity = !michal;
 35:
                    return entity;
                }
            };
            entity = zuuluu.bind(tangon)(michal);
 81:
            return entity;
        }
    };
    zuuluu['maybeFilterHappeningNowCards'] = tangon;
    michal = function(argFoo, argBar) { // Original name: maybeSortHappeningNowCards
        _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
            report = argFoo;
            michal = argBar;
            if(michal) { _fun00018_ip = 13; continue _fun00017 }
 11:
            return report;
 13:
            tangon = new Array(1);
            zuuluu = function(argFoo) {
                _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
                    tangon = _closure1_slot9;
                    zuuluu = undefined;
                    michal = argFoo;
                    zuuluu = tangon.bind(zuuluu)(michal);
                    michal = _closure1_slot5;
                    entity = 1;
                    if(!(zuuluu === michal)) { _fun00020_ip = 30; continue _fun00019 }
 28:
                    entity = 0;
 30:
                    return entity;
                }
            };
            tangon[0] = zuuluu;
            zuuluu = ['asc'];
            if(!michal) { _fun00018_ip = 74; continue _fun00017 }
 41:
            michal = tangon.push;
            entity = function(argFoo) {
                zuuluu = _closure1_slot12;
                michal = undefined;
                entity = argFoo;
                entity = zuuluu.bind(michal)(entity);
                return entity;
            };
            entity = michal.bind(tangon)(entity);
            michal = zuuluu.push;
            entity = 'asc';
            entity = michal.bind(zuuluu)(entity);
 74:
            oscard = _closure1_slot0;
            michal = _closure1_slot2;
            entity = 5;
            michal = michal[entity];
            entity = undefined;
            michal = oscard.bind(entity)(michal);
            entity = michal.orderBy;
            entity = entity.bind(michal)(report, tangon, zuuluu);
            return entity;
        }
    };
    zuuluu['maybeSortHappeningNowCards'] = michal;
    return entity;
})();