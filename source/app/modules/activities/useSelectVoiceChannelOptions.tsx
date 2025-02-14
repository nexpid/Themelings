// app/modules/activities/useSelectVoiceChannelOptions.tsx
export default (function(argFoo, argBar, argBaz, argCorge, argGrault, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscar;
    entity = function(argFoo, argBar) { // Original name: _createForOfIteratorHelperLoose
        _fun92091: for(var _fun92091_ip = 0; ; ) switch(_fun92091_ip) {
 0:
            zulu = argFoo;
            var _closure2_slot0 = zulu;
            report = global;
            mike = report.Symbol;
            tango = 'undefined';
            mike = typeof mike;
            mike = tango !== mike;
            if(!mike) { _fun92091_ip = 46; continue _fun92091 }
 30:
            tango = report.Symbol;
            tango = tango.iterator;
            mike = zulu[tango];
 46:
            if(mike) { _fun92091_ip = 55; continue _fun92091 }
 49:
            mike = zulu.@@iterator;
 55:
            if(mike) { _fun92091_ip = 345; continue _fun92091 }
 61:
            oscar = report.Array;
            tango = oscar.isArray;
            oscar = tango.bind(oscar)(zulu);
            tango = mike;
            if(oscar) { _fun92091_ip = 323; continue _fun92091 }
 86:
            options = undefined;
            oscar = undefined;
            if(!zulu) { _fun92091_ip = 283; continue _fun92091 }
 96:
            verify = 'string';
            golf = typeof zulu;
            if(!(verify !== golf)) { _fun92091_ip = 270; continue _fun92091 }
 110:
            golf = {};
            verify = golf.toString;
            golf = verify.call;
            yankee = golf.bind(verify)(zulu);
            offset = yankee.slice;
            verify = 8;
            golf = -1;
            verify = offset.bind(yankee)(verify, golf);
            golf = 'Object';
            golf = golf === verify;
            if(!golf) { _fun92091_ip = 163; continue _fun92091 }
 158:
            golf = zulu.constructor;
 163:
            offset = verify;
            if(!golf) { _fun92091_ip = 179; continue _fun92091 }
 169:
            golf = zulu.constructor;
            offset = golf.name;
 179:
            golf = 'Map';
            if(!(golf !== offset)) { _fun92091_ip = 249; continue _fun92091 }
 187:
            golf = 'Set';
            if(!(golf !== offset)) { _fun92091_ip = 249; continue _fun92091 }
 195:
            golf = 'Arguments';
            if(!(golf !== offset)) { _fun92091_ip = 234; continue _fun92091 }
 205:
            verify = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            golf = verify.test;
            verify = golf.bind(verify)(offset);
            golf = undefined;
            if(!verify) { _fun92091_ip = 247; continue _fun92091 }
 234:
            verify = _closure1_slot11;
            golf = verify.bind(options)(zulu, options);
 247:
            _fun92091_ip = 265; continue _fun92091;
 249:
            offset = report.Array;
            verify = offset.from;
            golf = verify.bind(offset)(zulu);
 265:
            oscar = golf;
            _fun92091_ip = 283; continue _fun92091;
 270:
            golf = _closure1_slot11;
            oscar = golf.bind(options)(zulu, options);
 283:
            tango = oscar;
            if(tango) { _fun92091_ip = 323; continue _fun92091 }
 289:
            golf = report.TypeError;
            report = golf.prototype;
            oscar = Object.create(report, {constructor: {value: golf}});
            foxtrot = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
            backup = oscar;
            report = new backup[golf](foxtrot, romeo);
            report = report instanceof Object ? report : oscar;
            throw report;
 323:
            if(!tango) { _fun92091_ip = 330; continue _fun92091 }
 326:
            _closure2_slot0 = tango;
 330:
            tango = 0;
            var _closure2_slot1 = tango;
            entity = function() {
                _fun92092: for(var _fun92092_ip = 0; ; ) switch(_fun92092_ip) {
 0:
                    mike = _closure2_slot1;
                    entity = _closure2_slot0;
                    entity = entity.length;
                    if(!(!(mike >= entity))) { _fun92092_ip = 56; continue _fun92092 }
 20:
                    entity = {};
                    mike = false;
                    entity['done'] = mike;
                    zulu = _closure2_slot0;
                    mike = _closure2_slot1;
                    mike = parseFloat(mike);
                    tango = mike + 1;
                    _closure2_slot1 = tango;
                    mike = zulu[mike];
                    entity['value'] = mike;
                    _fun92092_ip = 67; continue _fun92092;
 56:
                    mike = {};
                    zulu = true;
                    mike['done'] = zulu;
                    entity = mike;
 67:
                    return entity;
                }
            };
            return entity;
 345:
            entity = mike.call;
            zulu = entity.bind(mike)(zulu);
            mike = zulu.next;
            entity = mike.bind;
            entity = entity.bind(mike)(zulu);
            return entity;
        }
    };
    var _closure1_slot10 = entity;
    entity = function(argFoo, argBar) { // Original name: _arrayLikeToArray
        _fun92093: for(var _fun92093_ip = 0; ; ) switch(_fun92093_ip) {
 0:
            tango = argFoo;
            entity = null;
            zulu = undefined;
            entity = entity == zulu;
            if(entity) { _fun92093_ip = 23; continue _fun92093 }
 14:
            mike = tango.length;
            entity = zulu > mike;
 23:
            mike = undefined;
            if(!entity) { _fun92093_ip = 33; continue _fun92093 }
 28:
            mike = tango.length;
 33:
            entity = global;
            entity = entity.Array;
            entity = entity.bind(zulu)(mike);
            zulu = 0;
            report = zulu < mike;
            if(!report) { _fun92093_ip = 70; continue _fun92093 }
 55:
            report = tango[zulu];
            entity[zulu] = report;
            zulu = zulu + 1;
            if(zulu < mike) { _fun92093_ip = 55; continue _fun92093 }
 70:
            return entity;
        }
    };
    var _closure1_slot11 = entity;
    entity = function(argFoo, argBar, argBaz, argCorge, argGrault) { // Original name: canLaunchGuildActivity
        _fun92094: for(var _fun92094_ip = 0; ; ) switch(_fun92094_ip) {
 0:
            entity = argFoo;
            tango = _closure1_slot0;
            zulu = _closure1_slot1;
            oscar = 8;
            zulu = zulu[oscar];
            report = undefined;
            golf = tango.bind(report)(zulu);
            tango = golf.getEmbeddedActivityLaunchability;
            zulu = {};
            options = entity.id;
            zulu['channelId'] = options;
            options = argBar;
            zulu['ChannelStore'] = options;
            options = argBaz;
            zulu['GuildStore'] = options;
            options = argCorge;
            zulu['PermissionStore'] = options;
            options = argGrault;
            zulu['VoiceStateStore'] = options;
            zulu = tango.bind(golf)(zulu);
            tango = entity.type;
            entity = _closure1_slot9;
            entity = entity.GUILD_VOICE;
            entity = tango === entity;
            if(!entity) { _fun92094_ip = 137; continue _fun92094 }
 104:
            tango = _closure1_slot0;
            mike = _closure1_slot1;
            mike = mike[oscar];
            mike = tango.bind(report)(mike);
            mike = mike.EmbeddedActivityLaunchability;
            mike = mike.CAN_LAUNCH;
            entity = zulu === mike;
 137:
            return entity;
        }
    };
    var _closure1_slot12 = entity;
    entity = function(argFoo, argBar) { // Original name: areChannelSelectOptionsEqual
        _fun92095: for(var _fun92095_ip = 0; ; ) switch(_fun92095_ip) {
 0:
            tango = argFoo;
            zulu = argBar;
            mike = tango.length;
            entity = zulu.length;
            if(!(mike === entity)) { _fun92095_ip = 96; continue _fun92095 }
 20:
            entity = tango.length;
            mike = 0;
            entity = mike < entity;
            if(!entity) { _fun92095_ip = 88; continue _fun92095 }
 34:
            entity = tango[mike];
            entity = entity.value;
            entity = entity.channel;
            report = entity.id;
            entity = zulu[mike];
            entity = entity.value;
            entity = entity.channel;
            entity = entity.id;
            if(!(report === entity)) { _fun92095_ip = 92; continue _fun92095 }
 76:
            mike = mike + 1;
            entity = tango.length;
            if(mike < entity) { _fun92095_ip = 34; continue _fun92095 }
 88:
            entity = true;
            return entity;
 92:
            entity = false;
            return entity;
 96:
            entity = false;
            return entity;
        }
    };
    var _closure1_slot13 = entity;
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
    var _closure1_slot2 = tango;
    tango = 1;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot3 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot4 = tango;
    tango = 3;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot5 = tango;
    tango = 4;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot6 = tango;
    tango = 5;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot7 = tango;
    tango = 6;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot8 = tango;
    tango = 7;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.ChannelTypes;
    var _closure1_slot9 = tango;
    tango = 11;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/activities/useSelectVoiceChannelOptions.tsx';
    tango = report.bind(oscar)(tango);
    tango = function(argFoo) { // Original name: getActivityVoiceChannelSuggestion
        _fun92096: for(var _fun92096_ip = 0; ; ) switch(_fun92096_ip) {
 0:
            entity = argFoo;
            verify = entity.guildId;
            zulu = entity.allowGdmActivityChannelSuggestion;
            oscar = undefined;
            if(!(zulu === oscar)) { _fun92096_ip = 22; continue _fun92096 }
 20:
            zulu = false;
 22:
            mike = null;
            if(!(mike == verify)) { _fun92096_ip = 33; continue _fun92096 }
 28:
            if(zulu) { _fun92096_ip = 33; continue _fun92096 }
 31:
            return mike;
 33:
            tango = _closure1_slot6;
            entity = tango.getVoiceChannelId;
            report = entity.bind(tango)();
            tango = _closure1_slot2;
            entity = tango.getChannel;
            entity = entity.bind(tango)(report);
            if(!(mike != entity)) { _fun92096_ip = 86; continue _fun92096 }
 68:
            tango = entity.guild_id;
            if(!(mike == tango)) { _fun92096_ip = 395; continue _fun92096 }
 80:
            if(zulu) { _fun92096_ip = 395; continue _fun92096 }
 86:
            golf = new Array(0);
            zulu = global;
            report = zulu.Object;
            tango = report.values;
            options = _closure1_slot3;
            zulu = options.getCategories;
            zulu = zulu.bind(options)(verify);
            offset = tango.bind(report)(zulu);
            zulu = offset.length;
            tango = 0;
            zulu = tango < zulu;
            verify = 9;
            options = 0;
            report = undefined;
            if(!zulu) { _fun92096_ip = 329; continue _fun92096 }
 147:
            romeo = _closure1_slot10;
            zulu = offset[options];
            foxtrot = romeo.bind(oscar)(zulu);
            romeo = foxtrot.bind(oscar)();
            zulu = romeo.done;
            if(zulu) { _fun92096_ip = 314; continue _fun92096 }
 175:
            backup = romeo.value;
            echo = _closure1_slot12;
            sequence = backup.channel;
            vacuum = _closure1_slot2;
            control = _closure1_slot4;
            source = _closure1_slot5;
            update = _closure1_slot7;
            config = undefined;
            zulu = config[echo](sequence, vacuum, control, source, update, echo);
            if(!zulu) { _fun92096_ip = 293; continue _fun92096 }
 214:
            kilo = golf.push;
            zulu = {};
            sizing = backup.channel;
            zulu['channel'] = sizing;
            result = _closure1_slot8;
            output = result.getVoiceStatesForChannel;
            sizing = backup.channel;
            result = output.bind(result)(sizing);
            output = result.filter;
            echo = _closure1_slot0;
            sizing = _closure1_slot1;
            sizing = sizing[verify];
            sizing = echo.bind(oscar)(sizing);
            sizing = sizing.isNotNullish;
            sizing = output.bind(result)(sizing);
            zulu['users'] = sizing;
            zulu = kilo.bind(golf)(zulu);
 293:
            kilo = foxtrot.bind(oscar)();
            zulu = kilo.done;
            romeo = kilo;
            report = backup;
            if(!zulu) { _fun92096_ip = 175; continue _fun92096 }
 314:
            options = options + 1;
            zulu = offset.length;
            if(options < zulu) { _fun92096_ip = 147; continue _fun92096 }
 329:
            report = golf.sort;
            zulu = function(argFoo, argBar) {
                _fun92097: for(var _fun92097_ip = 0; ; ) switch(_fun92097_ip) {
 0:
                    entity = argFoo;
                    entity = entity.users;
                    mike = entity.length;
                    entity = argBar;
                    entity = entity.users;
                    entity = entity.length;
                    mike = mike > entity;
                    entity = 1;
                    if(!mike) { _fun92097_ip = 44; continue _fun92097 }
 38:
                    entity = -1;
 44:
                    return entity;
                }
            };
            zulu = report.bind(golf)(zulu);
            tango = zulu[tango];
            report = mike == tango;
            zulu = undefined;
            if(report) { _fun92096_ip = 381; continue _fun92096 }
 362:
            tango = tango.channel;
            report = mike == tango;
            zulu = undefined;
            if(report) { _fun92096_ip = 381; continue _fun92096 }
 376:
            zulu = tango.id;
 381:
            tango = mike != zulu;
            mike = null;
            if(!tango) { _fun92096_ip = 393; continue _fun92096 }
 390:
            mike = zulu;
 393:
            return mike;
 395:
            entity = entity.id;
            return entity;
        }
    };
    zulu['getActivityVoiceChannelSuggestion'] = tango;
    mike = function(argFoo) { // Original name: useSelectVoiceChannelOptions
        golf = argFoo;
        var _closure2_slot0 = golf;
        report = _closure1_slot0;
        tango = _closure1_slot1;
        zulu = 10;
        tango = tango[zulu];
        zulu = undefined;
        oscar = report.bind(zulu)(tango);
        report = oscar.useStateFromStores;
        zulu = _closure1_slot3;
        tango = new Array(6);
        tango[0] = zulu;
        zulu = _closure1_slot2;
        tango[1] = zulu;
        zulu = _closure1_slot4;
        tango[2] = zulu;
        zulu = _closure1_slot5;
        tango[3] = zulu;
        zulu = _closure1_slot7;
        tango[4] = zulu;
        zulu = _closure1_slot8;
        tango[5] = zulu;
        zulu = new Array(1);
        zulu[0] = golf;
        options = _closure1_slot13;
        offset = function() {
            _fun92099: for(var _fun92099_ip = 0; ; ) switch(_fun92099_ip) {
 0:
                tango = _closure2_slot0;
                zulu = null;
                if(!(zulu != tango)) { _fun92099_ip = 117; continue _fun92099 }
 15:
                tango = new Array(0);
                var _closure3_slot0 = tango;
                zulu = global;
                report = zulu.Object;
                zulu = report.values;
                golf = _closure1_slot3;
                oscar = golf.getCategories;
                mike = _closure2_slot0;
                mike = oscar.bind(golf)(mike);
                report = zulu.bind(report)(mike);
                zulu = report.forEach;
                mike = function(argFoo) {
                    zulu = argFoo;
                    mike = zulu.forEach;
                    entity = function(argFoo) {
                        _fun92101: for(var _fun92101_ip = 0; ; ) switch(_fun92101_ip) {
 0:
                            entity = argFoo;
                            tango = entity.channel;
                            golf = _closure1_slot12;
                            yankee = _closure1_slot2;
                            offset = _closure1_slot4;
                            verify = _closure1_slot5;
                            options = _closure1_slot7;
                            entity = undefined;
                            foxtrot = undefined;
                            romeo = tango;
                            mike = foxtrot[golf](romeo, yankee, offset, verify, options, golf);
                            if(!mike) { _fun92101_ip = 62; continue _fun92101 }
 45:
                            zulu = _closure3_slot0;
                            mike = zulu.push;
                            mike = mike.bind(zulu)(tango);
 62:
                            return entity;
                        }
                    };
                    entity = mike.bind(zulu)(entity);
                    entity = undefined;
                    return entity;
                };
                mike = zulu.bind(report)(mike);
                zulu = tango.map;
                mike = function(argFoo) {
                    mike = argFoo;
                    entity = {};
                    zulu = {};
                    zulu['channel'] = mike;
                    oscar = _closure1_slot8;
                    report = oscar.getVoiceStatesForChannel;
                    oscar = report.bind(oscar)(mike);
                    report = oscar.filter;
                    options = _closure1_slot0;
                    golf = _closure1_slot1;
                    tango = 9;
                    golf = golf[tango];
                    tango = undefined;
                    tango = options.bind(tango)(golf);
                    tango = tango.isNotNullish;
                    tango = report.bind(oscar)(tango);
                    zulu['users'] = tango;
                    entity['value'] = zulu;
                    mike = mike.name;
                    entity['label'] = mike;
                    return entity;
                };
                zulu = zulu.bind(tango)(mike);
                mike = zulu.sort;
                entity = function(argFoo, argBar) {
                    _fun92103: for(var _fun92103_ip = 0; ; ) switch(_fun92103_ip) {
 0:
                        entity = argFoo;
                        entity = entity.value;
                        entity = entity.users;
                        mike = entity.length;
                        entity = argBar;
                        entity = entity.value;
                        entity = entity.users;
                        entity = entity.length;
                        mike = mike > entity;
                        entity = 1;
                        if(!mike) { _fun92103_ip = 54; continue _fun92103 }
 48:
                        entity = -1;
 54:
                        return entity;
                    }
                };
                entity = mike.bind(zulu)(entity);
                return entity;
 117:
                entity = new Array(0);
                return entity;
            }
        };
        romeo = oscar;
        yankee = tango;
        verify = zulu;
        entity = romeo[report](yankee, offset, verify, options, golf);
        return entity;
    };
    zulu['useSelectVoiceChannelOptions'] = mike;
    return entity;
})();