// app/modules/favorites/FavoriteStore.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    tango = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscar;
    entity = function(argFoo, argBar, argBaz) { // Original name: _callSuper
        _fun37745: for(var _fun37745_ip = 0; ; ) switch(_fun37745_ip) {
 0:
            tango = argFoo;
            oscar = argBaz;
            mike = _closure1_slot5;
            zulu = undefined;
            entity = argBar;
            verify = mike.bind(zulu)(entity);
            mike = _closure1_slot4;
            entity = _closure1_slot14;
            entity = entity.bind(zulu)();
            if(entity) { _fun37745_ip = 51; continue _fun37745 }
 38:
            entity = verify.apply;
            entity = entity.bind(verify)(tango, oscar);
            _fun37745_ip = 92; continue _fun37745;
 51:
            golf = global;
            options = golf.Reflect;
            golf = options.construct;
            if(oscar) { _fun37745_ip = 71; continue _fun37745 }
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
    var _closure1_slot13 = entity;
    entity = function() { // Original name: _isNativeReflectConstruct
        _fun37746: for(var _fun37746_ip = 0; ; ) switch(_fun37746_ip) {
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
            _fun37746_ip = 74; continue _fun37746;
 72: // catch_target0
            CatchBlockStart(arg_register=1);
 74:
            mike = function() { // Original name: _isNativeReflectConstruct
                entity = _closure2_slot0;
                entity = !entity;
                entity = !entity;
                return entity;
            };
            _closure1_slot14 = mike;
            entity = undefined;
            entity = mike.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot14 = entity;
    entity = function() { // Original name: initializeFromUserSettings
        _fun37749: for(var _fun37749_ip = 0; ; ) switch(_fun37749_ip) {
 0:
            entity = _closure1_slot7;
            entity = entity.settings;
            mike = entity.favorites;
            offset = null;
            tango = offset == mike;
            entity = undefined;
            zulu = undefined;
            if(tango) { _fun37749_ip = 38; continue _fun37749 }
 32:
            zulu = mike.muted;
 38:
            mike = offset != zulu;
            if(!mike) { _fun37749_ip = 48; continue _fun37749 }
 45:
            mike = zulu;
 48:
            _closure1_slot12 = mike;
            mike = {};
            _closure1_slot11 = mike;
            mike = _closure1_slot7;
            mike = mike.settings;
            mike = mike.favorites;
            zulu = offset == mike;
            verify = undefined;
            if(zulu) { _fun37749_ip = 89; continue _fun37749 }
 83:
            verify = mike.favoriteChannels;
 89:
            if(!(offset != verify)) { _fun37749_ip = 213; continue _fun37749 }
 93:
            golf = verify;
            zulu = '0';
            mike = '';
            for(tango in golf)
 114:
            {
 123:
                backup = tango;
                sizing = verify[backup];
                foxtrot = _closure1_slot11;
                romeo = {};
                romeo['id'] = backup;
                output = sizing.nickname;
                kilo = null;
                if(!(mike !== output)) { _fun37749_ip = 158; continue _fun37749 }
 152:
                kilo = sizing.nickname;
 158:
                romeo['nickname'] = kilo;
                kilo = sizing.type;
                romeo['type'] = kilo;
                kilo = sizing.position;
                romeo['order'] = kilo;
                output = sizing.parentId;
                kilo = null;
                if(!(zulu !== output)) { _fun37749_ip = 200; continue _fun37749 }
 194:
                kilo = sizing.parentId;
 200:
                romeo['parentId'] = kilo;
                foxtrot[backup] = romeo;
                _fun37749_ip = 114; continue _fun37749;
            }
 211:
            return entity;
 213:
            entity = false;
            return entity;
        }
    };
    var _closure1_slot15 = entity;
    entity = global;
    verify = entity.Object;
    options = verify.defineProperty;
    golf = {};
    entity = true;
    golf['value'] = entity;
    entity = '__esModule';
    entity = options.bind(verify)(zulu, entity, golf);
    entity = 0;
    golf = oscar[entity];
    entity = undefined;
    golf = tango.bind(entity)(golf);
    var _closure1_slot2 = golf;
    golf = 1;
    golf = oscar[golf];
    golf = tango.bind(entity)(golf);
    var _closure1_slot3 = golf;
    golf = 2;
    golf = oscar[golf];
    golf = tango.bind(entity)(golf);
    var _closure1_slot4 = golf;
    golf = 3;
    golf = oscar[golf];
    golf = tango.bind(entity)(golf);
    var _closure1_slot5 = golf;
    golf = 4;
    golf = oscar[golf];
    golf = tango.bind(entity)(golf);
    var _closure1_slot6 = golf;
    golf = 5;
    golf = oscar[golf];
    golf = tango.bind(entity)(golf);
    var _closure1_slot7 = golf;
    golf = 6;
    golf = oscar[golf];
    golf = report.bind(entity)(golf);
    golf = golf.createChannelRecord;
    var _closure1_slot8 = golf;
    golf = 7;
    golf = oscar[golf];
    golf = report.bind(entity)(golf);
    options = golf.ChannelTypes;
    var _closure1_slot9 = options;
    golf = golf.FAVORITES;
    var _closure1_slot10 = golf;
    golf = {};
    var _closure1_slot11 = golf;
    golf = false;
    var _closure1_slot12 = golf;
    golf = 9;
    golf = oscar[golf];
    golf = tango.bind(entity)(golf);
    golf = golf.Store;
    mike = function(argFoo) {
        tango = function() { // Original name: FavoriteStore
            report = this;
            tango = undefined;
            entity = undefined;
            oscar = _closure1_slot2;
            zulu = _closure2_slot0;
            oscar = oscar.bind(tango)(report, zulu);
            mike = _closure1_slot13;
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
        entity = function() { // Original name: value
            report = this;
            zulu = report.waitFor;
            entity = _closure1_slot7;
            entity = zulu.bind(report)(entity);
            tango = _closure1_slot15;
            entity = undefined;
            zulu = tango.bind(entity)();
            zulu = report.syncWith;
            oscar = _closure1_slot7;
            mike = new Array(1);
            mike[0] = oscar;
            mike = zulu.bind(report)(mike, tango);
            return entity;
        };
        report['value'] = entity;
        entity = new Array(7);
        entity[0] = report;
        report = {};
        golf = 'getFavoriteChannels';
        report['key'] = golf;
        golf = function() { // Original name: value
            entity = _closure1_slot11;
            return entity;
        };
        report['value'] = golf;
        entity[1] = report;
        report = {};
        golf = 'favoriteServerMuted';
        report['key'] = golf;
        golf = function() { // Original name: get
            entity = _closure1_slot12;
            return entity;
        };
        report['get'] = golf;
        entity[2] = report;
        report = {};
        golf = 'isFavorite';
        report['key'] = golf;
        golf = function(argFoo) { // Original name: value
            _fun37755: for(var _fun37755_ip = 0; ; ) switch(_fun37755_ip) {
 0:
                tango = argFoo;
                zulu = null;
                entity = zulu != tango;
                if(!entity) { _fun37755_ip = 27; continue _fun37755 }
 12:
                mike = _closure1_slot11;
                mike = mike[tango];
                entity = zulu != mike;
 27:
                return entity;
            }
        };
        report['value'] = golf;
        entity[3] = report;
        report = {};
        golf = 'getFavorite';
        report['key'] = golf;
        golf = function(argFoo) { // Original name: value
            _fun37756: for(var _fun37756_ip = 0; ; ) switch(_fun37756_ip) {
 0:
                mike = argFoo;
                entity = null;
                if(!(entity == mike)) { _fun37756_ip = 13; continue _fun37756 }
 9:
                entity = undefined;
                return entity;
 13:
                entity = _closure1_slot11;
                entity = entity[mike];
                return entity;
            }
        };
        report['value'] = golf;
        entity[4] = report;
        report = {};
        golf = 'getCategoryRecord';
        report['key'] = golf;
        golf = function(argFoo) { // Original name: value
            _fun37757: for(var _fun37757_ip = 0; ; ) switch(_fun37757_ip) {
 0:
                zulu = argFoo;
                entity = _closure1_slot11;
                mike = zulu in entity;
                golf = null;
                entity = null;
                if(!mike) { _fun37757_ip = 161; continue _fun37757 }
 24:
                mike = _closure1_slot11;
                mike = mike[zulu];
                oscar = mike.type;
                options = _closure1_slot0;
                tango = _closure1_slot1;
                mike = 8;
                mike = tango[mike];
                tango = undefined;
                mike = options.bind(tango)(mike);
                mike = mike.FavoriteChannelType;
                mike = mike.CATEGORY;
                entity = null;
                if(!(oscar === mike)) { _fun37757_ip = 161; continue _fun37757 }
 77:
                mike = _closure1_slot11;
                oscar = mike[zulu];
                zulu = _closure1_slot8;
                mike = {};
                options = oscar.id;
                mike['id'] = options;
                options = oscar.nickname;
                verify = golf != options;
                golf = '';
                if(!verify) { _fun37757_ip = 120; continue _fun37757 }
 117:
                golf = options;
 120:
                mike['name'] = golf;
                golf = _closure1_slot9;
                golf = golf.GUILD_CATEGORY;
                mike['type'] = golf;
                oscar = oscar.order;
                mike['position'] = oscar;
                report = _closure1_slot10;
                mike['guild_id'] = report;
                entity = zulu.bind(tango)(mike);
 161:
                return entity;
            }
        };
        report['value'] = golf;
        entity[5] = report;
        report = {};
        golf = 'getNickname';
        report['key'] = golf;
        oscar = function(argFoo) { // Original name: value
            _fun37758: for(var _fun37758_ip = 0; ; ) switch(_fun37758_ip) {
 0:
                zulu = this;
                mike = zulu.getFavorite;
                entity = argFoo;
                tango = mike.bind(zulu)(entity);
                zulu = null;
                report = zulu == tango;
                mike = undefined;
                if(report) { _fun37758_ip = 36; continue _fun37758 }
 30:
                mike = tango.nickname;
 36:
                zulu = zulu != mike;
                entity = undefined;
                if(!zulu) { _fun37758_ip = 48; continue _fun37758 }
 45:
                entity = mike;
 48:
                return entity;
            }
        };
        report['value'] = oscar;
        entity[6] = report;
        entity = mike.bind(zulu)(tango, entity);
        return entity;
    };
    options = mike.bind(entity)(golf);
    mike = 'FavoriteStore';
    options['displayName'] = mike;
    mike = 10;
    mike = oscar[mike];
    romeo = tango.bind(entity)(mike);
    mike = options.prototype;
    tango = Object.create(mike, {constructor: {value: options}});
    yankee = {};
    foxtrot = tango;
    mike = new foxtrot[options](romeo, yankee, offset);
    mike = mike instanceof Object ? mike : tango;
    tango = 11;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/favorites/FavoriteStore.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();