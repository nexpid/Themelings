// app/modules/gateway/GatewayEncoding.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    _fun105979: for(var _fun105979_ip = 0; ; ) switch(_fun105979_ip) {
 0:
        report = argBar;
        golf = argBaz;
        zulu = argFred;
        oscar = argPlugh;
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
        tango = golf.bind(entity)(tango);
        var _closure1_slot0 = tango;
        tango = 1;
        tango = oscar[tango];
        tango = golf.bind(entity)(tango);
        var _closure1_slot1 = tango;
        tango = 2;
        tango = oscar[tango];
        golf = report.bind(entity)(tango);
        tango = golf.getErlpackEncoding;
        golf = tango.bind(golf)();
        mike = function() {
            tango = _closure1_slot1;
            zulu = function() { // Original name: JSONEncoding
                tango = _closure1_slot0;
                zulu = _closure2_slot0;
                entity = undefined;
                mike = this;
                mike = tango.bind(entity)(mike, zulu);
                return entity;
            };
            var _closure2_slot0 = zulu;
            entity = {};
            mike = 'pack';
            entity['key'] = mike;
            mike = function(argFoo) { // Original name: value
                entity = global;
                zulu = entity.JSON;
                mike = zulu.stringify;
                entity = argFoo;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            entity['value'] = mike;
            mike = new Array(4);
            mike[0] = entity;
            entity = {};
            oscar = 'unpack';
            entity['key'] = oscar;
            oscar = function(argFoo) { // Original name: value
                _fun105983: for(var _fun105983_ip = 0; ; ) switch(_fun105983_ip) {
 0:
                    report = argFoo;
                    mike = typeof report;
                    entity = 'string';
                    if(!(entity === mike)) { _fun105983_ip = 35; continue _fun105983 }
 14:
                    entity = global;
                    zulu = entity.JSON;
                    entity = zulu.parse;
                    entity = entity.bind(zulu)(report);
                    return entity;
 35:
                    entity = global;
                    zulu = entity.Error;
                    tango = null;
                    report = tango == report;
                    if(report) { _fun105983_ip = 55; continue _fun105983 }
 52:
                    tango = mike;
 55:
                    entity = entity.HermesInternal;
                    mike = entity.concat;
                    entity = 'Expected a string to be passed to JSONEncoding.unpack, got ';
                    oscar = mike.bind(entity)(tango);
                    mike = zulu.prototype;
                    mike = Object.create(mike, {constructor: {value: zulu}});
                    golf = mike;
                    entity = new golf[zulu](oscar, report);
                    entity = entity instanceof Object ? entity : mike;
                    throw entity;
                }
            };
            entity['value'] = oscar;
            mike[1] = entity;
            entity = {};
            oscar = 'getName';
            entity['key'] = oscar;
            oscar = function() { // Original name: value
                entity = 'json';
                return entity;
            };
            entity['value'] = oscar;
            mike[2] = entity;
            entity = {};
            oscar = 'wantsString';
            entity['key'] = oscar;
            report = function() { // Original name: value
                entity = true;
                return entity;
            };
            entity['value'] = report;
            mike[3] = entity;
            entity = undefined;
            entity = tango.bind(entity)(zulu, mike);
            return entity;
        };
        tango = mike.bind(entity)();
        mike = tango;
        if(!(entity !== golf)) { _fun105979_ip = 122; continue _fun105979 }
 119:
        mike = golf;
 122:
        golf = 3;
        golf = oscar[golf];
        golf = report.bind(entity)(golf);
        options = golf.ProcessArgs;
        golf = options.isDiscordGatewayPlaintextSet;
        golf = golf.bind(options)();
        if(!golf) { _fun105979_ip = 156; continue _fun105979 }
 153:
        mike = tango;
 156:
        tango = 4;
        tango = oscar[tango];
        oscar = report.bind(entity)(tango);
        report = oscar.fileFinishedImporting;
        tango = 'modules/gateway/GatewayEncoding.tsx';
        tango = report.bind(oscar)(tango);
        zulu['default'] = mike;
        return entity;
    }
})();