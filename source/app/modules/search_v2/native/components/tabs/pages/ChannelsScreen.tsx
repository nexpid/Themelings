// app/modules/search_v2/native/components/tabs/pages/ChannelsScreen.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    report = argBar;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    entity = argBaz;
    var _closure1_slot1 = entity;
    var _closure1_slot2 = oscard;
    entity = function(argFoo, argBar, argBaz) { // Original name: getVoiceStates
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argFoo;
            michal = argBar;
            zuuluu = argBaz;
            tangon = entity.isGuildStageVoice;
            tangon = tangon.bind(entity)();
            if(!tangon) { _fun00002_ip = 25; continue _fun00001 }
 22:
            michal = zuuluu;
 25:
            entity = entity.id;
            entity = michal[entity];
            michal = null;
            if(!(michal == entity)) { _fun00002_ip = 47; continue _fun00001 }
 40:
            entity = _closure1_slot4;
 47:
            return entity;
        }
    };
    var _closure1_slot11 = entity;
    entity = global;
    option = entity.Object;
    golfie = option.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = golfie.bind(option)(zuuluu, entity, tangon);
    entity = 0;
    golfie = oscard[entity];
    tangon = argCor;
    entity = undefined;
    golfie = tangon.bind(entity)(golfie);
    var _closure1_slot3 = golfie;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    option = tangon.EMPTY_VOICE_STATES;
    var _closure1_slot4 = option;
    option = tangon.SearchListItemTypes;
    var _closure1_slot5 = option;
    option = tangon.CHANNELS_ESTIMATED_ITEM_SIZE;
    var _closure1_slot6 = option;
    tangon = tangon.SearchTabs;
    var _closure1_slot7 = tangon;
    tangon = 2;
    option = oscard[tangon];
    option = report.bind(entity)(option);
    option = option.jsx;
    var _closure1_slot8 = option;
    option = oscard[tangon];
    option = report.bind(entity)(option);
    option = option.Fragment;
    var _closure1_slot9 = option;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.jsxs;
    var _closure1_slot10 = tangon;
    tangon = golfie.memo;
    michal = function(argFoo) {
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            michal = argFoo;
            oscard = michal.searchContext;
            var _closure2_slot0 = oscard;
            zuuluu = _closure1_slot0;
            tangon = _closure1_slot2;
            golfie = 3;
            option = tangon[golfie];
            report = undefined;
            verify = zuuluu.bind(report)(option);
            option = verify.useTextChannelSearchResults;
            romeon = option.bind(verify)();
            var _closure2_slot1 = romeon;
            golfie = tangon[golfie];
            option = zuuluu.bind(report)(golfie);
            golfie = option.useVoiceChannelSearchResults;
            yankee = golfie.bind(option)();
            var _closure2_slot2 = yankee;
            option = _closure1_slot1;
            golfie = 4;
            golfie = tangon[golfie];
            verify = option.bind(report)(golfie);
            golfie = oscard.guildId;
            offset = verify.bind(report)(golfie);
            var _closure2_slot3 = offset;
            golfie = 5;
            golfie = tangon[golfie];
            option = option.bind(report)(golfie);
            golfie = oscard.guildId;
            foxtra = option.bind(report)(golfie);
            var _closure2_slot4 = foxtra;
            golfie = 6;
            option = tangon[golfie];
            backup = zuuluu.bind(report)(option);
            verify = backup.useOnPressGuildTextChannel;
            option = {};
            option['searchContext'] = oscard;
            option = verify.bind(backup)(option);
            var _closure2_slot5 = option;
            golfie = tangon[golfie];
            backup = zuuluu.bind(report)(golfie);
            verify = backup.useOnPressGuildVoiceChannel;
            golfie = {};
            golfie['searchContext'] = oscard;
            golfie = verify.bind(backup)(golfie);
            var _closure2_slot6 = golfie;
            verify = _closure1_slot3;
            kiloes = verify.useCallback;
            backup = new Array(2);
            backup[0] = option;
            backup[1] = oscard;
            option = function(argFoo) {
                report = argFoo;
                michal = _closure2_slot5;
                entity = undefined;
                michal = michal.bind(entity)(report);
                zuuluu = _closure1_slot0;
                tangon = _closure1_slot2;
                michal = 7;
                michal = tangon[michal];
                tangon = zuuluu.bind(entity)(michal);
                zuuluu = tangon.trackSearchResultClicked;
                michal = {};
                oscard = _closure2_slot0;
                michal['searchContext'] = oscard;
                michal['channelId'] = report;
                michal = zuuluu.bind(tangon)(michal);
                return entity;
            };
            kiloes = kiloes.bind(verify)(option, backup);
            var _closure2_slot7 = kiloes;
            backup = verify.useCallback;
            option = new Array(2);
            option[0] = golfie;
            option[1] = oscard;
            golfie = function(argFoo) {
                report = argFoo;
                michal = _closure2_slot6;
                entity = undefined;
                michal = michal.bind(entity)(report);
                zuuluu = _closure1_slot0;
                tangon = _closure1_slot2;
                michal = 7;
                michal = tangon[michal];
                tangon = zuuluu.bind(entity)(michal);
                zuuluu = tangon.trackSearchResultClicked;
                michal = {};
                oscard = _closure2_slot0;
                michal['searchContext'] = oscard;
                michal['channelId'] = report;
                michal = zuuluu.bind(tangon)(michal);
                return entity;
            };
            backup = backup.bind(verify)(golfie, option);
            var _closure2_slot8 = backup;
            option = verify.useMemo;
            golfie = new Array(6);
            golfie[0] = kiloes;
            golfie[1] = backup;
            golfie[2] = foxtra;
            golfie[3] = romeon;
            golfie[4] = yankee;
            golfie[5] = offset;
            entity = function() {
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    entity = new Array(0);
                    var _closure3_slot0 = entity;
                    tangon = _closure2_slot1;
                    tangon = tangon.length;
                    report = 0;
                    if(!(tangon > report)) { _fun00006_ip = 145; continue _fun00005 }
 28:
                    oscard = entity.push;
                    tangon = {};
                    golfie = _closure1_slot5;
                    golfie = golfie.SECTION;
                    tangon['type'] = golfie;
                    golfie = {};
                    romeon = _closure1_slot0;
                    foxtra = _closure1_slot2;
                    option = 8;
                    verify = foxtra[option];
                    yankee = undefined;
                    verify = romeon.bind(yankee)(verify);
                    offset = verify.intl;
                    verify = offset.string;
                    option = foxtra[option];
                    option = romeon.bind(yankee)(option);
                    option = option.t;
                    option = option.nIfr0d;
                    option = verify.bind(offset)(option);
                    golfie['title'] = option;
                    tangon['props'] = golfie;
                    tangon = oscard.bind(entity)(tangon);
                    golfie = _closure2_slot1;
                    oscard = golfie.forEach;
                    tangon = function(argFoo) {
                        report = argFoo;
                        zuuluu = _closure3_slot0;
                        michal = zuuluu.push;
                        entity = {};
                        tangon = _closure1_slot5;
                        tangon = tangon.GUILD_TEXT_CHANNEL;
                        entity['type'] = tangon;
                        tangon = {};
                        oscard = report.channel;
                        tangon['channel'] = oscard;
                        report = report.lastMessageId;
                        tangon['lastMessageId'] = report;
                        report = _closure2_slot7;
                        tangon['onPress'] = report;
                        entity['props'] = tangon;
                        entity = michal.bind(zuuluu)(entity);
                        entity = undefined;
                        return entity;
                    };
                    tangon = oscard.bind(golfie)(tangon);
 145:
                    tangon = _closure2_slot2;
                    tangon = tangon.length;
                    if(!(tangon > report)) { _fun00006_ip = 310; continue _fun00005 }
 161:
                    report = entity.push;
                    tangon = {};
                    oscard = _closure1_slot5;
                    oscard = oscard.SECTION;
                    tangon['type'] = oscard;
                    oscard = {};
                    yankee = _closure1_slot0;
                    romeon = _closure1_slot2;
                    option = 8;
                    verify = romeon[option];
                    golfie = undefined;
                    verify = yankee.bind(golfie)(verify);
                    offset = verify.intl;
                    verify = offset.string;
                    option = romeon[option];
                    option = yankee.bind(golfie)(option);
                    option = option.t;
                    option = option.CYnO4u;
                    option = verify.bind(offset)(option);
                    oscard['title'] = option;
                    tangon['props'] = oscard;
                    tangon = report.bind(entity)(tangon);
                    oscard = _closure2_slot3;
                    report = _closure2_slot4;
                    tangon = function(argFoo, argBar) { // Original name: createSorter
                        michal = argFoo;
                        var _closure4_slot0 = michal;
                        michal = argBar;
                        var _closure4_slot1 = michal;
                        entity = function(argFoo, argBar) {
                            _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                                oscard = _closure1_slot11;
                                entity = argFoo;
                                entity = entity.channel;
                                report = _closure4_slot0;
                                tangon = _closure4_slot1;
                                michal = undefined;
                                zuuluu = oscard.bind(michal)(entity, report, tangon);
                                entity = argBar;
                                entity = entity.channel;
                                michal = oscard.bind(michal)(entity, report, tangon);
                                tangon = zuuluu.length;
                                entity = michal.length;
                                tangon = tangon < entity;
                                entity = 1;
                                if(tangon) { _fun00008_ip = 98; continue _fun00007 }
 70:
                                zuuluu = zuuluu.length;
                                michal = michal.length;
                                zuuluu = zuuluu > michal;
                                michal = 0;
                                if(!zuuluu) { _fun00008_ip = 95; continue _fun00007 }
 89:
                                michal = -1;
 95:
                                entity = michal;
 98:
                                return entity;
                            }
                        };
                        return entity;
                    };
                    report = tangon.bind(golfie)(oscard, report);
                    tangon = _closure2_slot2;
                    zuuluu = tangon.sort;
                    tangon = zuuluu.bind(tangon)(report);
                    zuuluu = tangon.forEach;
                    michal = function(argFoo) {
                        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                            oscard = argFoo;
                            zuuluu = _closure3_slot0;
                            michal = zuuluu.push;
                            entity = {};
                            tangon = _closure1_slot5;
                            tangon = tangon.GUILD_VOICE_CHANNEL;
                            entity['type'] = tangon;
                            tangon = {};
                            report = oscard.channel;
                            tangon['channel'] = report;
                            verify = _closure2_slot3;
                            option = oscard.channel;
                            option = option.id;
                            verify = verify[option];
                            option = null;
                            if(!(option == verify)) { _fun00010_ip = 76; continue _fun00009 }
 72:
                            verify = _closure1_slot4;
 76:
                            tangon['voiceStates'] = verify;
                            verify = _closure2_slot4;
                            oscard = oscard.channel;
                            oscard = oscard.id;
                            oscard = verify[oscard];
                            if(!(option == oscard)) { _fun00010_ip = 107; continue _fun00009 }
 103:
                            oscard = _closure1_slot4;
 107:
                            tangon['speakerVoiceStates'] = oscard;
                            report = _closure2_slot8;
                            tangon['onPress'] = report;
                            entity['props'] = tangon;
                            entity = michal.bind(zuuluu)(entity);
                            entity = undefined;
                            return entity;
                        }
                    };
                    michal = zuuluu.bind(tangon)(michal);
 310:
                    return entity;
                }
            };
            yankee = option.bind(verify)(entity, golfie);
            entity = 9;
            entity = tangon[entity];
            option = zuuluu.bind(report)(entity);
            golfie = option.useIsPlaceholderVisible;
            entity = {};
            entity['searchContext'] = oscard;
            entity['data'] = yankee;
            romeon = golfie.bind(option)(entity);
            entity = 10;
            entity = tangon[entity];
            tangon = zuuluu.bind(report)(entity);
            zuuluu = tangon.useMessageTabCountsErrorText;
            entity = {};
            entity['searchContext'] = oscard;
            oscard = zuuluu.bind(tangon)(entity);
            entity = null;
            if(!(entity == oscard)) { _fun00004_ip = 516; continue _fun00003 }
 389:
            tangon = _closure1_slot10;
            zuuluu = _closure1_slot9;
            entity = {};
            offset = _closure1_slot8;
            verify = _closure1_slot1;
            foxtra = _closure1_slot2;
            golfie = 12;
            golfie = foxtra[golfie];
            option = verify.bind(report)(golfie);
            golfie = {};
            backup = _closure1_slot7;
            backup = backup.GUILD_CHANNELS;
            golfie['tab'] = backup;
            golfie['visible'] = romeon;
            option = offset.bind(report)(option, golfie);
            golfie = new Array(2);
            golfie[0] = option;
            option = 13;
            option = foxtra[option];
            verify = verify.bind(report)(option);
            option = {};
            romeon = !romeon;
            option['visible'] = romeon;
            romeon = _closure1_slot6;
            option['estimatedItemSize'] = romeon;
            option['data'] = yankee;
            option = offset.bind(report)(verify, option);
            golfie[1] = option;
            entity['children'] = golfie;
            entity = tangon.bind(report)(zuuluu, entity);
            _fun00004_ip = 552; continue _fun00003;
 516:
            tangon = _closure1_slot8;
            zuuluu = _closure1_slot1;
            golfie = _closure1_slot2;
            michal = 11;
            michal = golfie[michal];
            zuuluu = zuuluu.bind(report)(michal);
            michal = {};
            michal['text'] = oscard;
            entity = tangon.bind(report)(zuuluu, michal);
 552:
            return entity;
        }
    };
    michal = tangon.bind(golfie)(michal);
    tangon = 14;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/search_v2/native/components/tabs/pages/ChannelsScreen.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();