// app/modules/chat_input/native/guard/ChatInputGuardLurking.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    report = argBar;
    option = argBaz;
    golfie = argCor;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = option;
    var _closure1_slot2 = golfie;
    var _closure1_slot3 = oscard;
    entity = global;
    offset = entity.Object;
    verify = offset.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = verify.bind(offset)(zuuluu, entity, tangon);
    entity = 0;
    tangon = oscard[entity];
    entity = undefined;
    golfie = golfie.bind(entity)(tangon);
    var _closure1_slot4 = golfie;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = option.bind(entity)(tangon);
    var _closure1_slot5 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = option.bind(entity)(tangon);
    var _closure1_slot6 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.TextAreaCta;
    var _closure1_slot7 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    option = tangon.AnalyticEvents;
    var _closure1_slot8 = option;
    tangon = tangon.JoinGuildSources;
    var _closure1_slot9 = tangon;
    tangon = 5;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.GlobalDiscoveryTab;
    var _closure1_slot10 = tangon;
    tangon = 6;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.jsx;
    var _closure1_slot11 = tangon;
    tangon = golfie.memo;
    michal = function(argFoo) { // Original name: ChatInputGuardLurking
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argFoo;
            oscard = entity.channel;
            var _closure2_slot0 = oscard;
            entity = entity.isReadonlyAnnouncementsChannel;
            option = _closure1_slot0;
            verify = _closure1_slot3;
            michal = 7;
            michal = verify[michal];
            report = undefined;
            offset = option.bind(report)(michal);
            zuuluu = offset.useIsMobileGlobalDiscoveryEnabled;
            michal = {};
            yankee = 'ChatInputVerification';
            michal['location'] = yankee;
            zuuluu = zuuluu.bind(offset)(michal);
            michal = oscard.getGuildId;
            kiloes = michal.bind(oscard)();
            var _closure2_slot1 = kiloes;
            michal = 8;
            michal = verify[michal];
            yankee = option.bind(report)(michal);
            offset = yankee.useStateFromStoresObject;
            michal = _closure1_slot5;
            verify = new Array(1);
            verify[0] = michal;
            option = new Array(1);
            option[0] = kiloes;
            michal = function() {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    entity = {};
                    tangon = _closure2_slot1;
                    michal = null;
                    michal = michal != tangon;
                    if(!michal) { _fun00004_ip = 40; continue _fun00003 }
 18:
                    report = _closure1_slot5;
                    tangon = report.isLurking;
                    zuuluu = _closure2_slot1;
                    michal = tangon.bind(report)(zuuluu);
 40:
                    entity['isLurking'] = michal;
                    zuuluu = _closure1_slot5;
                    michal = zuuluu.getLurkingSource;
                    michal = michal.bind(zuuluu)();
                    entity['lurkingSource'] = michal;
                    michal = zuuluu.getHistorySnapshot;
                    michal = michal.bind(zuuluu)();
                    entity['lurkingHistorySnapshot'] = michal;
                    return entity;
                }
            };
            option = offset.bind(yankee)(verify, michal, option);
            backup = option.isLurking;
            michal = option.lurkingSource;
            yankee = option.lurkingHistorySnapshot;
            var _closure2_slot2 = yankee;
            foxtra = _closure1_slot4;
            offset = foxtra.useCallback;
            verify = function() {
                zuuluu = _closure1_slot1;
                tangon = _closure1_slot3;
                entity = 9;
                michal = tangon[entity];
                entity = undefined;
                golfie = zuuluu.bind(entity)(michal);
                oscard = golfie.trackWithMetadata;
                michal = _closure1_slot8;
                zuuluu = michal.TEXT_AREA_CTA_CLICKED;
                michal = {};
                option = _closure1_slot7;
                option = option.BACK_TO_DISCOVERY;
                michal['cta_type'] = option;
                michal = oscard.bind(golfie)(zuuluu, michal);
                zuuluu = _closure1_slot0;
                michal = 10;
                michal = tangon[michal];
                tangon = zuuluu.bind(entity)(michal);
                zuuluu = tangon.navigateToGlobalDiscovery;
                michal = {};
                report = _closure1_slot10;
                report = report.SERVERS;
                michal['initialTab'] = report;
                michal = zuuluu.bind(tangon)(michal);
                return entity;
            };
            option = new Array(0);
            option = offset.bind(foxtra)(verify, option);
            romeon = foxtra.useCallback;
            offset = new Array(1);
            offset[0] = yankee;
            verify = function() {
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    michal = _closure2_slot2;
                    entity = null;
                    if(!(entity != michal)) { _fun00006_ip = 67; continue _fun00005 }
 13:
                    zuuluu = _closure1_slot0;
                    michal = _closure1_slot3;
                    entity = 11;
                    michal = michal[entity];
                    entity = undefined;
                    zuuluu = zuuluu.bind(entity)(michal);
                    michal = zuuluu.replaceWith;
                    entity = {};
                    tangon = _closure2_slot2;
                    report = tangon.location;
                    oscard = entity;
                    tangon = copyDataProperties(oscard, report);
                    entity = michal.bind(zuuluu)(entity);
 67:
                    entity = undefined;
                    return entity;
                }
            };
            offset = romeon.bind(foxtra)(verify, offset);
            romeon = foxtra.useCallback;
            verify = new Array(2);
            verify[0] = kiloes;
            oscard = oscard.id;
            verify[1] = oscard;
            oscard = function() {
                _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                    zuuluu = _closure2_slot1;
                    michal = null;
                    if(!(michal != zuuluu)) { _fun00008_ip = 118; continue _fun00007 }
 13:
                    oscard = _closure1_slot1;
                    report = _closure1_slot3;
                    zuuluu = 9;
                    zuuluu = report[zuuluu];
                    tangon = undefined;
                    option = oscard.bind(tangon)(zuuluu);
                    golfie = option.trackWithMetadata;
                    zuuluu = _closure1_slot8;
                    oscard = zuuluu.TEXT_AREA_CTA_CLICKED;
                    zuuluu = {};
                    verify = _closure1_slot7;
                    verify = verify.FOLLOW_ANNOUNCEMENT;
                    zuuluu['cta_type'] = verify;
                    zuuluu = golfie.bind(option)(oscard, zuuluu);
                    zuuluu = _closure1_slot0;
                    michal = 12;
                    michal = report[michal];
                    tangon = zuuluu.bind(tangon)(michal);
                    zuuluu = tangon.showChannelFollowingActionSheet;
                    michal = _closure2_slot0;
                    michal = michal.id;
                    entity = _closure2_slot1;
                    entity = zuuluu.bind(tangon)(michal, entity);
 118:
                    entity = undefined;
                    return entity;
                }
            };
            romeon = romeon.bind(foxtra)(oscard, verify);
            verify = foxtra.useCallback;
            oscard = new Array(1);
            oscard[0] = kiloes;
            tangon = function() {
                _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                    michal = _closure2_slot1;
                    entity = null;
                    if(!(entity != michal)) { _fun00010_ip = 283; continue _fun00009 }
 16:
                    zuuluu = _closure1_slot5;
                    michal = zuuluu.getLurkingSource;
                    michal = michal.bind(zuuluu)();
                    oscard = entity == michal;
                    zuuluu = undefined;
                    golfie = undefined;
                    if(oscard) { _fun00010_ip = 49; continue _fun00009 }
 44:
                    golfie = michal.type;
 49:
                    oscard = _closure1_slot9;
                    oscard = oscard.DIRECTORY_ENTRY;
                    if(!(golfie === oscard)) { _fun00010_ip = 153; continue _fun00009 }
 63:
                    golfie = _closure1_slot6;
                    oscard = golfie.getChannel;
                    michal = michal.directoryChannelId;
                    michal = oscard.bind(golfie)(michal);
                    if(!(entity != michal)) { _fun00010_ip = 153; continue _fun00009 }
 87:
                    option = _closure1_slot0;
                    verify = _closure1_slot3;
                    entity = 13;
                    entity = verify[entity];
                    golfie = option.bind(zuuluu)(entity);
                    oscard = golfie.setHubProgressActionComplete;
                    entity = michal.getGuildId;
                    michal = entity.bind(michal)();
                    entity = 14;
                    entity = verify[entity];
                    entity = option.bind(zuuluu)(entity);
                    entity = entity.HubProgressStep;
                    entity = entity.JOIN_GUILD;
                    entity = oscard.bind(golfie)(michal, entity);
 153:
                    michal = _closure1_slot2;
                    oscard = _closure1_slot3;
                    entity = 15;
                    entity = oscard[entity];
                    michal = michal.bind(zuuluu)(entity);
                    entity = michal.trackGuildJoinClicked;
                    tangon = _closure2_slot1;
                    entity = entity.bind(michal)(tangon);
                    michal = _closure1_slot1;
                    entity = 9;
                    entity = oscard[entity];
                    verify = michal.bind(zuuluu)(entity);
                    option = verify.trackWithMetadata;
                    entity = _closure1_slot8;
                    golfie = entity.TEXT_AREA_CTA_CLICKED;
                    entity = {};
                    offset = _closure1_slot7;
                    offset = offset.JOIN_GUILD;
                    entity['cta_type'] = offset;
                    entity = option.bind(verify)(golfie, entity);
                    entity = 16;
                    entity = oscard[entity];
                    zuuluu = michal.bind(zuuluu)(entity);
                    michal = zuuluu.joinGuild;
                    entity = {};
                    report = _closure1_slot9;
                    report = report.CHAT_INPUT_BLOCKER;
                    entity['source'] = report;
                    entity = michal.bind(zuuluu)(tangon, entity);
 283:
                    entity = undefined;
                    return entity;
                }
            };
            oscard = verify.bind(foxtra)(tangon, oscard);
            verify = null;
            tangon = verify == michal;
            foxtra = undefined;
            if(tangon) { _fun00002_ip = 285; continue _fun00001 }
 280:
            foxtra = michal.type;
 285:
            tangon = _closure1_slot9;
            tangon = tangon.MOBILE_GUILD_DISCOVERY;
            if(!(foxtra === tangon)) { _fun00002_ip = 305; continue _fun00001 }
 299:
            if(zuuluu) { _fun00002_ip = 967; continue _fun00001 }
 305:
            tangon = verify == michal;
            zuuluu = undefined;
            if(tangon) { _fun00002_ip = 319; continue _fun00001 }
 314:
            zuuluu = michal.type;
 319:
            michal = _closure1_slot9;
            michal = michal.DIRECTORY_ENTRY;
            if(!(zuuluu !== michal)) { _fun00002_ip = 718; continue _fun00001 }
 336:
            zuuluu = _closure1_slot11;
            tangon = _closure1_slot1;
            foxtra = _closure1_slot3;
            michal = 17;
            michal = foxtra[michal];
            michal = tangon.bind(report)(michal);
            if(entity) { _fun00002_ip = 496; continue _fun00001 }
 366:
            entity = {};
            tangon = 'button-action';
            entity['type'] = tangon;
            sizing = _closure1_slot0;
            output = _closure1_slot3;
            tangon = 18;
            foxtra = output[tangon];
            foxtra = sizing.bind(report)(foxtra);
            result = foxtra.intl;
            kiloes = result.string;
            foxtra = output[tangon];
            foxtra = sizing.bind(report)(foxtra);
            foxtra = foxtra.t;
            foxtra = foxtra.G42YmJ;
            foxtra = kiloes.bind(result)(foxtra);
            entity['message'] = foxtra;
            foxtra = output[tangon];
            foxtra = sizing.bind(report)(foxtra);
            kiloes = foxtra.intl;
            foxtra = kiloes.string;
            tangon = output[tangon];
            tangon = sizing.bind(report)(tangon);
            tangon = tangon.t;
            tangon = tangon.RLch7+;
            tangon = foxtra.bind(kiloes)(tangon);
            entity['buttonPrimaryText'] = tangon;
            entity['buttonPrimaryOnPress'] = oscard;
            _fun00002_ip = 707; continue _fun00001;
 496:
            tangon = {};
            foxtra = 'button-action';
            tangon['type'] = foxtra;
            result = _closure1_slot0;
            foxtra = _closure1_slot3;
            output = 18;
            kiloes = foxtra[output];
            kiloes = result.bind(report)(kiloes);
            sizing = kiloes.intl;
            kiloes = sizing.string;
            foxtra = foxtra[output];
            foxtra = result.bind(report)(foxtra);
            foxtra = foxtra.t;
            foxtra = foxtra.Hl0Mqq;
            foxtra = kiloes.bind(sizing)(foxtra);
            tangon['message'] = foxtra;
            foxtra = undefined;
            if(!backup) { _fun00002_ip = 624; continue _fun00001 }
 572:
            echoed = _closure1_slot0;
            kiloes = _closure1_slot3;
            sizing = kiloes[output];
            sizing = echoed.bind(report)(sizing);
            result = sizing.intl;
            sizing = result.string;
            kiloes = kiloes[output];
            kiloes = echoed.bind(report)(kiloes);
            kiloes = kiloes.t;
            kiloes = kiloes.VJlc0d;
            foxtra = sizing.bind(result)(kiloes);
 624:
            tangon['buttonSecondaryText'] = foxtra;
            foxtra = undefined;
            if(!backup) { _fun00002_ip = 637; continue _fun00001 }
 634:
            foxtra = oscard;
 637:
            tangon['buttonSecondaryOnPress'] = foxtra;
            sizing = _closure1_slot0;
            foxtra = _closure1_slot3;
            backup = foxtra[output];
            backup = sizing.bind(report)(backup);
            kiloes = backup.intl;
            backup = kiloes.string;
            foxtra = foxtra[output];
            foxtra = sizing.bind(report)(foxtra);
            foxtra = foxtra.t;
            foxtra = foxtra.3aOv+v;
            foxtra = backup.bind(kiloes)(foxtra);
            tangon['buttonPrimaryText'] = foxtra;
            tangon['buttonPrimaryOnPress'] = romeon;
            entity = tangon;
 707:
            entity = zuuluu.bind(report)(michal, entity);
            _fun00002_ip = 962; continue _fun00001;
 718:
            tangon = _closure1_slot11;
            zuuluu = _closure1_slot1;
            romeon = _closure1_slot3;
            michal = 17;
            michal = romeon[michal];
            zuuluu = zuuluu.bind(report)(michal);
            michal = {};
            foxtra = 'button-action';
            michal['type'] = foxtra;
            sizing = _closure1_slot0;
            foxtra = 18;
            backup = romeon[foxtra];
            backup = sizing.bind(report)(backup);
            kiloes = backup.intl;
            backup = kiloes.string;
            romeon = romeon[foxtra];
            romeon = sizing.bind(report)(romeon);
            romeon = romeon.t;
            romeon = romeon.G42YmJ;
            romeon = backup.bind(kiloes)(romeon);
            michal['message'] = romeon;
            backup = verify != yankee;
            romeon = undefined;
            if(!backup) { _fun00002_ip = 872; continue _fun00001 }
 818:
            output = _closure1_slot0;
            backup = _closure1_slot3;
            kiloes = backup[foxtra];
            kiloes = output.bind(report)(kiloes);
            sizing = kiloes.intl;
            kiloes = sizing.string;
            backup = backup[foxtra];
            backup = output.bind(report)(backup);
            backup = backup.t;
            backup = backup.GlKb5u;
            romeon = kiloes.bind(sizing)(backup);
 872:
            michal['buttonSecondaryText'] = romeon;
            yankee = verify != yankee;
            verify = undefined;
            if(!yankee) { _fun00002_ip = 889; continue _fun00001 }
 886:
            verify = offset;
 889:
            michal['buttonSecondaryOnPress'] = verify;
            romeon = _closure1_slot0;
            verify = _closure1_slot3;
            offset = verify[foxtra];
            offset = romeon.bind(report)(offset);
            yankee = offset.intl;
            offset = yankee.string;
            verify = verify[foxtra];
            verify = romeon.bind(report)(verify);
            verify = verify.t;
            verify = verify.RLch7+;
            verify = offset.bind(yankee)(verify);
            michal['buttonPrimaryText'] = verify;
            michal['buttonPrimaryOnPress'] = oscard;
            entity = tangon.bind(report)(zuuluu, michal);
 962:
            _fun00002_ip = 1174; continue _fun00001;
 967:
            tangon = _closure1_slot11;
            zuuluu = _closure1_slot1;
            yankee = _closure1_slot3;
            michal = 17;
            michal = yankee[michal];
            zuuluu = zuuluu.bind(report)(michal);
            michal = {};
            verify = 'button-action';
            michal['type'] = verify;
            offset = _closure1_slot0;
            golfie = 18;
            verify = yankee[golfie];
            verify = offset.bind(report)(verify);
            foxtra = verify.intl;
            romeon = foxtra.string;
            verify = yankee[golfie];
            verify = offset.bind(report)(verify);
            verify = verify.t;
            verify = verify.G42YmJ;
            verify = romeon.bind(foxtra)(verify);
            michal['message'] = verify;
            verify = yankee[golfie];
            verify = offset.bind(report)(verify);
            foxtra = verify.intl;
            romeon = foxtra.string;
            verify = yankee[golfie];
            verify = offset.bind(report)(verify);
            verify = verify.t;
            verify = verify.gJDAUF;
            verify = romeon.bind(foxtra)(verify);
            michal['buttonSecondaryText'] = verify;
            michal['buttonSecondaryOnPress'] = option;
            option = yankee[golfie];
            option = offset.bind(report)(option);
            verify = option.intl;
            option = verify.string;
            golfie = yankee[golfie];
            golfie = offset.bind(report)(golfie);
            golfie = golfie.t;
            golfie = golfie.RLch7+;
            golfie = option.bind(verify)(golfie);
            michal['buttonPrimaryText'] = golfie;
            michal['buttonPrimaryOnPress'] = oscard;
            entity = tangon.bind(report)(zuuluu, michal);
 1174:
            return entity;
        }
    };
    michal = tangon.bind(golfie)(michal);
    tangon = 19;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/chat_input/native/guard/ChatInputGuardLurking.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();