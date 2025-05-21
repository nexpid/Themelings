// app/modules/main_tabs_v2/native/shared_components/happening_now/HappeningNowCardVoice.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    golfie = argBar;
    offset = argBaz;
    zuuluu = argFre;
    option = argPlu;
    var _closure1_slot0 = golfie;
    var _closure1_slot1 = offset;
    var _closure1_slot2 = option;
    tangon = function(argFoo) { // Original name: useVoiceChannelUsers
        michal = argFoo;
        var _closure2_slot0 = michal;
        report = _closure1_slot0;
        tangon = _closure1_slot2;
        zuuluu = 18;
        tangon = tangon[zuuluu];
        zuuluu = undefined;
        report = report.bind(zuuluu)(tangon);
        tangon = report.useStateFromStoresArray;
        golfie = _closure1_slot7;
        zuuluu = new Array(3);
        zuuluu[0] = golfie;
        golfie = _closure1_slot6;
        zuuluu[1] = golfie;
        oscard = _closure1_slot5;
        zuuluu[2] = oscard;
        oscard = michal.channelId;
        michal = new Array(1);
        michal[0] = oscard;
        entity = function() {
            report = _closure1_slot7;
            tangon = report.getVoiceStatesForChannel;
            zuuluu = _closure2_slot0;
            zuuluu = zuuluu.channelId;
            tangon = tangon.bind(report)(zuuluu);
            report = _closure1_slot1;
            golfie = _closure1_slot2;
            zuuluu = 19;
            zuuluu = golfie[zuuluu];
            oscard = undefined;
            zuuluu = report.bind(oscard)(zuuluu);
            report = zuuluu.bind(oscard)(tangon);
            tangon = report.map;
            zuuluu = function(argFoo) {
                zuuluu = _closure1_slot6;
                michal = zuuluu.getUser;
                entity = argFoo;
                entity = entity.userId;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            tangon = tangon.bind(report)(zuuluu);
            zuuluu = tangon.filter;
            report = _closure1_slot0;
            michal = 20;
            michal = golfie[michal];
            michal = report.bind(oscard)(michal);
            michal = michal.isNotNullish;
            tangon = zuuluu.bind(tangon)(michal);
            zuuluu = tangon.orderBy;
            michal = new Array(1);
            entity = function(argFoo) {
                _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                    zuuluu = _closure1_slot5;
                    michal = zuuluu.getUserAffinity;
                    entity = argFoo;
                    entity = entity.id;
                    zuuluu = michal.bind(zuuluu)(entity);
                    entity = null;
                    tangon = entity == zuuluu;
                    michal = undefined;
                    if(tangon) { _fun00002_ip = 43; continue _fun00001 }
 37:
                    michal = zuuluu.communicationProbability;
 43:
                    zuuluu = entity != michal;
                    entity = 0;
                    if(!zuuluu) { _fun00002_ip = 55; continue _fun00001 }
 52:
                    entity = michal;
 55:
                    return entity;
                }
            };
            michal[0] = entity;
            entity = ['desc'];
            michal = zuuluu.bind(tangon)(michal, entity);
            entity = michal.value;
            entity = entity.bind(michal)();
            return entity;
        };
        entity = tangon.bind(report)(zuuluu, entity, michal);
        return entity;
    };
    var _closure1_slot13 = tangon;
    michal = function(argFoo, argBar) { // Original name: formatVoiceActivityTitle
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            michal = argFoo;
            report = argBar;
            zuuluu = michal.length;
            entity = 0;
            if(!(entity !== zuuluu)) { _fun00004_ip = 376; continue _fun00003 }
 20:
            option = 1;
            if(!(option !== zuuluu)) { _fun00004_ip = 330; continue _fun00003 }
 30:
            offset = 2;
            if(!(offset !== zuuluu)) { _fun00004_ip = 192; continue _fun00003 }
 40:
            tangon = _closure1_slot0;
            backup = _closure1_slot2;
            zuuluu = 22;
            oscard = backup[zuuluu];
            romeon = undefined;
            oscard = tangon.bind(romeon)(oscard);
            golfie = oscard.intl;
            oscard = golfie.formatToPlainString;
            zuuluu = backup[zuuluu];
            zuuluu = tangon.bind(romeon)(zuuluu);
            zuuluu = zuuluu.t;
            tangon = zuuluu.pjxkCA;
            zuuluu = {};
            yankee = _closure1_slot1;
            verify = 21;
            foxtra = backup[verify];
            output = yankee.bind(romeon)(foxtra);
            sizing = output.getName;
            kiloes = michal[entity];
            foxtra = null;
            kiloes = sizing.bind(output)(report, foxtra, kiloes);
            zuuluu['user1'] = kiloes;
            verify = backup[verify];
            romeon = yankee.bind(romeon)(verify);
            yankee = romeon.getName;
            verify = michal[option];
            verify = yankee.bind(romeon)(report, foxtra, verify);
            zuuluu['user2'] = verify;
            verify = michal.length;
            verify = verify - offset;
            zuuluu['extras'] = verify;
            zuuluu = oscard.bind(golfie)(tangon, zuuluu);
            return zuuluu;
 192:
            tangon = _closure1_slot0;
            foxtra = _closure1_slot2;
            zuuluu = 22;
            oscard = foxtra[zuuluu];
            romeon = undefined;
            oscard = tangon.bind(romeon)(oscard);
            golfie = oscard.intl;
            oscard = golfie.formatToPlainString;
            zuuluu = foxtra[zuuluu];
            zuuluu = tangon.bind(romeon)(zuuluu);
            zuuluu = zuuluu.t;
            tangon = zuuluu.4SM/RU;
            zuuluu = {};
            offset = _closure1_slot1;
            verify = 21;
            yankee = foxtra[verify];
            sizing = offset.bind(romeon)(yankee);
            kiloes = sizing.getName;
            backup = michal[entity];
            yankee = null;
            backup = kiloes.bind(sizing)(report, yankee, backup);
            zuuluu['user1'] = backup;
            verify = foxtra[verify];
            offset = offset.bind(romeon)(verify);
            verify = offset.getName;
            option = michal[option];
            option = verify.bind(offset)(report, yankee, option);
            zuuluu['user2'] = option;
            zuuluu = oscard.bind(golfie)(tangon, zuuluu);
            return zuuluu;
 330:
            oscard = _closure1_slot1;
            tangon = _closure1_slot2;
            zuuluu = 21;
            tangon = tangon[zuuluu];
            zuuluu = undefined;
            tangon = oscard.bind(zuuluu)(tangon);
            zuuluu = tangon.getName;
            michal = michal[entity];
            entity = null;
            entity = zuuluu.bind(tangon)(report, entity, michal);
            return entity;
 376:
            entity = '';
            return entity;
        }
    };
    var _closure1_slot14 = michal;
    entity = global;
    yankee = entity.Object;
    verify = yankee.defineProperty;
    oscard = {};
    entity = true;
    oscard['value'] = entity;
    entity = '__esModule';
    entity = verify.bind(yankee)(zuuluu, entity, oscard);
    entity = 0;
    verify = option[entity];
    oscard = argCor;
    entity = undefined;
    verify = oscard.bind(entity)(verify);
    var _closure1_slot3 = verify;
    foxtra = 1;
    oscard = option[foxtra];
    oscard = golfie.bind(entity)(oscard);
    oscard = oscard.View;
    var _closure1_slot4 = oscard;
    oscard = 2;
    oscard = option[oscard];
    oscard = offset.bind(entity)(oscard);
    var _closure1_slot5 = oscard;
    oscard = 3;
    oscard = option[oscard];
    oscard = offset.bind(entity)(oscard);
    var _closure1_slot6 = oscard;
    oscard = 4;
    oscard = option[oscard];
    oscard = offset.bind(entity)(oscard);
    var _closure1_slot7 = oscard;
    oscard = 5;
    oscard = option[oscard];
    oscard = golfie.bind(entity)(oscard);
    oscard = oscard.HappeningNowCardTrackingType;
    var _closure1_slot8 = oscard;
    oscard = 6;
    oscard = option[oscard];
    oscard = golfie.bind(entity)(oscard);
    oscard = oscard.AnalyticEvents;
    var _closure1_slot9 = oscard;
    oscard = 7;
    oscard = option[oscard];
    oscard = golfie.bind(entity)(oscard);
    offset = oscard.jsx;
    var _closure1_slot10 = offset;
    oscard = oscard.jsxs;
    var _closure1_slot11 = oscard;
    oscard = 8;
    oscard = option[oscard];
    yankee = golfie.bind(entity)(oscard);
    offset = yankee.createStyles;
    oscard = {};
    romeon = {};
    romeon['flexShrink'] = foxtra;
    oscard['content'] = romeon;
    romeon = {};
    foxtra = 12;
    romeon['marginRight'] = foxtra;
    oscard['avatars'] = romeon;
    oscard = offset.bind(yankee)(oscard);
    var _closure1_slot12 = oscard;
    oscard = verify.memo;
    report = function(argFoo) {
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            michal = argFoo;
            echoed = michal.guildId;
            var _closure2_slot0 = echoed;
            verify = michal.index;
            var _closure2_slot1 = verify;
            kiloes = michal.voiceState;
            var _closure2_slot2 = kiloes;
            option = michal.fullwidth;
            oscard = michal.panelVariant;
            report = undefined;
            if(!(oscard === report)) { _fun00006_ip = 53; continue _fun00005 }
 51:
            oscard = false;
 53:
            var _closure2_slot3 = report;
            zuuluu = _closure1_slot12;
            romeon = zuuluu.bind(report)();
            zuuluu = _closure1_slot13;
            result = zuuluu.bind(report)(kiloes);
            _closure2_slot3 = result;
            zuuluu = _closure1_slot14;
            output = zuuluu.bind(report)(result, echoed);
            golfie = _closure1_slot3;
            tangon = golfie.useCallback;
            zuuluu = new Array(4);
            zuuluu[0] = verify;
            zuuluu[1] = echoed;
            verify = kiloes.channelId;
            zuuluu[2] = verify;
            zuuluu[3] = result;
            entity = function() {
                oscard = _closure1_slot1;
                zuuluu = _closure1_slot2;
                entity = 9;
                report = zuuluu[entity];
                entity = undefined;
                option = oscard.bind(entity)(report);
                golfie = option.track;
                report = _closure1_slot9;
                oscard = report.ACTIVITY_CARD_CLICKED;
                report = {};
                offset = _closure2_slot1;
                report['order'] = offset;
                offset = _closure2_slot0;
                report['guild_id'] = offset;
                offset = _closure1_slot8;
                offset = offset.VOICE_CARD;
                report['type'] = offset;
                offset = _closure2_slot2;
                offset = offset.channelId;
                report['destination_channel_id'] = offset;
                yankee = _closure2_slot3;
                offset = yankee.map;
                verify = function(argFoo) {
                    entity = argFoo;
                    entity = entity.id;
                    return entity;
                };
                verify = offset.bind(yankee)(verify);
                report['highlighted_user_ids'] = verify;
                report = golfie.bind(option)(oscard, report);
                report = _closure1_slot0;
                tangon = 11;
                tangon = zuuluu[tangon];
                report = report.bind(entity)(tangon);
                tangon = 10;
                tangon = zuuluu[tangon];
                zuuluu = zuuluu.paths;
                tangon = report.bind(entity)(tangon, zuuluu);
                zuuluu = tangon.then;
                michal = function(argFoo) {
                    _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                        entity = argFoo;
                        tangon = entity.default;
                        michal = _closure2_slot2;
                        zuuluu = michal.channelId;
                        michal = null;
                        if(!(michal != zuuluu)) { _fun00008_ip = 45; continue _fun00007 }
 26:
                        entity = _closure2_slot2;
                        zuuluu = entity.channelId;
                        michal = undefined;
                        entity = true;
                        entity = tangon.bind(michal)(zuuluu, entity);
 45:
                        entity = undefined;
                        return entity;
                    }
                };
                michal = zuuluu.bind(tangon)(michal);
                return entity;
            };
            golfie = tangon.bind(golfie)(entity, zuuluu);
            zuuluu = result.length;
            entity = 0;
            if(!(entity !== zuuluu)) { _fun00006_ip = 440; continue _fun00005 }
 152:
            tangon = _closure1_slot11;
            zuuluu = _closure1_slot1;
            entity = _closure1_slot2;
            yankee = 13;
            entity = entity[yankee];
            zuuluu = zuuluu.bind(report)(entity);
            entity = {};
            entity['onPress'] = golfie;
            golfie = 'large';
            if(!option) { _fun00006_ip = 193; continue _fun00005 }
 189:
            golfie = 'full';
 193:
            entity['width'] = golfie;
            verify = _closure1_slot1;
            sizing = _closure1_slot2;
            golfie = 14;
            golfie = sizing[golfie];
            golfie = verify.bind(report)(golfie);
            entity['badgeIcon'] = golfie;
            foxtra = _closure1_slot0;
            golfie = 15;
            golfie = sizing[golfie];
            golfie = foxtra.bind(report)(golfie);
            golfie = golfie.VoiceNormalIcon;
            entity['IconComponent'] = golfie;
            entity['panelVariant'] = oscard;
            backup = _closure1_slot10;
            offset = _closure1_slot4;
            golfie = {};
            option = romeon.avatars;
            golfie['style'] = option;
            option = 16;
            option = sizing[option];
            verify = verify.bind(report)(option);
            option = {};
            option['guildId'] = echoed;
            option['users'] = result;
            option = backup.bind(report)(verify, option);
            golfie['children'] = option;
            option = backup.bind(report)(offset, golfie);
            golfie = new Array(2);
            golfie[0] = option;
            verify = _closure1_slot11;
            option = {};
            romeon = romeon.content;
            option['style'] = romeon;
            yankee = sizing[yankee];
            yankee = foxtra.bind(report)(yankee);
            romeon = yankee.HappeningNowCardHeader;
            yankee = {};
            result = 2;
            yankee['lineClamp'] = result;
            yankee['children'] = output;
            romeon = backup.bind(report)(romeon, yankee);
            yankee = new Array(2);
            yankee[0] = romeon;
            romeon = 17;
            romeon = sizing[romeon];
            romeon = foxtra.bind(report)(romeon);
            foxtra = romeon.HappeningNowVoiceCardSubtitle;
            romeon = {};
            romeon['voiceState'] = kiloes;
            romeon = backup.bind(report)(foxtra, romeon);
            yankee[1] = romeon;
            option['children'] = yankee;
            option = verify.bind(report)(offset, option);
            golfie[1] = option;
            entity['children'] = golfie;
            entity = tangon.bind(report)(zuuluu, entity);
            _fun00006_ip = 483; continue _fun00005;
 440:
            tangon = _closure1_slot10;
            zuuluu = _closure1_slot0;
            golfie = _closure1_slot2;
            michal = 12;
            michal = golfie[michal];
            michal = zuuluu.bind(report)(michal);
            zuuluu = michal.HappeningNowCardPlaceholder;
            michal = {};
            michal['panelVariant'] = oscard;
            entity = tangon.bind(report)(zuuluu, michal);
 483:
            return entity;
        }
    };
    report = oscard.bind(verify)(report);
    oscard = 23;
    oscard = option[oscard];
    option = golfie.bind(entity)(oscard);
    golfie = option.fileFinishedImporting;
    oscard = 'modules/main_tabs_v2/native/shared_components/happening_now/HappeningNowCardVoice.tsx';
    oscard = golfie.bind(option)(oscard);
    zuuluu['default'] = report;
    zuuluu['useVoiceChannelUsers'] = tangon;
    zuuluu['formatVoiceActivityTitle'] = michal;
    return entity;
})();