// app/modules/guild/GuildPromptsStore.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    oscar = argBaz;
    zulu = argFred;
    report = argPlugh;
    entity = function(argFoo, argBar, argBaz) { // Original name: _callSuper
        _fun89224: for(var _fun89224_ip = 0; ; ) switch(_fun89224_ip) {
 0:
            tango = argFoo;
            oscar = argBaz;
            mike = _closure1_slot3;
            zulu = undefined;
            entity = argBar;
            verify = mike.bind(zulu)(entity);
            mike = _closure1_slot2;
            entity = _closure1_slot7;
            entity = entity.bind(zulu)();
            if(entity) { _fun89224_ip = 51; continue _fun89224 }
 38:
            entity = verify.apply;
            entity = entity.bind(verify)(tango, oscar);
            _fun89224_ip = 92; continue _fun89224;
 51:
            golf = global;
            options = golf.Reflect;
            golf = options.construct;
            if(oscar) { _fun89224_ip = 71; continue _fun89224 }
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
    var _closure1_slot6 = entity;
    entity = function() { // Original name: _isNativeReflectConstruct
        _fun89225: for(var _fun89225_ip = 0; ; ) switch(_fun89225_ip) {
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
 72: // try_end0
            _fun89225_ip = 76; continue _fun89225;
 74: // catch_target0
            CatchBlockStart(arg_register=1);
 76:
            mike = function() { // Original name: _isNativeReflectConstruct
                entity = _closure2_slot0;
                entity = !entity;
                entity = !entity;
                return entity;
            };
            _closure1_slot7 = mike;
            entity = undefined;
            entity = mike.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot7 = entity;
    entity = global;
    options = entity.Object;
    golf = options.defineProperty;
    mike = {};
    entity = true;
    mike['value'] = entity;
    entity = '__esModule';
    entity = golf.bind(options)(zulu, entity, mike);
    entity = 0;
    mike = report[entity];
    entity = undefined;
    mike = oscar.bind(entity)(mike);
    var _closure1_slot0 = mike;
    mike = 1;
    mike = report[mike];
    mike = oscar.bind(entity)(mike);
    var _closure1_slot1 = mike;
    mike = 2;
    mike = report[mike];
    mike = oscar.bind(entity)(mike);
    var _closure1_slot2 = mike;
    mike = 3;
    mike = report[mike];
    mike = oscar.bind(entity)(mike);
    var _closure1_slot3 = mike;
    mike = 4;
    mike = report[mike];
    mike = oscar.bind(entity)(mike);
    var _closure1_slot4 = mike;
    mike = {};
    var _closure1_slot5 = mike;
    mike = 5;
    mike = report[mike];
    mike = oscar.bind(entity)(mike);
    golf = mike.PersistedStore;
    mike = function(argFoo) {
        tango = function() { // Original name: GuildPromptsStore
            report = this;
            tango = undefined;
            entity = undefined;
            oscar = _closure1_slot0;
            zulu = _closure2_slot0;
            oscar = oscar.bind(tango)(report, zulu);
            mike = _closure1_slot6;
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
        entity = 'initialize';
        report['key'] = entity;
        entity = function(argFoo) { // Original name: value
            _fun89230: for(var _fun89230_ip = 0; ; ) switch(_fun89230_ip) {
 0:
                options = argFoo;
                oscar = options;
                entity = global;
                for(zulu in oscar)
 19:
                {
 28:
                    yankee = zulu;
                    backup = options[yankee];
                    offset = _closure1_slot5;
                    verify = entity.Set;
                    romeo = verify.prototype;
                    romeo = Object.create(romeo, {constructor: {value: verify}});
                    kilo = romeo;
                    verify = new kilo[verify](backup, foxtrot);
                    verify = verify instanceof Object ? verify : romeo;
                    offset[yankee] = verify;
                    _fun89230_ip = 19; continue _fun89230;
                }
 71:
                entity = undefined;
                return entity;
            }
        };
        report['value'] = entity;
        entity = new Array(3);
        entity[0] = report;
        report = {};
        golf = 'hasViewedPrompt';
        report['key'] = golf;
        golf = function(argFoo, argBar) { // Original name: value
            _fun89231: for(var _fun89231_ip = 0; ; ) switch(_fun89231_ip) {
 0:
                mike = _closure1_slot5;
                entity = argBar;
                tango = mike[entity];
                entity = null;
                entity = entity != tango;
                if(!entity) { _fun89231_ip = 42; continue _fun89231 }
 23:
                zulu = tango.has;
                mike = argFoo;
                mike = zulu.bind(tango)(mike);
                mike = !mike;
                entity = !mike;
 42:
                return entity;
            }
        };
        report['value'] = golf;
        entity[1] = report;
        report = {};
        golf = 'getState';
        report['key'] = golf;
        oscar = function() { // Original name: value
            entity = _closure1_slot5;
            return entity;
        };
        report['value'] = oscar;
        entity[2] = report;
        entity = mike.bind(zulu)(tango, entity);
        return entity;
    };
    golf = mike.bind(entity)(golf);
    mike = 'GuildPromptsStore';
    golf['displayName'] = mike;
    golf['persistKey'] = mike;
    mike = 6;
    mike = report[mike];
    yankee = oscar.bind(entity)(mike);
    mike = {};
    options = function(argFoo) { // Original name: handleGuildPromptViewed
        _fun89233: for(var _fun89233_ip = 0; ; ) switch(_fun89233_ip) {
 0:
            entity = argFoo;
            tango = entity.prompt;
            zulu = entity.guildId;
            entity = _closure1_slot5;
            oscar = entity[zulu];
            entity = null;
            if(!(entity != oscar)) { _fun89233_ip = 61; continue _fun89233 }
 31:
            entity = oscar.has;
            entity = entity.bind(oscar)(tango);
            entity = !entity;
            if(!entity) { _fun89233_ip = 59; continue _fun89233 }
 47:
            report = oscar.add;
            report = report.bind(oscar)(tango);
            entity = true;
 59:
            _fun89233_ip = 113; continue _fun89233;
 61:
            mike = _closure1_slot5;
            report = global;
            report = report.Set;
            oscar = report.prototype;
            oscar = Object.create(oscar, {constructor: {value: report}});
            options = oscar;
            report = new options[report](golf);
            report = report instanceof Object ? report : oscar;
            mike[zulu] = report;
            zulu = mike[zulu];
            mike = zulu.add;
            mike = mike.bind(zulu)(tango);
            entity = true;
 113:
            return entity;
        }
    };
    mike['GUILD_PROMPT_VIEWED'] = options;
    tango = function(argFoo) { // Original name: handleGuildDelete
        _fun89234: for(var _fun89234_ip = 0; ; ) switch(_fun89234_ip) {
 0:
            entity = argFoo;
            mike = entity.guild;
            tango = _closure1_slot5;
            entity = mike.id;
            tango = tango[entity];
            entity = null;
            entity = entity != tango;
            if(!entity) { _fun89234_ip = 42; continue _fun89234 }
 33:
            tango = mike.unavailable;
            entity = !tango;
 42:
            if(!entity) { _fun89234_ip = 60; continue _fun89234 }
 45:
            zulu = _closure1_slot5;
            mike = mike.id;
            mike = delete zulu[mike];
            entity = true;
 60:
            return entity;
        }
    };
    mike['GUILD_DELETE'] = tango;
    tango = golf.prototype;
    tango = Object.create(tango, {constructor: {value: golf}});
    romeo = tango;
    offset = mike;
    mike = new romeo[golf](yankee, offset, verify);
    mike = mike instanceof Object ? mike : tango;
    tango = 7;
    report = report[tango];
    tango = argBar;
    oscar = tango.bind(entity)(report);
    report = oscar.fileFinishedImporting;
    tango = 'modules/guild/GuildPromptsStore.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();