// app/modules/guild_settings/native/GuildSettingsModalSecurity.tsx
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
    var _closure1_slot3 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    golfie = tangon.View;
    var _closure1_slot4 = golfie;
    tangon = tangon.Image;
    var _closure1_slot5 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = yankee.bind(entity)(tangon);
    var _closure1_slot6 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    tangon = yankee.bind(entity)(tangon);
    var _closure1_slot7 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    tangon = yankee.bind(entity)(tangon);
    var _closure1_slot8 = tangon;
    tangon = 5;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    golfie = tangon.GuildFeatures;
    var _closure1_slot9 = golfie;
    tangon = tangon.MFALevels;
    var _closure1_slot10 = tangon;
    tangon = 6;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    golfie = tangon.jsx;
    var _closure1_slot11 = golfie;
    tangon = tangon.jsxs;
    var _closure1_slot12 = tangon;
    tangon = 7;
    tangon = oscard[tangon];
    option = report.bind(entity)(tangon);
    golfie = option.createStyles;
    tangon = {};
    verify = {'flex': 1, 'justifyContent': 'space-between', 'paddingTop': 99};
    tangon['wrapper'] = verify;
    verify = {'alignItems': 'center', 'flexDirection': 'column'};
    tangon['center'] = verify;
    offset = 8;
    verify = {'textAlign': 'center', 'marginBottom': 8};
    tangon['label'] = verify;
    verify = {'width': 295, 'height': 142, 'marginHorizontal': 35};
    tangon['image'] = verify;
    verify = {};
    romeon = 40;
    verify['marginBottom'] = romeon;
    tangon['infoWrapper'] = verify;
    verify = {'marginTop': 15, 'fontSize': 13};
    offset = oscard[offset];
    offset = yankee.bind(entity)(offset);
    offset = offset.colors;
    offset = offset.TEXT_MUTED;
    verify['color'] = offset;
    tangon['info'] = verify;
    verify = {'alignSelf': 'center', 'paddingHorizontal': 16, 'marginTop': 16};
    tangon['button'] = verify;
    tangon = golfie.bind(option)(tangon);
    var _closure1_slot13 = tangon;
    tangon = 17;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/guild_settings/native/GuildSettingsModalSecurity.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) { // Original name: GuildSettingsModalSecurity
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            michal = argFoo;
            zuuluu = michal.guildId;
            var _closure2_slot0 = zuuluu;
            verify = michal.contentContainerStyle;
            oscard = michal.navScrim;
            michal = _closure1_slot13;
            tangon = undefined;
            sizing = michal.bind(tangon)();
            zuuluu = _closure1_slot0;
            report = _closure1_slot2;
            michal = 9;
            golfie = report[michal];
            yankee = zuuluu.bind(tangon)(golfie);
            offset = yankee.useStateFromStores;
            golfie = _closure1_slot6;
            option = new Array(1);
            option[0] = golfie;
            golfie = function() {
                zuuluu = _closure1_slot6;
                michal = zuuluu.getGuild;
                entity = _closure2_slot0;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            output = offset.bind(yankee)(option, golfie);
            var _closure2_slot1 = output;
            michal = report[michal];
            golfie = zuuluu.bind(tangon)(michal);
            report = golfie.useStateFromStores;
            michal = _closure1_slot8;
            zuuluu = new Array(1);
            zuuluu[0] = michal;
            michal = function() {
                michal = _closure1_slot8;
                entity = michal.getProps;
                entity = entity.bind(michal)();
                entity = entity.mfaLevel;
                return entity;
            };
            zuuluu = report.bind(golfie)(zuuluu, michal);
            report = _closure1_slot7;
            michal = report.getCurrentUser;
            report = michal.bind(report)();
            michal = _closure1_slot10;
            michal = michal.ELEVATED;
            sequen = zuuluu === michal;
            var _closure2_slot2 = sequen;
            foxtra = null;
            zuuluu = foxtra == report;
            michal = undefined;
            if(zuuluu) { _fun00002_ip = 180; continue _fun00001 }
 174:
            michal = report.mfaEnabled;
 180:
            echoed = true;
            vacuum = echoed === michal;
            if(!vacuum) { _fun00002_ip = 212; continue _fun00001 }
 189:
            zuuluu = foxtra == output;
            michal = undefined;
            if(zuuluu) { _fun00002_ip = 209; continue _fun00001 }
 198:
            zuuluu = output.isOwnerWithRequiredMfaLevel;
            michal = zuuluu.bind(output)(report);
 209:
            vacuum = michal;
 212:
            if(!vacuum) { _fun00002_ip = 258; continue _fun00001 }
 215:
            michal = !sequen;
            if(!sequen) { _fun00002_ip = 255; continue _fun00001 }
 221:
            report = foxtra == output;
            zuuluu = undefined;
            if(report) { _fun00002_ip = 251; continue _fun00001 }
 230:
            golfie = output.hasFeature;
            report = _closure1_slot9;
            report = report.DISCOVERABLE;
            zuuluu = golfie.bind(output)(report);
 251:
            michal = echoed !== zuuluu;
 255:
            vacuum = michal;
 258:
            report = _closure1_slot3;
            zuuluu = report.useCallback;
            michal = new Array(2);
            michal[0] = output;
            michal[1] = sequen;
            entity = function() {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    michal = _closure2_slot1;
                    entity = null;
                    if(!(entity != michal)) { _fun00004_ip = 103; continue _fun00003 }
 13:
                    zuuluu = _closure1_slot1;
                    michal = _closure1_slot2;
                    entity = 10;
                    michal = michal[entity];
                    entity = undefined;
                    zuuluu = zuuluu.bind(entity)(michal);
                    michal = zuuluu.updateMFALevel;
                    entity = {};
                    report = _closure2_slot1;
                    report = report.id;
                    entity['guildId'] = report;
                    report = _closure2_slot2;
                    oscard = _closure1_slot10;
                    if(report) { _fun00004_ip = 78; continue _fun00003 }
 70:
                    report = oscard.ELEVATED;
                    _fun00004_ip = 84; continue _fun00003;
 78:
                    report = oscard.NONE;
 84:
                    entity['level'] = report;
                    tangon = _closure2_slot2;
                    entity['isEnabled'] = tangon;
                    entity = michal.bind(zuuluu)(entity);
 103:
                    entity = undefined;
                    return entity;
                }
            };
            update = zuuluu.bind(report)(entity, michal);
            michal = _closure1_slot1;
            entity = _closure1_slot2;
            config = 11;
            entity = entity[config];
            entity = michal.bind(tangon)(entity);
            entity = entity.Colors;
            ctrled = entity.RED;
            if(sequen) { _fun00002_ip = 356; continue _fun00001 }
 327:
            michal = _closure1_slot1;
            entity = _closure1_slot2;
            entity = entity[config];
            entity = michal.bind(tangon)(entity);
            entity = entity.Colors;
            ctrled = entity.GREEN;
 356:
            zuuluu = _closure1_slot12;
            papara = _closure1_slot0;
            backup = _closure1_slot2;
            entity = 12;
            entity = backup[entity];
            entity = papara.bind(tangon)(entity);
            michal = entity.RedesignCompat;
            entity = {};
            golfie = _closure1_slot4;
            report = {};
            offset = sizing.wrapper;
            option = new Array(2);
            option[0] = offset;
            option[1] = verify;
            report['style'] = option;
            option = {};
            verify = sizing.center;
            option['style'] = verify;
            romeon = _closure1_slot11;
            yankee = 13;
            verify = backup[yankee];
            verify = papara.bind(tangon)(verify);
            offset = verify.Text;
            verify = {'style': null, 'variant': 'text-md/medium', 'color': 'header-primary'};
            result = sizing.label;
            verify['style'] = result;
            source = 14;
            result = backup[source];
            result = papara.bind(tangon)(result);
            cntext = result.intl;
            record = cntext.string;
            result = backup[source];
            result = papara.bind(tangon)(result);
            result = result.t;
            result = result.Wi9LER;
            result = record.bind(cntext)(result);
            verify['children'] = result;
            offset = romeon.bind(tangon)(offset, verify);
            verify = new Array(3);
            verify[0] = offset;
            offset = {};
            result = _closure1_slot1;
            backup = backup[config];
            result = result.bind(tangon)(backup);
            backup = {};
            config = sizing.button;
            backup['style'] = config;
            papara = _closure1_slot0;
            config = _closure1_slot2;
            record = config[source];
            record = papara.bind(tangon)(record);
            cntext = record.intl;
            record = cntext.string;
            config = config[source];
            config = papara.bind(tangon)(config);
            config = config.t;
            if(sequen) { _fun00002_ip = 619; continue _fun00001 }
 606:
            sequen = config.yZcYGR;
            sequen = record.bind(cntext)(sequen);
            _fun00002_ip = 630; continue _fun00001;
 619:
            config = config.MP0Ho6;
            sequen = record.bind(cntext)(config);
 630:
            backup['text'] = sequen;
            vacuum = !vacuum;
            backup['disabled'] = vacuum;
            backup['color'] = ctrled;
            backup['onPress'] = update;
            backup['shrink'] = echoed;
            backup = romeon.bind(tangon)(result, backup);
            offset['children'] = backup;
            offset = romeon.bind(tangon)(golfie, offset);
            verify[1] = offset;
            romeon = foxtra != output;
            offset = null;
            if(!romeon) { _fun00002_ip = 808; continue _fun00001 }
 686:
            backup = output.hasFeature;
            romeon = _closure1_slot9;
            romeon = romeon.DISCOVERABLE;
            romeon = backup.bind(output)(romeon);
            offset = null;
            if(!romeon) { _fun00002_ip = 808; continue _fun00001 }
 712:
            foxtra = _closure1_slot11;
            echoed = _closure1_slot0;
            backup = _closure1_slot2;
            yankee = backup[yankee];
            yankee = echoed.bind(tangon)(yankee);
            romeon = yankee.Text;
            yankee = {'variant': 'text-sm/normal', 'color': 'status-danger'};
            output = backup[source];
            output = echoed.bind(tangon)(output);
            result = output.intl;
            output = result.string;
            backup = backup[source];
            backup = echoed.bind(tangon)(backup);
            backup = backup.t;
            backup = backup.KG1V/P;
            backup = output.bind(result)(backup);
            yankee['children'] = backup;
            offset = foxtra.bind(tangon)(romeon, yankee);
 808:
            verify[2] = offset;
            option['children'] = verify;
            verify = zuuluu.bind(tangon)(golfie, option);
            option = new Array(2);
            option[0] = verify;
            yankee = _closure1_slot12;
            offset = _closure1_slot4;
            verify = {};
            romeon = sizing.center;
            verify['style'] = romeon;
            backup = _closure1_slot11;
            foxtra = _closure1_slot5;
            romeon = {};
            echoed = _closure1_slot1;
            output = _closure1_slot2;
            result = 15;
            result = output[result];
            result = echoed.bind(tangon)(result);
            romeon['source'] = result;
            result = sizing.image;
            romeon['style'] = result;
            result = 'contain';
            romeon['resizeMode'] = result;
            foxtra = backup.bind(tangon)(foxtra, romeon);
            romeon = new Array(2);
            romeon[0] = foxtra;
            foxtra = {};
            sizing = sizing.infoWrapper;
            foxtra['style'] = sizing;
            result = _closure1_slot0;
            kiloes = 16;
            kiloes = output[kiloes];
            kiloes = result.bind(tangon)(kiloes);
            sizing = kiloes.FormHint;
            kiloes = {};
            echoed = output[source];
            echoed = result.bind(tangon)(echoed);
            update = echoed.intl;
            echoed = update.format;
            output = output[source];
            output = result.bind(tangon)(output);
            output = output.t;
            result = output.FK0+iY;
            output = {};
            output = echoed.bind(update)(result, output);
            kiloes['children'] = output;
            kiloes = backup.bind(tangon)(sizing, kiloes);
            foxtra['children'] = kiloes;
            foxtra = backup.bind(tangon)(offset, foxtra);
            romeon[1] = foxtra;
            verify['children'] = romeon;
            verify = yankee.bind(tangon)(offset, verify);
            option[1] = verify;
            report['children'] = option;
            golfie = zuuluu.bind(tangon)(golfie, report);
            report = new Array(2);
            report[0] = golfie;
            report[1] = oscard;
            entity['children'] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    zuuluu['default'] = michal;
    return entity;
})();