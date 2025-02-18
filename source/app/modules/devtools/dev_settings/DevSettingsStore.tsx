// app/modules/devtools/dev_settings/DevSettingsStore.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    option = argBaz;
    zuuluu = argFre;
    golfie = argPlu;
    entity = function(argFoo, argBar, argBaz) { // Original name: _callSuper
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            tangon = argFoo;
            oscard = argBaz;
            michal = _closure1_slot3;
            zuuluu = undefined;
            entity = argBar;
            verify = michal.bind(zuuluu)(entity);
            michal = _closure1_slot2;
            entity = _closure1_slot8;
            entity = entity.bind(zuuluu)();
            if(entity) { _fun00002_ip = 51; continue _fun00001 }
 38:
            entity = verify.apply;
            entity = entity.bind(verify)(tangon, oscard);
            _fun00002_ip = 92; continue _fun00001;
 51:
            golfie = global;
            option = golfie.Reflect;
            golfie = option.construct;
            if(oscard) { _fun00002_ip = 71; continue _fun00001 }
 67:
            oscard = new Array(0);
 71:
            report = _closure1_slot3;
            report = report.bind(zuuluu)(tangon);
            report = report.constructor;
            entity = golfie.bind(option)(verify, oscard, report);
 92:
            entity = michal.bind(zuuluu)(tangon, entity);
            return entity;
        }
    };
    var _closure1_slot7 = entity;
    entity = function() { // Original name: _isNativeReflectConstruct
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
 2: // try_start_0
            michal = global;
            zuuluu = michal.Boolean;
            zuuluu = zuuluu.prototype;
            tangon = zuuluu.valueOf;
            zuuluu = tangon.call;
            option = michal.Reflect;
            golfie = option.construct;
            oscard = michal.Boolean;
            report = new Array(0);
            michal = function() {
                entity = undefined;
                return entity;
            };
            michal = golfie.bind(option)(oscard, report, michal);
            michal = zuuluu.bind(tangon)(michal);
            michal = !michal;
            var _closure2_slot0 = michal;
 70: // try_end0
            _fun00004_ip = 74; continue _fun00003;
 72: // catch_target0
            CatchBlockStart(arg_register=1);
 74:
            michal = function() { // Original name: _isNativeReflectConstruct
                entity = _closure2_slot0;
                entity = !entity;
                entity = !entity;
                return entity;
            };
            _closure1_slot8 = michal;
            entity = undefined;
            entity = michal.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot8 = entity;
    entity = global;
    report = entity.Object;
    tangon = report.defineProperty;
    michal = {};
    entity = true;
    michal['value'] = entity;
    entity = '__esModule';
    entity = tangon.bind(report)(zuuluu, entity, michal);
    romeon = 0;
    michal = golfie[romeon];
    entity = undefined;
    michal = option.bind(entity)(michal);
    var _closure1_slot0 = michal;
    yankee = 1;
    michal = golfie[yankee];
    michal = option.bind(entity)(michal);
    var _closure1_slot1 = michal;
    offset = 2;
    michal = golfie[offset];
    michal = option.bind(entity)(michal);
    var _closure1_slot2 = michal;
    verify = 3;
    michal = golfie[verify];
    michal = option.bind(entity)(michal);
    var _closure1_slot3 = michal;
    report = 4;
    michal = golfie[report];
    michal = option.bind(entity)(michal);
    var _closure1_slot4 = michal;
    tangon = {};
    tangon['MESSAGING'] = romeon;
    michal = 'MESSAGING';
    tangon[romeon] = michal;
    tangon['OVERLAYS'] = yankee;
    michal = 'OVERLAYS';
    tangon[yankee] = michal;
    tangon['PREMIUM'] = offset;
    michal = 'PREMIUM';
    tangon[offset] = michal;
    tangon['REPORTING'] = verify;
    michal = 'REPORTING';
    tangon[verify] = michal;
    tangon['APP_COLLECTIONS'] = report;
    michal = 'APP_COLLECTIONS';
    tangon[report] = michal;
    michal = {};
    report = {};
    verify = 'Blur view overrides for designers to test with';
    report['label'] = verify;
    verify = tangon.OVERLAYS;
    report['category'] = verify;
    michal['visual_effect_view_overrides'] = report;
    report = {};
    verify = 'Force obscure blur effect on for message media and embeds';
    report['label'] = verify;
    verify = tangon.OVERLAYS;
    report['category'] = verify;
    michal['obscure_blur_effect_enabled'] = report;
    report = {};
    verify = 'Ignore pending scan on explicit media';
    report['label'] = verify;
    verify = tangon.OVERLAYS;
    report['category'] = verify;
    michal['explicit_media_redaction_ignore_pending_scan'] = report;
    report = {};
    verify = 'Uploads: Fail 50% of uploads with 500 status after a 1 second delay';
    report['label'] = verify;
    verify = tangon.MESSAGING;
    report['category'] = verify;
    michal['upload_fail_50'] = report;
    report = {};
    verify = 'Send: Fail with 500 status';
    report['label'] = verify;
    verify = tangon.MESSAGING;
    report['category'] = verify;
    michal['send_fail_100'] = report;
    report = {};
    verify = 'Enable all new premium roadblocks';
    report['label'] = verify;
    verify = tangon.PREMIUM;
    report['category'] = verify;
    michal['premium_roadblocks'] = report;
    report = {};
    verify = 'Enable staff only test iar menu options';
    report['label'] = verify;
    verify = tangon.REPORTING;
    report['category'] = verify;
    michal['iar_testing'] = report;
    report = {};
    verify = 'Enable to skip calling the API to skip submitting actual IAR reports';
    report['label'] = verify;
    verify = tangon.REPORTING;
    report['category'] = verify;
    michal['iar_skip_api_report_submit'] = report;
    report = {};
    verify = "Only show application collections (e.g. in App Directory, App Launcher in text) that have the 'preview' active state. This disables application collections cache, too, so you can see collections updates immediately.";
    report['label'] = verify;
    verify = tangon.APP_COLLECTIONS;
    report['category'] = verify;
    michal['only_show_preview_app_collections'] = report;
    report = {};
    verify = 'Disable application collections cache so that you can see updates to collections immediately.';
    report['label'] = verify;
    verify = tangon.APP_COLLECTIONS;
    report['category'] = verify;
    michal['disable_app_collections_cache'] = report;
    var _closure1_slot5 = michal;
    report = {};
    var _closure1_slot6 = report;
    report = 5;
    report = golfie[report];
    report = option.bind(entity)(report);
    verify = report.DeviceSettingsStore;
    report = function(argFoo) {
        tangon = function() { // Original name: DevSettingsStore
            report = this;
            tangon = undefined;
            entity = undefined;
            oscard = _closure1_slot0;
            zuuluu = _closure2_slot0;
            oscard = oscard.bind(tangon)(report, zuuluu);
            michal = _closure1_slot7;
            entity = arguments;
            entity = michal.bind(tangon)(report, zuuluu, entity);
            return entity;
        };
        var _closure2_slot0 = tangon;
        report = _closure1_slot4;
        zuuluu = undefined;
        michal = argFoo;
        michal = report.bind(zuuluu)(tangon, michal);
        michal = _closure1_slot1;
        report = {};
        entity = 'getUserAgnosticState';
        report['key'] = entity;
        entity = function() { // Original name: value
            entity = {};
            michal = _closure1_slot6;
            entity['toggleStates'] = michal;
            return entity;
        };
        report['value'] = entity;
        entity = new Array(6);
        entity[0] = report;
        report = {};
        golfie = 'initialize';
        report['key'] = golfie;
        golfie = function(argFoo) { // Original name: value
            _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                offset = argFoo;
                option = _closure1_slot5;
                entity = undefined;
                zuuluu = null;
                michal = undefined;
                for(tangon in option)
 24:
                {
 33:
                    foxtra = tangon;
                    romeon = zuuluu == offset;
                    yankee = undefined;
                    if(romeon) { _fun00006_ip = 70; continue _fun00005 }
 45:
                    backup = offset.toggleStates;
                    romeon = zuuluu == backup;
                    michal = backup;
                    yankee = undefined;
                    if(romeon) { _fun00006_ip = 70; continue _fun00005 }
 63:
                    yankee = backup[foxtra];
                    michal = backup;
 70:
                    romeon = zuuluu != yankee;
                    if(!romeon) { _fun00006_ip = 80; continue _fun00005 }
 77:
                    romeon = yankee;
 80:
                    yankee = _closure1_slot6;
                    yankee[foxtra] = romeon;
                    _fun00006_ip = 24; continue _fun00005;
                }
 90:
                return entity;
            }
        };
        report['value'] = golfie;
        entity[1] = report;
        report = {};
        golfie = 'get';
        report['key'] = golfie;
        golfie = function(argFoo) { // Original name: value
            _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                michal = _closure1_slot6;
                entity = argFoo;
                michal = michal[entity];
                entity = null;
                entity = entity != michal;
                if(!entity) { _fun00008_ip = 26; continue _fun00007 }
 23:
                entity = michal;
 26:
                return entity;
            }
        };
        report['value'] = golfie;
        entity[2] = report;
        report = {};
        golfie = 'set';
        report['key'] = golfie;
        golfie = function(argFoo, argBar) { // Original name: value
            entity = argBar;
            zuuluu = _closure1_slot6;
            michal = argFoo;
            zuuluu[michal] = entity;
            return entity;
        };
        report['value'] = golfie;
        entity[3] = report;
        report = {};
        golfie = 'all';
        report['key'] = golfie;
        golfie = function() { // Original name: value
            entity = _closure1_slot6;
            return entity;
        };
        report['value'] = golfie;
        entity[4] = report;
        report = {};
        golfie = 'allByCategory';
        report['key'] = golfie;
        oscard = function(argFoo) { // Original name: value
            michal = argFoo;
            var _closure3_slot0 = michal;
            michal = global;
            tangon = michal.Object;
            zuuluu = tangon.entries;
            michal = _closure1_slot5;
            tangon = zuuluu.bind(tangon)(michal);
            zuuluu = tangon.filter;
            michal = function(argFoo) {
                _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                    tangon = argFoo;
                    michal = tangon[Symbol.iterator];
                    tangon = michal().next;
                    entity = tangon().value;
                    entity = michal;
                    oscard = undefined;
                    zuuluu = entity === oscard;
                    entity = undefined;
                    if(zuuluu) { _fun00010_ip = 49; continue _fun00009 }
 24:
                    report = tangon().value;
                    tangon = michal;
                    tangon = tangon === oscard;
                    entity = undefined;
                    zuuluu = tangon;
                    if(tangon) { _fun00010_ip = 49; continue _fun00009 }
 43:
                    entity = report;
                    zuuluu = tangon;
 49:
                    if(zuuluu) { _fun00010_ip = 55; continue _fun00009 }
 52:
                    michal.return();
 55:
                    michal = entity.category;
                    entity = _closure3_slot0;
                    entity = michal === entity;
                    return entity;
                }
            };
            zuuluu = zuuluu.bind(tangon)(michal);
            michal = zuuluu.map;
            entity = function(argFoo) {
                _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                    report = argFoo;
                    entity = report[Symbol.iterator];
                    report = entity().next;
                    michal = report().value;
                    zuuluu = entity;
                    golfie = undefined;
                    zuuluu = zuuluu === golfie;
                    tangon = undefined;
                    if(zuuluu) { _fun00012_ip = 27; continue _fun00011 }
 24:
                    tangon = michal;
 27:
                    michal = undefined;
                    if(zuuluu) { _fun00012_ip = 57; continue _fun00011 }
 32:
                    oscard = report().value;
                    report = entity;
                    report = report === golfie;
                    michal = undefined;
                    zuuluu = report;
                    if(report) { _fun00012_ip = 57; continue _fun00011 }
 51:
                    michal = oscard;
                    zuuluu = report;
 57:
                    if(zuuluu) { _fun00012_ip = 63; continue _fun00011 }
 60:
                    entity.return();
 63:
                    entity = new Array(3);
                    entity[0] = tangon;
                    zuuluu = _closure1_slot6;
                    zuuluu = zuuluu[tangon];
                    entity[1] = zuuluu;
                    entity[2] = michal;
                    return entity;
                }
            };
            entity = michal.bind(zuuluu)(entity);
            return entity;
        };
        report['value'] = oscard;
        entity[5] = report;
        entity = michal.bind(zuuluu)(tangon, entity);
        return entity;
    };
    verify = report.bind(entity)(verify);
    report = 'DevToolsDevSettingsStore';
    verify['displayName'] = report;
    verify['persistKey'] = report;
    report = 6;
    report = golfie[report];
    kiloes = option.bind(entity)(report);
    report = {};
    oscard = function(argFoo) { // Original name: handleSet
        entity = argFoo;
        zuuluu = _closure1_slot6;
        michal = entity.toggle;
        entity = entity.value;
        zuuluu[michal] = entity;
        entity = undefined;
        return entity;
    };
    report['DEV_TOOLS_DEV_SETTING_SET'] = oscard;
    oscard = verify.prototype;
    oscard = Object.create(oscard, {constructor: {value: verify}});
    sizing = oscard;
    backup = report;
    report = new sizing[verify](kiloes, backup, foxtra);
    report = report instanceof Object ? report : oscard;
    oscard = 7;
    golfie = golfie[oscard];
    oscard = argBar;
    option = oscard.bind(entity)(golfie);
    golfie = option.fileFinishedImporting;
    oscard = 'modules/devtools/dev_settings/DevSettingsStore.tsx';
    oscard = golfie.bind(option)(oscard);
    zuuluu['default'] = report;
    zuuluu['DevSettingsCategory'] = tangon;
    zuuluu['toggles'] = michal;
    return entity;
})();