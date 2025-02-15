// app/utils/ProcessArgs.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    oscar = argBaz;
    zulu = argFred;
    report = argPlugh;
    var _closure1_slot0 = oscar;
    var _closure1_slot1 = report;
    entity = global;
    options = entity.Object;
    golf = options.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = golf.bind(options)(zulu, entity, tango);
    entity = 0;
    tango = report[entity];
    entity = undefined;
    tango = oscar.bind(entity)(tango);
    var _closure1_slot2 = tango;
    tango = 1;
    tango = report[tango];
    tango = oscar.bind(entity)(tango);
    var _closure1_slot3 = tango;
    mike = function() {
        report = function() { // Original name: ProcessArgs
            tango = _closure1_slot2;
            zulu = _closure2_slot0;
            entity = undefined;
            mike = this;
            mike = tango.bind(entity)(mike, zulu);
            return entity;
        };
        var _closure2_slot0 = report;
        tango = _closure1_slot3;
        entity = {};
        zulu = 'get';
        entity['key'] = zulu;
        zulu = function() { // Original name: value
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                mike = _closure2_slot0;
                mike = mike.cached;
                tango = null;
                if(!(tango == mike)) { _fun00002_ip = 163; continue _fun00001 }
 22:
                report = _closure1_slot0;
                mike = _closure1_slot1;
                golf = 2;
                mike = mike[golf];
                oscar = undefined;
                mike = report.bind(oscar)(mike);
                report = tango == mike;
                mike = undefined;
                if(report) { _fun00002_ip = 113; continue _fun00001 }
 56:
                report = _closure1_slot0;
                zulu = _closure1_slot1;
                zulu = zulu[golf];
                zulu = report.bind(oscar)(zulu);
                report = zulu.processUtils;
                zulu = tango == report;
                mike = undefined;
                if(zulu) { _fun00002_ip = 113; continue _fun00001 }
 88:
                zulu = report.getMainArgvSync;
                zulu = tango == zulu;
                mike = undefined;
                if(zulu) { _fun00002_ip = 113; continue _fun00001 }
 103:
                zulu = report.getMainArgvSync;
                mike = zulu.bind(report)();
 113:
                zulu = tango != mike;
                if(!zulu) { _fun00002_ip = 132; continue _fun00001 }
 120:
                oscar = mike.length;
                report = 1;
                zulu = oscar > report;
 132:
                if(!zulu) { _fun00002_ip = 145; continue _fun00001 }
 135:
                zulu = mike.shift;
                zulu = zulu.bind(mike)();
 145:
                zulu = _closure2_slot0;
                if(!(tango == mike)) { _fun00002_ip = 157; continue _fun00001 }
 153:
                mike = new Array(0);
 157:
                zulu['cached'] = mike;
 163:
                entity = _closure2_slot0;
                entity = entity.cached;
                return entity;
            }
        };
        entity['value'] = zulu;
        zulu = new Array(6);
        zulu[0] = entity;
        entity = {};
        oscar = 'contains';
        entity['key'] = oscar;
        oscar = function(argFoo) { // Original name: value
            mike = _closure2_slot0;
            entity = mike.get;
            zulu = entity.bind(mike)();
            mike = zulu.includes;
            entity = argFoo;
            entity = mike.bind(zulu)(entity);
            return entity;
        };
        entity['value'] = oscar;
        zulu[1] = entity;
        entity = {};
        oscar = 'isEnvVariableTrue';
        entity['key'] = oscar;
        oscar = function(argFoo) { // Original name: value
            _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                mike = _closure1_slot0;
                entity = _closure1_slot1;
                oscar = 2;
                entity = entity[oscar];
                tango = undefined;
                entity = mike.bind(tango)(entity);
                if(!(tango !== entity)) { _fun00004_ip = 137; continue _fun00003 }
 29:
                mike = _closure1_slot0;
                entity = _closure1_slot1;
                entity = entity[oscar];
                mike = mike.bind(tango)(entity);
                entity = null;
                report = entity == mike;
                mike = undefined;
                if(report) { _fun00004_ip = 111; continue _fun00003 }
 57:
                report = _closure1_slot0;
                zulu = _closure1_slot1;
                zulu = zulu[oscar];
                zulu = report.bind(tango)(zulu);
                zulu = zulu.process;
                report = entity == zulu;
                mike = undefined;
                if(report) { _fun00004_ip = 111; continue _fun00003 }
 89:
                zulu = zulu.env;
                entity = entity == zulu;
                mike = undefined;
                if(entity) { _fun00004_ip = 111; continue _fun00003 }
 104:
                entity = argFoo;
                mike = zulu[entity];
 111:
                entity = '1';
                if(!(entity !== mike)) { _fun00004_ip = 133; continue _fun00003 }
 121:
                entity = 'true';
                if(!(entity !== mike)) { _fun00004_ip = 133; continue _fun00003 }
 129:
                entity = false;
                return entity;
 133:
                entity = true;
                return entity;
 137:
                entity = false;
                return entity;
            }
        };
        entity['value'] = oscar;
        zulu[2] = entity;
        entity = {};
        oscar = 'isDisallowPopupsSet';
        entity['key'] = oscar;
        oscar = function() { // Original name: value
            _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                tango = _closure2_slot0;
                zulu = tango.contains;
                entity = '--disallow-popups';
                entity = zulu.bind(tango)(entity);
                if(entity) { _fun00006_ip = 48; continue _fun00005 }
 27:
                tango = _closure2_slot0;
                zulu = tango.isEnvVariableTrue;
                mike = 'DISCORD_DISALLOW_POPUPS';
                entity = zulu.bind(tango)(mike);
 48:
                return entity;
            }
        };
        entity['value'] = oscar;
        zulu[3] = entity;
        entity = {};
        oscar = 'isDiscordTestSet';
        entity['key'] = oscar;
        oscar = function() { // Original name: value
            zulu = _closure2_slot0;
            mike = zulu.isEnvVariableTrue;
            entity = 'DISCORD_TEST';
            entity = mike.bind(zulu)(entity);
            return entity;
        };
        entity['value'] = oscar;
        zulu[4] = entity;
        entity = {};
        oscar = 'isDiscordGatewayPlaintextSet';
        entity['key'] = oscar;
        mike = function() { // Original name: value
            entity = false;
            return entity;
        };
        entity['value'] = mike;
        zulu[5] = entity;
        mike = undefined;
        entity = null;
        entity = tango.bind(mike)(report, entity, zulu);
        return entity;
    };
    mike = mike.bind(entity)();
    tango = 3;
    report = report[tango];
    tango = argBar;
    oscar = tango.bind(entity)(report);
    report = oscar.fileFinishedImporting;
    tango = 'utils/ProcessArgs.tsx';
    tango = report.bind(oscar)(tango);
    zulu['ProcessArgs'] = mike;
    return entity;
})();