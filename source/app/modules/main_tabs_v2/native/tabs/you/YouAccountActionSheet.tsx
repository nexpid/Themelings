// app/modules/main_tabs_v2/native/tabs/you/YouAccountActionSheet.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    romeo = argBaz;
    golf = argCorge;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = romeo;
    var _closure1_slot2 = golf;
    var _closure1_slot3 = oscar;
    entity = function() { // Original name: YouStatusRadioGroup
        entity = function() { // Original name: useStatusRadioRowProps
            tango = _closure1_slot4;
            zulu = tango.useMemo;
            mike = function() {
                mike = {};
                options = _closure1_slot16;
                report = _closure1_slot0;
                offset = _closure1_slot3;
                tango = 12;
                entity = offset[tango];
                golf = undefined;
                entity = report.bind(golf)(entity);
                oscar = entity.TableRowIcon;
                entity = {};
                verify = _closure1_slot1;
                yankee = 13;
                yankee = offset[yankee];
                yankee = verify.bind(golf)(yankee);
                entity['source'] = yankee;
                yankee = 'status-online';
                entity['variant'] = yankee;
                entity = options.bind(golf)(oscar, entity);
                mike['icon'] = entity;
                entity = _closure1_slot14;
                entity = entity.ONLINE;
                mike['value'] = entity;
                entity = new Array(4);
                entity[0] = mike;
                mike = {};
                yankee = _closure1_slot16;
                oscar = offset[tango];
                oscar = report.bind(golf)(oscar);
                options = oscar.TableRowIcon;
                oscar = {};
                romeo = 14;
                romeo = offset[romeo];
                romeo = verify.bind(golf)(romeo);
                oscar['source'] = romeo;
                romeo = 'status-idle';
                oscar['variant'] = romeo;
                oscar = yankee.bind(golf)(options, oscar);
                mike['icon'] = oscar;
                oscar = _closure1_slot14;
                oscar = oscar.IDLE;
                mike['value'] = oscar;
                entity[1] = mike;
                mike = {};
                yankee = _closure1_slot16;
                oscar = offset[tango];
                oscar = report.bind(golf)(oscar);
                options = oscar.TableRowIcon;
                oscar = {};
                romeo = 15;
                romeo = offset[romeo];
                romeo = verify.bind(golf)(romeo);
                oscar['source'] = romeo;
                romeo = 'status-dnd';
                oscar['variant'] = romeo;
                oscar = yankee.bind(golf)(options, oscar);
                mike['icon'] = oscar;
                oscar = _closure1_slot14;
                oscar = oscar.DND;
                mike['value'] = oscar;
                entity[2] = mike;
                mike = {};
                oscar = _closure1_slot16;
                tango = offset[tango];
                tango = report.bind(golf)(tango);
                report = tango.TableRowIcon;
                tango = {};
                options = 16;
                options = offset[options];
                options = verify.bind(golf)(options);
                tango['source'] = options;
                options = 'status-offline';
                tango['variant'] = options;
                tango = oscar.bind(golf)(report, tango);
                mike['icon'] = tango;
                zulu = _closure1_slot14;
                zulu = zulu.INVISIBLE;
                mike['value'] = zulu;
                entity[3] = mike;
                return entity;
            };
            entity = new Array(0);
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        };
        tango = undefined;
        golf = entity.bind(tango)();
        romeo = _closure1_slot0;
        foxtrot = _closure1_slot3;
        mike = 17;
        zulu = foxtrot[mike];
        zulu = romeo.bind(tango)(zulu);
        oscar = zulu.StatusSetting;
        zulu = oscar.useSetting;
        oscar = zulu.bind(oscar)();
        var _closure2_slot0 = oscar;
        mike = foxtrot[mike];
        mike = romeo.bind(tango)(mike);
        zulu = mike.StatusExpiresAtSetting;
        mike = zulu.useSetting;
        mike = mike.bind(zulu)();
        var _closure2_slot1 = mike;
        verify = _closure1_slot4;
        options = verify.useCallback;
        zulu = function(argFoo) {
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                report = argFoo;
                tango = _closure1_slot0;
                oscar = _closure1_slot3;
                zulu = 17;
                golf = oscar[zulu];
                entity = undefined;
                golf = tango.bind(entity)(golf);
                options = golf.StatusSetting;
                golf = options.updateSetting;
                golf = golf.bind(options)(report);
                zulu = oscar[zulu];
                zulu = tango.bind(entity)(zulu);
                options = zulu.StatusExpiresAtSetting;
                golf = options.updateSetting;
                zulu = '0';
                zulu = golf.bind(options)(zulu);
                zulu = 18;
                zulu = oscar[zulu];
                tango = tango.bind(entity)(zulu);
                zulu = tango.getStatusLabel;
                verify = zulu.bind(tango)(report);
                zulu = '';
                if(!(zulu !== verify)) { _fun00002_ip = 202; continue _fun00001 }
 108:
                oscar = _closure1_slot0;
                offset = _closure1_slot3;
                zulu = 19;
                zulu = offset[zulu];
                zulu = oscar.bind(entity)(zulu);
                report = zulu.AccessibilityAnnouncer;
                tango = report.announce;
                zulu = 20;
                golf = offset[zulu];
                golf = oscar.bind(entity)(golf);
                options = golf.intl;
                golf = options.formatToPlainString;
                zulu = offset[zulu];
                zulu = oscar.bind(entity)(zulu);
                zulu = zulu.t;
                oscar = zulu.dO2aLi;
                zulu = {};
                zulu['statusLabel'] = verify;
                zulu = golf.bind(options)(oscar, zulu);
                zulu = tango.bind(report)(zulu);
 202:
                zulu = _closure1_slot1;
                tango = _closure1_slot3;
                mike = 21;
                mike = tango[mike];
                zulu = zulu.bind(entity)(mike);
                mike = zulu.hideActionSheet;
                mike = mike.bind(zulu)();
                return entity;
            }
        };
        mike = new Array(0);
        options = options.bind(verify)(zulu, mike);
        zulu = _closure1_slot16;
        entity = 22;
        entity = foxtrot[entity];
        entity = romeo.bind(tango)(entity);
        mike = entity.TableRadioGroup;
        entity = {};
        verify = 20;
        offset = foxtrot[verify];
        offset = romeo.bind(tango)(offset);
        yankee = offset.intl;
        offset = yankee.string;
        verify = foxtrot[verify];
        verify = romeo.bind(tango)(verify);
        verify = verify.t;
        verify = verify.0DPAZG;
        verify = offset.bind(yankee)(verify);
        entity['title'] = verify;
        entity['onChange'] = options;
        entity['value'] = oscar;
        oscar = golf.map;
        report = function(argFoo) {
            _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                entity = argFoo;
                report = _closure1_slot16;
                options = _closure1_slot0;
                verify = _closure1_slot3;
                mike = 23;
                mike = verify[mike];
                tango = undefined;
                mike = options.bind(tango)(mike);
                zulu = mike.TableRadioRow;
                mike = {};
                echo = mike;
                result = entity;
                golf = copyDataProperties(echo, result);
                golf = 18;
                golf = verify[golf];
                verify = options.bind(tango)(golf);
                options = verify.getStatusLabel;
                golf = entity.value;
                options = options.bind(verify)(golf);
                golf = 'label';
                mike[golf] = options;
                verify = entity.value;
                options = _closure2_slot0;
                golf = undefined;
                if(!(verify === options)) { _fun00004_ip = 293; continue _fun00003 }
 108:
                verify = _closure2_slot1;
                options = null;
                options = options != verify;
                golf = undefined;
                if(!options) { _fun00004_ip = 293; continue _fun00003 }
 126:
                verify = _closure2_slot1;
                options = '0';
                golf = undefined;
                if(!(options !== verify)) { _fun00004_ip = 293; continue _fun00003 }
 145:
                romeo = _closure1_slot0;
                kilo = _closure1_slot3;
                yankee = 20;
                oscar = kilo[yankee];
                oscar = romeo.bind(tango)(oscar);
                offset = oscar.intl;
                verify = offset.formatToPlainString;
                oscar = kilo[yankee];
                oscar = romeo.bind(tango)(oscar);
                oscar = oscar.t;
                options = oscar.BWD8fn;
                oscar = {};
                backup = global;
                sizing = backup.Date;
                backup = backup.Number;
                foxtrot = _closure2_slot1;
                echo = backup.bind(tango)(foxtrot);
                backup = sizing.prototype;
                backup = Object.create(backup, {constructor: {value: sizing}});
                update = backup;
                foxtrot = new update[sizing](echo, result);
                backup = foxtrot instanceof Object ? foxtrot : backup;
                foxtrot = backup.toLocaleString;
                yankee = kilo[yankee];
                yankee = romeo.bind(tango)(yankee);
                yankee = yankee.intl;
                romeo = yankee.currentLocale;
                yankee = {'month': 'numeric', 'day': 'numeric', 'hour': 'numeric', 'minute': '2-digit'};
                yankee = foxtrot.bind(backup)(romeo, yankee);
                oscar['endTime'] = yankee;
                golf = verify.bind(offset)(options, oscar);
 293:
                oscar = 'subLabel';
                mike[oscar] = golf;
                entity = entity.value;
                entity = report.bind(tango)(zulu, mike, entity);
                return entity;
            }
        };
        report = oscar.bind(golf)(report);
        entity['children'] = report;
        entity = zulu.bind(tango)(mike, entity);
        return entity;
    };
    var _closure1_slot19 = entity;
    entity = function() { // Original name: ThemeRadioGroup
        sizing = _closure1_slot0;
        output = _closure1_slot3;
        mike = 24;
        mike = output[mike];
        tango = undefined;
        oscar = sizing.bind(tango)(mike);
        report = oscar.useStateFromStores;
        mike = _closure1_slot8;
        zulu = new Array(1);
        zulu[0] = mike;
        mike = function() {
            entity = _closure1_slot8;
            entity = entity.theme;
            return entity;
        };
        options = report.bind(oscar)(zulu, mike);
        report = _closure1_slot4;
        zulu = report.useCallback;
        mike = function(argFoo) {
            _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                tango = argFoo;
                mike = _closure1_slot15;
                mike = mike.MIDNIGHT;
                if(!(tango === mike)) { _fun00006_ip = 55; continue _fun00005 }
 20:
                report = _closure1_slot1;
                zulu = _closure1_slot3;
                mike = 25;
                zulu = zulu[mike];
                mike = undefined;
                report = report.bind(mike)(zulu);
                zulu = report.setShouldSyncAppearanceSettings;
                mike = false;
                mike = zulu.bind(report)(mike);
 55:
                zulu = _closure1_slot1;
                mike = _closure1_slot3;
                entity = 25;
                mike = mike[entity];
                entity = undefined;
                zulu = zulu.bind(entity)(mike);
                mike = zulu.updateTheme;
                mike = mike.bind(zulu)(tango);
                return entity;
            }
        };
        entity = new Array(0);
        verify = zulu.bind(report)(mike, entity);
        zulu = _closure1_slot16;
        mike = _closure1_slot5;
        entity = {};
        golf = _closure1_slot17;
        report = 22;
        report = output[report];
        report = sizing.bind(tango)(report);
        oscar = report.TableRadioGroup;
        report = {};
        foxtrot = 20;
        offset = output[foxtrot];
        offset = sizing.bind(tango)(offset);
        backup = offset.intl;
        yankee = backup.string;
        offset = output[foxtrot];
        offset = sizing.bind(tango)(offset);
        offset = offset.t;
        offset = offset.Ksh3io;
        offset = yankee.bind(backup)(offset);
        report['title'] = offset;
        report['onChange'] = verify;
        report['value'] = options;
        yankee = _closure1_slot16;
        verify = 23;
        options = output[verify];
        options = sizing.bind(tango)(options);
        offset = options.TableRadioRow;
        options = {};
        result = _closure1_slot16;
        backup = 26;
        backup = output[backup];
        backup = sizing.bind(tango)(backup);
        kilo = backup.ThemeLightIcon;
        backup = {};
        backup = result.bind(tango)(kilo, backup);
        options['icon'] = backup;
        backup = output[foxtrot];
        backup = sizing.bind(tango)(backup);
        result = backup.intl;
        kilo = result.string;
        backup = output[foxtrot];
        backup = sizing.bind(tango)(backup);
        backup = backup.t;
        backup = backup.K2sFfn;
        backup = kilo.bind(result)(backup);
        options['label'] = backup;
        backup = _closure1_slot15;
        backup = backup.LIGHT;
        options['value'] = backup;
        offset = yankee.bind(tango)(offset, options);
        options = new Array(3);
        options[0] = offset;
        backup = _closure1_slot16;
        offset = output[verify];
        offset = sizing.bind(tango)(offset);
        yankee = offset.TableRadioRow;
        offset = {};
        echo = _closure1_slot16;
        kilo = 27;
        kilo = output[kilo];
        kilo = sizing.bind(tango)(kilo);
        result = kilo.ThemeDarkIcon;
        kilo = {};
        kilo = echo.bind(tango)(result, kilo);
        offset['icon'] = kilo;
        kilo = output[foxtrot];
        kilo = sizing.bind(tango)(kilo);
        echo = kilo.intl;
        result = echo.string;
        kilo = output[foxtrot];
        kilo = sizing.bind(tango)(kilo);
        kilo = kilo.t;
        kilo = kilo.b8Cei4;
        kilo = result.bind(echo)(kilo);
        offset['label'] = kilo;
        kilo = _closure1_slot15;
        kilo = kilo.DARKER;
        offset['value'] = kilo;
        offset = backup.bind(tango)(yankee, offset);
        options[1] = offset;
        yankee = _closure1_slot16;
        verify = output[verify];
        verify = sizing.bind(tango)(verify);
        offset = verify.TableRadioRow;
        verify = {};
        result = _closure1_slot16;
        backup = 28;
        backup = output[backup];
        backup = sizing.bind(tango)(backup);
        kilo = backup.ThemeMidnightIcon;
        backup = {};
        backup = result.bind(tango)(kilo, backup);
        verify['icon'] = backup;
        backup = output[foxtrot];
        backup = sizing.bind(tango)(backup);
        kilo = backup.intl;
        backup = kilo.string;
        foxtrot = output[foxtrot];
        foxtrot = sizing.bind(tango)(foxtrot);
        foxtrot = foxtrot.t;
        foxtrot = foxtrot.pQwSpa;
        foxtrot = backup.bind(kilo)(foxtrot);
        verify['label'] = foxtrot;
        romeo = _closure1_slot15;
        romeo = romeo.MIDNIGHT;
        verify['value'] = romeo;
        verify = yankee.bind(tango)(offset, verify);
        options[2] = verify;
        report['children'] = options;
        report = golf.bind(tango)(oscar, report);
        entity['children'] = report;
        entity = zulu.bind(tango)(mike, entity);
        return entity;
    };
    var _closure1_slot20 = entity;
    entity = function() { // Original name: YouAccountRadioGroup
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            entity = _closure1_slot18;
            report = undefined;
            backup = entity.bind(report)();
            mike = _closure1_slot0;
            zulu = _closure1_slot3;
            entity = 24;
            entity = zulu[entity];
            options = mike.bind(report)(entity);
            oscar = options.useStateFromStores;
            entity = _closure1_slot12;
            tango = new Array(1);
            tango[0] = entity;
            entity = function() {
                mike = _closure1_slot12;
                entity = mike.getCurrentUser;
                entity = entity.bind(mike)();
                return entity;
            };
            yankee = oscar.bind(options)(tango, entity);
            var _closure2_slot0 = yankee;
            entity = 31;
            entity = zulu[entity];
            mike = mike.bind(report)(entity);
            entity = mike.useMultiAccountUsers;
            entity = entity.bind(mike)();
            entity = entity.multiAccountUsers;
            var _closure2_slot1 = entity;
            mike = function(argFoo) { // Original name: useAccountRadioRowProps
                oscar = argFoo;
                var _closure3_slot0 = oscar;
                report = _closure1_slot0;
                tango = _closure1_slot3;
                zulu = 24;
                tango = tango[zulu];
                zulu = undefined;
                golf = report.bind(zulu)(tango);
                report = golf.useStateFromStores;
                zulu = _closure1_slot11;
                tango = new Array(1);
                tango[0] = zulu;
                zulu = function() {
                    entity = _closure1_slot11;
                    entity = entity.hidePersonalInformation;
                    return entity;
                };
                report = report.bind(golf)(tango, zulu);
                var _closure3_slot1 = report;
                tango = _closure1_slot4;
                zulu = tango.useMemo;
                mike = new Array(2);
                mike[0] = oscar;
                mike[1] = report;
                entity = function() {
                    zulu = _closure3_slot0;
                    mike = zulu.map;
                    entity = function(argFoo) {
                        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                            zulu = argFoo;
                            entity = _closure1_slot9;
                            mike = entity.prototype;
                            mike = Object.create(mike, {constructor: {value: entity}});
                            backup = mike;
                            foxtrot = zulu;
                            entity = new backup[entity](foxtrot, romeo);
                            verify = entity instanceof Object ? entity : mike;
                            entity = _closure3_slot1;
                            mike = null;
                            if(entity) { _fun00010_ip = 88; continue _fun00009 }
 45:
                            entity = verify.isPomelo;
                            entity = entity.bind(verify)();
                            mike = null;
                            if(entity) { _fun00010_ip = 88; continue _fun00009 }
 60:
                            report = verify.discriminator;
                            entity = global;
                            entity = entity.HermesInternal;
                            tango = entity.concat;
                            entity = '#';
                            mike = tango.bind(entity)(report);
 88:
                            entity = {};
                            oscar = _closure1_slot1;
                            report = _closure1_slot3;
                            tango = 29;
                            tango = report[tango];
                            report = undefined;
                            options = oscar.bind(report)(tango);
                            oscar = options.getUserTag;
                            tango = {};
                            yankee = 'username';
                            tango['mode'] = yankee;
                            yankee = _closure3_slot1;
                            offset = 'always';
                            if(!yankee) { _fun00010_ip = 147; continue _fun00009 }
 141:
                            offset = 'never';
 147:
                            tango['identifiable'] = offset;
                            tango = oscar.bind(options)(verify, tango);
                            entity['label'] = tango;
                            zulu = zulu.id;
                            entity['value'] = zulu;
                            entity['subLabel'] = mike;
                            tango = _closure1_slot16;
                            zulu = _closure1_slot1;
                            options = _closure1_slot3;
                            oscar = 30;
                            mike = options[oscar];
                            zulu = zulu.bind(report)(mike);
                            mike = {};
                            mike['user'] = verify;
                            mike['guildId'] = report;
                            golf = _closure1_slot0;
                            oscar = options[oscar];
                            oscar = golf.bind(report)(oscar);
                            oscar = oscar.AvatarSizes;
                            oscar = oscar.REFRESH_MEDIUM_32;
                            mike['size'] = oscar;
                            mike = tango.bind(report)(zulu, mike);
                            entity['icon'] = mike;
                            return entity;
                        }
                    };
                    entity = mike.bind(zulu)(entity);
                    return entity;
                };
                entity = zulu.bind(tango)(entity, mike);
                return entity;
            };
            romeo = mike.bind(report)(entity);
            oscar = _closure1_slot4;
            tango = oscar.useCallback;
            zulu = new Array(2);
            zulu[0] = entity;
            entity = null;
            options = entity == yankee;
            mike = undefined;
            if(options) { _fun00008_ip = 146; continue _fun00007 }
 141:
            mike = yankee.id;
 146:
            zulu[1] = mike;
            mike = function(argFoo) {
                _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                    oscar = argFoo;
                    var _closure3_slot0 = oscar;
                    entity = _closure2_slot0;
                    mike = null;
                    golf = mike == entity;
                    entity = undefined;
                    report = undefined;
                    if(golf) { _fun00012_ip = 38; continue _fun00011 }
 29:
                    golf = _closure2_slot0;
                    report = golf.id;
 38:
                    if(!(oscar !== report)) { _fun00012_ip = 195; continue _fun00011 }
 45:
                    report = _closure2_slot1;
                    tango = report.find;
                    zulu = function(argFoo) {
                        entity = argFoo;
                        mike = entity.id;
                        entity = _closure3_slot0;
                        entity = mike === entity;
                        return entity;
                    };
                    zulu = tango.bind(report)(zulu);
                    if(!(mike != zulu)) { _fun00012_ip = 195; continue _fun00011 }
 73:
                    report = zulu.tokenStatus;
                    tango = _closure1_slot7;
                    tango = tango.INVALID;
                    if(!(report !== tango)) { _fun00012_ip = 160; continue _fun00011 }
 96:
                    report = _closure1_slot1;
                    oscar = _closure1_slot3;
                    tango = 21;
                    tango = oscar[tango];
                    report = report.bind(entity)(tango);
                    tango = report.hideActionSheet;
                    tango = tango.bind(report)();
                    report = _closure1_slot2;
                    tango = 33;
                    tango = oscar[tango];
                    report = report.bind(entity)(tango);
                    tango = report.switchAccount;
                    zulu = zulu.id;
                    zulu = tango.bind(report)(zulu);
                    _fun00012_ip = 195; continue _fun00011;
 160:
                    tango = _closure1_slot1;
                    report = _closure1_slot3;
                    zulu = 32;
                    zulu = report[zulu];
                    zulu = tango.bind(entity)(zulu);
                    mike = _closure1_slot13;
                    mike = mike.LOGIN;
                    mike = zulu.bind(entity)(mike);
 195:
                    return entity;
                }
            };
            foxtrot = tango.bind(oscar)(mike, zulu);
            mike = entity == yankee;
            entity = null;
            if(mike) { _fun00008_ip = 505; continue _fun00007 }
 175:
            tango = _closure1_slot17;
            zulu = _closure1_slot5;
            mike = {};
            oscar = backup.account;
            mike['style'] = oscar;
            verify = _closure1_slot16;
            options = _closure1_slot5;
            oscar = {};
            backup = backup.manage;
            oscar['style'] = backup;
            echo = _closure1_slot16;
            output = _closure1_slot0;
            result = _closure1_slot3;
            backup = 34;
            backup = result[backup];
            backup = output.bind(report)(backup);
            sizing = backup.PressableOpacity;
            kilo = {};
            backup = function() { // Original name: onPress
                zulu = _closure1_slot1;
                mike = _closure1_slot3;
                entity = 32;
                entity = mike[entity];
                mike = undefined;
                entity = zulu.bind(mike)(entity);
                entity = entity.bind(mike)();
                return entity;
            };
            kilo['onPress'] = backup;
            control = _closure1_slot16;
            backup = 35;
            backup = result[backup];
            backup = output.bind(report)(backup);
            source = backup.Text;
            update = {'variant': 'text-sm/semibold', 'color': 'text-link'};
            backup = 20;
            vacuum = result[backup];
            vacuum = output.bind(report)(vacuum);
            config = vacuum.intl;
            sequence = config.string;
            vacuum = result[backup];
            vacuum = output.bind(report)(vacuum);
            vacuum = vacuum.t;
            vacuum = vacuum.HxrBOT;
            vacuum = sequence.bind(config)(vacuum);
            update['children'] = vacuum;
            update = control.bind(report)(source, update);
            kilo['children'] = update;
            kilo = echo.bind(report)(sizing, kilo);
            oscar['children'] = kilo;
            options = verify.bind(report)(options, oscar);
            oscar = new Array(2);
            oscar[0] = options;
            verify = _closure1_slot16;
            golf = 22;
            golf = result[golf];
            golf = output.bind(report)(golf);
            options = golf.TableRadioGroup;
            golf = {};
            kilo = result[backup];
            kilo = output.bind(report)(kilo);
            sizing = kilo.intl;
            kilo = sizing.string;
            backup = result[backup];
            backup = output.bind(report)(backup);
            backup = backup.t;
            backup = backup.oMNyYG;
            backup = kilo.bind(sizing)(backup);
            golf['title'] = backup;
            golf['onChange'] = foxtrot;
            yankee = yankee.id;
            golf['value'] = yankee;
            yankee = romeo.map;
            offset = function(argFoo) {
                entity = argFoo;
                report = _closure1_slot16;
                zulu = _closure1_slot0;
                tango = _closure1_slot3;
                mike = 23;
                mike = tango[mike];
                tango = undefined;
                mike = zulu.bind(tango)(mike);
                zulu = mike.TableRadioRow;
                mike = {};
                verify = mike;
                options = entity;
                oscar = copyDataProperties(verify, options);
                entity = entity.value;
                entity = report.bind(tango)(zulu, mike, entity);
                return entity;
            };
            offset = yankee.bind(romeo)(offset);
            golf['children'] = offset;
            golf = verify.bind(report)(options, golf);
            oscar[1] = golf;
            mike['children'] = oscar;
            entity = tango.bind(report)(zulu, mike);
 505:
            return entity;
        }
    };
    var _closure1_slot21 = entity;
    entity = function() { // Original name: FocusModeSetting
        _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
            entity = _closure1_slot18;
            report = undefined;
            sizing = entity.bind(report)();
            mike = _closure1_slot0;
            zulu = _closure1_slot3;
            entity = 36;
            entity = zulu[entity];
            tango = mike.bind(report)(entity);
            entity = tango.useFocusModeEnabled;
            verify = entity.bind(tango)();
            entity = 17;
            entity = zulu[entity];
            entity = mike.bind(report)(entity);
            tango = entity.FocusModeExpiresAtSetting;
            entity = tango.useSetting;
            output = entity.bind(tango)();
            entity = 37;
            entity = zulu[entity];
            entity = mike.bind(report)(entity);
            zulu = entity.QuietModeExperiment;
            mike = zulu.useExperiment;
            entity = {};
            tango = 'you action sheet';
            entity['location'] = tango;
            entity = mike.bind(zulu)(entity);
            entity = entity.allowQuietMode;
            if(entity) { _fun00014_ip = 129; continue _fun00013 }
 121:
            entity = null;
            if(!verify) { _fun00014_ip = 633; continue _fun00013 }
 129:
            tango = _closure1_slot16;
            backup = _closure1_slot0;
            yankee = _closure1_slot3;
            mike = 38;
            mike = yankee[mike];
            mike = backup.bind(report)(mike);
            zulu = mike.TableRowGroup;
            mike = {};
            options = _closure1_slot16;
            oscar = 39;
            oscar = yankee[oscar];
            oscar = backup.bind(report)(oscar);
            golf = oscar.TableSwitchRow;
            oscar = {};
            result = 20;
            romeo = yankee[result];
            romeo = backup.bind(report)(romeo);
            kilo = romeo.intl;
            foxtrot = kilo.string;
            romeo = yankee[result];
            romeo = backup.bind(report)(romeo);
            romeo = romeo.t;
            romeo = romeo.wCxBOT;
            romeo = foxtrot.bind(kilo)(romeo);
            oscar['accessibilityLabel'] = romeo;
            romeo = yankee[result];
            romeo = backup.bind(report)(romeo);
            kilo = romeo.intl;
            foxtrot = kilo.string;
            romeo = yankee[result];
            romeo = backup.bind(report)(romeo);
            romeo = romeo.t;
            romeo = romeo.wCxBOT;
            romeo = foxtrot.bind(kilo)(romeo);
            oscar['accessibilityHint'] = romeo;
            kilo = _closure1_slot16;
            romeo = 40;
            romeo = yankee[romeo];
            romeo = backup.bind(report)(romeo);
            foxtrot = romeo.BellSlashIcon;
            romeo = {};
            sizing = sizing.focusModeIcon;
            romeo['style'] = sizing;
            romeo = kilo.bind(report)(foxtrot, romeo);
            oscar['icon'] = romeo;
            romeo = function(argFoo) { // Original name: onValueChange
                _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                    entity = argFoo;
                    if(entity) { _fun00016_ip = 46; continue _fun00015 }
 9:
                    tango = _closure1_slot0;
                    zulu = _closure1_slot3;
                    entity = 36;
                    zulu = zulu[entity];
                    entity = undefined;
                    tango = tango.bind(entity)(zulu);
                    zulu = tango.setFocusMode;
                    entity = false;
                    entity = zulu.bind(tango)(entity);
                    _fun00016_ip = 137; continue _fun00015;
 46:
                    tango = _closure1_slot1;
                    entity = _closure1_slot3;
                    zulu = 21;
                    zulu = entity[zulu];
                    oscar = undefined;
                    report = tango.bind(oscar)(zulu);
                    tango = report.openLazy;
                    zulu = _closure1_slot0;
                    mike = 42;
                    mike = entity[mike];
                    zulu = zulu.bind(oscar)(mike);
                    mike = 41;
                    mike = entity[mike];
                    entity = entity.paths;
                    zulu = zulu.bind(oscar)(mike, entity);
                    mike = {};
                    entity = function(argFoo, argBar) { // Original name: onSelect
                        zulu = _closure1_slot0;
                        tango = _closure1_slot3;
                        entity = 36;
                        report = tango[entity];
                        entity = undefined;
                        options = zulu.bind(entity)(report);
                        golf = options.setFocusMode;
                        oscar = argFoo;
                        report = argBar;
                        report = golf.bind(options)(oscar, report);
                        report = _closure1_slot1;
                        mike = 21;
                        mike = tango[mike];
                        report = report.bind(entity)(mike);
                        mike = report.hideActionSheet;
                        mike = mike.bind(report)();
                        mike = 43;
                        mike = tango[mike];
                        zulu = zulu.bind(entity)(mike);
                        mike = zulu.showYouAccountActionSheet;
                        mike = mike.bind(zulu)();
                        return entity;
                    };
                    mike['onSelect'] = entity;
                    entity = 'FocusModeOptionsActionSheet';
                    entity = tango.bind(report)(zulu, entity, mike);
 137:
                    entity = undefined;
                    return entity;
                }
            };
            oscar['onValueChange'] = romeo;
            oscar['value'] = verify;
            romeo = yankee[result];
            romeo = backup.bind(report)(romeo);
            foxtrot = romeo.intl;
            romeo = foxtrot.string;
            yankee = yankee[result];
            yankee = backup.bind(report)(yankee);
            yankee = yankee.t;
            yankee = yankee.wCxBOT;
            yankee = romeo.bind(foxtrot)(yankee);
            oscar['label'] = yankee;
            if(!verify) { _fun00014_ip = 414; continue _fun00013 }
 398:
            verify = null;
            if(!(verify != output)) { _fun00014_ip = 414; continue _fun00013 }
 404:
            verify = '0';
            if(!(verify === output)) { _fun00014_ip = 471; continue _fun00013 }
 414:
            foxtrot = _closure1_slot0;
            verify = _closure1_slot3;
            yankee = verify[result];
            yankee = foxtrot.bind(report)(yankee);
            romeo = yankee.intl;
            yankee = romeo.string;
            verify = verify[result];
            verify = foxtrot.bind(report)(verify);
            verify = verify.t;
            verify = verify.i0nsoa;
            verify = yankee.bind(romeo)(verify);
            _fun00014_ip = 612; continue _fun00013;
 471:
            kilo = _closure1_slot0;
            backup = _closure1_slot3;
            offset = backup[result];
            offset = kilo.bind(report)(offset);
            foxtrot = offset.intl;
            romeo = foxtrot.formatToPlainString;
            offset = backup[result];
            offset = kilo.bind(report)(offset);
            offset = offset.t;
            yankee = offset.BWD8fn;
            offset = {};
            sizing = global;
            echo = sizing.Date;
            sizing = sizing.Number;
            source = sizing.bind(report)(output);
            output = echo.prototype;
            output = Object.create(output, {constructor: {value: echo}});
            control = output;
            sizing = new control[echo](source, update);
            output = sizing instanceof Object ? sizing : output;
            sizing = output.toLocaleString;
            backup = backup[result];
            backup = kilo.bind(report)(backup);
            backup = backup.intl;
            kilo = backup.currentLocale;
            backup = {'month': 'numeric', 'day': 'numeric', 'hour': 'numeric', 'minute': '2-digit'};
            backup = sizing.bind(output)(kilo, backup);
            offset['endTime'] = backup;
            verify = romeo.bind(foxtrot)(yankee, offset);
 612:
            oscar['subLabel'] = verify;
            oscar = options.bind(report)(golf, oscar);
            mike['children'] = oscar;
            entity = tango.bind(report)(zulu, mike);
 633:
            return entity;
        }
    };
    var _closure1_slot22 = entity;
    entity = function() { // Original name: CustomStatus
        _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
            entity = _closure1_slot18;
            tango = undefined;
            echo = entity.bind(tango)();
            mike = _closure1_slot0;
            zulu = _closure1_slot3;
            entity = 44;
            entity = zulu[entity];
            mike = mike.bind(tango)(entity);
            entity = mike.useCustomStatusActivity;
            verify = entity.bind(mike)();
            yankee = null;
            offset = yankee != verify;
            if(!offset) { _fun00018_ip = 63; continue _fun00017 }
 54:
            entity = verify.state;
            offset = yankee != entity;
 63:
            if(!offset) { _fun00018_ip = 79; continue _fun00017 }
 66:
            mike = verify.state;
            entity = '';
            offset = entity !== mike;
 79:
            zulu = _closure1_slot16;
            oscar = _closure1_slot0;
            romeo = _closure1_slot3;
            entity = 38;
            entity = romeo[entity];
            entity = oscar.bind(tango)(entity);
            mike = entity.TableRowGroup;
            entity = {};
            golf = _closure1_slot16;
            report = 45;
            report = romeo[report];
            report = oscar.bind(tango)(report);
            oscar = report.TableRow;
            report = {};
            backup = _closure1_slot0;
            romeo = _closure1_slot3;
            foxtrot = 20;
            kilo = romeo[foxtrot];
            kilo = backup.bind(tango)(kilo);
            output = kilo.intl;
            kilo = output.string;
            romeo = romeo[foxtrot];
            romeo = backup.bind(tango)(romeo);
            backup = romeo.t;
            if(offset) { _fun00018_ip = 195; continue _fun00017 }
 182:
            romeo = backup./UonHB;
            romeo = kilo.bind(output)(romeo);
            _fun00018_ip = 206; continue _fun00017;
 195:
            backup = backup.2p9FMz;
            romeo = kilo.bind(output)(backup);
 206:
            report['accessibilityLabel'] = romeo;
            romeo = undefined;
            if(!offset) { _fun00018_ip = 318; continue _fun00017 }
 215:
            kilo = _closure1_slot0;
            backup = _closure1_slot3;
            output = backup[foxtrot];
            output = kilo.bind(tango)(output);
            result = output.intl;
            output = result.formatToPlainString;
            backup = backup[foxtrot];
            backup = kilo.bind(tango)(backup);
            backup = backup.t;
            kilo = backup.GE7Qzc;
            backup = {};
            update = verify.emoji;
            control = yankee == update;
            source = undefined;
            if(control) { _fun00018_ip = 284; continue _fun00017 }
 279:
            source = update.name;
 284:
            control = yankee != source;
            update = '';
            if(!control) { _fun00018_ip = 298; continue _fun00017 }
 295:
            update = source;
 298:
            backup['emoji'] = update;
            update = verify.state;
            backup['status'] = update;
            romeo = output.bind(result)(kilo, backup);
 318:
            report['accessibilityHint'] = romeo;
            kilo = _closure1_slot16;
            backup = _closure1_slot1;
            output = _closure1_slot3;
            romeo = 46;
            romeo = output[romeo];
            backup = backup.bind(tango)(romeo);
            romeo = {};
            result = yankee != verify;
            output = null;
            if(!result) { _fun00018_ip = 364; continue _fun00017 }
 358:
            output = verify.emoji;
 364:
            romeo['emoji'] = output;
            output = true;
            romeo['withPlaceholder'] = output;
            output = echo.activityIcon;
            romeo['style'] = output;
            romeo = kilo.bind(tango)(backup, romeo);
            report['icon'] = romeo;
            romeo = function() { // Original name: onPress
                oscar = _closure1_slot1;
                golf = _closure1_slot3;
                entity = 21;
                zulu = golf[entity];
                entity = undefined;
                tango = oscar.bind(entity)(zulu);
                zulu = tango.hideActionSheet;
                zulu = zulu.bind(tango)();
                zulu = _closure1_slot0;
                mike = 47;
                mike = golf[mike];
                tango = zulu.bind(entity)(mike);
                zulu = tango.openEditCustomStatusModal;
                mike = {};
                report = 'YouAccountActionSheet';
                mike['location'] = report;
                report = 48;
                report = golf[report];
                report = oscar.bind(entity)(report);
                oscar = report.YOU_ACCOUNT_ACTION_SHEET;
                report = new Array(1);
                report[0] = oscar;
                mike['analyticsLocations'] = report;
                mike = zulu.bind(tango)(mike);
                return entity;
            };
            report['onPress'] = romeo;
            romeo = yankee != verify;
            yankee = null;
            if(!romeo) { _fun00018_ip = 523; continue _fun00017 }
 416:
            kilo = _closure1_slot16;
            backup = _closure1_slot0;
            source = _closure1_slot3;
            romeo = 34;
            romeo = source[romeo];
            romeo = backup.bind(tango)(romeo);
            backup = romeo.PressableOpacity;
            romeo = {};
            sizing = function(argFoo) { // Original name: onPress
                mike = argFoo;
                entity = mike.stopPropagation;
                entity = entity.bind(mike)();
                zulu = _closure1_slot1;
                mike = _closure1_slot3;
                entity = 49;
                mike = mike[entity];
                entity = undefined;
                tango = zulu.bind(entity)(mike);
                zulu = '';
                mike = null;
                mike = tango.bind(entity)(zulu, mike, mike);
                return entity;
            };
            romeo['onPress'] = sizing;
            sizing = 'button';
            romeo['accessibilityRole'] = sizing;
            result = _closure1_slot16;
            output = _closure1_slot6;
            sizing = {};
            echo = echo.trailingIcon;
            sizing['style'] = echo;
            update = _closure1_slot1;
            echo = 50;
            echo = source[echo];
            echo = update.bind(tango)(echo);
            sizing['source'] = echo;
            sizing = result.bind(tango)(output, sizing);
            romeo['children'] = sizing;
            yankee = kilo.bind(tango)(backup, romeo);
 523:
            report['trailing'] = yankee;
            if(offset) { _fun00018_ip = 585; continue _fun00017 }
 531:
            romeo = _closure1_slot0;
            options = _closure1_slot3;
            offset = options[foxtrot];
            offset = romeo.bind(tango)(offset);
            yankee = offset.intl;
            offset = yankee.string;
            options = options[foxtrot];
            options = romeo.bind(tango)(options);
            options = options.t;
            options = options./UonHB;
            options = offset.bind(yankee)(options);
            _fun00018_ip = 590; continue _fun00017;
 585:
            options = verify.state;
 590:
            report['label'] = options;
            report = golf.bind(tango)(oscar, report);
            entity['children'] = report;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        }
    };
    var _closure1_slot23 = entity;
    entity = global;
    verify = entity.Object;
    options = verify.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = options.bind(verify)(zulu, entity, tango);
    entity = 0;
    tango = oscar[entity];
    entity = undefined;
    golf = golf.bind(entity)(tango);
    var _closure1_slot4 = golf;
    tango = 1;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    options = tango.View;
    var _closure1_slot5 = options;
    tango = tango.Image;
    var _closure1_slot6 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.MultiAccountTokenStatus;
    var _closure1_slot7 = tango;
    tango = 3;
    tango = oscar[tango];
    tango = romeo.bind(entity)(tango);
    var _closure1_slot8 = tango;
    tango = 4;
    tango = oscar[tango];
    tango = romeo.bind(entity)(tango);
    var _closure1_slot9 = tango;
    tango = 5;
    tango = oscar[tango];
    tango = romeo.bind(entity)(tango);
    var _closure1_slot10 = tango;
    tango = 6;
    tango = oscar[tango];
    tango = romeo.bind(entity)(tango);
    var _closure1_slot11 = tango;
    tango = 7;
    tango = oscar[tango];
    tango = romeo.bind(entity)(tango);
    var _closure1_slot12 = tango;
    tango = 8;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    options = tango.AuthStates;
    var _closure1_slot13 = options;
    options = tango.StatusTypes;
    var _closure1_slot14 = options;
    tango = tango.ThemeTypes;
    var _closure1_slot15 = tango;
    tango = 9;
    options = oscar[tango];
    options = report.bind(entity)(options);
    options = options.jsx;
    var _closure1_slot16 = options;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.jsxs;
    var _closure1_slot17 = tango;
    tango = 10;
    tango = oscar[tango];
    verify = report.bind(entity)(tango);
    options = verify.createStyles;
    tango = {};
    offset = {};
    yankee = 'relative';
    offset['position'] = yankee;
    tango['account'] = offset;
    offset = {'position': 'absolute', 'right': 0, 'zIndex': 100};
    tango['manage'] = offset;
    offset = {};
    yankee = 16;
    offset['paddingHorizontal'] = yankee;
    tango['container'] = offset;
    offset = {'width': 32, 'alignItems': 'center', 'justifyContent': 'center'};
    tango['icon'] = offset;
    offset = {'width': 32, 'height': 32};
    tango['activityIcon'] = offset;
    offset = {'width': 24, 'height': 24, 'margin': 4};
    tango['focusModeIcon'] = offset;
    offset = {'tintColor': null, 'width': 16, 'height': 16};
    yankee = 11;
    yankee = oscar[yankee];
    yankee = romeo.bind(entity)(yankee);
    yankee = yankee.colors;
    yankee = yankee.INTERACTIVE_NORMAL;
    offset['tintColor'] = yankee;
    tango['trailingIcon'] = offset;
    tango = options.bind(verify)(tango);
    var _closure1_slot18 = tango;
    tango = golf.memo;
    mike = function(argFoo) {
        _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
            entity = argFoo;
            verify = entity.statusOnly;
            tango = undefined;
            if(!(verify === tango)) { _fun00020_ip = 17; continue _fun00019 }
 15:
            verify = false;
 17:
            oscar = _closure1_slot0;
            backup = _closure1_slot3;
            entity = 51;
            entity = backup[entity];
            mike = oscar.bind(tango)(entity);
            entity = mike.useMultiAccountMobile;
            foxtrot = entity.bind(mike)();
            mike = _closure1_slot1;
            entity = 52;
            entity = backup[entity];
            mike = mike.bind(tango)(entity);
            entity = 'theme_setting_in_account_sheet';
            options = mike.bind(tango)(entity);
            romeo = 24;
            entity = backup[romeo];
            report = oscar.bind(tango)(entity);
            zulu = report.useStateFromStores;
            entity = _closure1_slot10;
            mike = new Array(1);
            mike[0] = entity;
            entity = function() {
                entity = _closure1_slot10;
                entity = entity.isDeveloper;
                return entity;
            };
            yankee = zulu.bind(report)(mike, entity);
            zulu = _closure1_slot16;
            entity = 53;
            entity = backup[entity];
            entity = oscar.bind(tango)(entity);
            mike = entity.ActionSheet;
            entity = {};
            entity['startExpanded'] = foxtrot;
            golf = _closure1_slot16;
            report = 54;
            report = backup[report];
            report = oscar.bind(tango)(report);
            oscar = report.BottomSheetTitleHeader;
            report = {};
            kilo = _closure1_slot0;
            result = _closure1_slot3;
            backup = 20;
            sizing = result[backup];
            sizing = kilo.bind(tango)(sizing);
            output = sizing.intl;
            sizing = output.string;
            backup = result[backup];
            backup = kilo.bind(tango)(backup);
            kilo = backup.t;
            if(verify) { _fun00020_ip = 250; continue _fun00019 }
 221:
            if(foxtrot) { _fun00020_ip = 237; continue _fun00019 }
 224:
            backup = kilo.qP/i6u;
            backup = sizing.bind(output)(backup);
            _fun00020_ip = 248; continue _fun00019;
 237:
            result = kilo.ldCE/v;
            backup = sizing.bind(output)(result);
 248:
            _fun00020_ip = 261; continue _fun00019;
 250:
            kilo = kilo.3Uj+2t;
            backup = sizing.bind(output)(kilo);
 261:
            report['title'] = backup;
            report = golf.bind(tango)(oscar, report);
            entity['header'] = report;
            report = true;
            entity['showGradient'] = report;
            golf = _closure1_slot17;
            oscar = _closure1_slot0;
            backup = _closure1_slot3;
            report = 55;
            report = backup[report];
            report = oscar.bind(tango)(report);
            oscar = report.Stack;
            report = {};
            report['spacing'] = romeo;
            romeo = options;
            if(!romeo) { _fun00020_ip = 340; continue _fun00019 }
 324:
            kilo = _closure1_slot16;
            backup = _closure1_slot20;
            options = {};
            romeo = kilo.bind(tango)(backup, options);
 340:
            options = new Array(6);
            options[0] = romeo;
            kilo = _closure1_slot16;
            backup = _closure1_slot19;
            romeo = {};
            romeo = kilo.bind(tango)(backup, romeo);
            options[1] = romeo;
            kilo = _closure1_slot16;
            backup = _closure1_slot22;
            romeo = {};
            romeo = kilo.bind(tango)(backup, romeo);
            options[2] = romeo;
            kilo = _closure1_slot16;
            backup = _closure1_slot23;
            romeo = {};
            romeo = kilo.bind(tango)(backup, romeo);
            options[3] = romeo;
            romeo = !verify;
            if(!romeo) { _fun00020_ip = 417; continue _fun00019 }
 414:
            romeo = foxtrot;
 417:
            if(!romeo) { _fun00020_ip = 436; continue _fun00019 }
 420:
            kilo = _closure1_slot16;
            backup = _closure1_slot21;
            foxtrot = {};
            romeo = kilo.bind(tango)(backup, foxtrot);
 436:
            options[4] = romeo;
            verify = !verify;
            if(!verify) { _fun00020_ip = 449; continue _fun00019 }
 446:
            verify = yankee;
 449:
            if(!verify) { _fun00020_ip = 496; continue _fun00019 }
 452:
            romeo = _closure1_slot16;
            yankee = _closure1_slot1;
            foxtrot = _closure1_slot3;
            offset = 56;
            offset = foxtrot[offset];
            yankee = yankee.bind(tango)(offset);
            offset = {'title': 'Developer Tools', 'embedded': true};
            verify = romeo.bind(tango)(yankee, offset);
 496:
            options[5] = verify;
            report['children'] = options;
            report = golf.bind(tango)(oscar, report);
            entity['children'] = report;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        }
    };
    mike = tango.bind(golf)(mike);
    tango = 57;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/main_tabs_v2/native/tabs/you/YouAccountActionSheet.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();