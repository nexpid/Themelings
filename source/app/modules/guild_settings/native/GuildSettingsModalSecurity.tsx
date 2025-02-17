// app/modules/guild_settings/native/GuildSettingsModalSecurity.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    yankee = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = yankee;
    var _closure1_slot2 = oscar;
    entity = global;
    options = entity.Object;
    golf = options.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = golf.bind(options)(zulu, entity, tango);
    entity = 0;
    golf = oscar[entity];
    tango = argCorge;
    entity = undefined;
    tango = tango.bind(entity)(golf);
    var _closure1_slot3 = tango;
    tango = 1;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    golf = tango.View;
    var _closure1_slot4 = golf;
    tango = tango.Image;
    var _closure1_slot5 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = yankee.bind(entity)(tango);
    var _closure1_slot6 = tango;
    tango = 3;
    tango = oscar[tango];
    tango = yankee.bind(entity)(tango);
    var _closure1_slot7 = tango;
    tango = 4;
    tango = oscar[tango];
    tango = yankee.bind(entity)(tango);
    var _closure1_slot8 = tango;
    tango = 5;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    golf = tango.GuildFeatures;
    var _closure1_slot9 = golf;
    tango = tango.MFALevels;
    var _closure1_slot10 = tango;
    tango = 6;
    golf = oscar[tango];
    golf = report.bind(entity)(golf);
    golf = golf.jsx;
    var _closure1_slot11 = golf;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.jsxs;
    var _closure1_slot12 = tango;
    tango = 7;
    tango = oscar[tango];
    options = report.bind(entity)(tango);
    golf = options.createStyles;
    tango = {};
    verify = {'flex': 1, 'justifyContent': 'space-between', 'paddingTop': 99};
    tango['wrapper'] = verify;
    verify = {'alignItems': 'center', 'flexDirection': 'column'};
    tango['center'] = verify;
    offset = 8;
    verify = {'textAlign': 'center', 'marginBottom': 8};
    tango['label'] = verify;
    verify = {'width': 295, 'height': 142, 'marginHorizontal': 35};
    tango['image'] = verify;
    verify = {};
    romeo = 40;
    verify['marginBottom'] = romeo;
    tango['infoWrapper'] = verify;
    verify = {'marginTop': 15, 'fontSize': 13};
    offset = oscar[offset];
    offset = yankee.bind(entity)(offset);
    offset = offset.colors;
    offset = offset.TEXT_MUTED;
    verify['color'] = offset;
    tango['info'] = verify;
    verify = {'alignSelf': 'center', 'paddingHorizontal': 16, 'marginTop': 16};
    tango['button'] = verify;
    tango = golf.bind(options)(tango);
    var _closure1_slot13 = tango;
    tango = 17;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/guild_settings/native/GuildSettingsModalSecurity.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo) { // Original name: GuildSettingsModalSecurity
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            mike = argFoo;
            zulu = mike.guildId;
            var _closure2_slot0 = zulu;
            verify = mike.contentContainerStyle;
            oscar = mike.navScrim;
            mike = _closure1_slot13;
            tango = undefined;
            sizing = mike.bind(tango)();
            zulu = _closure1_slot0;
            report = _closure1_slot2;
            mike = 9;
            golf = report[mike];
            yankee = zulu.bind(tango)(golf);
            offset = yankee.useStateFromStores;
            golf = _closure1_slot6;
            options = new Array(1);
            options[0] = golf;
            golf = function() {
                zulu = _closure1_slot6;
                mike = zulu.getGuild;
                entity = _closure2_slot0;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            output = offset.bind(yankee)(options, golf);
            var _closure2_slot1 = output;
            mike = report[mike];
            golf = zulu.bind(tango)(mike);
            report = golf.useStateFromStores;
            mike = _closure1_slot8;
            zulu = new Array(1);
            zulu[0] = mike;
            mike = function() {
                mike = _closure1_slot8;
                entity = mike.getProps;
                entity = entity.bind(mike)();
                entity = entity.mfaLevel;
                return entity;
            };
            zulu = report.bind(golf)(zulu, mike);
            report = _closure1_slot7;
            mike = report.getCurrentUser;
            report = mike.bind(report)();
            mike = _closure1_slot10;
            mike = mike.ELEVATED;
            sequence = zulu === mike;
            var _closure2_slot2 = sequence;
            foxtrot = null;
            zulu = foxtrot == report;
            mike = undefined;
            if(zulu) { _fun00002_ip = 180; continue _fun00001 }
 174:
            mike = report.mfaEnabled;
 180:
            echo = true;
            vacuum = echo === mike;
            if(!vacuum) { _fun00002_ip = 212; continue _fun00001 }
 189:
            zulu = foxtrot == output;
            mike = undefined;
            if(zulu) { _fun00002_ip = 209; continue _fun00001 }
 198:
            zulu = output.isOwnerWithRequiredMfaLevel;
            mike = zulu.bind(output)(report);
 209:
            vacuum = mike;
 212:
            if(!vacuum) { _fun00002_ip = 258; continue _fun00001 }
 215:
            mike = !sequence;
            if(!sequence) { _fun00002_ip = 255; continue _fun00001 }
 221:
            report = foxtrot == output;
            zulu = undefined;
            if(report) { _fun00002_ip = 251; continue _fun00001 }
 230:
            golf = output.hasFeature;
            report = _closure1_slot9;
            report = report.DISCOVERABLE;
            zulu = golf.bind(output)(report);
 251:
            mike = echo !== zulu;
 255:
            vacuum = mike;
 258:
            report = _closure1_slot3;
            zulu = report.useCallback;
            mike = new Array(2);
            mike[0] = output;
            mike[1] = sequence;
            entity = function() {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    mike = _closure2_slot1;
                    entity = null;
                    if(!(entity != mike)) { _fun00004_ip = 103; continue _fun00003 }
 13:
                    zulu = _closure1_slot1;
                    mike = _closure1_slot2;
                    entity = 10;
                    mike = mike[entity];
                    entity = undefined;
                    zulu = zulu.bind(entity)(mike);
                    mike = zulu.updateMFALevel;
                    entity = {};
                    report = _closure2_slot1;
                    report = report.id;
                    entity['guildId'] = report;
                    report = _closure2_slot2;
                    oscar = _closure1_slot10;
                    if(report) { _fun00004_ip = 78; continue _fun00003 }
 70:
                    report = oscar.ELEVATED;
                    _fun00004_ip = 84; continue _fun00003;
 78:
                    report = oscar.NONE;
 84:
                    entity['level'] = report;
                    tango = _closure2_slot2;
                    entity['isEnabled'] = tango;
                    entity = mike.bind(zulu)(entity);
 103:
                    entity = undefined;
                    return entity;
                }
            };
            update = zulu.bind(report)(entity, mike);
            mike = _closure1_slot1;
            entity = _closure1_slot2;
            config = 11;
            entity = entity[config];
            entity = mike.bind(tango)(entity);
            entity = entity.Colors;
            control = entity.RED;
            if(sequence) { _fun00002_ip = 356; continue _fun00001 }
 327:
            mike = _closure1_slot1;
            entity = _closure1_slot2;
            entity = entity[config];
            entity = mike.bind(tango)(entity);
            entity = entity.Colors;
            control = entity.GREEN;
 356:
            zulu = _closure1_slot12;
            papa = _closure1_slot0;
            backup = _closure1_slot2;
            entity = 12;
            entity = backup[entity];
            entity = papa.bind(tango)(entity);
            mike = entity.RedesignCompat;
            entity = {};
            golf = _closure1_slot4;
            report = {};
            offset = sizing.wrapper;
            options = new Array(2);
            options[0] = offset;
            options[1] = verify;
            report['style'] = options;
            options = {};
            verify = sizing.center;
            options['style'] = verify;
            romeo = _closure1_slot11;
            yankee = 13;
            verify = backup[yankee];
            verify = papa.bind(tango)(verify);
            offset = verify.Text;
            verify = {'style': null, 'variant': 'text-md/medium', 'color': 'header-primary'};
            result = sizing.label;
            verify['style'] = result;
            source = 14;
            result = backup[source];
            result = papa.bind(tango)(result);
            context = result.intl;
            record = context.string;
            result = backup[source];
            result = papa.bind(tango)(result);
            result = result.t;
            result = result.Wi9LER;
            result = record.bind(context)(result);
            verify['children'] = result;
            offset = romeo.bind(tango)(offset, verify);
            verify = new Array(3);
            verify[0] = offset;
            offset = {};
            result = _closure1_slot1;
            backup = backup[config];
            result = result.bind(tango)(backup);
            backup = {};
            config = sizing.button;
            backup['style'] = config;
            papa = _closure1_slot0;
            config = _closure1_slot2;
            record = config[source];
            record = papa.bind(tango)(record);
            context = record.intl;
            record = context.string;
            config = config[source];
            config = papa.bind(tango)(config);
            config = config.t;
            if(sequence) { _fun00002_ip = 623; continue _fun00001 }
 610:
            sequence = config.yZcYGR;
            sequence = record.bind(context)(sequence);
            _fun00002_ip = 634; continue _fun00001;
 623:
            config = config.MP0Ho6;
            sequence = record.bind(context)(config);
 634:
            backup['text'] = sequence;
            vacuum = !vacuum;
            backup['disabled'] = vacuum;
            backup['color'] = control;
            backup['onPress'] = update;
            backup['shrink'] = echo;
            backup = romeo.bind(tango)(result, backup);
            offset['children'] = backup;
            offset = romeo.bind(tango)(golf, offset);
            verify[1] = offset;
            romeo = foxtrot != output;
            offset = null;
            if(!romeo) { _fun00002_ip = 812; continue _fun00001 }
 690:
            backup = output.hasFeature;
            romeo = _closure1_slot9;
            romeo = romeo.DISCOVERABLE;
            romeo = backup.bind(output)(romeo);
            offset = null;
            if(!romeo) { _fun00002_ip = 812; continue _fun00001 }
 716:
            foxtrot = _closure1_slot11;
            echo = _closure1_slot0;
            backup = _closure1_slot2;
            yankee = backup[yankee];
            yankee = echo.bind(tango)(yankee);
            romeo = yankee.Text;
            yankee = {'variant': 'text-sm/normal', 'color': 'status-danger'};
            output = backup[source];
            output = echo.bind(tango)(output);
            result = output.intl;
            output = result.string;
            backup = backup[source];
            backup = echo.bind(tango)(backup);
            backup = backup.t;
            backup = backup.KG1V/P;
            backup = output.bind(result)(backup);
            yankee['children'] = backup;
            offset = foxtrot.bind(tango)(romeo, yankee);
 812:
            verify[2] = offset;
            options['children'] = verify;
            verify = zulu.bind(tango)(golf, options);
            options = new Array(2);
            options[0] = verify;
            yankee = _closure1_slot12;
            offset = _closure1_slot4;
            verify = {};
            romeo = sizing.center;
            verify['style'] = romeo;
            backup = _closure1_slot11;
            foxtrot = _closure1_slot5;
            romeo = {};
            echo = _closure1_slot1;
            output = _closure1_slot2;
            result = 15;
            result = output[result];
            result = echo.bind(tango)(result);
            romeo['source'] = result;
            result = sizing.image;
            romeo['style'] = result;
            result = 'contain';
            romeo['resizeMode'] = result;
            foxtrot = backup.bind(tango)(foxtrot, romeo);
            romeo = new Array(2);
            romeo[0] = foxtrot;
            foxtrot = {};
            sizing = sizing.infoWrapper;
            foxtrot['style'] = sizing;
            result = _closure1_slot0;
            kilo = 16;
            kilo = output[kilo];
            kilo = result.bind(tango)(kilo);
            sizing = kilo.FormHint;
            kilo = {};
            echo = output[source];
            echo = result.bind(tango)(echo);
            update = echo.intl;
            echo = update.format;
            output = output[source];
            output = result.bind(tango)(output);
            output = output.t;
            result = output.FK0+iY;
            output = {};
            output = echo.bind(update)(result, output);
            kilo['children'] = output;
            kilo = backup.bind(tango)(sizing, kilo);
            foxtrot['children'] = kilo;
            foxtrot = backup.bind(tango)(offset, foxtrot);
            romeo[1] = foxtrot;
            verify['children'] = romeo;
            verify = yankee.bind(tango)(offset, verify);
            options[1] = verify;
            report['children'] = options;
            golf = zulu.bind(tango)(golf, report);
            report = new Array(2);
            report[0] = golf;
            report[1] = oscar;
            entity['children'] = report;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        }
    };
    zulu['default'] = mike;
    return entity;
})();