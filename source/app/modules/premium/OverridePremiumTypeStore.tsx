// app/modules/premium/OverridePremiumTypeStore.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscar;
    entity = function(argFoo, argBar, argBaz) { // Original name: _callSuper
        _fun37026: for(var _fun37026_ip = 0; ; ) switch(_fun37026_ip) {
 0:
            tango = argFoo;
            oscar = argBaz;
            mike = _closure1_slot5;
            zulu = undefined;
            entity = argBar;
            verify = mike.bind(zulu)(entity);
            mike = _closure1_slot4;
            entity = _closure1_slot11;
            entity = entity.bind(zulu)();
            if(entity) { _fun37026_ip = 51; continue _fun37026 }
 38:
            entity = verify.apply;
            entity = entity.bind(verify)(tango, oscar);
            _fun37026_ip = 92; continue _fun37026;
 51:
            golf = global;
            options = golf.Reflect;
            golf = options.construct;
            if(oscar) { _fun37026_ip = 71; continue _fun37026 }
 67:
            oscar = new Array(0);
 71:
            report = _closure1_slot5;
            report = report.bind(zulu)(tango);
            report = report.constructor;
            entity = golf.bind(options)(verify, oscar, report);
 92:
            entity = mike.bind(zulu)(tango, entity);
            return entity;
        }
    };
    var _closure1_slot10 = entity;
    entity = function() { // Original name: _isNativeReflectConstruct
        _fun37027: for(var _fun37027_ip = 0; ; ) switch(_fun37027_ip) {
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
            _fun37027_ip = 74; continue _fun37027;
 72: // catch_target0
            CatchBlockStart(arg_register=1);
 74:
            mike = function() { // Original name: _isNativeReflectConstruct
                entity = _closure2_slot0;
                entity = !entity;
                entity = !entity;
                return entity;
            };
            _closure1_slot11 = mike;
            entity = undefined;
            entity = mike.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot11 = entity;
    tango = function(argFoo) { // Original name: setPremiumTypeActual
        entity = argFoo;
        mike = entity.user;
        zulu = _closure1_slot9;
        report = _closure1_slot0;
        tango = _closure1_slot1;
        entity = 6;
        tango = tango[entity];
        entity = undefined;
        report = report.bind(entity)(tango);
        tango = report.getPremiumTypeFromRawValue;
        mike = mike.premium_type;
        mike = tango.bind(report)(mike);
        zulu['premiumTypeActual'] = mike;
        return entity;
    };
    entity = global;
    offset = entity.Object;
    options = offset.defineProperty;
    mike = {};
    entity = true;
    mike['value'] = entity;
    entity = '__esModule';
    entity = options.bind(offset)(zulu, entity, mike);
    entity = 0;
    mike = oscar[entity];
    entity = undefined;
    mike = golf.bind(entity)(mike);
    var _closure1_slot2 = mike;
    mike = 1;
    mike = oscar[mike];
    mike = golf.bind(entity)(mike);
    var _closure1_slot3 = mike;
    mike = 2;
    mike = oscar[mike];
    mike = golf.bind(entity)(mike);
    var _closure1_slot4 = mike;
    mike = 3;
    mike = oscar[mike];
    mike = golf.bind(entity)(mike);
    var _closure1_slot5 = mike;
    mike = 4;
    mike = oscar[mike];
    mike = golf.bind(entity)(mike);
    var _closure1_slot6 = mike;
    mike = 5;
    mike = oscar[mike];
    mike = report.bind(entity)(mike);
    options = mike.UNSELECTED_CREATED_AT_DATE;
    var _closure1_slot7 = options;
    offset = mike.UNSELECTED_PREMIUM_TYPE_OVERRIDE;
    var _closure1_slot8 = offset;
    mike = {};
    mike['premiumTypeOverride'] = offset;
    mike['premiumTypeActual'] = offset;
    mike['createdAtOverride'] = options;
    var _closure1_slot9 = mike;
    mike = 7;
    mike = oscar[mike];
    mike = golf.bind(entity)(mike);
    options = mike.PersistedStore;
    mike = function(argFoo) {
        tango = function() { // Original name: OverridePremiumTypeStore
            report = this;
            tango = undefined;
            entity = undefined;
            oscar = _closure1_slot2;
            zulu = _closure2_slot0;
            oscar = oscar.bind(tango)(report, zulu);
            mike = _closure1_slot10;
            entity = arguments;
            entity = mike.bind(tango)(report, zulu, entity);
            return entity;
        };
        var _closure2_slot0 = tango;
        report = _closure1_slot6;
        zulu = undefined;
        mike = argFoo;
        mike = report.bind(zulu)(tango, mike);
        mike = _closure1_slot3;
        report = {};
        entity = 'initialize';
        report['key'] = entity;
        entity = function(argFoo) { // Original name: value
            _fun37033: for(var _fun37033_ip = 0; ; ) switch(_fun37033_ip) {
 0:
                mike = argFoo;
                tango = null;
                if(!(tango == mike)) { _fun37033_ip = 44; continue _fun37033 }
 9:
                report = _closure1_slot9;
                zulu = _closure1_slot8;
                report['premiumTypeOverride'] = zulu;
                zulu = _closure1_slot9;
                entity = _closure1_slot7;
                zulu['createdAtOverride'] = entity;
                entity = undefined;
                return entity;
 44:
                oscar = _closure1_slot9;
                golf = tango == mike;
                entity = undefined;
                if(golf) { _fun37033_ip = 66; continue _fun37033 }
 60:
                entity = mike.premiumTypeActual;
 66:
                oscar['premiumTypeActual'] = entity;
                entity = _closure1_slot9;
                oscar = tango == mike;
                report = undefined;
                if(oscar) { _fun37033_ip = 91; continue _fun37033 }
 85:
                report = mike.premiumTypeOverride;
 91:
                entity['premiumTypeOverride'] = report;
                entity = mike.createdAtOverride;
                if(!(tango == entity)) { _fun37033_ip = 123; continue _fun37033 }
 107:
                tango = _closure1_slot9;
                entity = _closure1_slot7;
                tango['createdAtOverride'] = entity;
                _fun37033_ip = 170; continue _fun37033;
 123:
                zulu = _closure1_slot9;
                tango = global;
                report = tango.Date;
                options = mike.createdAtOverride;
                tango = report.prototype;
                tango = Object.create(tango, {constructor: {value: report}});
                verify = tango;
                mike = new verify[report](options, golf);
                mike = mike instanceof Object ? mike : tango;
                zulu['createdAtOverride'] = mike;
                entity = mike;
 170:
                entity = undefined;
                return entity;
            }
        };
        report['value'] = entity;
        entity = new Array(6);
        entity[0] = report;
        report = {};
        golf = 'getPremiumTypeOverride';
        report['key'] = golf;
        golf = function() { // Original name: value
            entity = _closure1_slot9;
            entity = entity.premiumTypeOverride;
            return entity;
        };
        report['value'] = golf;
        entity[1] = report;
        report = {};
        golf = 'getPremiumTypeActual';
        report['key'] = golf;
        golf = function() { // Original name: value
            entity = _closure1_slot9;
            entity = entity.premiumTypeActual;
            return entity;
        };
        report['value'] = golf;
        entity[2] = report;
        report = {};
        golf = 'getCreatedAtOverride';
        report['key'] = golf;
        golf = function() { // Original name: value
            entity = _closure1_slot9;
            entity = entity.createdAtOverride;
            return entity;
        };
        report['value'] = golf;
        entity[3] = report;
        report = {};
        golf = 'getState';
        report['key'] = golf;
        golf = function() { // Original name: value
            entity = _closure1_slot9;
            return entity;
        };
        report['value'] = golf;
        entity[4] = report;
        report = {};
        golf = 'premiumType';
        report['key'] = golf;
        oscar = function() { // Original name: get
            entity = _closure1_slot9;
            entity = entity.premiumTypeOverride;
            return entity;
        };
        report['get'] = oscar;
        entity[5] = report;
        entity = mike.bind(zulu)(tango, entity);
        return entity;
    };
    options = mike.bind(entity)(options);
    mike = 'OverridePremiumTypeStore';
    options['displayName'] = mike;
    options['persistKey'] = mike;
    mike = new Array(1);
    offset = function(argFoo) {
        _fun37039: for(var _fun37039_ip = 0; ; ) switch(_fun37039_ip) {
 0:
            mike = argFoo;
            tango = null;
            report = tango == mike;
            entity = undefined;
            zulu = undefined;
            if(report) { _fun37039_ip = 22; continue _fun37039 }
 16:
            zulu = mike.createdAtOverride;
 22:
            if(!(tango != zulu)) { _fun37039_ip = 28; continue _fun37039 }
 26:
            return entity;
 28:
            entity = {};
            golf = entity;
            oscar = mike;
            mike = copyDataProperties(golf, oscar);
            zulu = _closure1_slot7;
            mike = 'createdAtOverride';
            entity[mike] = zulu;
            return entity;
        }
    };
    mike[0] = offset;
    options['migrations'] = mike;
    mike = 8;
    mike = oscar[mike];
    backup = golf.bind(entity)(mike);
    mike = {};
    offset = function(argFoo) { // Original name: setPremiumTypeOverride
        entity = argFoo;
        mike = entity.premiumType;
        entity = _closure1_slot9;
        entity['premiumTypeOverride'] = mike;
        entity = undefined;
        return entity;
    };
    mike['SET_PREMIUM_TYPE_OVERRIDE'] = offset;
    verify = function(argFoo) { // Original name: setCreatedAtOverride
        entity = argFoo;
        mike = entity.createdAt;
        entity = _closure1_slot9;
        entity['createdAtOverride'] = mike;
        entity = undefined;
        return entity;
    };
    mike['SET_CREATED_AT_OVERRIDE'] = verify;
    mike['CURRENT_USER_UPDATE'] = tango;
    mike['CONNECTION_OPEN'] = tango;
    tango = options.prototype;
    tango = Object.create(tango, {constructor: {value: options}});
    kilo = tango;
    foxtrot = mike;
    mike = new kilo[options](backup, foxtrot, romeo);
    mike = mike instanceof Object ? mike : tango;
    tango = 9;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/premium/OverridePremiumTypeStore.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();