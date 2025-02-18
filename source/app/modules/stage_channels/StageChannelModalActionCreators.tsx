// app/modules/stage_channels/StageChannelModalActionCreators.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    option = argBar;
    offset = argBaz;
    zuuluu = argFre;
    verify = argPlu;
    var _closure1_slot0 = option;
    var _closure1_slot1 = offset;
    entity = argCor;
    var _closure1_slot2 = entity;
    var _closure1_slot3 = verify;
    oscard = function(argFoo) { // Original name: connectToStage
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argFoo;
            michal = arguments[1];
            report = undefined;
            if(!(michal === report)) { _fun00002_ip = 14; continue _fun00001 }
 12:
            michal = false;
 14:
            oscard = _closure1_slot9;
            tangon = oscard.getVoiceChannelId;
            tangon = tangon.bind(oscard)();
            if(michal) { _fun00002_ip = 54; continue _fun00001 }
 34:
            michal = function(argFoo, argBar) { // Original name: canJoinImmediately
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    oscard = argFoo;
                    var _closure3_slot0 = oscard;
                    report = _closure1_slot8;
                    michal = report.can;
                    option = _closure1_slot0;
                    golfie = _closure1_slot3;
                    entity = 6;
                    entity = golfie[entity];
                    golfie = undefined;
                    entity = option.bind(golfie)(entity);
                    entity = entity.JOIN_VOCAL_CHANNEL_PERMISSIONS;
                    entity = michal.bind(report)(entity, oscard);
                    entity = !entity;
                    if(entity) { _fun00004_ip = 156; continue _fun00003 }
 62:
                    report = _closure1_slot2;
                    michal = _closure1_slot3;
                    option = 7;
                    michal = michal[option];
                    verify = report.bind(golfie)(michal);
                    report = verify.shouldShowBlockedUsers;
                    michal = oscard.id;
                    michal = report.bind(verify)(michal);
                    if(!michal) { _fun00004_ip = 113; continue _fun00003 }
 101:
                    verify = oscard.id;
                    report = argBar;
                    michal = report !== verify;
 113:
                    if(!michal) { _fun00004_ip = 153; continue _fun00003 }
 116:
                    report = _closure1_slot2;
                    tangon = _closure1_slot3;
                    tangon = tangon[option];
                    report = report.bind(golfie)(tangon);
                    tangon = report.openStageBlockedUsersSheet;
                    zuuluu = function() {
                        tangon = _closure1_slot11;
                        zuuluu = _closure3_slot0;
                        entity = undefined;
                        michal = true;
                        michal = tangon.bind(entity)(zuuluu, michal);
                        return entity;
                    };
                    zuuluu = tangon.bind(report)(oscard, zuuluu);
                    michal = 1;
 153:
                    entity = michal;
 156:
                    entity = !entity;
                    return entity;
                }
            };
            michal = michal.bind(report)(entity, tangon);
            if(michal) { _fun00002_ip = 54; continue _fun00001 }
 50:
            michal = false;
            return michal;
 54:
            tangon = _closure1_slot1;
            oscard = _closure1_slot3;
            michal = 11;
            michal = oscard[michal];
            golfie = tangon.bind(report)(michal);
            michal = golfie.initialize;
            michal = michal.bind(golfie)();
            michal = 12;
            michal = oscard[michal];
            oscard = tangon.bind(report)(michal);
            tangon = oscard.selectVoiceChannel;
            michal = entity.id;
            michal = tangon.bind(oscard)(michal);
            tangon = _closure1_slot9;
            michal = tangon.getVoiceChannelId;
            tangon = michal.bind(tangon)();
            michal = entity.id;
            if(!(tangon === michal)) { _fun00002_ip = 215; continue _fun00001 }
 135:
            tangon = _closure1_slot5;
            michal = tangon.getAllApplicationStreamsForChannel;
            entity = entity.id;
            michal = michal.bind(tangon)(entity);
            tangon = michal.length;
            entity = 0;
            if(!(tangon > entity)) { _fun00002_ip = 211; continue _fun00001 }
 166:
            tangon = _closure1_slot0;
            oscard = _closure1_slot3;
            zuuluu = 13;
            zuuluu = oscard[zuuluu];
            tangon = tangon.bind(report)(zuuluu);
            zuuluu = tangon.watchStream;
            michal = michal[entity];
            entity = {};
            report = true;
            entity['noFocus'] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
 211:
            entity = true;
            return entity;
 215:
            entity = false;
            return entity;
        }
    };
    var _closure1_slot10 = oscard;
    report = function(argFoo) { // Original name: connectAndOpen
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            report = argFoo;
            golfie = arguments[1];
            tangon = arguments[2];
            oscard = arguments[3];
            var _closure2_slot0 = report;
            entity = undefined;
            if(!(golfie === entity)) { _fun00006_ip = 26; continue _fun00005 }
 24:
            golfie = false;
 26:
            var _closure2_slot1 = golfie;
            if(!(tangon === entity)) { _fun00006_ip = 36; continue _fun00005 }
 34:
            tangon = false;
 36:
            var _closure2_slot2 = tangon;
            if(!(oscard === entity)) { _fun00006_ip = 46; continue _fun00005 }
 44:
            oscard = false;
 46:
            verify = _closure1_slot9;
            zuuluu = verify.getVoiceChannelId;
            zuuluu = zuuluu.bind(verify)();
            oscard = !oscard;
            if(!oscard) { _fun00006_ip = 78; continue _fun00005 }
 69:
            verify = report.id;
            oscard = zuuluu !== verify;
 78:
            if(!oscard) { _fun00006_ip = 112; continue _fun00005 }
 81:
            offset = _closure1_slot0;
            yankee = _closure1_slot3;
            verify = 14;
            verify = yankee[verify];
            offset = offset.bind(entity)(verify);
            verify = offset.shouldShowVoiceChannelChangeConfirmation;
            oscard = verify.bind(offset)(report);
 112:
            if(!oscard) { _fun00006_ip = 152; continue _fun00005 }
 115:
            offset = _closure1_slot2;
            yankee = _closure1_slot3;
            verify = 7;
            verify = yankee[verify];
            offset = offset.bind(entity)(verify);
            verify = offset.showChannelChangeConfirmationAlert;
            option = function() {
                oscard = _closure1_slot11;
                offset = _closure2_slot0;
                verify = _closure2_slot1;
                option = _closure2_slot2;
                entity = undefined;
                golfie = true;
                yankee = undefined;
                michal = yankee[oscard](offset, verify, option, golfie, oscard);
                return entity;
            };
            oscard = verify.bind(offset)(report, option);
 152:
            if(oscard) { _fun00006_ip = 179; continue _fun00005 }
 155:
            oscard = _closure1_slot10;
            oscard = oscard.bind(entity)(report, golfie);
            if(!oscard) { _fun00006_ip = 179; continue _fun00005 }
 168:
            michal = _closure1_slot12;
            michal = michal.bind(entity)(report, zuuluu, tangon);
 179:
            return entity;
        }
    };
    var _closure1_slot11 = report;
    tangon = function(argFoo, argBar) { // Original name: navigateToStage
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            oscard = arguments[2];
            entity = undefined;
            if(!(oscard === entity)) { _fun00008_ip = 11; continue _fun00007 }
 9:
            oscard = true;
 11:
            zuuluu = _closure1_slot2;
            tangon = _closure1_slot3;
            michal = 7;
            michal = tangon[michal];
            report = zuuluu.bind(entity)(michal);
            tangon = report.navigateToStage;
            zuuluu = argFoo;
            michal = argBar;
            michal = tangon.bind(report)(zuuluu, michal, oscard);
            return entity;
        }
    };
    var _closure1_slot12 = tangon;
    entity = global;
    romeon = entity.Object;
    yankee = romeon.defineProperty;
    golfie = {};
    entity = true;
    golfie['value'] = entity;
    entity = '__esModule';
    entity = yankee.bind(romeon)(zuuluu, entity, golfie);
    entity = 0;
    golfie = verify[entity];
    entity = undefined;
    golfie = offset.bind(entity)(golfie);
    var _closure1_slot4 = golfie;
    golfie = 1;
    golfie = verify[golfie];
    golfie = offset.bind(entity)(golfie);
    var _closure1_slot5 = golfie;
    golfie = 2;
    golfie = verify[golfie];
    golfie = offset.bind(entity)(golfie);
    var _closure1_slot6 = golfie;
    golfie = 3;
    golfie = verify[golfie];
    golfie = offset.bind(entity)(golfie);
    var _closure1_slot7 = golfie;
    golfie = 4;
    golfie = verify[golfie];
    golfie = offset.bind(entity)(golfie);
    var _closure1_slot8 = golfie;
    golfie = 5;
    golfie = verify[golfie];
    golfie = offset.bind(entity)(golfie);
    var _closure1_slot9 = golfie;
    golfie = 15;
    golfie = verify[golfie];
    verify = option.bind(entity)(golfie);
    option = verify.fileFinishedImporting;
    golfie = 'modules/stage_channels/StageChannelModalActionCreators.tsx';
    golfie = option.bind(verify)(golfie);
    golfie = function(argFoo, argBar) { // Original name: connectOrLurkStage
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            zuuluu = arguments[2];
            michal = argFoo;
            var _closure2_slot0 = michal;
            michal = argBar;
            var _closure2_slot1 = michal;
            michal = undefined;
            if(!(zuuluu === michal)) { _fun00010_ip = 27; continue _fun00009 }
 25:
            zuuluu = false;
 27:
            var _closure2_slot2 = zuuluu;
            zuuluu = global;
            zuuluu = zuuluu.Promise;
            entity = function() {
                tangon = _closure1_slot4;
                zuuluu = undefined;
                michal = function* (argFoo) {
                    entity = function* (argFoo) { // Original name: ?anon_0_
                        _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                            StartGenerator();
                            tangon = argFoo;
                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                            if(michal) { _fun00012_ip = 215; continue _fun00011 }
 15:
                            var _closure5_slot0 = tangon;
                            golfie = _closure1_slot6;
                            oscard = golfie.getChannel;
                            zuuluu = _closure2_slot1;
                            zuuluu = oscard.bind(golfie)(zuuluu);
                            oscard = null;
                            if(!(oscard == zuuluu)) { _fun00012_ip = 191; continue _fun00011 }
 52:
                            golfie = _closure1_slot0;
                            option = _closure1_slot3;
                            oscard = 8;
                            oscard = option[oscard];
                            option = undefined;
                            offset = golfie.bind(option)(oscard);
                            golfie = offset.stopLurkingAll;
                            yankee = _closure2_slot0;
                            oscard = new Array(1);
                            oscard[0] = yankee;
                            oscard = golfie.bind(offset)(oscard);
                            SaveGenerator(address=101);
 99:
                            return oscard;
 101:
                            ResumeGenerator(result_out_reg=5, return_bool_out_reg=6);
                            if(golfie) { _fun00012_ip = 188; continue _fun00011 }
 107:
                            offset = _closure1_slot1;
                            yankee = _closure1_slot3;
                            golfie = 9;
                            golfie = yankee[golfie];
                            romeon = offset.bind(option)(golfie);
                            yankee = romeon.joinGuild;
                            offset = _closure2_slot0;
                            golfie = {};
                            foxtra = true;
                            golfie['lurker'] = foxtra;
                            golfie = yankee.bind(romeon)(offset, golfie);
                            SaveGenerator(address=156);
 154:
                            return golfie;
 156:
                            ResumeGenerator(result_out_reg=6, return_bool_out_reg=9);
                            if(offset) { _fun00012_ip = 185; continue _fun00011 }
 162:
                            yankee = _closure1_slot7;
                            offset = yankee.addConditionalChangeListener;
                            verify = function() {
                                _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                                    tangon = _closure1_slot6;
                                    zuuluu = tangon.getChannel;
                                    entity = _closure2_slot1;
                                    tangon = zuuluu.bind(tangon)(entity);
                                    entity = null;
                                    entity = entity == tangon;
                                    if(entity) { _fun00014_ip = 88; continue _fun00013 }
 33:
                                    report = _closure1_slot10;
                                    zuuluu = undefined;
                                    report = report.bind(zuuluu)(tangon);
                                    report = _closure1_slot1;
                                    oscard = _closure1_slot3;
                                    michal = 10;
                                    michal = oscard[michal];
                                    report = report.bind(zuuluu)(michal);
                                    michal = report.initialize;
                                    michal = michal.bind(report)();
                                    michal = _closure5_slot0;
                                    michal = michal.bind(zuuluu)(tangon);
                                    entity = false;
 88:
                                    return entity;
                                }
                            };
                            verify = offset.bind(yankee)(verify);
                            return option;
 185:
                            return golfie;
 188:
                            return oscard;
 191:
                            oscard = _closure1_slot10;
                            report = _closure2_slot2;
                            michal = undefined;
                            report = oscard.bind(michal)(zuuluu, report);
                            michal = tangon.bind(michal)(zuuluu);
                            return michal;
 215:
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
            report = entity.bind(michal)();
            michal = zuuluu.prototype;
            michal = Object.create(michal, {constructor: {value: zuuluu}});
            oscard = michal;
            entity = new oscard[zuuluu](report, tangon);
            entity = entity instanceof Object ? entity : michal;
            return entity;
        }
    };
    zuuluu['connectOrLurkStage'] = golfie;
    zuuluu['connectToStage'] = oscard;
    zuuluu['connectAndOpen'] = report;
    zuuluu['navigateToStage'] = tangon;
    michal = function(argFoo) { // Original name: showUserProfile
        zuuluu = _closure1_slot2;
        michal = _closure1_slot3;
        entity = 7;
        michal = michal[entity];
        entity = undefined;
        tangon = zuuluu.bind(entity)(michal);
        zuuluu = tangon.showPlatformUserProfile;
        michal = argFoo;
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    zuuluu['showUserProfile'] = michal;
    return entity;
})();