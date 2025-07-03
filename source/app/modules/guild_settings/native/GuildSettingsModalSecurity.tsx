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
    tangon = report.bind(entity)(tangon);
    tangon = tangon.isGuildOwnerWithRequiredMfaLevel;
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
    tangon = yankee.bind(entity)(tangon);
    var _closure1_slot9 = tangon;
    tangon = 6;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    golfie = tangon.GuildFeatures;
    var _closure1_slot10 = golfie;
    tangon = tangon.MFALevels;
    var _closure1_slot11 = tangon;
    tangon = 7;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    golfie = tangon.jsx;
    var _closure1_slot12 = golfie;
    tangon = tangon.jsxs;
    var _closure1_slot13 = tangon;
    tangon = 8;
    tangon = oscard[tangon];
    option = report.bind(entity)(tangon);
    golfie = option.createStyles;
    tangon = {};
    verify = {'flex': 1, 'justifyContent': 'space-between', 'paddingTop': 99};
    tangon['wrapper'] = verify;
    verify = {'alignItems': 'center', 'flexDirection': 'column'};
    tangon['center'] = verify;
    verify = {'textAlign': 'center', 'marginBottom': 8};
    tangon['label'] = verify;
    verify = {'width': 295, 'height': 142, 'marginHorizontal': 35};
    tangon['image'] = verify;
    verify = {};
    offset = 40;
    verify['marginBottom'] = offset;
    tangon['infoWrapper'] = verify;
    verify = {'marginTop': 15, 'fontSize': 13};
    offset = 9;
    offset = oscard[offset];
    offset = yankee.bind(entity)(offset);
    offset = offset.colors;
    offset = offset.TEXT_MUTED;
    verify['color'] = offset;
    tangon['info'] = verify;
    verify = {'alignSelf': 'center', 'paddingHorizontal': 16, 'marginTop': 16};
    tangon['button'] = verify;
    tangon = golfie.bind(option)(tangon);
    var _closure1_slot14 = tangon;
    tangon = 19;
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
            michal = _closure1_slot14;
            tangon = undefined;
            sizing = michal.bind(tangon)();
            zuuluu = _closure1_slot0;
            report = _closure1_slot2;
            michal = 10;
            oscard = report[michal];
            yankee = zuuluu.bind(tangon)(oscard);
            offset = yankee.useStateFromStores;
            oscard = _closure1_slot7;
            option = new Array(1);
            option[0] = oscard;
            oscard = function() {
                zuuluu = _closure1_slot7;
                michal = zuuluu.getGuild;
                entity = _closure2_slot0;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            romeon = offset.bind(yankee)(option, oscard);
            var _closure2_slot1 = romeon;
            michal = report[michal];
            oscard = zuuluu.bind(tangon)(michal);
            report = oscard.useStateFromStores;
            michal = _closure1_slot9;
            zuuluu = new Array(1);
            zuuluu[0] = michal;
            michal = function() {
                michal = _closure1_slot9;
                entity = michal.getProps;
                entity = entity.bind(michal)();
                entity = entity.mfaLevel;
                return entity;
            };
            report = report.bind(oscard)(zuuluu, michal);
            zuuluu = _closure1_slot8;
            michal = zuuluu.getCurrentUser;
            zuuluu = michal.bind(zuuluu)();
            michal = _closure1_slot11;
            michal = michal.ELEVATED;
            vacuum = report === michal;
            var _closure2_slot2 = vacuum;
            foxtra = null;
            report = foxtra == zuuluu;
            michal = undefined;
            if(report) { _fun00002_ip = 174; continue _fun00001 }
 168:
            michal = zuuluu.mfaEnabled;
 174:
            echoed = true;
            ctrled = echoed === michal;
            if(!ctrled) { _fun00002_ip = 187; continue _fun00001 }
 183:
            ctrled = foxtra != romeon;
 187:
            if(!ctrled) { _fun00002_ip = 200; continue _fun00001 }
 190:
            michal = _closure1_slot6;
            ctrled = michal.bind(tangon)(romeon, zuuluu);
 200:
            if(!ctrled) { _fun00002_ip = 241; continue _fun00001 }
 203:
            michal = !vacuum;
            if(!vacuum) { _fun00002_ip = 238; continue _fun00001 }
 209:
            oscard = romeon.features;
            report = oscard.has;
            zuuluu = _closure1_slot10;
            zuuluu = zuuluu.DISCOVERABLE;
            zuuluu = report.bind(oscard)(zuuluu);
            michal = !zuuluu;
 238:
            ctrled = michal;
 241:
            report = _closure1_slot3;
            zuuluu = report.useCallback;
            michal = new Array(2);
            michal[0] = romeon;
            michal[1] = vacuum;
            entity = function() {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    michal = _closure2_slot1;
                    entity = null;
                    if(!(entity != michal)) { _fun00004_ip = 103; continue _fun00003 }
 13:
                    zuuluu = _closure1_slot1;
                    michal = _closure1_slot2;
                    entity = 11;
                    michal = michal[entity];
                    entity = undefined;
                    zuuluu = zuuluu.bind(entity)(michal);
                    michal = zuuluu.updateMFALevel;
                    entity = {};
                    report = _closure2_slot1;
                    report = report.id;
                    entity['guildId'] = report;
                    report = _closure2_slot2;
                    oscard = _closure1_slot11;
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
            sequen = 12;
            entity = entity[sequen];
            entity = michal.bind(tangon)(entity);
            entity = entity.Colors;
            source = entity.RED;
            if(vacuum) { _fun00002_ip = 339; continue _fun00001 }
 310:
            michal = _closure1_slot1;
            entity = _closure1_slot2;
            entity = entity[sequen];
            entity = michal.bind(tangon)(entity);
            entity = entity.Colors;
            source = entity.GREEN;
 339:
            zuuluu = _closure1_slot13;
            cntext = _closure1_slot0;
            kiloes = _closure1_slot2;
            entity = 13;
            entity = kiloes[entity];
            entity = cntext.bind(tangon)(entity);
            michal = entity.RedesignCompat;
            entity = {};
            oscard = _closure1_slot4;
            report = {};
            offset = sizing.wrapper;
            option = new Array(2);
            option[0] = offset;
            option[1] = verify;
            report['style'] = option;
            option = {};
            verify = sizing.center;
            option['style'] = verify;
            backup = _closure1_slot12;
            yankee = 14;
            verify = kiloes[yankee];
            verify = cntext.bind(tangon)(verify);
            offset = verify.Text;
            verify = {'style': null, 'variant': 'text-md/medium', 'color': 'header-primary'};
            output = sizing.label;
            verify['style'] = output;
            result = 15;
            output = kiloes[result];
            output = cntext.bind(tangon)(output);
            record = output.intl;
            config = record.string;
            output = kiloes[result];
            output = cntext.bind(tangon)(output);
            output = output.t;
            output = output.Wi9LER;
            output = config.bind(record)(output);
            verify['children'] = output;
            offset = backup.bind(tangon)(offset, verify);
            verify = new Array(3);
            verify[0] = offset;
            offset = {};
            output = _closure1_slot1;
            kiloes = kiloes[sequen];
            output = output.bind(tangon)(kiloes);
            kiloes = {};
            sequen = sizing.button;
            kiloes['style'] = sequen;
            cntext = _closure1_slot0;
            sequen = _closure1_slot2;
            config = sequen[result];
            config = cntext.bind(tangon)(config);
            record = config.intl;
            config = record.string;
            sequen = sequen[result];
            sequen = cntext.bind(tangon)(sequen);
            sequen = sequen.t;
            if(vacuum) { _fun00002_ip = 606; continue _fun00001 }
 593:
            vacuum = sequen.yZcYGR;
            vacuum = config.bind(record)(vacuum);
            _fun00002_ip = 617; continue _fun00001;
 606:
            sequen = sequen.MP0Ho6;
            vacuum = config.bind(record)(sequen);
 617:
            kiloes['text'] = vacuum;
            ctrled = !ctrled;
            kiloes['disabled'] = ctrled;
            kiloes['color'] = source;
            kiloes['onPress'] = update;
            kiloes['shrink'] = echoed;
            kiloes = backup.bind(tangon)(output, kiloes);
            offset['children'] = kiloes;
            offset = backup.bind(tangon)(oscard, offset);
            verify[1] = offset;
            backup = foxtra != romeon;
            offset = null;
            if(!backup) { _fun00002_ip = 800; continue _fun00001 }
 673:
            kiloes = romeon.features;
            backup = kiloes.has;
            romeon = _closure1_slot10;
            romeon = romeon.DISCOVERABLE;
            romeon = backup.bind(kiloes)(romeon);
            offset = null;
            if(!romeon) { _fun00002_ip = 800; continue _fun00001 }
 704:
            foxtra = _closure1_slot12;
            echoed = _closure1_slot0;
            backup = _closure1_slot2;
            yankee = backup[yankee];
            yankee = echoed.bind(tangon)(yankee);
            romeon = yankee.Text;
            yankee = {'variant': 'text-sm/normal', 'color': 'status-danger'};
            kiloes = backup[result];
            kiloes = echoed.bind(tangon)(kiloes);
            output = kiloes.intl;
            kiloes = output.string;
            backup = backup[result];
            backup = echoed.bind(tangon)(backup);
            backup = backup.t;
            backup = backup.KG1V/P;
            backup = kiloes.bind(output)(backup);
            yankee['children'] = backup;
            offset = foxtra.bind(tangon)(romeon, yankee);
 800:
            verify[2] = offset;
            option['children'] = verify;
            option = zuuluu.bind(tangon)(oscard, option);
            offset = new Array(2);
            offset[0] = option;
            foxtra = _closure1_slot13;
            romeon = _closure1_slot4;
            yankee = {};
            option = sizing.center;
            yankee['style'] = option;
            option = _closure1_slot12;
            kiloes = _closure1_slot5;
            backup = {};
            echoed = _closure1_slot1;
            verify = _closure1_slot2;
            output = 16;
            output = verify[output];
            output = echoed.bind(tangon)(output);
            backup['source'] = output;
            output = sizing.image;
            backup['style'] = output;
            output = 'contain';
            backup['resizeMode'] = output;
            kiloes = option.bind(tangon)(kiloes, backup);
            backup = new Array(2);
            backup[0] = kiloes;
            kiloes = {};
            sizing = sizing.infoWrapper;
            kiloes['style'] = sizing;
            golfie = _closure1_slot0;
            sizing = 17;
            sizing = verify[sizing];
            sizing = golfie.bind(tangon)(sizing);
            output = sizing.FormHint;
            sizing = {};
            echoed = verify[result];
            echoed = golfie.bind(tangon)(echoed);
            source = echoed.intl;
            update = source.format;
            result = verify[result];
            result = golfie.bind(tangon)(result);
            result = result.t;
            echoed = result.FK0+iY;
            result = {};
            result = update.bind(source)(echoed, result);
            sizing['children'] = result;
            sizing = option.bind(tangon)(output, sizing);
            kiloes['children'] = sizing;
            kiloes = option.bind(tangon)(romeon, kiloes);
            backup[1] = kiloes;
            yankee['children'] = backup;
            yankee = foxtra.bind(tangon)(romeon, yankee);
            offset[1] = yankee;
            report['children'] = offset;
            oscard = zuuluu.bind(tangon)(oscard, report);
            report = new Array(2);
            report[0] = oscard;
            oscard = 18;
            oscard = verify[oscard];
            oscard = golfie.bind(tangon)(oscard);
            golfie = oscard.NavScrim;
            oscard = {};
            oscard = option.bind(tangon)(golfie, oscard);
            report[1] = oscard;
            entity['children'] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    zuuluu['default'] = michal;
    return entity;
})();