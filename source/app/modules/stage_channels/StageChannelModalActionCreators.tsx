// app/modules/stage_channels/StageChannelModalActionCreators.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    options = argBar;
    offset = argBaz;
    zulu = argFred;
    verify = argPlugh;
    var _closure1_slot0 = options;
    var _closure1_slot1 = offset;
    entity = argCorge;
    var _closure1_slot2 = entity;
    var _closure1_slot3 = verify;
    oscar = function(argFoo) { // Original name: connectToStage
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argFoo;
            mike = arguments[1];
            report = undefined;
            if(!(mike === report)) { _fun00002_ip = 14; continue _fun00001 }
 12:
            mike = false;
 14:
            oscar = _closure1_slot9;
            tango = oscar.getVoiceChannelId;
            tango = tango.bind(oscar)();
            if(mike) { _fun00002_ip = 56; continue _fun00001 }
 34:
            mike = function(argFoo, argBar) { // Original name: canJoinImmediately
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    oscar = argFoo;
                    var _closure3_slot0 = oscar;
                    report = _closure1_slot8;
                    mike = report.can;
                    options = _closure1_slot0;
                    golf = _closure1_slot3;
                    entity = 6;
                    entity = golf[entity];
                    golf = undefined;
                    entity = options.bind(golf)(entity);
                    entity = entity.JOIN_VOCAL_CHANNEL_PERMISSIONS;
                    entity = mike.bind(report)(entity, oscar);
                    entity = !entity;
                    if(entity) { _fun00004_ip = 158; continue _fun00003 }
 62:
                    report = _closure1_slot2;
                    mike = _closure1_slot3;
                    options = 7;
                    mike = mike[options];
                    verify = report.bind(golf)(mike);
                    report = verify.shouldShowBlockedUsers;
                    mike = oscar.id;
                    mike = report.bind(verify)(mike);
                    if(!mike) { _fun00004_ip = 113; continue _fun00003 }
 101:
                    verify = oscar.id;
                    report = argBar;
                    mike = report !== verify;
 113:
                    if(!mike) { _fun00004_ip = 155; continue _fun00003 }
 116:
                    report = _closure1_slot2;
                    tango = _closure1_slot3;
                    tango = tango[options];
                    report = report.bind(golf)(tango);
                    tango = report.openStageBlockedUsersSheet;
                    zulu = function() {
                        tango = _closure1_slot11;
                        zulu = _closure3_slot0;
                        entity = undefined;
                        mike = true;
                        mike = tango.bind(entity)(zulu, mike);
                        return entity;
                    };
                    zulu = tango.bind(report)(oscar, zulu);
                    mike = 1;
 155:
                    entity = mike;
 158:
                    entity = !entity;
                    return entity;
                }
            };
            mike = mike.bind(report)(entity, tango);
            if(mike) { _fun00002_ip = 56; continue _fun00001 }
 52:
            mike = false;
            return mike;
 56:
            tango = _closure1_slot1;
            oscar = _closure1_slot3;
            mike = 11;
            mike = oscar[mike];
            golf = tango.bind(report)(mike);
            mike = golf.initialize;
            mike = mike.bind(golf)();
            mike = 12;
            mike = oscar[mike];
            oscar = tango.bind(report)(mike);
            tango = oscar.selectVoiceChannel;
            mike = entity.id;
            mike = tango.bind(oscar)(mike);
            tango = _closure1_slot9;
            mike = tango.getVoiceChannelId;
            tango = mike.bind(tango)();
            mike = entity.id;
            if(!(tango === mike)) { _fun00002_ip = 217; continue _fun00001 }
 137:
            tango = _closure1_slot5;
            mike = tango.getAllApplicationStreamsForChannel;
            entity = entity.id;
            mike = mike.bind(tango)(entity);
            tango = mike.length;
            entity = 0;
            if(!(tango > entity)) { _fun00002_ip = 213; continue _fun00001 }
 168:
            tango = _closure1_slot0;
            oscar = _closure1_slot3;
            zulu = 13;
            zulu = oscar[zulu];
            tango = tango.bind(report)(zulu);
            zulu = tango.watchStream;
            mike = mike[entity];
            entity = {};
            report = true;
            entity['noFocus'] = report;
            entity = zulu.bind(tango)(mike, entity);
 213:
            entity = true;
            return entity;
 217:
            entity = false;
            return entity;
        }
    };
    var _closure1_slot10 = oscar;
    report = function(argFoo) { // Original name: connectAndOpen
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            report = argFoo;
            golf = arguments[1];
            tango = arguments[2];
            oscar = arguments[3];
            var _closure2_slot0 = report;
            entity = undefined;
            if(!(golf === entity)) { _fun00006_ip = 26; continue _fun00005 }
 24:
            golf = false;
 26:
            var _closure2_slot1 = golf;
            if(!(tango === entity)) { _fun00006_ip = 36; continue _fun00005 }
 34:
            tango = false;
 36:
            var _closure2_slot2 = tango;
            if(!(oscar === entity)) { _fun00006_ip = 46; continue _fun00005 }
 44:
            oscar = false;
 46:
            verify = _closure1_slot9;
            zulu = verify.getVoiceChannelId;
            zulu = zulu.bind(verify)();
            oscar = !oscar;
            if(!oscar) { _fun00006_ip = 78; continue _fun00005 }
 69:
            verify = report.id;
            oscar = zulu !== verify;
 78:
            if(!oscar) { _fun00006_ip = 112; continue _fun00005 }
 81:
            offset = _closure1_slot0;
            yankee = _closure1_slot3;
            verify = 14;
            verify = yankee[verify];
            offset = offset.bind(entity)(verify);
            verify = offset.shouldShowVoiceChannelChangeConfirmation;
            oscar = verify.bind(offset)(report);
 112:
            if(!oscar) { _fun00006_ip = 154; continue _fun00005 }
 115:
            offset = _closure1_slot2;
            yankee = _closure1_slot3;
            verify = 7;
            verify = yankee[verify];
            offset = offset.bind(entity)(verify);
            verify = offset.showChannelChangeConfirmationAlert;
            options = function() {
                oscar = _closure1_slot11;
                offset = _closure2_slot0;
                verify = _closure2_slot1;
                options = _closure2_slot2;
                entity = undefined;
                golf = true;
                yankee = undefined;
                mike = yankee[oscar](offset, verify, options, golf, oscar);
                return entity;
            };
            oscar = verify.bind(offset)(report, options);
 154:
            if(oscar) { _fun00006_ip = 181; continue _fun00005 }
 157:
            oscar = _closure1_slot10;
            oscar = oscar.bind(entity)(report, golf);
            if(!oscar) { _fun00006_ip = 181; continue _fun00005 }
 170:
            mike = _closure1_slot12;
            mike = mike.bind(entity)(report, zulu, tango);
 181:
            return entity;
        }
    };
    var _closure1_slot11 = report;
    tango = function(argFoo, argBar) { // Original name: navigateToStage
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            oscar = arguments[2];
            entity = undefined;
            if(!(oscar === entity)) { _fun00008_ip = 11; continue _fun00007 }
 9:
            oscar = true;
 11:
            zulu = _closure1_slot2;
            tango = _closure1_slot3;
            mike = 7;
            mike = tango[mike];
            report = zulu.bind(entity)(mike);
            tango = report.navigateToStage;
            zulu = argFoo;
            mike = argBar;
            mike = tango.bind(report)(zulu, mike, oscar);
            return entity;
        }
    };
    var _closure1_slot12 = tango;
    entity = global;
    romeo = entity.Object;
    yankee = romeo.defineProperty;
    golf = {};
    entity = true;
    golf['value'] = entity;
    entity = '__esModule';
    entity = yankee.bind(romeo)(zulu, entity, golf);
    entity = 0;
    golf = verify[entity];
    entity = undefined;
    golf = offset.bind(entity)(golf);
    var _closure1_slot4 = golf;
    golf = 1;
    golf = verify[golf];
    golf = offset.bind(entity)(golf);
    var _closure1_slot5 = golf;
    golf = 2;
    golf = verify[golf];
    golf = offset.bind(entity)(golf);
    var _closure1_slot6 = golf;
    golf = 3;
    golf = verify[golf];
    golf = offset.bind(entity)(golf);
    var _closure1_slot7 = golf;
    golf = 4;
    golf = verify[golf];
    golf = offset.bind(entity)(golf);
    var _closure1_slot8 = golf;
    golf = 5;
    golf = verify[golf];
    golf = offset.bind(entity)(golf);
    var _closure1_slot9 = golf;
    golf = 15;
    golf = verify[golf];
    verify = options.bind(entity)(golf);
    options = verify.fileFinishedImporting;
    golf = 'modules/stage_channels/StageChannelModalActionCreators.tsx';
    golf = options.bind(verify)(golf);
    golf = function(argFoo, argBar) { // Original name: connectOrLurkStage
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            zulu = arguments[2];
            mike = argFoo;
            var _closure2_slot0 = mike;
            mike = argBar;
            var _closure2_slot1 = mike;
            mike = undefined;
            if(!(zulu === mike)) { _fun00010_ip = 27; continue _fun00009 }
 25:
            zulu = false;
 27:
            var _closure2_slot2 = zulu;
            zulu = global;
            zulu = zulu.Promise;
            entity = function() {
                tango = _closure1_slot4;
                zulu = undefined;
                mike = function* (argFoo) {
                    entity = function* (argFoo) { // Original name: ?anon_0_
                        _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                            StartGenerator();
                            tango = argFoo;
                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                            if(mike) { _fun00012_ip = 217; continue _fun00011 }
 15:
                            var _closure5_slot0 = tango;
                            golf = _closure1_slot6;
                            oscar = golf.getChannel;
                            zulu = _closure2_slot1;
                            zulu = oscar.bind(golf)(zulu);
                            oscar = null;
                            if(!(oscar == zulu)) { _fun00012_ip = 193; continue _fun00011 }
 52:
                            golf = _closure1_slot0;
                            options = _closure1_slot3;
                            oscar = 8;
                            oscar = options[oscar];
                            options = undefined;
                            offset = golf.bind(options)(oscar);
                            golf = offset.stopLurkingAll;
                            yankee = _closure2_slot0;
                            oscar = new Array(1);
                            oscar[0] = yankee;
                            oscar = golf.bind(offset)(oscar);
                            SaveGenerator(address=101);
 99:
                            return oscar;
 101:
                            ResumeGenerator(result_out_reg=5, return_bool_out_reg=6);
                            if(golf) { _fun00012_ip = 190; continue _fun00011 }
 107:
                            offset = _closure1_slot1;
                            yankee = _closure1_slot3;
                            golf = 9;
                            golf = yankee[golf];
                            romeo = offset.bind(options)(golf);
                            yankee = romeo.joinGuild;
                            offset = _closure2_slot0;
                            golf = {};
                            foxtrot = true;
                            golf['lurker'] = foxtrot;
                            golf = yankee.bind(romeo)(offset, golf);
                            SaveGenerator(address=156);
 154:
                            return golf;
 156:
                            ResumeGenerator(result_out_reg=6, return_bool_out_reg=9);
                            if(offset) { _fun00012_ip = 187; continue _fun00011 }
 162:
                            yankee = _closure1_slot7;
                            offset = yankee.addConditionalChangeListener;
                            verify = function() {
                                _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                                    tango = _closure1_slot6;
                                    zulu = tango.getChannel;
                                    entity = _closure2_slot1;
                                    tango = zulu.bind(tango)(entity);
                                    entity = null;
                                    entity = entity == tango;
                                    if(entity) { _fun00014_ip = 88; continue _fun00013 }
 33:
                                    report = _closure1_slot10;
                                    zulu = undefined;
                                    report = report.bind(zulu)(tango);
                                    report = _closure1_slot1;
                                    oscar = _closure1_slot3;
                                    mike = 10;
                                    mike = oscar[mike];
                                    report = report.bind(zulu)(mike);
                                    mike = report.initialize;
                                    mike = mike.bind(report)();
                                    mike = _closure5_slot0;
                                    mike = mike.bind(zulu)(tango);
                                    entity = false;
 88:
                                    return entity;
                                }
                            };
                            verify = offset.bind(yankee)(verify);
                            return options;
 187:
                            return golf;
 190:
                            return oscar;
 193:
                            oscar = _closure1_slot10;
                            report = _closure2_slot2;
                            mike = undefined;
                            report = oscar.bind(mike)(zulu, report);
                            mike = tango.bind(mike)(zulu);
                            return mike;
 217:
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
            report = entity.bind(mike)();
            mike = zulu.prototype;
            mike = Object.create(mike, {constructor: {value: zulu}});
            oscar = mike;
            entity = new oscar[zulu](report, tango);
            entity = entity instanceof Object ? entity : mike;
            return entity;
        }
    };
    zulu['connectOrLurkStage'] = golf;
    zulu['connectToStage'] = oscar;
    zulu['connectAndOpen'] = report;
    zulu['navigateToStage'] = tango;
    mike = function(argFoo) { // Original name: showUserProfile
        zulu = _closure1_slot2;
        mike = _closure1_slot3;
        entity = 7;
        mike = mike[entity];
        entity = undefined;
        tango = zulu.bind(entity)(mike);
        zulu = tango.showPlatformUserProfile;
        mike = argFoo;
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    zulu['showUserProfile'] = mike;
    return entity;
})();