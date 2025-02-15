// app/modules/rpc/server/commands/images.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    tango = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = tango;
    var _closure1_slot2 = oscar;
    entity = global;
    verify = entity.Object;
    golf = verify.defineProperty;
    mike = {};
    entity = true;
    mike['value'] = entity;
    entity = '__esModule';
    entity = golf.bind(verify)(zulu, entity, mike);
    entity = 0;
    mike = oscar[entity];
    entity = undefined;
    mike = tango.bind(entity)(mike);
    var _closure1_slot3 = mike;
    mike = 1;
    mike = oscar[mike];
    mike = report.bind(entity)(mike);
    verify = mike.RPC_LOCAL_SCOPE;
    mike = 2;
    mike = oscar[mike];
    mike = report.bind(entity)(mike);
    tango = mike.RPCCommands;
    mike = mike.RPCErrors;
    var _closure1_slot4 = mike;
    mike = {};
    golf = tango.GET_IMAGE;
    tango = {};
    tango['scope'] = verify;
    verify = function(argFoo) { // Original name: validation
        report = argFoo;
        zulu = _closure1_slot1;
        mike = _closure1_slot2;
        entity = 3;
        entity = mike[entity];
        mike = undefined;
        entity = zulu.bind(mike)(entity);
        mike = entity.bind(mike)(report);
        entity = mike.required;
        zulu = entity.bind(mike)();
        mike = zulu.keys;
        entity = {};
        tango = report.string;
        oscar = tango.bind(report)();
        tango = oscar.required;
        golf = tango.bind(oscar)();
        oscar = golf.valid;
        tango = ['user'];
        tango = oscar.bind(golf)(tango);
        entity['type'] = tango;
        tango = report.string;
        oscar = tango.bind(report)();
        tango = oscar.required;
        tango = tango.bind(oscar)();
        entity['id'] = tango;
        tango = report.string;
        oscar = tango.bind(report)();
        tango = oscar.required;
        golf = tango.bind(oscar)();
        oscar = golf.valid;
        tango = ['png', 'webp', 'jpg'];
        tango = oscar.bind(golf)(tango);
        entity['format'] = tango;
        tango = report.number;
        report = tango.bind(report)();
        tango = report.required;
        oscar = tango.bind(report)();
        report = oscar.valid;
        tango = [16, 32, 64, 128, 256, 512, 1024];
        tango = report.bind(oscar)(tango);
        entity['size'] = tango;
        entity = mike.bind(zulu)(entity);
        return entity;
    };
    tango['validation'] = verify;
    options = function(argFoo) { // Original name: handler
        _fun109577: for(var _fun109577_ip = 0; ; ) switch(_fun109577_ip) {
 0:
            entity = argFoo;
            entity = entity.args;
            zulu = entity.type;
            report = entity.id;
            romeo = entity.format;
            tango = undefined;
            if(!(romeo === tango)) { _fun109577_ip = 38; continue _fun109577 }
 32:
            romeo = 'png';
 38:
            yankee = entity.size;
            if(!(yankee === tango)) { _fun109577_ip = 50; continue _fun109577 }
 47:
            yankee = 128;
 50:
            entity = 'user';
            oscar = undefined;
            if(!(entity === zulu)) { _fun109577_ip = 197; continue _fun109577 }
 63:
            golf = _closure1_slot3;
            zulu = golf.getUser;
            offset = zulu.bind(golf)(report);
            zulu = null;
            if(!(zulu != offset)) { _fun109577_ip = 340; continue _fun109577 }
 90:
            options = _closure1_slot1;
            verify = _closure1_slot2;
            golf = 4;
            golf = verify[golf];
            verify = options.bind(tango)(golf);
            options = verify.getUserAvatarURL;
            kilo = false;
            output = verify;
            sizing = offset;
            backup = yankee;
            foxtrot = romeo;
            golf = output[options](sizing, kilo, backup, foxtrot, romeo);
            options = global;
            options = options.window;
            options = options.GLOBAL_ENV;
            verify = options.CDN_HOST;
            zulu = zulu != verify;
            if(!zulu) { _fun109577_ip = 181; continue _fun109577 }
 161:
            options = golf.indexOf;
            verify = options.bind(golf)(verify);
            options = -1;
            zulu = options !== verify;
 181:
            oscar = golf;
            if(!zulu) { _fun109577_ip = 197; continue _fun109577 }
 187:
            zulu = '&_=';
            oscar = golf + zulu;
 197:
            zulu = null;
            if(!(zulu != oscar)) { _fun109577_ip = 269; continue _fun109577 }
 203:
            zulu = global;
            zulu = zulu.fetch;
            golf = zulu.bind(tango)(oscar);
            oscar = golf.then;
            zulu = function(argFoo) {
                mike = argFoo;
                entity = mike.blob;
                entity = entity.bind(mike)();
                return entity;
            };
            golf = oscar.bind(golf)(zulu);
            oscar = golf.then;
            zulu = function(argFoo) {
                zulu = _closure1_slot0;
                mike = _closure1_slot2;
                entity = 6;
                mike = mike[entity];
                entity = undefined;
                zulu = zulu.bind(entity)(mike);
                mike = zulu.readFileAsBase64;
                entity = argFoo;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            oscar = oscar.bind(golf)(zulu);
            zulu = oscar.then;
            mike = function(argFoo) {
                entity = {};
                mike = argFoo;
                entity['data_url'] = mike;
                return entity;
            };
            mike = zulu.bind(oscar)(mike);
            return mike;
 269:
            oscar = _closure1_slot1;
            golf = _closure1_slot2;
            zulu = 5;
            zulu = golf[zulu];
            golf = oscar.bind(tango)(zulu);
            oscar = {};
            mike = _closure1_slot4;
            mike = mike.INVALID_COMMAND;
            oscar['errorCode'] = mike;
            mike = golf.prototype;
            zulu = Object.create(mike, {constructor: {value: golf}});
            kilo = 'No valid type.';
            output = zulu;
            sizing = oscar;
            mike = new output[golf](sizing, kilo, backup);
            mike = mike instanceof Object ? mike : zulu;
            throw mike;
 340:
            zulu = _closure1_slot1;
            oscar = _closure1_slot2;
            mike = 5;
            mike = oscar[mike];
            tango = zulu.bind(tango)(mike);
            zulu = {};
            entity = _closure1_slot4;
            entity = entity.INVALID_USER;
            zulu['errorCode'] = entity;
            entity = global;
            entity = entity.HermesInternal;
            mike = entity.concat;
            entity = 'Invalid user id: ';
            kilo = mike.bind(entity)(report);
            mike = tango.prototype;
            mike = Object.create(mike, {constructor: {value: tango}});
            output = mike;
            sizing = zulu;
            entity = new output[tango](sizing, kilo, backup);
            entity = entity instanceof Object ? entity : mike;
            throw entity;
        }
    };
    tango['handler'] = options;
    mike[golf] = tango;
    tango = 7;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/rpc/server/commands/images.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();