// app/modules/devtools/dev_settings/DevSettingsStore.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    options = argBaz;
    zulu = argFred;
    golf = argPlugh;
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
    report = entity.Object;
    tango = report.defineProperty;
    mike = {};
    entity = true;
    mike['value'] = entity;
    entity = '__esModule';
    entity = tango.bind(report)(zulu, entity, mike);
    romeo = 0;
    mike = golf[romeo];
    entity = undefined;
    mike = options.bind(entity)(mike);
    var _closure1_slot0 = mike;
    yankee = 1;
    mike = golf[yankee];
    mike = options.bind(entity)(mike);
    var _closure1_slot1 = mike;
    offset = 2;
    mike = golf[offset];
    mike = options.bind(entity)(mike);
    var _closure1_slot2 = mike;
    verify = 3;
    mike = golf[verify];
    mike = options.bind(entity)(mike);
    var _closure1_slot3 = mike;
    report = 4;
    mike = golf[report];
    mike = options.bind(entity)(mike);
    var _closure1_slot4 = mike;
    tango = {};
    tango['MESSAGING'] = romeo;
    mike = 'MESSAGING';
    tango[romeo] = mike;
    tango['OVERLAYS'] = yankee;
    mike = 'OVERLAYS';
    tango[yankee] = mike;
    tango['PREMIUM'] = offset;
    mike = 'PREMIUM';
    tango[offset] = mike;
    tango['REPORTING'] = verify;
    mike = 'REPORTING';
    tango[verify] = mike;
    tango['APP_COLLECTIONS'] = report;
    mike = 'APP_COLLECTIONS';
    tango[report] = mike;
    mike = {};
    report = {};
    verify = 'Blur view overrides for designers to test with';
    report['label'] = verify;
    verify = tango.OVERLAYS;
    report['category'] = verify;
    mike['visual_effect_view_overrides'] = report;
    report = {};
    verify = 'Force obscure blur effect on for message media and embeds';
    report['label'] = verify;
    verify = tango.OVERLAYS;
    report['category'] = verify;
    mike['obscure_blur_effect_enabled'] = report;
    report = {};
    verify = 'Ignore pending scan on explicit media';
    report['label'] = verify;
    verify = tango.OVERLAYS;
    report['category'] = verify;
    mike['explicit_media_redaction_ignore_pending_scan'] = report;
    report = {};
    verify = 'Uploads: Fail 50% of uploads with 500 status after a 1 second delay';
    report['label'] = verify;
    verify = tango.MESSAGING;
    report['category'] = verify;
    mike['upload_fail_50'] = report;
    report = {};
    verify = 'Send: Fail with 500 status';
    report['label'] = verify;
    verify = tango.MESSAGING;
    report['category'] = verify;
    mike['send_fail_100'] = report;
    report = {};
    verify = 'Enable all new premium roadblocks';
    report['label'] = verify;
    verify = tango.PREMIUM;
    report['category'] = verify;
    mike['premium_roadblocks'] = report;
    report = {};
    verify = 'Enable staff only test iar menu options';
    report['label'] = verify;
    verify = tango.REPORTING;
    report['category'] = verify;
    mike['iar_testing'] = report;
    report = {};
    verify = 'Enable to skip calling the API to skip submitting actual IAR reports';
    report['label'] = verify;
    verify = tango.REPORTING;
    report['category'] = verify;
    mike['iar_skip_api_report_submit'] = report;
    report = {};
    verify = "Only show application collections (e.g. in App Directory, App Launcher in text) that have the 'preview' active state. This disables application collections cache, too, so you can see collections updates immediately.";
    report['label'] = verify;
    verify = tango.APP_COLLECTIONS;
    report['category'] = verify;
    mike['only_show_preview_app_collections'] = report;
    report = {};
    verify = 'Disable application collections cache so that you can see updates to collections immediately.';
    report['label'] = verify;
    verify = tango.APP_COLLECTIONS;
    report['category'] = verify;
    mike['disable_app_collections_cache'] = report;
    var _closure1_slot5 = mike;
    report = {};
    var _closure1_slot6 = report;
    report = 5;
    report = golf[report];
    report = options.bind(entity)(report);
    verify = report.DeviceSettingsStore;
    report = function(argFoo) {
        tango = function() { // Original name: DevSettingsStore
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
        golf = 'allByCategory';
        report['key'] = golf;
        oscar = function(argFoo) { // Original name: value
            mike = argFoo;
            var _closure3_slot0 = mike;
            mike = global;
            tango = mike.Object;
            zulu = tango.entries;
            mike = _closure1_slot5;
            tango = zulu.bind(tango)(mike);
            zulu = tango.filter;
            mike = function(argFoo) {
                _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                    tango = argFoo;
                    mike = tango[Symbol.iterator];
                    tango = mike().next;
                    entity = tango().value;
                    entity = mike;
                    oscar = undefined;
                    zulu = entity === oscar;
                    entity = undefined;
                    if(zulu) { _fun00010_ip = 49; continue _fun00009 }
 24:
                    report = tango().value;
                    tango = mike;
                    tango = tango === oscar;
                    entity = undefined;
                    zulu = tango;
                    if(tango) { _fun00010_ip = 49; continue _fun00009 }
 43:
                    entity = report;
                    zulu = tango;
 49:
                    if(zulu) { _fun00010_ip = 55; continue _fun00009 }
 52:
                    mike.return();
 55:
                    mike = entity.category;
                    entity = _closure3_slot0;
                    entity = mike === entity;
                    return entity;
                }
            };
            zulu = zulu.bind(tango)(mike);
            mike = zulu.map;
            entity = function(argFoo) {
                _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                    report = argFoo;
                    entity = report[Symbol.iterator];
                    report = entity().next;
                    mike = report().value;
                    zulu = entity;
                    golf = undefined;
                    zulu = zulu === golf;
                    tango = undefined;
                    if(zulu) { _fun00012_ip = 27; continue _fun00011 }
 24:
                    tango = mike;
 27:
                    mike = undefined;
                    if(zulu) { _fun00012_ip = 57; continue _fun00011 }
 32:
                    oscar = report().value;
                    report = entity;
                    report = report === golf;
                    mike = undefined;
                    zulu = report;
                    if(report) { _fun00012_ip = 57; continue _fun00011 }
 51:
                    mike = oscar;
                    zulu = report;
 57:
                    if(zulu) { _fun00012_ip = 63; continue _fun00011 }
 60:
                    entity.return();
 63:
                    entity = new Array(3);
                    entity[0] = tango;
                    zulu = _closure1_slot6;
                    zulu = zulu[tango];
                    entity[1] = zulu;
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
    verify = report.bind(entity)(verify);
    report = 'DevToolsDevSettingsStore';
    verify['displayName'] = report;
    verify['persistKey'] = report;
    report = 6;
    report = golf[report];
    kilo = options.bind(entity)(report);
    report = {};
    oscar = function(argFoo) { // Original name: handleSet
        entity = argFoo;
        zulu = _closure1_slot6;
        mike = entity.toggle;
        entity = entity.value;
        zulu[mike] = entity;
        entity = undefined;
        return entity;
    };
    report['DEV_TOOLS_DEV_SETTING_SET'] = oscar;
    oscar = verify.prototype;
    oscar = Object.create(oscar, {constructor: {value: verify}});
    sizing = oscar;
    backup = report;
    report = new sizing[verify](kilo, backup, foxtrot);
    report = report instanceof Object ? report : oscar;
    oscar = 7;
    golf = golf[oscar];
    oscar = argBar;
    options = oscar.bind(entity)(golf);
    golf = options.fileFinishedImporting;
    oscar = 'modules/devtools/dev_settings/DevSettingsStore.tsx';
    oscar = golf.bind(options)(oscar);
    zulu['default'] = report;
    zulu['DevSettingsCategory'] = tango;
    zulu['toggles'] = mike;
    return entity;
})();