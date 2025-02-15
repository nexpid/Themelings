// app/modules/opt_in_channels/FavoritesSuggestionStore.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    oscar = argBaz;
    zulu = argFred;
    report = argPlugh;
    entity = function(argFoo, argBar, argBaz) { // Original name: _callSuper
        _fun60022: for(var _fun60022_ip = 0; ; ) switch(_fun60022_ip) {
 0:
            tango = argFoo;
            oscar = argBaz;
            mike = _closure1_slot3;
            zulu = undefined;
            entity = argBar;
            verify = mike.bind(zulu)(entity);
            mike = _closure1_slot2;
            entity = _closure1_slot12;
            entity = entity.bind(zulu)();
            if(entity) { _fun60022_ip = 51; continue _fun60022 }
 38:
            entity = verify.apply;
            entity = entity.bind(verify)(tango, oscar);
            _fun60022_ip = 92; continue _fun60022;
 51:
            golf = global;
            options = golf.Reflect;
            golf = options.construct;
            if(oscar) { _fun60022_ip = 71; continue _fun60022 }
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
    var _closure1_slot11 = entity;
    entity = function() { // Original name: _isNativeReflectConstruct
        _fun60023: for(var _fun60023_ip = 0; ; ) switch(_fun60023_ip) {
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
            _fun60023_ip = 74; continue _fun60023;
 72: // catch_target0
            CatchBlockStart(arg_register=1);
 74:
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
    entity = function() { // Original name: handleChange
        _fun60026: for(var _fun60026_ip = 0; ; ) switch(_fun60026_ip) {
 0:
            zulu = _closure1_slot6;
            entity = zulu.getChannelId;
            tango = entity.bind(zulu)();
            report = null;
            if(!(report != tango)) { _fun60026_ip = 324; continue _fun60026 }
 26:
            zulu = _closure1_slot5;
            entity = zulu.getChannel;
            entity = entity.bind(zulu)(tango);
            if(!(report != entity)) { _fun60026_ip = 324; continue _fun60026 }
 47:
            zulu = entity.guild_id;
            if(!(report != zulu)) { _fun60026_ip = 324; continue _fun60026 }
 59:
            zulu = entity.guild_id;
            oscar = _closure1_slot10;
            oscar = oscar[tango];
            if(!(report == oscar)) { _fun60026_ip = 86; continue _fun60026 }
 76:
            golf = _closure1_slot10;
            oscar = 0;
            golf[tango] = oscar;
 86:
            oscar = entity.isThread;
            oscar = oscar.bind(entity)();
            if(oscar) { _fun60026_ip = 328; continue _fun60026 }
 102:
            golf = _closure1_slot7;
            oscar = golf.isOptInEnabled;
            oscar = oscar.bind(golf)(zulu);
            if(!oscar) { _fun60026_ip = 147; continue _fun60026 }
 120:
            golf = _closure1_slot7;
            oscar = golf.isChannelOrParentOptedIn;
            entity = entity.id;
            entity = oscar.bind(golf)(zulu, entity);
            if(!entity) { _fun60026_ip = 328; continue _fun60026 }
 147:
            oscar = _closure1_slot10;
            entity = oscar[tango];
            entity = entity + 1;
            oscar[tango] = entity;
            entity = _closure1_slot8;
            entity = entity[zulu];
            if(!(report == entity)) { _fun60026_ip = 210; continue _fun60026 }
 174:
            oscar = _closure1_slot8;
            entity = global;
            entity = entity.Set;
            golf = entity.prototype;
            golf = Object.create(golf, {constructor: {value: entity}});
            offset = golf;
            entity = new offset[entity](verify);
            entity = entity instanceof Object ? entity : golf;
            oscar[zulu] = entity;
 210:
            oscar = _closure1_slot7;
            entity = oscar.isFavorite;
            entity = entity.bind(oscar)(zulu, tango);
            if(entity) { _fun60026_ip = 306; continue _fun60026 }
 229:
            entity = _closure1_slot9;
            entity = entity[zulu];
            if(!(report != entity)) { _fun60026_ip = 264; continue _fun60026 }
 241:
            entity = _closure1_slot9;
            oscar = entity[zulu];
            entity = oscar.has;
            oscar = entity.bind(oscar)(tango);
            entity = undefined;
            if(oscar) { _fun60026_ip = 304; continue _fun60026 }
 264:
            oscar = _closure1_slot10;
            golf = oscar[tango];
            oscar = 50;
            oscar = golf > oscar;
            entity = undefined;
            if(!oscar) { _fun60026_ip = 304; continue _fun60026 }
 284:
            oscar = _closure1_slot8;
            golf = oscar[zulu];
            oscar = golf.add;
            oscar = oscar.bind(golf)(tango);
            entity = true;
 304:
            return entity;
 306:
            entity = _closure1_slot8;
            oscar = entity[zulu];
            entity = oscar.delete;
            entity = entity.bind(oscar)(tango);
 324:
            entity = undefined;
            return entity;
 328:
            entity = _closure1_slot10;
            entity = delete entity[tango];
            entity = _closure1_slot8;
            entity = entity[zulu];
            entity = report != entity;
            if(!entity) { _fun60026_ip = 369; continue _fun60026 }
 351:
            mike = _closure1_slot8;
            zulu = mike[zulu];
            mike = zulu.delete;
            entity = mike.bind(zulu)(tango);
 369:
            entity = undefined;
            return entity;
        }
    };
    var _closure1_slot13 = entity;
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
    mike = 5;
    mike = report[mike];
    mike = oscar.bind(entity)(mike);
    var _closure1_slot5 = mike;
    mike = 6;
    mike = report[mike];
    mike = oscar.bind(entity)(mike);
    var _closure1_slot6 = mike;
    mike = 7;
    mike = report[mike];
    mike = oscar.bind(entity)(mike);
    var _closure1_slot7 = mike;
    mike = {};
    var _closure1_slot8 = mike;
    mike = {};
    var _closure1_slot9 = mike;
    mike = {};
    var _closure1_slot10 = mike;
    mike = 8;
    mike = report[mike];
    mike = oscar.bind(entity)(mike);
    golf = mike.PersistedStore;
    mike = function(argFoo) {
        tango = function() { // Original name: FavoritesSuggestionStore
            report = this;
            tango = undefined;
            entity = undefined;
            oscar = _closure1_slot0;
            zulu = _closure2_slot0;
            oscar = oscar.bind(tango)(report, zulu);
            mike = _closure1_slot11;
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
            _fun60029: for(var _fun60029_ip = 0; ; ) switch(_fun60029_ip) {
 0:
                entity = argFoo;
                oscar = this;
                report = oscar.syncWith;
                zulu = _closure1_slot6;
                tango = new Array(1);
                tango[0] = zulu;
                zulu = _closure1_slot13;
                zulu = report.bind(oscar)(tango, zulu);
                zulu = null;
                if(!(zulu != entity)) { _fun60029_ip = 272; continue _fun60029 }
 46:
                yankee = entity.suggestedChannels;
                offset = entity.dismissedSuggestions;
                entity = entity.channelOpensByChannelId;
                if(!(zulu != yankee)) { _fun60029_ip = 163; continue _fun60029 }
 68:
                options = yankee;
                tango = global;
                for(report in options)
 81:
                {
 90:
                    backup = report;
                    foxtrot = _closure1_slot8;
                    sizing = tango.Set;
                    result = yankee[backup];
                    kilo = sizing.prototype;
                    kilo = Object.create(kilo, {constructor: {value: sizing}});
                    echo = kilo;
                    romeo = new echo[sizing](result, output);
                    romeo = romeo instanceof Object ? romeo : kilo;
                    if(!(zulu == romeo)) { _fun60029_ip = 157; continue _fun60029 }
 131:
                    kilo = tango.Set;
                    sizing = kilo.prototype;
                    sizing = Object.create(sizing, {constructor: {value: kilo}});
                    echo = sizing;
                    kilo = new echo[kilo](result);
                    romeo = kilo instanceof Object ? kilo : sizing;
 157:
                    foxtrot[backup] = romeo;
                    _fun60029_ip = 81; continue _fun60029;
                }
 163:
                if(!(zulu != offset)) { _fun60029_ip = 262; continue _fun60029 }
 167:
                options = offset;
                tango = global;
                for(report in options)
 180:
                {
 189:
                    foxtrot = report;
                    romeo = _closure1_slot9;
                    kilo = tango.Set;
                    result = offset[foxtrot];
                    backup = kilo.prototype;
                    backup = Object.create(backup, {constructor: {value: kilo}});
                    echo = backup;
                    yankee = new echo[kilo](result, output);
                    yankee = yankee instanceof Object ? yankee : backup;
                    if(!(zulu == yankee)) { _fun60029_ip = 256; continue _fun60029 }
 230:
                    backup = tango.Set;
                    kilo = backup.prototype;
                    kilo = Object.create(kilo, {constructor: {value: backup}});
                    echo = kilo;
                    backup = new echo[backup](result);
                    yankee = backup instanceof Object ? backup : kilo;
 256:
                    romeo[foxtrot] = yankee;
                    _fun60029_ip = 180; continue _fun60029;
                }
 262:
                if(!(zulu == entity)) { _fun60029_ip = 268; continue _fun60029 }
 266:
                entity = {};
 268:
                _closure1_slot10 = entity;
 272:
                entity = undefined;
                return entity;
            }
        };
        report['value'] = entity;
        entity = new Array(3);
        entity[0] = report;
        report = {};
        golf = 'getSuggestedChannelId';
        report['key'] = golf;
        golf = function() { // Original name: value
            entity = null;
            return entity;
        };
        report['value'] = golf;
        entity[1] = report;
        report = {};
        golf = 'getState';
        report['key'] = golf;
        oscar = function() { // Original name: value
            entity = {};
            mike = {};
            entity['suggestedChannels'] = mike;
            mike = {};
            entity['dismissedSuggestions'] = mike;
            mike = {};
            entity['channelOpensByChannelId'] = mike;
            return entity;
        };
        report['value'] = oscar;
        entity[2] = report;
        entity = mike.bind(zulu)(tango, entity);
        return entity;
    };
    golf = mike.bind(entity)(golf);
    mike = 'FavoritesSuggestionStore';
    golf['displayName'] = mike;
    golf['persistKey'] = mike;
    mike = 9;
    mike = report[mike];
    yankee = oscar.bind(entity)(mike);
    mike = {};
    tango = function(argFoo) { // Original name: handleFavoriteSuggestionDimissed
        _fun60032: for(var _fun60032_ip = 0; ; ) switch(_fun60032_ip) {
 0:
            entity = argFoo;
            mike = entity.guildId;
            zulu = entity.channelId;
            tango = _closure1_slot9;
            report = tango[mike];
            tango = null;
            if(!(tango == report)) { _fun60032_ip = 66; continue _fun60032 }
 30:
            report = _closure1_slot9;
            tango = global;
            tango = tango.Set;
            oscar = tango.prototype;
            oscar = Object.create(oscar, {constructor: {value: tango}});
            options = oscar;
            tango = new options[tango](golf);
            tango = tango instanceof Object ? tango : oscar;
            report[mike] = tango;
 66:
            tango = _closure1_slot9;
            report = tango[mike];
            tango = report.add;
            tango = tango.bind(report)(zulu);
            entity = _closure1_slot8;
            mike = entity[mike];
            entity = mike.delete;
            entity = entity.bind(mike)(zulu);
            entity = true;
            return entity;
        }
    };
    mike['DISMISS_FAVORITE_SUGGESTION'] = tango;
    tango = golf.prototype;
    tango = Object.create(tango, {constructor: {value: golf}});
    romeo = tango;
    offset = mike;
    mike = new romeo[golf](yankee, offset, verify);
    mike = mike instanceof Object ? mike : tango;
    tango = 10;
    report = report[tango];
    tango = argBar;
    oscar = tango.bind(entity)(report);
    report = oscar.fileFinishedImporting;
    tango = 'modules/opt_in_channels/FavoritesSuggestionStore.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();