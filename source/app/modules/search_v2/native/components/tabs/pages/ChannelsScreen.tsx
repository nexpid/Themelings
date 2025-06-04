// app/modules/search_v2/native/components/tabs/pages/ChannelsScreen.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    report = argBar;
    option = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = option;
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
            entity = _closure1_slot5;
 47:
            return entity;
        }
    };
    var _closure1_slot9 = entity;
    entity = global;
    verify = entity.Object;
    golfie = verify.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = golfie.bind(verify)(zuuluu, entity, tangon);
    entity = 0;
    golfie = oscard[entity];
    tangon = argCor;
    entity = undefined;
    golfie = tangon.bind(entity)(golfie);
    var _closure1_slot3 = golfie;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = option.bind(entity)(tangon);
    var _closure1_slot4 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    option = tangon.EMPTY_VOICE_STATES;
    var _closure1_slot5 = option;
    option = tangon.SearchListItemTypes;
    var _closure1_slot6 = option;
    tangon = tangon.CHANNELS_ESTIMATED_ITEM_SIZE;
    var _closure1_slot7 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.jsx;
    var _closure1_slot8 = tangon;
    tangon = golfie.memo;
    michal = function(argFoo) {
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            michal = argFoo;
            oscard = michal.searchContext;
            var _closure2_slot0 = oscard;
            zuuluu = _closure1_slot0;
            tangon = _closure1_slot2;
            golfie = 4;
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
            golfie = 5;
            golfie = tangon[golfie];
            verify = option.bind(report)(golfie);
            golfie = oscard.guildId;
            offset = verify.bind(report)(golfie);
            var _closure2_slot3 = offset;
            golfie = 6;
            golfie = tangon[golfie];
            option = option.bind(report)(golfie);
            golfie = oscard.guildId;
            foxtra = option.bind(report)(golfie);
            var _closure2_slot4 = foxtra;
            golfie = 7;
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
            kiloes = _closure1_slot4;
            backup = kiloes.useState;
            verify = function(argFoo) {
                michal = argFoo;
                entity = michal.isInitialSearchQuery;
                entity = entity.bind(michal)();
                return entity;
            };
            backup = backup.bind(kiloes)(oscard, verify);
            var _closure2_slot7 = backup;
            verify = 8;
            verify = tangon[verify];
            sizing = zuuluu.bind(report)(verify);
            kiloes = sizing.useFullscreenPlaceholderCount;
            verify = {};
            output = _closure1_slot7;
            verify['placeholderHeight'] = output;
            output = 1;
            verify['numColumns'] = output;
            output = kiloes.bind(sizing)(verify);
            var _closure2_slot8 = output;
            verify = _closure1_slot3;
            sizing = verify.useCallback;
            kiloes = new Array(2);
            kiloes[0] = option;
            kiloes[1] = oscard;
            option = function(argFoo) {
                report = argFoo;
                michal = _closure2_slot5;
                entity = undefined;
                michal = michal.bind(entity)(report);
                zuuluu = _closure1_slot0;
                tangon = _closure1_slot2;
                michal = 9;
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
            sizing = sizing.bind(verify)(option, kiloes);
            var _closure2_slot9 = sizing;
            kiloes = verify.useCallback;
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
                michal = 9;
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
            kiloes = kiloes.bind(verify)(golfie, option);
            var _closure2_slot10 = kiloes;
            option = verify.useMemo;
            golfie = new Array(8);
            golfie[0] = output;
            golfie[1] = sizing;
            golfie[2] = kiloes;
            golfie[3] = backup;
            golfie[4] = foxtra;
            golfie[5] = romeon;
            golfie[6] = yankee;
            golfie[7] = offset;
            entity = function() {
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    entity = new Array(0);
                    var _closure3_slot0 = entity;
                    zuuluu = _closure2_slot1;
                    zuuluu = zuuluu.length;
                    oscard = 0;
                    if(!(zuuluu > oscard)) { _fun00006_ip = 145; continue _fun00005 }
 28:
                    tangon = entity.push;
                    zuuluu = {};
                    report = _closure1_slot6;
                    report = report.SECTION;
                    zuuluu['type'] = report;
                    report = {};
                    romeon = _closure1_slot0;
                    foxtra = _closure1_slot2;
                    option = 10;
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
                    report['title'] = option;
                    zuuluu['props'] = report;
                    zuuluu = tangon.bind(entity)(zuuluu);
                    report = _closure2_slot1;
                    tangon = report.forEach;
                    zuuluu = function(argFoo) {
                        report = argFoo;
                        zuuluu = _closure3_slot0;
                        michal = zuuluu.push;
                        entity = {};
                        tangon = _closure1_slot6;
                        tangon = tangon.GUILD_TEXT_CHANNEL;
                        entity['type'] = tangon;
                        tangon = {};
                        oscard = report.channel;
                        tangon['channel'] = oscard;
                        report = report.lastMessageId;
                        tangon['lastMessageId'] = report;
                        report = _closure2_slot9;
                        tangon['onPress'] = report;
                        entity['props'] = tangon;
                        entity = michal.bind(zuuluu)(entity);
                        entity = undefined;
                        return entity;
                    };
                    zuuluu = tangon.bind(report)(zuuluu);
 145:
                    zuuluu = _closure2_slot2;
                    zuuluu = zuuluu.length;
                    if(!(zuuluu > oscard)) { _fun00006_ip = 310; continue _fun00005 }
 161:
                    tangon = entity.push;
                    zuuluu = {};
                    report = _closure1_slot6;
                    report = report.SECTION;
                    zuuluu['type'] = report;
                    report = {};
                    romeon = _closure1_slot0;
                    foxtra = _closure1_slot2;
                    verify = 10;
                    offset = foxtra[verify];
                    option = undefined;
                    offset = romeon.bind(option)(offset);
                    yankee = offset.intl;
                    offset = yankee.string;
                    verify = foxtra[verify];
                    verify = romeon.bind(option)(verify);
                    verify = verify.t;
                    verify = verify.CYnO4u;
                    verify = offset.bind(yankee)(verify);
                    report['title'] = verify;
                    zuuluu['props'] = report;
                    zuuluu = tangon.bind(entity)(zuuluu);
                    report = _closure2_slot3;
                    tangon = _closure2_slot4;
                    zuuluu = function(argFoo, argBar) { // Original name: createSorter
                        michal = argFoo;
                        var _closure4_slot0 = michal;
                        michal = argBar;
                        var _closure4_slot1 = michal;
                        entity = function(argFoo, argBar) {
                            _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                                oscard = _closure1_slot9;
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
                    report = zuuluu.bind(option)(report, tangon);
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
                            tangon = _closure1_slot6;
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
                            verify = _closure1_slot5;
 76:
                            tangon['voiceStates'] = verify;
                            verify = _closure2_slot4;
                            oscard = oscard.channel;
                            oscard = oscard.id;
                            oscard = verify[oscard];
                            if(!(option == oscard)) { _fun00010_ip = 107; continue _fun00009 }
 103:
                            oscard = _closure1_slot5;
 107:
                            tangon['speakerVoiceStates'] = oscard;
                            report = _closure2_slot10;
                            tangon['onPress'] = report;
                            entity['props'] = tangon;
                            entity = michal.bind(zuuluu)(entity);
                            entity = undefined;
                            return entity;
                        }
                    };
                    michal = zuuluu.bind(tangon)(michal);
 310:
                    michal = _closure2_slot7;
                    if(michal) { _fun00006_ip = 407; continue _fun00005 }
 317:
                    michal = entity.length;
                    if(!(oscard === michal)) { _fun00006_ip = 407; continue _fun00005 }
 326:
                    michal = _closure2_slot8;
                    michal = oscard < michal;
                    tangon = global;
                    zuuluu = 'message-placeholder-';
                    oscard = 0;
                    if(!michal) { _fun00006_ip = 407; continue _fun00005 }
 350:
                    option = entity.push;
                    michal = {};
                    verify = _closure1_slot6;
                    verify = verify.MESSAGE_PLACEHOLDER;
                    michal['type'] = verify;
                    verify = tangon.HermesInternal;
                    verify = verify.concat;
                    verify = verify.bind(zuuluu)(oscard);
                    michal['key'] = verify;
                    michal = option.bind(entity)(michal);
                    oscard = oscard + 1;
                    michal = _closure2_slot8;
                    if(oscard < michal) { _fun00006_ip = 350; continue _fun00005 }
 407:
                    return entity;
                }
            };
            golfie = option.bind(verify)(entity, golfie);
            entity = 11;
            entity = tangon[entity];
            tangon = zuuluu.bind(report)(entity);
            zuuluu = tangon.useMessageTabCountsErrorText;
            entity = {};
            entity['searchContext'] = oscard;
            oscard = zuuluu.bind(tangon)(entity);
            entity = null;
            if(!(entity == oscard)) { _fun00004_ip = 479; continue _fun00003 }
 432:
            tangon = _closure1_slot8;
            zuuluu = _closure1_slot1;
            option = _closure1_slot2;
            entity = 13;
            entity = option[entity];
            zuuluu = zuuluu.bind(report)(entity);
            entity = {};
            option = _closure1_slot7;
            entity['estimatedItemSize'] = option;
            entity['data'] = golfie;
            entity = tangon.bind(report)(zuuluu, entity);
            _fun00004_ip = 515; continue _fun00003;
 479:
            tangon = _closure1_slot8;
            zuuluu = _closure1_slot1;
            golfie = _closure1_slot2;
            michal = 12;
            michal = golfie[michal];
            zuuluu = zuuluu.bind(report)(michal);
            michal = {};
            michal['text'] = oscard;
            entity = tangon.bind(report)(zuuluu, michal);
 515:
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