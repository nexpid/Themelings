// app/modules/hangouts/native/NativeHangoutsUtils.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    _fun124143: for(var _fun124143_ip = 0; ; ) switch(_fun124143_ip) {
 0:
        report = argBar;
        zulu = argFred;
        oscar = argPlugh;
        var _closure1_slot0 = report;
        entity = argBaz;
        var _closure1_slot1 = entity;
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
        tango = oscar[entity];
        entity = undefined;
        tango = report.bind(entity)(tango);
        options = tango.NativeEventEmitter;
        tango = tango.NativeModules;
        var _closure1_slot3 = tango;
        golf = 1;
        golf = oscar[golf];
        verify = report.bind(entity)(golf);
        golf = verify.isIOS;
        golf = golf.bind(verify)();
        if(!golf) { _fun124143_ip = 163; continue _fun124143 }
 112:
        romeo = tango.DCDLockscreenWidgetManager;
        golf = options.prototype;
        golf = Object.create(golf, {constructor: {value: options}});
        foxtrot = golf;
        tango = new foxtrot[options](romeo, yankee);
        verify = tango instanceof Object ? tango : golf;
        options = verify.addListener;
        golf = 'pushTokenUpdate';
        tango = function(argFoo) {
            entity = argFoo;
            report = entity.token;
            zulu = _closure1_slot1;
            mike = _closure1_slot2;
            entity = 2;
            mike = mike[entity];
            entity = undefined;
            tango = zulu.bind(entity)(mike);
            zulu = tango.dispatch;
            mike = {};
            oscar = 'HANGOUT_PUSH_TOKEN_UPDATE';
            mike['type'] = oscar;
            mike['token'] = report;
            mike = zulu.bind(tango)(mike);
            return entity;
        };
        tango = options.bind(verify)(golf, tango);
 163:
        tango = 3;
        tango = oscar[tango];
        oscar = report.bind(entity)(tango);
        report = oscar.fileFinishedImporting;
        tango = 'modules/hangouts/native/NativeHangoutsUtils.tsx';
        tango = report.bind(oscar)(tango);
        tango = function(argFoo, argBar) { // Original name: preloadAsset
            _fun124145: for(var _fun124145_ip = 0; ; ) switch(_fun124145_ip) {
 0:
                tango = _closure1_slot0;
                zulu = _closure1_slot2;
                entity = 1;
                zulu = zulu[entity];
                entity = undefined;
                tango = tango.bind(entity)(zulu);
                zulu = tango.isIOS;
                zulu = zulu.bind(tango)();
                if(!zulu) { _fun124145_ip = 68; continue _fun124145 }
 38:
                mike = _closure1_slot3;
                report = mike.DCDLockscreenWidgetManager;
                tango = report.downloadAndStoreImage;
                zulu = argFoo;
                mike = argBar;
                mike = tango.bind(report)(zulu, mike);
 68:
                return entity;
            }
        };
        zulu['preloadAsset'] = tango;
        tango = function() { // Original name: hasActivity
            _fun124146: for(var _fun124146_ip = 0; ; ) switch(_fun124146_ip) {
 0:
                report = _closure1_slot0;
                tango = _closure1_slot2;
                mike = 1;
                tango = tango[mike];
                mike = undefined;
                tango = report.bind(mike)(tango);
                mike = tango.isIOS;
                tango = mike.bind(tango)();
                mike = global;
                if(tango) { _fun124146_ip = 75; continue _fun124146 }
 42:
                oscar = mike.Promise;
                report = oscar.resolve;
                tango = {'hasActivity': false, 'hasActiveActivity': false};
                tango = report.bind(oscar)(tango);
                return tango;
 75:
                zulu = _closure1_slot3;
                zulu = zulu.DCDLockscreenWidgetManager;
                var _closure2_slot0 = zulu;
                zulu = mike.Promise;
                mike = zulu.prototype;
                mike = Object.create(mike, {constructor: {value: zulu}});
                golf = function(argFoo) {
                    mike = argFoo;
                    var _closure3_slot0 = mike;
                    zulu = _closure2_slot0;
                    mike = zulu.hasActivity;
                    entity = function(argFoo, argBar, argBaz) {
                        _fun124148: for(var _fun124148_ip = 0; ; ) switch(_fun124148_ip) {
 0:
                            zulu = _closure3_slot0;
                            mike = null;
                            entity = argFoo;
                            if(!(mike == entity)) { _fun124148_ip = 36; continue _fun124148 }
 16:
                            mike = {};
                            entity = argBar;
                            mike['hasActivity'] = entity;
                            entity = argBaz;
                            mike['hasActiveActivity'] = entity;
                            _fun124148_ip = 50; continue _fun124148;
 36:
                            mike = {'hasActivity': false, 'hasActiveActivity': false};
 50:
                            entity = undefined;
                            mike = zulu.bind(entity)(mike);
                            return entity;
                        }
                    };
                    entity = mike.bind(zulu)(entity);
                    return entity;
                };
                options = mike;
                entity = new options[zulu](golf, oscar);
                entity = entity instanceof Object ? entity : mike;
                return entity;
            }
        };
        zulu['hasActivity'] = tango;
        tango = function() { // Original name: stopHangoutActivity
            _fun124149: for(var _fun124149_ip = 0; ; ) switch(_fun124149_ip) {
 0:
                tango = arguments[0];
                entity = undefined;
                if(!(tango === entity)) { _fun124149_ip = 11; continue _fun124149 }
 9:
                tango = 0;
 11:
                report = _closure1_slot0;
                oscar = _closure1_slot2;
                zulu = 1;
                zulu = oscar[zulu];
                report = report.bind(entity)(zulu);
                zulu = report.isIOS;
                zulu = zulu.bind(report)();
                if(!zulu) { _fun124149_ip = 70; continue _fun124149 }
 47:
                mike = _closure1_slot3;
                zulu = mike.DCDLockscreenWidgetManager;
                mike = zulu.endActivity;
                mike = mike.bind(zulu)(tango);
 70:
                return entity;
            }
        };
        zulu['stopHangoutActivity'] = tango;
        tango = function(argFoo) { // Original name: startHangoutActivity
            _fun124150: for(var _fun124150_ip = 0; ; ) switch(_fun124150_ip) {
 0:
                tango = _closure1_slot0;
                zulu = _closure1_slot2;
                entity = 1;
                zulu = zulu[entity];
                entity = undefined;
                tango = tango.bind(entity)(zulu);
                zulu = tango.isIOS;
                zulu = zulu.bind(tango)();
                if(!zulu) { _fun124150_ip = 83; continue _fun124150 }
 38:
                mike = _closure1_slot3;
                tango = mike.DCDLockscreenWidgetManager;
                zulu = tango.startActivity;
                mike = global;
                oscar = mike.JSON;
                report = oscar.stringify;
                mike = argFoo;
                mike = report.bind(oscar)(mike);
                mike = zulu.bind(tango)(mike);
 83:
                return entity;
            }
        };
        zulu['startHangoutActivity'] = tango;
        mike = function() { // Original name: activitiesAllowed
            _fun124151: for(var _fun124151_ip = 0; ; ) switch(_fun124151_ip) {
 0:
                report = _closure1_slot0;
                tango = _closure1_slot2;
                mike = 1;
                tango = tango[mike];
                mike = undefined;
                tango = report.bind(mike)(tango);
                mike = tango.isIOS;
                tango = mike.bind(tango)();
                mike = global;
                if(tango) { _fun124151_ip = 65; continue _fun124151 }
 42:
                oscar = mike.Promise;
                report = oscar.reject;
                tango = 'unsupported';
                tango = report.bind(oscar)(tango);
                return tango;
 65:
                zulu = _closure1_slot3;
                zulu = zulu.DCDLockscreenWidgetManager;
                var _closure2_slot0 = zulu;
                zulu = mike.Promise;
                mike = zulu.prototype;
                mike = Object.create(mike, {constructor: {value: zulu}});
                golf = function(argFoo, argBar) {
                    mike = argFoo;
                    var _closure3_slot0 = mike;
                    mike = argBar;
                    var _closure3_slot1 = mike;
                    zulu = _closure2_slot0;
                    mike = zulu.activitiesAllowed;
                    entity = function(argFoo, argBar) {
                        _fun124153: for(var _fun124153_ip = 0; ; ) switch(_fun124153_ip) {
 0:
                            zulu = argFoo;
                            entity = null;
                            if(!(entity == zulu)) { _fun124153_ip = 28; continue _fun124153 }
 9:
                            tango = _closure3_slot0;
                            mike = undefined;
                            entity = argBar;
                            entity = tango.bind(mike)(entity);
                            _fun124153_ip = 42; continue _fun124153;
 28:
                            mike = _closure3_slot1;
                            entity = undefined;
                            entity = mike.bind(entity)(zulu);
 42:
                            entity = undefined;
                            return entity;
                        }
                    };
                    entity = mike.bind(zulu)(entity);
                    return entity;
                };
                options = mike;
                entity = new options[zulu](golf, oscar);
                entity = entity instanceof Object ? entity : mike;
                return entity;
            }
        };
        zulu['activitiesAllowed'] = mike;
        return entity;
    }
})();