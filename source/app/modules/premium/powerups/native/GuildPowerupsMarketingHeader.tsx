// app/modules/premium/powerups/native/GuildPowerupsMarketingHeader.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    report = argBar;
    yankee = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = yankee;
    var _closure1_slot2 = oscard;
    entity = function(argFoo) { // Original name: PerkText
        entity = argFoo;
        report = entity.powerup;
        tangon = _closure1_slot7;
        michal = _closure1_slot0;
        zuuluu = _closure1_slot2;
        entity = 8;
        entity = zuuluu[entity];
        zuuluu = undefined;
        entity = michal.bind(zuuluu)(entity);
        michal = entity.Text;
        entity = {'color': 'always-white', 'variant': 'text-sm/semibold'};
        report = report.title;
        entity['children'] = report;
        entity = tangon.bind(zuuluu)(michal, entity);
        return entity;
    };
    var _closure1_slot9 = entity;
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
    var _closure1_slot3 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.View;
    var _closure1_slot4 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = yankee.bind(entity)(tangon);
    var _closure1_slot5 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.GuildPowerupType;
    var _closure1_slot6 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.jsx;
    var _closure1_slot7 = tangon;
    tangon = 5;
    tangon = oscard[tangon];
    option = report.bind(entity)(tangon);
    golfie = option.createStyles;
    tangon = {};
    verify = {};
    offset = 6;
    offset = oscard[offset];
    offset = yankee.bind(entity)(offset);
    offset = offset.spacing;
    offset = offset.PX_12;
    verify['padding'] = offset;
    offset = 7;
    romeon = oscard[offset];
    foxtra = yankee.bind(entity)(romeon);
    romeon = '#000000';
    backup = foxtra.bind(entity)(romeon);
    foxtra = backup.alpha;
    romeon = 0.18;
    foxtra = foxtra.bind(backup)(romeon);
    romeon = foxtra.hex;
    romeon = romeon.bind(foxtra)();
    verify['backgroundColor'] = romeon;
    tangon['container'] = verify;
    verify = {};
    romeon = 'center';
    verify['textAlign'] = romeon;
    offset = oscard[offset];
    yankee = yankee.bind(entity)(offset);
    offset = '#FFFFFF';
    romeon = yankee.bind(entity)(offset);
    yankee = romeon.alpha;
    offset = 0.5;
    yankee = yankee.bind(romeon)(offset);
    offset = yankee.hex;
    offset = offset.bind(yankee)();
    verify['color'] = offset;
    tangon['text'] = verify;
    tangon = golfie.bind(option)(tangon);
    var _closure1_slot8 = tangon;
    tangon = 14;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/premium/powerups/native/GuildPowerupsMarketingHeader.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) { // Original name: GuildPowerupsMarketingHeader
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argFoo;
            entity = entity.guild;
            var _closure2_slot0 = entity;
            zuuluu = _closure1_slot8;
            tangon = undefined;
            verify = zuuluu.bind(tangon)();
            oscard = _closure1_slot0;
            report = _closure1_slot2;
            zuuluu = 9;
            zuuluu = report[zuuluu];
            option = oscard.bind(tangon)(zuuluu);
            golfie = option.useStateFromStores;
            zuuluu = _closure1_slot5;
            oscard = new Array(1);
            oscard[0] = zuuluu;
            zuuluu = function() {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    tangon = _closure1_slot5;
                    zuuluu = tangon.getStateForGuild;
                    entity = _closure2_slot0;
                    entity = entity.id;
                    zuuluu = zuuluu.bind(tangon)(entity);
                    tangon = null;
                    oscard = tangon == zuuluu;
                    entity = undefined;
                    if(oscard) { _fun00004_ip = 70; continue _fun00003 }
 41:
                    zuuluu = zuuluu.powerupCatalog;
                    tangon = tangon == zuuluu;
                    entity = undefined;
                    if(tangon) { _fun00004_ip = 70; continue _fun00003 }
 56:
                    michal = _closure1_slot6;
                    michal = michal.PERK;
                    entity = zuuluu[michal];
 70:
                    return entity;
                }
            };
            output = golfie.bind(option)(oscard, zuuluu);
            golfie = _closure1_slot3;
            oscard = golfie.useEffect;
            option = entity.id;
            zuuluu = new Array(1);
            zuuluu[0] = option;
            michal = function() {
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    report = _closure1_slot5;
                    tangon = report.shouldFetchCatalogForGuild;
                    zuuluu = _closure2_slot0;
                    zuuluu = zuuluu.id;
                    zuuluu = tangon.bind(report)(zuuluu);
                    if(!zuuluu) { _fun00006_ip = 75; continue _fun00005 }
 33:
                    tangon = _closure1_slot0;
                    zuuluu = _closure1_slot2;
                    michal = 10;
                    zuuluu = zuuluu[michal];
                    michal = undefined;
                    zuuluu = tangon.bind(michal)(zuuluu);
                    michal = zuuluu.fetchPowerupCatalogForGuild;
                    entity = _closure2_slot0;
                    entity = entity.id;
                    entity = michal.bind(zuuluu)(entity);
 75:
                    entity = undefined;
                    return entity;
                }
            };
            michal = oscard.bind(golfie)(michal, zuuluu);
            zuuluu = _closure1_slot1;
            michal = 11;
            michal = report[michal];
            michal = zuuluu.bind(tangon)(michal);
            entity = entity.id;
            entity = michal.bind(tangon)(entity);
            if(!entity) { _fun00002_ip = 175; continue _fun00001 }
 141:
            entity = null;
            zuuluu = entity == output;
            michal = undefined;
            if(zuuluu) { _fun00002_ip = 157; continue _fun00001 }
 152:
            michal = output.length;
 157:
            zuuluu = entity != michal;
            sizing = 0;
            entity = 0;
            if(!zuuluu) { _fun00002_ip = 171; continue _fun00001 }
 168:
            entity = michal;
 171:
            if(!(sizing === entity)) { _fun00002_ip = 177; continue _fun00001 }
 175:
            return tangon;
 177:
            zuuluu = _closure1_slot7;
            michal = _closure1_slot4;
            entity = {};
            report = verify.container;
            entity['style'] = report;
            golfie = _closure1_slot7;
            offset = _closure1_slot0;
            option = _closure1_slot2;
            report = 8;
            report = option[report];
            report = offset.bind(tangon)(report);
            oscard = report.Text;
            report = {};
            verify = verify.text;
            report['style'] = verify;
            verify = 'text-sm/semibold';
            report['variant'] = verify;
            kiloes = 12;
            verify = option[kiloes];
            verify = offset.bind(tangon)(verify);
            yankee = verify.intl;
            offset = yankee.format;
            verify = _closure1_slot1;
            update = 13;
            option = option[update];
            option = verify.bind(tangon)(option);
            verify = option.7lwpzc;
            option = {};
            romeon = '';
            if(!(tangon !== output)) { _fun00002_ip = 488; continue _fun00001 }
 303:
            backup = output.length;
            sequen = 1;
            if(!(sequen !== backup)) { _fun00002_ip = 463; continue _fun00001 }
 318:
            result = output.length;
            backup = 2;
            if(!(!(result > backup))) { _fun00002_ip = 335; continue _fun00001 }
 330:
            vacuum = output;
            _fun00002_ip = 345; continue _fun00001;
 335:
            backup = output.reverse;
            vacuum = backup.bind(output)();
 345:
            result = _closure1_slot0;
            backup = _closure1_slot2;
            kiloes = backup[kiloes];
            kiloes = result.bind(tangon)(kiloes);
            echoed = kiloes.intl;
            result = echoed.format;
            kiloes = _closure1_slot1;
            backup = backup[update];
            backup = kiloes.bind(tangon)(backup);
            kiloes = backup.MNO3sL;
            backup = {};
            source = _closure1_slot7;
            ctrled = _closure1_slot9;
            update = {};
            config = vacuum[sizing];
            update['powerup'] = config;
            update = source.bind(tangon)(ctrled, update);
            backup['perk1'] = update;
            source = _closure1_slot7;
            update = {};
            vacuum = vacuum[sequen];
            update['powerup'] = vacuum;
            update = source.bind(tangon)(ctrled, update);
            backup['perk2'] = update;
            romeon = result.bind(echoed)(kiloes, backup);
            _fun00002_ip = 488; continue _fun00001;
 463:
            kiloes = _closure1_slot7;
            backup = _closure1_slot9;
            foxtra = {};
            sizing = output[sizing];
            foxtra['powerup'] = sizing;
            romeon = kiloes.bind(tangon)(backup, foxtra);
 488:
            option['perks'] = romeon;
            option = offset.bind(yankee)(verify, option);
            report['children'] = option;
            report = golfie.bind(tangon)(oscard, report);
            entity['children'] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    zuuluu['default'] = michal;
    return entity;
})();