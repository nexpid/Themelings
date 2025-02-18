// app/modules/premium/native/BoostedGuildTierProgressCircle.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    report = argBar;
    yankee = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = yankee;
    var _closure1_slot2 = oscard;
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
    tangon = tangon.bind(entity)(golfie);
    tangon = 1;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    golfie = tangon.View;
    var _closure1_slot3 = golfie;
    tangon = tangon.Image;
    var _closure1_slot4 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.BoostedGuildTiers;
    var _closure1_slot5 = tangon;
    tangon = 3;
    golfie = oscard[tangon];
    golfie = report.bind(entity)(golfie);
    golfie = golfie.jsx;
    var _closure1_slot6 = golfie;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.jsxs;
    var _closure1_slot7 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    option = report.bind(entity)(tangon);
    golfie = option.createStyles;
    tangon = {};
    verify = {'position': 'relative', 'width': 70, 'height': 70};
    tangon['guildTierProgressCircle'] = verify;
    verify = {'backgroundColor': null, 'width': 64, 'height': 64, 'alignItems': 'center', 'justifyContent': 'center'};
    offset = 5;
    romeon = oscard[offset];
    romeon = yankee.bind(entity)(romeon);
    romeon = romeon.colors;
    romeon = romeon.BACKGROUND_FLOATING;
    verify['backgroundColor'] = romeon;
    offset = oscard[offset];
    offset = yankee.bind(entity)(offset);
    offset = offset.radii;
    offset = offset.xxl;
    verify['borderRadius'] = offset;
    tangon['guildTierBackground'] = verify;
    verify = {'width': 18, 'height': 30};
    tangon['guildTierNoneIcon'] = verify;
    verify = {'width': 24, 'height': 24};
    tangon['guildTierIcon'] = verify;
    verify = {'lineHeight': 16, 'marginTop': 2};
    tangon['guildTierName'] = verify;
    tangon = golfie.bind(option)(tangon);
    var _closure1_slot8 = tangon;
    tangon = function(argFoo, argBar) { // Original name: getTierIcon
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            michal = argBar;
            entity = null;
            if(!(entity != michal)) { _fun00002_ip = 162; continue _fun00001 }
 12:
            tangon = michal.premiumTier;
            zuuluu = _closure1_slot5;
            zuuluu = zuuluu.NONE;
            if(!(tangon !== zuuluu)) { _fun00002_ip = 162; continue _fun00001 }
 38:
            zuuluu = michal.premiumTier;
            michal = _closure1_slot5;
            michal = michal.TIER_1;
            if(!(michal !== zuuluu)) { _fun00002_ip = 138; continue _fun00001 }
 58:
            michal = _closure1_slot5;
            michal = michal.TIER_2;
            if(!(michal !== zuuluu)) { _fun00002_ip = 114; continue _fun00001 }
 72:
            michal = _closure1_slot5;
            michal = michal.TIER_3;
            if(!(michal !== zuuluu)) { _fun00002_ip = 90; continue _fun00001 }
 86:
            michal = undefined;
            return michal;
 90:
            tangon = _closure1_slot1;
            zuuluu = _closure1_slot2;
            michal = 9;
            zuuluu = zuuluu[michal];
            michal = undefined;
            michal = tangon.bind(michal)(zuuluu);
            return michal;
 114:
            tangon = _closure1_slot1;
            zuuluu = _closure1_slot2;
            michal = 8;
            zuuluu = zuuluu[michal];
            michal = undefined;
            michal = tangon.bind(michal)(zuuluu);
            return michal;
 138:
            zuuluu = _closure1_slot1;
            michal = _closure1_slot2;
            entity = 7;
            michal = michal[entity];
            entity = undefined;
            entity = zuuluu.bind(entity)(michal);
            return entity;
 162:
            zuuluu = _closure1_slot0;
            michal = _closure1_slot2;
            entity = 6;
            michal = michal[entity];
            entity = undefined;
            zuuluu = zuuluu.bind(entity)(michal);
            michal = zuuluu.getTier048PxSource;
            entity = argFoo;
            entity = michal.bind(zuuluu)(entity);
            return entity;
        }
    };
    var _closure1_slot9 = tangon;
    tangon = 13;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/premium/native/BoostedGuildTierProgressCircle.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) { // Original name: _default
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            entity = argFoo;
            backup = entity.guild;
            verify = entity.theme;
            entity = _closure1_slot8;
            tangon = undefined;
            golfie = entity.bind(tangon)();
            entity = null;
            if(!(entity != backup)) { _fun00004_ip = 378; continue _fun00003 }
 36:
            zuuluu = _closure1_slot0;
            michal = _closure1_slot2;
            output = 10;
            michal = michal[output];
            oscard = zuuluu.bind(tangon)(michal);
            report = oscard.getNextGuildTierFromAppliedBoostCount;
            zuuluu = backup.premiumSubscriberCount;
            michal = backup.id;
            report = report.bind(oscard)(zuuluu, michal);
            michal = entity != report;
            zuuluu = null;
            if(!michal) { _fun00004_ip = 125; continue _fun00003 }
 88:
            oscard = _closure1_slot0;
            michal = _closure1_slot2;
            michal = michal[output];
            offset = oscard.bind(tangon)(michal);
            oscard = offset.getAppliedGuildBoostsRequired;
            michal = backup.id;
            michal = oscard.bind(offset)(michal);
            zuuluu = michal[report];
 125:
            entity = entity != zuuluu;
            michal = 100;
            report = michal;
            if(!entity) { _fun00004_ip = 164; continue _fun00003 }
 138:
            entity = 0;
            entity = zuuluu > entity;
            report = michal;
            if(!entity) { _fun00004_ip = 164; continue _fun00003 }
 150:
            entity = backup.premiumSubscriberCount;
            entity = entity / zuuluu;
            report = entity * michal;
 164:
            zuuluu = _closure1_slot6;
            michal = _closure1_slot1;
            kiloes = _closure1_slot2;
            entity = 11;
            entity = kiloes[entity];
            michal = michal.bind(tangon)(entity);
            entity = {};
            oscard = golfie.guildTierProgressCircle;
            entity['style'] = oscard;
            entity['percent'] = report;
            offset = _closure1_slot7;
            oscard = _closure1_slot3;
            report = {};
            yankee = golfie.guildTierBackground;
            report['style'] = yankee;
            romeon = _closure1_slot4;
            yankee = {};
            foxtra = _closure1_slot9;
            foxtra = foxtra.bind(tangon)(verify, backup);
            yankee['source'] = foxtra;
            foxtra = golfie.guildTierIcon;
            yankee['style'] = foxtra;
            romeon = zuuluu.bind(tangon)(romeon, yankee);
            yankee = new Array(2);
            yankee[0] = romeon;
            sizing = _closure1_slot0;
            romeon = 12;
            romeon = kiloes[romeon];
            romeon = sizing.bind(tangon)(romeon);
            foxtra = romeon.Text;
            romeon = {'style': null, 'variant': 'text-xs/semibold', 'color': 'interactive-active'};
            result = golfie.guildTierName;
            romeon['style'] = result;
            kiloes = kiloes[output];
            sizing = sizing.bind(tangon)(kiloes);
            kiloes = sizing.getTierName;
            backup = backup.premiumTier;
            backup = kiloes.bind(sizing)(backup);
            romeon['children'] = backup;
            romeon = zuuluu.bind(tangon)(foxtra, romeon);
            yankee[1] = romeon;
            report['children'] = yankee;
            report = offset.bind(tangon)(oscard, report);
            entity['children'] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
 378:
            zuuluu = _closure1_slot6;
            michal = _closure1_slot3;
            entity = {};
            report = golfie.guildTierBackground;
            entity['style'] = report;
            oscard = _closure1_slot4;
            report = {};
            option = _closure1_slot9;
            option = option.bind(tangon)(verify);
            report['source'] = option;
            golfie = golfie.guildTierNoneIcon;
            report['style'] = golfie;
            report = zuuluu.bind(tangon)(oscard, report);
            entity['children'] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    zuuluu['default'] = michal;
    return entity;
})();