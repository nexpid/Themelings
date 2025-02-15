// app/modules/main_tabs_v2/native/shared_components/happening_now/happeningNowRankingUtils.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    oscar = argBar;
    report = argBaz;
    zulu = argFred;
    golf = argPlugh;
    var _closure1_slot0 = oscar;
    var _closure1_slot1 = report;
    var _closure1_slot2 = golf;
    entity = function(argFoo) { // Original name: cardHasNoDiscoverableVoiceStates
        _fun115032: for(var _fun115032_ip = 0; ; ) switch(_fun115032_ip) {
 0:
            mike = argFoo;
            entity = 'voiceState';
            entity = entity in mike;
            if(!entity) { _fun115032_ip = 117; continue _fun115032 }
 14:
            zulu = mike.voiceState;
            entity = null;
            if(!(entity != zulu)) { _fun115032_ip = 117; continue _fun115032 }
 26:
            mike = mike.voiceState;
            report = mike.channelId;
            if(!(entity != report)) { _fun115032_ip = 113; continue _fun115032 }
 41:
            entity = global;
            zulu = entity.Object;
            mike = zulu.values;
            tango = _closure1_slot4;
            entity = tango.getVoiceStatesForChannel;
            entity = entity.bind(tango)(report);
            tango = mike.bind(zulu)(entity);
            mike = tango.length;
            entity = 0;
            entity = mike > entity;
            if(!entity) { _fun115032_ip = 111; continue _fun115032 }
 91:
            zulu = tango.every;
            mike = function(argFoo) {
                entity = argFoo;
                mike = entity.discoverable;
                entity = false;
                entity = entity === mike;
                return entity;
            };
            entity = zulu.bind(tango)(mike);
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
        _fun115034: for(var _fun115034_ip = 0; ; ) switch(_fun115034_ip) {
 0:
            zulu = argFoo;
            entity = 'voiceState';
            entity = entity in zulu;
            if(!entity) { _fun115034_ip = 177; continue _fun115034 }
 19:
            tango = zulu.voiceState;
            entity = null;
            if(!(entity != tango)) { _fun115034_ip = 177; continue _fun115034 }
 34:
            zulu = zulu.voiceState;
            oscar = zulu.channelId;
            if(!(entity != oscar)) { _fun115034_ip = 173; continue _fun115034 }
 52:
            report = _closure1_slot4;
            tango = report.getVoiceStatesForChannel;
            report = tango.bind(report)(oscar);
            entity = entity != report;
            if(!entity) { _fun115034_ip = 171; continue _fun115034 }
 77:
            oscar = _closure1_slot1;
            options = _closure1_slot2;
            tango = 5;
            tango = options[tango];
            golf = undefined;
            tango = oscar.bind(golf)(tango);
            oscar = tango.bind(golf)(report);
            report = oscar.map;
            tango = function(argFoo) {
                entity = argFoo;
                entity = entity.userId;
                return entity;
            };
            report = report.bind(oscar)(tango);
            tango = report.filter;
            oscar = _closure1_slot0;
            zulu = 4;
            zulu = options[zulu];
            zulu = oscar.bind(golf)(zulu);
            zulu = zulu.isNotNullish;
            tango = tango.bind(report)(zulu);
            zulu = tango.some;
            mike = function(argFoo) {
                zulu = _closure1_slot3;
                mike = zulu.isBlockedOrIgnored;
                entity = argFoo;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            entity = zulu.bind(tango)(mike);
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
        _fun115037: for(var _fun115037_ip = 0; ; ) switch(_fun115037_ip) {
 0:
            mike = argFoo;
            entity = 'voiceState';
            entity = entity in mike;
            if(!entity) { _fun115037_ip = 118; continue _fun115037 }
 14:
            zulu = mike.voiceState;
            entity = null;
            if(!(entity != zulu)) { _fun115037_ip = 118; continue _fun115037 }
 26:
            mike = mike.voiceState;
            tango = mike.discoverable;
            zulu = false;
            if(!(zulu !== tango)) { _fun115037_ip = 114; continue _fun115037 }
 44:
            oscar = mike.channelId;
            entity = entity != oscar;
            if(!entity) { _fun115037_ip = 112; continue _fun115037 }
 56:
            mike = global;
            tango = mike.Object;
            zulu = tango.values;
            report = _closure1_slot4;
            mike = report.getVoiceStatesForChannel;
            mike = mike.bind(report)(oscar);
            tango = zulu.bind(tango)(mike);
            zulu = tango.some;
            mike = function(argFoo) {
                entity = argFoo;
                mike = entity.discoverable;
                entity = false;
                entity = entity === mike;
                return entity;
            };
            entity = zulu.bind(tango)(mike);
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
    options = verify.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = options.bind(verify)(zulu, entity, tango);
    entity = 0;
    tango = golf[entity];
    entity = undefined;
    tango = report.bind(entity)(tango);
    var _closure1_slot3 = tango;
    tango = 1;
    tango = golf[tango];
    tango = report.bind(entity)(tango);
    var _closure1_slot4 = tango;
    tango = 2;
    tango = golf[tango];
    tango = oscar.bind(entity)(tango);
    report = tango.HAPPENING_NOW_CARD_WIDTH_NORMAL_WITH_MARGIN;
    var _closure1_slot5 = report;
    report = tango.HAPPENING_NOW_CARD_WIDTH_SMALL_WITH_MARGIN;
    var _closure1_slot6 = report;
    tango = tango.HAPPENING_NOW_CARD_WIDTH_XSMALL_WITH_MARGIN;
    var _closure1_slot7 = tango;
    tango = 3;
    tango = golf[tango];
    tango = oscar.bind(entity)(tango);
    tango = tango.AnalyticEvents;
    var _closure1_slot8 = tango;
    tango = function(argFoo) { // Original name: cardSize
        _fun115039: for(var _fun115039_ip = 0; ; ) switch(_fun115039_ip) {
 0:
            tango = argFoo;
            mike = tango.kind;
            entity = 'placeholder';
            if(!(entity !== mike)) { _fun115039_ip = 202; continue _fun115039 }
 19:
            entity = 'voice';
            if(!(entity !== mike)) { _fun115039_ip = 202; continue _fun115039 }
 30:
            entity = 'activity';
            if(!(entity !== mike)) { _fun115039_ip = 202; continue _fun115039 }
 41:
            entity = 'guild-event';
            if(!(entity !== mike)) { _fun115039_ip = 202; continue _fun115039 }
 54:
            entity = 'active-channel';
            if(!(entity !== mike)) { _fun115039_ip = 202; continue _fun115039 }
 67:
            entity = 'live-guild-stage';
            if(!(entity !== mike)) { _fun115039_ip = 202; continue _fun115039 }
 80:
            entity = 'embedded-activity';
            if(!(entity !== mike)) { _fun115039_ip = 202; continue _fun115039 }
 90:
            entity = 'unified-vc';
            if(!(entity !== mike)) { _fun115039_ip = 202; continue _fun115039 }
 100:
            entity = 'user';
            if(!(entity !== mike)) { _fun115039_ip = 193; continue _fun115039 }
 108:
            entity = 'invite';
            if(!(entity !== mike)) { _fun115039_ip = 184; continue _fun115039 }
 116:
            entity = 'create-channel';
            if(!(entity !== mike)) { _fun115039_ip = 184; continue _fun115039 }
 126:
            entity = 'customize-guild';
            if(!(entity !== mike)) { _fun115039_ip = 184; continue _fun115039 }
 136:
            entity = 'student-hub-add-channel';
            if(!(entity !== mike)) { _fun115039_ip = 184; continue _fun115039 }
 146:
            zulu = _closure1_slot0;
            mike = _closure1_slot2;
            entity = 4;
            mike = mike[entity];
            entity = undefined;
            zulu = zulu.bind(entity)(mike);
            mike = zulu.assertNever;
            mike = mike.bind(zulu)(tango);
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
    var _closure1_slot9 = tango;
    report = 9;
    report = golf[report];
    golf = oscar.bind(entity)(report);
    oscar = golf.fileFinishedImporting;
    report = 'modules/main_tabs_v2/native/shared_components/happening_now/happeningNowRankingUtils.tsx';
    report = oscar.bind(golf)(report);
    zulu['cardSize'] = tango;
    tango = {'Stage': 7, 'Voice': 6, 'Stream': 5, 'Game': 4, 'Listening': 3, 'CustomStatus': 3, 'User': 2, 'Base': 1};
    zulu['HappeningNowWeights'] = tango;
    tango = -1000;
    zulu['HAPPENING_NOW_OFFLINE_PENALTY'] = tango;
    tango = function(argFoo, argBar) { // Original name: maybeFilterHappeningNowCards
        _fun115040: for(var _fun115040_ip = 0; ; ) switch(_fun115040_ip) {
 0:
            tango = argFoo;
            entity = argBar;
            report = entity.blockeeExperimentEnabled;
            zulu = entity.blockerExperimentEnabled;
            entity = entity.analyticsEligible;
            oscar = {};
            oscar['blockeeExperimentEnabled'] = report;
            oscar['blockerExperimentEnabled'] = zulu;
            oscar['analyticsEligible'] = entity;
            report = function(argFoo, argBar) { // Original name: trackBlockingOrIgnoredVoiceStatesAnalytics
                _fun115041: for(var _fun115041_ip = 0; ; ) switch(_fun115041_ip) {
 0:
                    zulu = argFoo;
                    mike = argBar;
                    tango = mike.blockerExperimentEnabled;
                    var _closure3_slot0 = tango;
                    tango = mike.blockeeExperimentEnabled;
                    var _closure3_slot1 = tango;
                    mike = mike.analyticsEligible;
                    if(!mike) { _fun115041_ip = 54; continue _fun115041 }
 37:
                    mike = zulu.forEach;
                    entity = function(argFoo) {
                        _fun115042: for(var _fun115042_ip = 0; ; ) switch(_fun115042_ip) {
 0:
                            romeo = argFoo;
                            entity = 'voiceState';
                            entity = entity in romeo;
                            if(!entity) { _fun115042_ip = 529; continue _fun115042 }
 19:
                            mike = romeo.voiceState;
                            entity = null;
                            if(!(entity != mike)) { _fun115042_ip = 529; continue _fun115042 }
 34:
                            mike = romeo.voiceState;
                            oscar = mike.channelId;
                            if(!(entity == oscar)) { _fun115042_ip = 53; continue _fun115042 }
 49:
                            yankee = {};
                            _fun115042_ip = 71; continue _fun115042;
 53:
                            mike = _closure1_slot4;
                            entity = mike.getVoiceStatesForChannel;
                            yankee = entity.bind(mike)(oscar);
 71:
                            zulu = _closure1_slot0;
                            offset = _closure1_slot2;
                            mike = 6;
                            report = offset[mike];
                            tango = undefined;
                            verify = zulu.bind(tango)(report);
                            options = verify.match;
                            report = {};
                            report['card'] = romeo;
                            foxtrot = _closure3_slot1;
                            report['blockeeExperimentEnabled'] = foxtrot;
                            romeo = _closure3_slot0;
                            report['blockerExperimentEnabled'] = romeo;
                            options = options.bind(verify)(report);
                            report = options.returnType;
                            foxtrot = report.bind(options)();
                            verify = foxtrot.with;
                            options = {};
                            romeo = true;
                            options['blockerExperimentEnabled'] = romeo;
                            report = offset[mike];
                            report = zulu.bind(tango)(report);
                            kilo = report.P;
                            backup = kilo.when;
                            report = _closure1_slot11;
                            report = backup.bind(kilo)(report);
                            options['card'] = report;
                            report = function() {
                                zulu = _closure1_slot0;
                                mike = _closure1_slot2;
                                entity = 7;
                                mike = mike[entity];
                                entity = undefined;
                                entity = zulu.bind(entity)(mike);
                                entity = entity.BlockingVoiceStateTreatments;
                                entity = entity.HIDE;
                                return entity;
                            };
                            foxtrot = verify.bind(foxtrot)(options, report);
                            verify = foxtrot.with;
                            options = {};
                            options['blockeeExperimentEnabled'] = romeo;
                            report = offset[mike];
                            report = zulu.bind(tango)(report);
                            kilo = report.P;
                            backup = kilo.when;
                            report = _closure1_slot10;
                            report = backup.bind(kilo)(report);
                            options['card'] = report;
                            report = function() {
                                zulu = _closure1_slot0;
                                mike = _closure1_slot2;
                                entity = 7;
                                mike = mike[entity];
                                entity = undefined;
                                entity = zulu.bind(entity)(mike);
                                entity = entity.BlockingVoiceStateTreatments;
                                entity = entity.HIDE;
                                return entity;
                            };
                            verify = verify.bind(foxtrot)(options, report);
                            options = verify.with;
                            report = {};
                            report['blockeeExperimentEnabled'] = romeo;
                            mike = offset[mike];
                            mike = zulu.bind(tango)(mike);
                            foxtrot = mike.P;
                            romeo = foxtrot.when;
                            mike = _closure1_slot12;
                            mike = romeo.bind(foxtrot)(mike);
                            report['card'] = mike;
                            mike = function() {
                                zulu = _closure1_slot0;
                                mike = _closure1_slot2;
                                entity = 7;
                                mike = mike[entity];
                                entity = undefined;
                                entity = zulu.bind(entity)(mike);
                                entity = entity.BlockingVoiceStateTreatments;
                                entity = entity.DERANK;
                                return entity;
                            };
                            options = options.bind(verify)(report, mike);
                            report = options.otherwise;
                            mike = function() {
                                zulu = _closure1_slot0;
                                mike = _closure1_slot2;
                                entity = 7;
                                mike = mike[entity];
                                entity = undefined;
                                entity = zulu.bind(entity)(mike);
                                entity = entity.BlockingVoiceStateTreatments;
                                entity = entity.SHOW;
                                return entity;
                            };
                            report = report.bind(options)(mike);
                            mike = 5;
                            options = offset[mike];
                            verify = zulu.bind(tango)(options);
                            options = verify.map;
                            golf = function(argFoo) {
                                zulu = argFoo;
                                tango = _closure1_slot3;
                                mike = tango.getRelationshipType;
                                entity = zulu.userId;
                                mike = mike.bind(tango)(entity);
                                entity = {};
                                tango = zulu.userId;
                                entity['userId'] = tango;
                                zulu = zulu.discoverable;
                                entity['discoverable'] = zulu;
                                entity['relationshipType'] = mike;
                                return entity;
                            };
                            yankee = options.bind(verify)(yankee, golf);
                            golf = offset[mike];
                            verify = zulu.bind(tango)(golf);
                            options = verify.map;
                            golf = 'userId';
                            verify = options.bind(verify)(yankee, golf);
                            golf = offset[mike];
                            romeo = zulu.bind(tango)(golf);
                            options = romeo.map;
                            golf = 'discoverable';
                            options = options.bind(romeo)(yankee, golf);
                            mike = offset[mike];
                            golf = zulu.bind(tango)(mike);
                            zulu = golf.map;
                            mike = 'relationshipType';
                            golf = zulu.bind(golf)(yankee, mike);
                            zulu = _closure1_slot1;
                            mike = 8;
                            mike = offset[mike];
                            tango = zulu.bind(tango)(mike);
                            zulu = tango.track;
                            entity = _closure1_slot8;
                            mike = entity.PARTY_VOICE_ACTIVITY_VIEWED;
                            entity = {};
                            entity['activity_user_ids'] = verify;
                            entity['discoverable'] = options;
                            entity['relationship_types'] = golf;
                            entity['voice_channel_id'] = oscar;
                            entity['treatment'] = report;
                            report = 'happening-now';
                            entity['surface'] = report;
                            entity = zulu.bind(tango)(mike, entity);
 529:
                            entity = undefined;
                            return entity;
                        }
                    };
                    entity = mike.bind(zulu)(entity);
 54:
                    entity = undefined;
                    return entity;
                }
            };
            entity = undefined;
            entity = report.bind(entity)(tango, oscar);
            entity = tango;
            if(!zulu) { _fun115040_ip = 81; continue _fun115040 }
 64:
            zulu = tango.filter;
            mike = function(argFoo) {
                _fun115048: for(var _fun115048_ip = 0; ; ) switch(_fun115048_ip) {
 0:
                    tango = argFoo;
                    entity = _closure1_slot10;
                    zulu = undefined;
                    entity = entity.bind(zulu)(tango);
                    entity = !entity;
                    if(!entity) { _fun115048_ip = 35; continue _fun115048 }
 23:
                    mike = _closure1_slot11;
                    mike = mike.bind(zulu)(tango);
                    entity = !mike;
 35:
                    return entity;
                }
            };
            entity = zulu.bind(tango)(mike);
 81:
            return entity;
        }
    };
    zulu['maybeFilterHappeningNowCards'] = tango;
    mike = function(argFoo, argBar) { // Original name: maybeSortHappeningNowCards
        _fun115049: for(var _fun115049_ip = 0; ; ) switch(_fun115049_ip) {
 0:
            report = argFoo;
            mike = argBar;
            if(mike) { _fun115049_ip = 13; continue _fun115049 }
 11:
            return report;
 13:
            tango = new Array(1);
            zulu = function(argFoo) {
                _fun115050: for(var _fun115050_ip = 0; ; ) switch(_fun115050_ip) {
 0:
                    tango = _closure1_slot9;
                    zulu = undefined;
                    mike = argFoo;
                    zulu = tango.bind(zulu)(mike);
                    mike = _closure1_slot5;
                    entity = 1;
                    if(!(zulu === mike)) { _fun115050_ip = 30; continue _fun115050 }
 28:
                    entity = 0;
 30:
                    return entity;
                }
            };
            tango[0] = zulu;
            zulu = ['asc'];
            if(!mike) { _fun115049_ip = 74; continue _fun115049 }
 41:
            mike = tango.push;
            entity = function(argFoo) {
                zulu = _closure1_slot12;
                mike = undefined;
                entity = argFoo;
                entity = zulu.bind(mike)(entity);
                return entity;
            };
            entity = mike.bind(tango)(entity);
            mike = zulu.push;
            entity = 'asc';
            entity = mike.bind(zulu)(entity);
 74:
            oscar = _closure1_slot0;
            mike = _closure1_slot2;
            entity = 5;
            mike = mike[entity];
            entity = undefined;
            mike = oscar.bind(entity)(mike);
            entity = mike.orderBy;
            entity = entity.bind(mike)(report, tango, zulu);
            return entity;
        }
    };
    zulu['maybeSortHappeningNowCards'] = mike;
    return entity;
})();