// app/stores/SelectedGuildStore.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscar;
    entity = function(argFoo, argBar, argBaz) { // Original name: _callSuper
        _fun48827: for(var _fun48827_ip = 0; ; ) switch(_fun48827_ip) {
 0:
            tango = argFoo;
            oscar = argBaz;
            mike = _closure1_slot5;
            zulu = undefined;
            entity = argBar;
            verify = mike.bind(zulu)(entity);
            mike = _closure1_slot4;
            entity = _closure1_slot16;
            entity = entity.bind(zulu)();
            if(entity) { _fun48827_ip = 51; continue _fun48827 }
 38:
            entity = verify.apply;
            entity = entity.bind(verify)(tango, oscar);
            _fun48827_ip = 92; continue _fun48827;
 51:
            golf = global;
            options = golf.Reflect;
            golf = options.construct;
            if(oscar) { _fun48827_ip = 71; continue _fun48827 }
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
    var _closure1_slot15 = entity;
    entity = function() { // Original name: _isNativeReflectConstruct
        _fun48828: for(var _fun48828_ip = 0; ; ) switch(_fun48828_ip) {
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
            _fun48828_ip = 74; continue _fun48828;
 72: // catch_target0
            CatchBlockStart(arg_register=1);
 74:
            mike = function() { // Original name: _isNativeReflectConstruct
                entity = _closure2_slot0;
                entity = !entity;
                entity = !entity;
                return entity;
            };
            _closure1_slot16 = mike;
            entity = undefined;
            entity = mike.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot16 = entity;
    verify = function() { // Original name: handleConnectionOpen
        _fun48831: for(var _fun48831_ip = 0; ; ) switch(_fun48831_ip) {
 0:
            zulu = _closure1_slot12;
            mike = null;
            zulu = mike != zulu;
            if(!zulu) { _fun48831_ip = 38; continue _fun48831 }
 16:
            oscar = _closure1_slot10;
            report = oscar.getGuild;
            tango = _closure1_slot12;
            tango = report.bind(oscar)(tango);
            zulu = mike == tango;
 38:
            if(!zulu) { _fun48831_ip = 64; continue _fun48831 }
 41:
            oscar = _closure1_slot7;
            report = oscar.getRequest;
            tango = _closure1_slot12;
            tango = report.bind(oscar)(tango);
            zulu = mike == tango;
 64:
            if(!zulu) { _fun48831_ip = 71; continue _fun48831 }
 67:
            _closure1_slot12 = mike;
 71:
            zulu = _closure1_slot13;
            zulu = mike != zulu;
            if(!zulu) { _fun48831_ip = 104; continue _fun48831 }
 82:
            oscar = _closure1_slot10;
            report = oscar.getGuild;
            tango = _closure1_slot13;
            tango = report.bind(oscar)(tango);
            zulu = mike == tango;
 104:
            if(!zulu) { _fun48831_ip = 130; continue _fun48831 }
 107:
            oscar = _closure1_slot7;
            report = oscar.getRequest;
            tango = _closure1_slot13;
            tango = report.bind(oscar)(tango);
            zulu = mike == tango;
 130:
            if(!zulu) { _fun48831_ip = 137; continue _fun48831 }
 133:
            _closure1_slot13 = mike;
 137:
            zulu = _closure1_slot18;
            mike = _closure1_slot12;
            entity = undefined;
            mike = zulu.bind(entity)(mike);
            return entity;
        }
    };
    var _closure1_slot17 = verify;
    entity = function(argFoo) { // Original name: updateLastSelectedGuildMillis
        _fun48832: for(var _fun48832_ip = 0; ; ) switch(_fun48832_ip) {
 0:
            zulu = argFoo;
            entity = null;
            if(!(entity != zulu)) { _fun48832_ip = 37; continue _fun48832 }
 9:
            mike = _closure1_slot14;
            entity = global;
            tango = entity.Date;
            entity = tango.now;
            entity = entity.bind(tango)();
            mike[zulu] = entity;
 37:
            entity = undefined;
            return entity;
        }
    };
    var _closure1_slot18 = entity;
    entity = function(argFoo) { // Original name: handleGuildRemove
        _fun48833: for(var _fun48833_ip = 0; ; ) switch(_fun48833_ip) {
 0:
            tango = argFoo;
            var _closure2_slot0 = tango;
            entity = _closure1_slot14;
            entity = delete entity[tango];
            zulu = _closure1_slot13;
            entity = false;
            if(!(zulu === tango)) { _fun48833_ip = 38; continue _fun48833 }
 30:
            zulu = null;
            _closure1_slot13 = zulu;
            entity = true;
 38:
            zulu = _closure1_slot12;
            if(!(zulu === tango)) { _fun48833_ip = 217; continue _fun48833 }
 49:
            zulu = global;
            oscar = zulu.Object;
            tango = oscar.values;
            golf = _closure1_slot10;
            zulu = golf.getGuilds;
            zulu = zulu.bind(golf)();
            tango = tango.bind(oscar)(zulu);
            zulu = tango.find;
            mike = function(argFoo) {
                entity = argFoo;
                mike = entity.id;
                entity = _closure2_slot0;
                entity = mike !== entity;
                return entity;
            };
            mike = zulu.bind(tango)(mike);
            zulu = null;
            if(!(zulu == mike)) { _fun48833_ip = 153; continue _fun48833 }
 102:
            _closure1_slot12 = zulu;
            oscar = _closure1_slot0;
            tango = _closure1_slot1;
            zulu = 10;
            tango = tango[zulu];
            zulu = undefined;
            oscar = oscar.bind(zulu)(tango);
            tango = oscar.replaceWith;
            zulu = _closure1_slot11;
            zulu = zulu.ME;
            zulu = tango.bind(oscar)(zulu);
            entity = true;
            _fun48833_ip = 217; continue _fun48833;
 153:
            zulu = mike.id;
            _closure1_slot12 = zulu;
            oscar = _closure1_slot0;
            tango = _closure1_slot1;
            zulu = 10;
            tango = tango[zulu];
            zulu = undefined;
            tango = oscar.bind(zulu)(tango);
            zulu = tango.replaceWith;
            oscar = _closure1_slot11;
            report = oscar.CHANNEL;
            mike = mike.id;
            mike = report.bind(oscar)(mike);
            mike = zulu.bind(tango)(mike);
            entity = true;
 217:
            return entity;
        }
    };
    var _closure1_slot19 = entity;
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
    mike = golf.bind(entity)(mike);
    var _closure1_slot7 = mike;
    mike = 6;
    mike = oscar[mike];
    mike = golf.bind(entity)(mike);
    var _closure1_slot8 = mike;
    mike = 7;
    mike = oscar[mike];
    mike = golf.bind(entity)(mike);
    var _closure1_slot9 = mike;
    mike = 8;
    mike = oscar[mike];
    mike = golf.bind(entity)(mike);
    var _closure1_slot10 = mike;
    mike = 9;
    mike = oscar[mike];
    mike = report.bind(entity)(mike);
    mike = mike.Routes;
    var _closure1_slot11 = mike;
    mike = null;
    var _closure1_slot12 = mike;
    var _closure1_slot13 = mike;
    mike = {};
    var _closure1_slot14 = mike;
    mike = 13;
    mike = oscar[mike];
    mike = golf.bind(entity)(mike);
    options = mike.PersistedStore;
    mike = function(argFoo) {
        tango = function() { // Original name: SelectedGuildStore
            report = this;
            tango = undefined;
            entity = undefined;
            oscar = _closure1_slot2;
            zulu = _closure2_slot0;
            oscar = oscar.bind(tango)(report, zulu);
            mike = _closure1_slot15;
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
            _fun48837: for(var _fun48837_ip = 0; ; ) switch(_fun48837_ip) {
 0:
                mike = argFoo;
                golf = this;
                zulu = golf.mustEmitChanges;
                entity = function(argFoo) {
                    entity = argFoo;
                    mike = entity.type;
                    entity = 'CONNECTION_OPEN';
                    entity = entity !== mike;
                    return entity;
                };
                entity = zulu.bind(golf)(entity);
                oscar = golf.waitFor;
                report = _closure1_slot10;
                tango = _closure1_slot8;
                entity = _closure1_slot9;
                entity = oscar.bind(golf)(report, tango, entity);
                tango = null;
                oscar = tango == mike;
                entity = undefined;
                report = undefined;
                if(oscar) { _fun48837_ip = 71; continue _fun48837 }
 65:
                report = mike.selectedGuildTimestampMillis;
 71:
                if(!(tango == report)) { _fun48837_ip = 77; continue _fun48837 }
 75:
                report = {};
 77:
                _closure1_slot14 = report;
                report = tango == mike;
                oscar = undefined;
                if(report) { _fun48837_ip = 96; continue _fun48837 }
 90:
                oscar = mike.selectedGuildId;
 96:
                golf = tango != oscar;
                report = null;
                if(!golf) { _fun48837_ip = 108; continue _fun48837 }
 105:
                report = oscar;
 108:
                _closure1_slot12 = report;
                oscar = tango == mike;
                report = undefined;
                if(oscar) { _fun48837_ip = 127; continue _fun48837 }
 121:
                report = mike.lastSelectedGuildId;
 127:
                oscar = tango != report;
                mike = null;
                if(!oscar) { _fun48837_ip = 139; continue _fun48837 }
 136:
                mike = report;
 139:
                _closure1_slot13 = mike;
                mike = _closure1_slot9;
                golf = mike.lastNonVoiceRoute;
                yankee = _closure1_slot0;
                romeo = _closure1_slot1;
                mike = 11;
                mike = romeo[mike];
                oscar = yankee.bind(entity)(mike);
                report = oscar.matchPath;
                mike = {};
                offset = _closure1_slot11;
                verify = offset.CHANNEL;
                options = 12;
                options = romeo[options];
                options = yankee.bind(entity)(options);
                yankee = options.RouteParam;
                options = yankee.guildId;
                options = options.bind(yankee)();
                options = verify.bind(offset)(options);
                mike['path'] = options;
                report = report.bind(oscar)(golf, mike);
                oscar = tango == report;
                mike = undefined;
                if(oscar) { _fun48837_ip = 263; continue _fun48837 }
 243:
                report = report.params;
                oscar = tango == report;
                mike = undefined;
                if(oscar) { _fun48837_ip = 263; continue _fun48837 }
 258:
                mike = report.guildId;
 263:
                tango = tango != mike;
                if(!tango) { _fun48837_ip = 278; continue _fun48837 }
 270:
                report = _closure1_slot12;
                tango = mike !== report;
 278:
                if(!tango) { _fun48837_ip = 285; continue _fun48837 }
 281:
                _closure1_slot12 = mike;
 285:
                return entity;
            }
        };
        report['value'] = entity;
        entity = new Array(5);
        entity[0] = report;
        report = {};
        golf = 'getState';
        report['key'] = golf;
        golf = function() { // Original name: value
            entity = {};
            zulu = _closure1_slot14;
            entity['selectedGuildTimestampMillis'] = zulu;
            zulu = _closure1_slot12;
            entity['selectedGuildId'] = zulu;
            mike = _closure1_slot13;
            entity['lastSelectedGuildId'] = mike;
            return entity;
        };
        report['value'] = golf;
        entity[1] = report;
        report = {};
        golf = 'getGuildId';
        report['key'] = golf;
        golf = function() { // Original name: value
            entity = _closure1_slot12;
            return entity;
        };
        report['value'] = golf;
        entity[2] = report;
        report = {};
        golf = 'getLastSelectedGuildId';
        report['key'] = golf;
        golf = function() { // Original name: value
            entity = _closure1_slot13;
            return entity;
        };
        report['value'] = golf;
        entity[3] = report;
        report = {};
        golf = 'getLastSelectedTimestamp';
        report['key'] = golf;
        oscar = function(argFoo) { // Original name: value
            _fun48842: for(var _fun48842_ip = 0; ; ) switch(_fun48842_ip) {
 0:
                zulu = argFoo;
                tango = _closure1_slot12;
                entity = -1;
                if(!(tango !== zulu)) { _fun48842_ip = 28; continue _fun48842 }
 20:
                mike = _closure1_slot14;
                entity = mike[zulu];
 28:
                return entity;
            }
        };
        report['value'] = oscar;
        entity[4] = report;
        entity = mike.bind(zulu)(tango, entity);
        return entity;
    };
    options = mike.bind(entity)(options);
    mike = 'SelectedGuildStore';
    options['displayName'] = mike;
    options['persistKey'] = mike;
    mike = 14;
    mike = oscar[mike];
    foxtrot = golf.bind(entity)(mike);
    mike = {};
    mike['CONNECTION_OPEN'] = verify;
    verify = function(argFoo) { // Original name: handleOverlayInitialize
        entity = argFoo;
        entity = entity.selectedGuildId;
        _closure1_slot12 = entity;
        entity = undefined;
        _closure1_slot13 = entity;
        mike = _closure1_slot17;
        mike = mike.bind(entity)();
        return entity;
    };
    mike['OVERLAY_INITIALIZE'] = verify;
    verify = function(argFoo) { // Original name: handleChannelSelect
        _fun48844: for(var _fun48844_ip = 0; ; ) switch(_fun48844_ip) {
 0:
            entity = argFoo;
            zulu = entity.guildId;
            entity = _closure1_slot12;
            if(!(entity !== zulu)) { _fun48844_ip = 55; continue _fun48844 }
 19:
            tango = _closure1_slot18;
            report = _closure1_slot12;
            entity = undefined;
            report = tango.bind(entity)(report);
            tango = tango.bind(entity)(zulu);
            tango = null;
            if(!(tango != zulu)) { _fun48844_ip = 49; continue _fun48844 }
 45:
            _closure1_slot13 = zulu;
 49:
            _closure1_slot12 = zulu;
            return entity;
 55:
            entity = false;
            return entity;
        }
    };
    mike['CHANNEL_SELECT'] = verify;
    verify = function(argFoo) { // Original name: handleGuildMemberRemove
        _fun48845: for(var _fun48845_ip = 0; ; ) switch(_fun48845_ip) {
 0:
            entity = argFoo;
            tango = entity.guildId;
            entity = entity.user;
            zulu = entity.id;
            report = _closure1_slot8;
            entity = report.getId;
            entity = entity.bind(report)();
            entity = zulu === entity;
            if(!entity) { _fun48845_ip = 53; continue _fun48845 }
 42:
            zulu = _closure1_slot19;
            mike = undefined;
            entity = zulu.bind(mike)(tango);
 53:
            return entity;
        }
    };
    mike['GUILD_MEMBER_REMOVE'] = verify;
    verify = function(argFoo) { // Original name: handleGuildDelete
        _fun48846: for(var _fun48846_ip = 0; ; ) switch(_fun48846_ip) {
 0:
            entity = argFoo;
            entity = entity.guild;
            tango = entity.id;
            mike = entity.unavailable;
            entity = true;
            entity = entity !== mike;
            if(!entity) { _fun48846_ip = 42; continue _fun48846 }
 28:
            zulu = _closure1_slot19;
            mike = undefined;
            entity = zulu.bind(mike)(tango);
 42:
            return entity;
        }
    };
    mike['GUILD_DELETE'] = verify;
    tango = function() { // Original name: handleLogout
        entity = null;
        _closure1_slot12 = entity;
        _closure1_slot13 = entity;
        entity = undefined;
        return entity;
    };
    mike['LOGOUT'] = tango;
    tango = options.prototype;
    tango = Object.create(tango, {constructor: {value: options}});
    backup = tango;
    romeo = mike;
    mike = new backup[options](foxtrot, romeo, yankee);
    mike = mike instanceof Object ? mike : tango;
    tango = 15;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'stores/SelectedGuildStore.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    mike = -1;
    zulu['SELECTED_GUILD_TIMESTAMP_NOW'] = mike;
    return entity;
})();