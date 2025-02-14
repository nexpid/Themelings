// app/modules/app_launcher/native/onboarding/stores/AppLauncherOnboardingStore.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golf;
    var _closure1_slot2 = oscar;
    entity = function(argFoo, argBar, argBaz) { // Original name: _callSuper
        _fun101151: for(var _fun101151_ip = 0; ; ) switch(_fun101151_ip) {
 0:
            tango = argFoo;
            oscar = argBaz;
            mike = _closure1_slot8;
            zulu = undefined;
            entity = argBar;
            verify = mike.bind(zulu)(entity);
            mike = _closure1_slot7;
            entity = _closure1_slot12;
            entity = entity.bind(zulu)();
            if(entity) { _fun101151_ip = 51; continue _fun101151 }
 38:
            entity = verify.apply;
            entity = entity.bind(verify)(tango, oscar);
            _fun101151_ip = 92; continue _fun101151;
 51:
            golf = global;
            options = golf.Reflect;
            golf = options.construct;
            if(oscar) { _fun101151_ip = 71; continue _fun101151 }
 67:
            oscar = new Array(0);
 71:
            report = _closure1_slot8;
            report = report.bind(zulu)(tango);
            report = report.constructor;
            entity = golf.bind(options)(verify, oscar, report);
 92:
            entity = mike.bind(zulu)(tango, entity);
            return entity;
        }
    };
    var _closure1_slot11 = entity;
    entity = function() { // Original name: _isNativeReflectConstruct
        _fun101152: for(var _fun101152_ip = 0; ; ) switch(_fun101152_ip) {
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
            _fun101152_ip = 76; continue _fun101152;
 74: // catch_target0
            CatchBlockStart(arg_register=1);
 76:
            mike = function() { // Original name: _isNativeReflectConstruct
                entity = _closure2_slot0;
                entity = !entity;
                entity = !entity;
                return entity;
            };
            _closure1_slot12 = mike;
            entity = undefined;
            entity = mike.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot12 = entity;
    entity = global;
    verify = entity.Object;
    options = verify.defineProperty;
    mike = {};
    entity = true;
    mike['value'] = entity;
    entity = '__esModule';
    entity = options.bind(verify)(zulu, entity, mike);
    entity = 0;
    mike = oscar[entity];
    entity = undefined;
    mike = golf.bind(entity)(mike);
    var _closure1_slot5 = mike;
    mike = 1;
    mike = oscar[mike];
    mike = golf.bind(entity)(mike);
    var _closure1_slot6 = mike;
    mike = 2;
    mike = oscar[mike];
    mike = golf.bind(entity)(mike);
    var _closure1_slot7 = mike;
    mike = 3;
    mike = oscar[mike];
    mike = golf.bind(entity)(mike);
    var _closure1_slot8 = mike;
    mike = 4;
    mike = oscar[mike];
    mike = golf.bind(entity)(mike);
    var _closure1_slot9 = mike;
    mike = 5;
    mike = oscar[mike];
    mike = golf.bind(entity)(mike);
    var _closure1_slot10 = mike;
    mike = 9;
    mike = oscar[mike];
    mike = golf.bind(entity)(mike);
    options = mike.Store;
    mike = function(argFoo) {
        tango = function() { // Original name: AppLauncherOnboardingStore
            report = this;
            tango = undefined;
            entity = undefined;
            oscar = _closure1_slot5;
            zulu = _closure2_slot0;
            oscar = oscar.bind(tango)(report, zulu);
            mike = _closure1_slot11;
            entity = arguments;
            entity = mike.bind(tango)(report, zulu, entity);
            return entity;
        };
        var _closure2_slot0 = tango;
        report = _closure1_slot9;
        zulu = undefined;
        mike = argFoo;
        mike = report.bind(zulu)(tango, mike);
        mike = _closure1_slot6;
        report = {};
        entity = 'getRecentMessageMetadata';
        report['key'] = entity;
        entity = function() { // Original name: value
            entity = _closure1_slot3;
            return entity;
        };
        report['value'] = entity;
        entity = new Array(2);
        entity[0] = report;
        report = {};
        golf = 'getRecentApplicationCommandMetadata';
        report['key'] = golf;
        oscar = function() { // Original name: value
            entity = _closure1_slot4;
            return entity;
        };
        report['value'] = oscar;
        entity[1] = report;
        entity = mike.bind(zulu)(tango, entity);
        return entity;
    };
    options = mike.bind(entity)(options);
    mike = 'AppLauncherOnboardingStore';
    options['displayName'] = mike;
    mike = 10;
    mike = oscar[mike];
    romeo = golf.bind(entity)(mike);
    mike = {};
    verify = function(argFoo) { // Original name: handleApplicationCommandUsed
        _fun101159: for(var _fun101159_ip = 0; ; ) switch(_fun101159_ip) {
 0:
            entity = argFoo;
            report = entity.command;
            tango = entity.context;
            oscar = entity.commandOrigin;
            golf = _closure1_slot0;
            mike = _closure1_slot2;
            entity = 8;
            mike = mike[entity];
            entity = undefined;
            mike = golf.bind(entity)(mike);
            mike = mike.CommandOrigin;
            mike = mike.APPLICATION_LAUNCHER;
            mike = oscar !== mike;
            if(!mike) { _fun101159_ip = 75; continue _fun101159 }
 64:
            golf = tango.channel;
            oscar = null;
            mike = oscar != golf;
 75:
            if(!mike) { _fun101159_ip = 154; continue _fun101159 }
 78:
            mike = {};
            oscar = global;
            golf = oscar.Date;
            oscar = golf.now;
            oscar = oscar.bind(golf)();
            mike['timeMs'] = oscar;
            report = report.applicationId;
            mike['applicationId'] = report;
            oscar = tango.guild;
            report = null;
            golf = report == oscar;
            report = undefined;
            if(golf) { _fun101159_ip = 132; continue _fun101159 }
 127:
            report = oscar.id;
 132:
            mike['guildId'] = report;
            tango = tango.channel;
            tango = tango.id;
            mike['channelId'] = tango;
            var _closure1_slot4 = mike;
 154:
            return entity;
        }
    };
    mike['APPLICATION_COMMAND_USED'] = verify;
    tango = function(argFoo) { // Original name: handleMessageCreate
        _fun101160: for(var _fun101160_ip = 0; ; ) switch(_fun101160_ip) {
 0:
            entity = argFoo;
            zulu = entity.channelId;
            tango = entity.guildId;
            entity = entity.message;
            oscar = _closure1_slot10;
            report = oscar.getCurrentUser;
            report = report.bind(oscar)();
            golf = null;
            if(!(golf != report)) { _fun101160_ip = 192; continue _fun101160 }
 43:
            oscar = report.id;
            if(!(golf != oscar)) { _fun101160_ip = 192; continue _fun101160 }
 55:
            oscar = entity.author;
            if(!(golf != oscar)) { _fun101160_ip = 192; continue _fun101160 }
 68:
            oscar = report.id;
            report = entity.author;
            report = report.id;
            if(!(oscar === report)) { _fun101160_ip = 192; continue _fun101160 }
 88:
            oscar = _closure1_slot1;
            verify = _closure1_slot2;
            report = 6;
            report = verify[report];
            options = undefined;
            oscar = oscar.bind(options)(report);
            report = oscar.extractTimestamp;
            entity = entity.id;
            report = report.bind(oscar)(entity);
            entity = global;
            oscar = entity.Date;
            entity = oscar.now;
            oscar = entity.bind(oscar)();
            golf = _closure1_slot0;
            entity = 7;
            entity = verify[entity];
            entity = golf.bind(options)(entity);
            entity = entity.RECENT_MESSAGE_MS;
            entity = report + entity;
            if(!(!(oscar > entity))) { _fun101160_ip = 192; continue _fun101160 }
 173:
            entity = {};
            entity['timeMs'] = report;
            entity['guildId'] = tango;
            entity['channelId'] = zulu;
            var _closure1_slot3 = entity;
 192:
            entity = undefined;
            return entity;
        }
    };
    mike['MESSAGE_CREATE'] = tango;
    tango = options.prototype;
    tango = Object.create(tango, {constructor: {value: options}});
    foxtrot = tango;
    yankee = mike;
    mike = new foxtrot[options](romeo, yankee, offset);
    mike = mike instanceof Object ? mike : tango;
    tango = 11;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/app_launcher/native/onboarding/stores/AppLauncherOnboardingStore.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();