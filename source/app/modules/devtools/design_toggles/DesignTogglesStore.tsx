// app/modules/devtools/design_toggles/DesignTogglesStore.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    entity = function(argFoo, argBar, argBaz) { // Original name: _callSuper
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            tango = argFoo;
            oscar = argBaz;
            mike = _closure1_slot3;
            zulu = undefined;
            entity = argBar;
            verify = mike.bind(zulu)(entity);
            mike = _closure1_slot2;
            entity = _closure1_slot8;
            entity = entity.bind(zulu)();
            if(entity) { _fun00002_ip = 51; continue _fun00001 }
 38:
            entity = verify.apply;
            entity = entity.bind(verify)(tango, oscar);
            _fun00002_ip = 92; continue _fun00001;
 51:
            golf = global;
            options = golf.Reflect;
            golf = options.construct;
            if(oscar) { _fun00002_ip = 71; continue _fun00001 }
 67:
            oscar = new Array(0);
 71:
            report = _closure1_slot3;
            report = report.bind(zulu)(tango);
            report = report.constructor;
            entity = golf.bind(options)(verify, oscar, report);
 92:
            entity = mike.bind(zulu)(tango, entity);
            return entity;
        }
    };
    var _closure1_slot7 = entity;
    entity = function() { // Original name: _isNativeReflectConstruct
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
 2: // try_start_0
            mike = global;
            zulu = mike.Boolean;
            zulu = zulu.prototype;
            tango = zulu.valueOf;
            zulu = tango.call;
            options = mike.Reflect;
            golf = options.construct;
            oscar = mike.Boolean;
            report = new Array(0);
            mike = function() {
                entity = undefined;
                return entity;
            };
            mike = golf.bind(options)(oscar, report, mike);
            mike = zulu.bind(tango)(mike);
            mike = !mike;
            var _closure2_slot0 = mike;
 70: // try_end0
            _fun00004_ip = 74; continue _fun00003;
 72: // catch_target0
            CatchBlockStart(arg_register=1);
 74:
            mike = function() { // Original name: _isNativeReflectConstruct
                entity = _closure2_slot0;
                entity = !entity;
                entity = !entity;
                return entity;
            };
            _closure1_slot8 = mike;
            entity = undefined;
            entity = mike.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot8 = entity;
    entity = global;
    options = entity.Object;
    tango = options.defineProperty;
    mike = {};
    entity = true;
    mike['value'] = entity;
    entity = '__esModule';
    entity = tango.bind(options)(zulu, entity, mike);
    entity = 0;
    mike = oscar[entity];
    entity = undefined;
    mike = golf.bind(entity)(mike);
    var _closure1_slot0 = mike;
    mike = 1;
    mike = oscar[mike];
    mike = golf.bind(entity)(mike);
    var _closure1_slot1 = mike;
    mike = 2;
    mike = oscar[mike];
    mike = golf.bind(entity)(mike);
    var _closure1_slot2 = mike;
    mike = 3;
    mike = oscar[mike];
    mike = golf.bind(entity)(mike);
    var _closure1_slot3 = mike;
    mike = 4;
    mike = oscar[mike];
    mike = golf.bind(entity)(mike);
    var _closure1_slot4 = mike;
    mike = {'enable_recently_active': 'Enable recently active channels', 'theme_setting_in_account_sheet': 'Show theme settings in the Account action sheet', 'mobile_profile_effect_debug_controls': 'mobile_profile_effect_debug_controls', 'nav_experiment_server_drawer_enabled': '[NavI] Enable expandable server drawer', 'shop_include_unpublished': '[Shop] show unpublished items in shop', 'show_icymi_debug_scores': 'Show ICYMI debug scores'};
    var _closure1_slot5 = mike;
    tango = {};
    var _closure1_slot6 = tango;
    tango = 5;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    options = tango.DeviceSettingsStore;
    tango = function(argFoo) {
        tango = function() { // Original name: DesignTogglesStore
            report = this;
            tango = undefined;
            entity = undefined;
            oscar = _closure1_slot0;
            zulu = _closure2_slot0;
            oscar = oscar.bind(tango)(report, zulu);
            mike = _closure1_slot7;
            entity = arguments;
            entity = mike.bind(tango)(report, zulu, entity);
            return entity;
        };
        var _closure2_slot0 = tango;
        report = _closure1_slot4;
        zulu = undefined;
        mike = argFoo;
        mike = report.bind(zulu)(tango, mike);
        mike = _closure1_slot1;
        report = {};
        entity = 'getUserAgnosticState';
        report['key'] = entity;
        entity = function() { // Original name: value
            entity = {};
            mike = _closure1_slot6;
            entity['toggleStates'] = mike;
            return entity;
        };
        report['value'] = entity;
        entity = new Array(6);
        entity[0] = report;
        report = {};
        golf = 'initialize';
        report['key'] = golf;
        golf = function(argFoo) { // Original name: value
            _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                offset = argFoo;
                options = _closure1_slot5;
                entity = undefined;
                zulu = null;
                mike = undefined;
                for(tango in options)
 24:
                {
 33:
                    foxtrot = tango;
                    romeo = zulu == offset;
                    yankee = undefined;
                    if(romeo) { _fun00006_ip = 70; continue _fun00005 }
 45:
                    backup = offset.toggleStates;
                    romeo = zulu == backup;
                    mike = backup;
                    yankee = undefined;
                    if(romeo) { _fun00006_ip = 70; continue _fun00005 }
 63:
                    yankee = backup[foxtrot];
                    mike = backup;
 70:
                    romeo = zulu != yankee;
                    if(!romeo) { _fun00006_ip = 80; continue _fun00005 }
 77:
                    romeo = yankee;
 80:
                    yankee = _closure1_slot6;
                    yankee[foxtrot] = romeo;
                    _fun00006_ip = 24; continue _fun00005;
                }
 90:
                return entity;
            }
        };
        report['value'] = golf;
        entity[1] = report;
        report = {};
        golf = 'get';
        report['key'] = golf;
        golf = function(argFoo) { // Original name: value
            _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                mike = _closure1_slot6;
                entity = argFoo;
                mike = mike[entity];
                entity = null;
                entity = entity != mike;
                if(!entity) { _fun00008_ip = 26; continue _fun00007 }
 23:
                entity = mike;
 26:
                return entity;
            }
        };
        report['value'] = golf;
        entity[2] = report;
        report = {};
        golf = 'set';
        report['key'] = golf;
        golf = function(argFoo, argBar) { // Original name: value
            entity = argBar;
            zulu = _closure1_slot6;
            mike = argFoo;
            zulu[mike] = entity;
            return entity;
        };
        report['value'] = golf;
        entity[3] = report;
        report = {};
        golf = 'all';
        report['key'] = golf;
        golf = function() { // Original name: value
            entity = _closure1_slot6;
            return entity;
        };
        report['value'] = golf;
        entity[4] = report;
        report = {};
        golf = 'allWithDescriptions';
        report['key'] = golf;
        oscar = function() { // Original name: value
            entity = global;
            zulu = entity.Object;
            mike = zulu.entries;
            entity = _closure1_slot6;
            zulu = mike.bind(zulu)(entity);
            mike = zulu.map;
            entity = function(argFoo) {
                _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                    report = argFoo;
                    entity = report[Symbol.iterator];
                    report = entity().next;
                    mike = report().value;
                    zulu = entity;
                    golf = undefined;
                    tango = zulu === golf;
                    zulu = undefined;
                    if(tango) { _fun00010_ip = 27; continue _fun00009 }
 24:
                    zulu = mike;
 27:
                    mike = undefined;
                    if(tango) { _fun00010_ip = 57; continue _fun00009 }
 32:
                    oscar = report().value;
                    report = entity;
                    report = report === golf;
                    mike = undefined;
                    tango = report;
                    if(report) { _fun00010_ip = 57; continue _fun00009 }
 51:
                    mike = oscar;
                    tango = report;
 57:
                    if(tango) { _fun00010_ip = 63; continue _fun00009 }
 60:
                    entity.return();
 63:
                    entity = new Array(3);
                    entity[0] = zulu;
                    entity[1] = mike;
                    mike = _closure1_slot5;
                    mike = mike[zulu];
                    entity[2] = mike;
                    return entity;
                }
            };
            entity = mike.bind(zulu)(entity);
            return entity;
        };
        report['value'] = oscar;
        entity[5] = report;
        entity = mike.bind(zulu)(tango, entity);
        return entity;
    };
    options = tango.bind(entity)(options);
    tango = 'DevToolsDesignTogglesStore';
    options['displayName'] = tango;
    options['persistKey'] = tango;
    tango = 6;
    tango = oscar[tango];
    romeo = golf.bind(entity)(tango);
    tango = {};
    report = function(argFoo) { // Original name: handleSet
        entity = argFoo;
        zulu = _closure1_slot6;
        mike = entity.toggle;
        entity = entity.value;
        zulu[mike] = entity;
        entity = undefined;
        return entity;
    };
    tango['DEV_TOOLS_DESIGN_TOGGLE_SET'] = report;
    report = options.prototype;
    report = Object.create(report, {constructor: {value: options}});
    foxtrot = report;
    yankee = tango;
    tango = new foxtrot[options](romeo, yankee, offset);
    tango = tango instanceof Object ? tango : report;
    report = 7;
    oscar = oscar[report];
    report = argBar;
    golf = report.bind(entity)(oscar);
    oscar = golf.fileFinishedImporting;
    report = 'modules/devtools/design_toggles/DesignTogglesStore.tsx';
    report = oscar.bind(golf)(report);
    zulu['default'] = tango;
    zulu['toggles'] = mike;
    return entity;
})();