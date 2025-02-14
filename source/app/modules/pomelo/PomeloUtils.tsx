// app/modules/pomelo/PomeloUtils.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    oscar = argBar;
    zulu = argFred;
    golf = argPlugh;
    var _closure1_slot0 = oscar;
    entity = argBaz;
    var _closure1_slot1 = entity;
    var _closure1_slot2 = golf;
    entity = function(argFoo, argBar) { // Original name: _createForOfIteratorHelperLoose
        _fun94289: for(var _fun94289_ip = 0; ; ) switch(_fun94289_ip) {
 0:
            zulu = argFoo;
            var _closure2_slot0 = zulu;
            report = global;
            mike = report.Symbol;
            tango = 'undefined';
            mike = typeof mike;
            mike = tango !== mike;
            if(!mike) { _fun94289_ip = 46; continue _fun94289 }
 30:
            tango = report.Symbol;
            tango = tango.iterator;
            mike = zulu[tango];
 46:
            if(mike) { _fun94289_ip = 55; continue _fun94289 }
 49:
            mike = zulu.@@iterator;
 55:
            if(mike) { _fun94289_ip = 345; continue _fun94289 }
 61:
            oscar = report.Array;
            tango = oscar.isArray;
            oscar = tango.bind(oscar)(zulu);
            tango = mike;
            if(oscar) { _fun94289_ip = 323; continue _fun94289 }
 86:
            options = undefined;
            oscar = undefined;
            if(!zulu) { _fun94289_ip = 283; continue _fun94289 }
 96:
            verify = 'string';
            golf = typeof zulu;
            if(!(verify !== golf)) { _fun94289_ip = 270; continue _fun94289 }
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
            if(!golf) { _fun94289_ip = 163; continue _fun94289 }
 158:
            golf = zulu.constructor;
 163:
            offset = verify;
            if(!golf) { _fun94289_ip = 179; continue _fun94289 }
 169:
            golf = zulu.constructor;
            offset = golf.name;
 179:
            golf = 'Map';
            if(!(golf !== offset)) { _fun94289_ip = 249; continue _fun94289 }
 187:
            golf = 'Set';
            if(!(golf !== offset)) { _fun94289_ip = 249; continue _fun94289 }
 195:
            golf = 'Arguments';
            if(!(golf !== offset)) { _fun94289_ip = 234; continue _fun94289 }
 205:
            verify = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            golf = verify.test;
            verify = golf.bind(verify)(offset);
            golf = undefined;
            if(!verify) { _fun94289_ip = 247; continue _fun94289 }
 234:
            verify = _closure1_slot10;
            golf = verify.bind(options)(zulu, options);
 247:
            _fun94289_ip = 265; continue _fun94289;
 249:
            offset = report.Array;
            verify = offset.from;
            golf = verify.bind(offset)(zulu);
 265:
            oscar = golf;
            _fun94289_ip = 283; continue _fun94289;
 270:
            golf = _closure1_slot10;
            oscar = golf.bind(options)(zulu, options);
 283:
            tango = oscar;
            if(tango) { _fun94289_ip = 323; continue _fun94289 }
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
            if(!tango) { _fun94289_ip = 330; continue _fun94289 }
 326:
            _closure2_slot0 = tango;
 330:
            tango = 0;
            var _closure2_slot1 = tango;
            entity = function() {
                _fun94290: for(var _fun94290_ip = 0; ; ) switch(_fun94290_ip) {
 0:
                    mike = _closure2_slot1;
                    entity = _closure2_slot0;
                    entity = entity.length;
                    if(!(!(mike >= entity))) { _fun94290_ip = 56; continue _fun94290 }
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
                    _fun94290_ip = 67; continue _fun94290;
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
    var _closure1_slot9 = entity;
    entity = function(argFoo, argBar) { // Original name: _arrayLikeToArray
        _fun94291: for(var _fun94291_ip = 0; ; ) switch(_fun94291_ip) {
 0:
            tango = argFoo;
            entity = null;
            zulu = undefined;
            entity = entity == zulu;
            if(entity) { _fun94291_ip = 23; continue _fun94291 }
 14:
            mike = tango.length;
            entity = zulu > mike;
 23:
            mike = undefined;
            if(!entity) { _fun94291_ip = 33; continue _fun94291 }
 28:
            mike = tango.length;
 33:
            entity = global;
            entity = entity.Array;
            entity = entity.bind(zulu)(mike);
            zulu = 0;
            report = zulu < mike;
            if(!report) { _fun94291_ip = 70; continue _fun94291 }
 55:
            report = tango[zulu];
            entity[zulu] = report;
            zulu = zulu + 1;
            if(zulu < mike) { _fun94291_ip = 55; continue _fun94291 }
 70:
            return entity;
        }
    };
    var _closure1_slot10 = entity;
    tango = function(argFoo, argBar) { // Original name: withoutCharacters
        tango = argFoo;
        mike = argBar;
        var _closure2_slot0 = mike;
        mike = tango.split;
        zulu = '';
        tango = mike.bind(tango)(zulu);
        mike = tango.filter;
        entity = function(argFoo) {
            report = argFoo;
            zulu = _closure2_slot0;
            mike = zulu.includes;
            tango = report.charCodeAt;
            entity = 0;
            entity = tango.bind(report)(entity);
            entity = mike.bind(zulu)(entity);
            entity = !entity;
            return entity;
        };
        mike = mike.bind(tango)(entity);
        entity = mike.join;
        entity = entity.bind(mike)(zulu);
        return entity;
    };
    var _closure1_slot11 = tango;
    entity = global;
    verify = entity.Object;
    options = verify.defineProperty;
    report = {};
    entity = true;
    report['value'] = entity;
    entity = '__esModule';
    entity = options.bind(verify)(zulu, entity, report);
    entity = 0;
    report = golf[entity];
    entity = undefined;
    report = oscar.bind(entity)(report);
    options = report.dirtyChars;
    var _closure1_slot3 = options;
    options = report.coalescePeriods;
    var _closure1_slot4 = options;
    report = report.CONTROL_CHARACTERS_CODE;
    var _closure1_slot5 = report;
    report = ['@', '#', ':'];
    var _closure1_slot6 = report;
    report = ['```', 'discord', 'hypesquad', 'system message', 'system mesage', 'sustem message', 'sustem mesage', 'clyde'];
    var _closure1_slot7 = report;
    report = ['discordtag', 'everyone', 'here', 'discord nitro', 'discord', 'snowsgiving'];
    var _closure1_slot8 = report;
    report = 8;
    report = golf[report];
    golf = oscar.bind(entity)(report);
    oscar = golf.fileFinishedImporting;
    report = 'modules/pomelo/PomeloUtils.tsx';
    report = oscar.bind(golf)(report);
    report = function(argFoo) { // Original name: getUserAvatarURLForPomelo
        _fun94294: for(var _fun94294_ip = 0; ; ) switch(_fun94294_ip) {
 0:
            entity = argFoo;
            report = arguments[1];
            tango = undefined;
            if(!(report === tango)) { _fun94294_ip = 14; continue _fun94294 }
 12:
            report = true;
 14:
            zulu = _closure1_slot1;
            oscar = _closure1_slot2;
            mike = 1;
            mike = oscar[mike];
            tango = zulu.bind(tango)(mike);
            zulu = tango.getUserAvatarURL;
            mike = {};
            oscar = entity.id;
            mike['id'] = oscar;
            oscar = entity.avatar;
            mike['avatar'] = oscar;
            entity = entity.bot;
            mike['bot'] = entity;
            entity = '0000';
            mike['discriminator'] = entity;
            entity = 80;
            entity = zulu.bind(tango)(mike, report, entity);
            return entity;
        }
    };
    zulu['getUserAvatarURLForPomelo'] = report;
    report = function(argFoo) { // Original name: getDefaultPomelo
        entity = argFoo;
        report = _closure1_slot0;
        tango = _closure1_slot2;
        zulu = 2;
        tango = tango[zulu];
        zulu = undefined;
        report = report.bind(zulu)(tango);
        tango = report.stripDiacritics;
        zulu = entity.username;
        oscar = tango.bind(report)(zulu);
        report = oscar.replace;
        zulu = _closure1_slot3;
        tango = '';
        oscar = report.bind(oscar)(zulu, tango);
        report = oscar.replace;
        zulu = _closure1_slot4;
        mike = '.';
        zulu = report.bind(oscar)(zulu, mike);
        mike = zulu.toLowerCase;
        zulu = mike.bind(zulu)();
        mike = entity.discriminator;
        entity = global;
        entity = entity.HermesInternal;
        entity = entity.concat;
        tango = entity.bind(tango)(zulu, mike);
        zulu = tango.substring;
        mike = 0;
        entity = 32;
        entity = zulu.bind(tango)(mike, entity);
        return entity;
    };
    zulu['getDefaultPomelo'] = report;
    zulu['withoutCharacters'] = tango;
    tango = function(argFoo) { // Original name: shouldSkipToEditUsername
        _fun94296: for(var _fun94296_ip = 0; ; ) switch(_fun94296_ip) {
 0:
            entity = argFoo;
            mike = entity.username;
            entity = mike.toLowerCase;
            report = entity.bind(mike)();
            zulu = _closure1_slot11;
            mike = _closure1_slot5;
            tango = undefined;
            mike = zulu.bind(tango)(report, mike);
            zulu = mike.length;
            mike = 2;
            if(!(!(zulu < mike))) { _fun94296_ip = 259; continue _fun94296 }
 52:
            zulu = _closure1_slot9;
            mike = _closure1_slot6;
            oscar = zulu.bind(tango)(mike);
            zulu = oscar.bind(tango)();
            mike = zulu.done;
            if(mike) { _fun94296_ip = 116; continue _fun94296 }
 77:
            golf = zulu.value;
            mike = report.includes;
            mike = mike.bind(report)(golf);
            if(mike) { _fun94296_ip = 112; continue _fun94296 }
 95:
            golf = oscar.bind(tango)();
            mike = golf.done;
            zulu = golf;
            if(mike) { _fun94296_ip = 116; continue _fun94296 }
 110:
            _fun94296_ip = 77; continue _fun94296;
 112:
            mike = true;
            return mike;
 116:
            zulu = _closure1_slot9;
            mike = _closure1_slot8;
            oscar = zulu.bind(tango)(mike);
            zulu = oscar.bind(tango)();
            mike = zulu.done;
            if(mike) { _fun94296_ip = 181; continue _fun94296 }
 141:
            golf = zulu.value;
            mike = golf.toLowerCase;
            mike = mike.bind(golf)();
            if(!(report !== mike)) { _fun94296_ip = 177; continue _fun94296 }
 160:
            golf = oscar.bind(tango)();
            mike = golf.done;
            zulu = golf;
            if(mike) { _fun94296_ip = 181; continue _fun94296 }
 175:
            _fun94296_ip = 141; continue _fun94296;
 177:
            mike = true;
            return mike;
 181:
            mike = _closure1_slot9;
            entity = _closure1_slot7;
            zulu = mike.bind(tango)(entity);
            mike = zulu.bind(tango)();
            entity = mike.done;
            if(entity) { _fun94296_ip = 255; continue _fun94296 }
 206:
            golf = mike.value;
            oscar = report.includes;
            entity = golf.toLowerCase;
            entity = entity.bind(golf)();
            entity = oscar.bind(report)(entity);
            if(entity) { _fun94296_ip = 251; continue _fun94296 }
 234:
            oscar = zulu.bind(tango)();
            entity = oscar.done;
            mike = oscar;
            if(entity) { _fun94296_ip = 255; continue _fun94296 }
 249:
            _fun94296_ip = 206; continue _fun94296;
 251:
            entity = true;
            return entity;
 255:
            entity = false;
            return entity;
 259:
            entity = true;
            return entity;
        }
    };
    zulu['shouldSkipToEditUsername'] = tango;
    tango = function(argFoo) { // Original name: formatPomeloForEditing
        mike = argFoo;
        entity = mike.toLowerCase;
        zulu = entity.bind(mike)();
        mike = zulu.replace;
        entity = /\s/g;
        tango = '';
        zulu = mike.bind(zulu)(entity, tango);
        mike = zulu.replace;
        entity = '@';
        entity = mike.bind(zulu)(entity, tango);
        return entity;
    };
    zulu['formatPomeloForEditing'] = tango;
    tango = function(argFoo) { // Original name: getMemberSince
        _fun94298: for(var _fun94298_ip = 0; ; ) switch(_fun94298_ip) {
 0:
            zulu = undefined;
            entity = undefined;
            report = _closure1_slot1;
            oscar = _closure1_slot2;
            tango = 3;
            tango = oscar[tango];
            oscar = report.bind(zulu)(tango);
            report = oscar.extractTimestamp;
            tango = argFoo;
            entity = report.bind(oscar)(tango);
 41: // try_start_0
            tango = _closure1_slot1;
            report = _closure1_slot2;
            mike = 4;
            mike = report[mike];
            mike = tango.bind(zulu)(mike);
            tango = global;
            report = tango.Date;
            golf = entity;
            tango = report.prototype;
            tango = Object.create(tango, {constructor: {value: report}});
            options = tango;
            entity = new options[report](golf, oscar);
            entity = entity instanceof Object ? entity : tango;
            zulu = mike.bind(zulu)(entity);
            mike = zulu.format;
            entity = 'MMM DD, YYYY';
            entity = mike.bind(zulu)(entity);
 113: // try_end0
            return entity;
 115: // catch_target0
            CatchBlockStart(arg_register=0);
            entity = null;
            return entity;
        }
    };
    zulu['getMemberSince'] = tango;
    tango = function(argFoo) { // Original name: formatUsernameLiveCheckValidation
        golf = _closure1_slot0;
        options = _closure1_slot2;
        mike = 5;
        zulu = options[mike];
        oscar = undefined;
        report = golf.bind(oscar)(zulu);
        tango = report.match;
        zulu = argFoo;
        offset = tango.bind(report)(zulu);
        verify = offset.with;
        report = {};
        zulu = true;
        report['rateLimited'] = zulu;
        tango = function() {
            entity = {};
            oscar = _closure1_slot0;
            golf = _closure1_slot2;
            mike = 6;
            mike = golf[mike];
            report = undefined;
            mike = oscar.bind(report)(mike);
            mike = mike.NameValidationState;
            mike = mike.RATE_LIMIT;
            entity['type'] = mike;
            mike = 7;
            zulu = golf[mike];
            zulu = oscar.bind(report)(zulu);
            tango = zulu.intl;
            zulu = tango.string;
            mike = golf[mike];
            mike = oscar.bind(report)(mike);
            mike = mike.t;
            mike = mike.T15lqq;
            mike = zulu.bind(tango)(mike);
            entity['message'] = mike;
            return entity;
        };
        offset = verify.bind(offset)(report, tango);
        verify = offset.with;
        report = {};
        tango = options[mike];
        tango = golf.bind(oscar)(tango);
        romeo = tango.P;
        yankee = romeo.not;
        tango = options[mike];
        tango = golf.bind(oscar)(tango);
        tango = tango.P;
        tango = tango.nullish;
        tango = yankee.bind(romeo)(tango);
        report['error'] = tango;
        tango = function(argFoo) {
            entity = argFoo;
            mike = entity.error;
            entity = {};
            report = _closure1_slot0;
            tango = _closure1_slot2;
            zulu = 6;
            tango = tango[zulu];
            zulu = undefined;
            zulu = report.bind(zulu)(tango);
            zulu = zulu.NameValidationState;
            zulu = zulu.ERROR;
            entity['type'] = zulu;
            entity['message'] = mike;
            return entity;
        };
        offset = verify.bind(offset)(report, tango);
        verify = offset.with;
        report = {};
        tango = false;
        report['taken'] = tango;
        tango = function() {
            entity = {};
            oscar = _closure1_slot0;
            golf = _closure1_slot2;
            mike = 6;
            mike = golf[mike];
            report = undefined;
            mike = oscar.bind(report)(mike);
            mike = mike.NameValidationState;
            mike = mike.AVAILABLE;
            entity['type'] = mike;
            mike = 7;
            zulu = golf[mike];
            zulu = oscar.bind(report)(zulu);
            tango = zulu.intl;
            zulu = tango.string;
            mike = golf[mike];
            mike = oscar.bind(report)(mike);
            mike = mike.t;
            mike = mike.PgfBS0;
            mike = zulu.bind(tango)(mike);
            entity['message'] = mike;
            return entity;
        };
        verify = verify.bind(offset)(report, tango);
        report = verify.with;
        tango = {};
        tango['taken'] = zulu;
        zulu = function() {
            entity = {};
            oscar = _closure1_slot0;
            golf = _closure1_slot2;
            mike = 6;
            mike = golf[mike];
            report = undefined;
            mike = oscar.bind(report)(mike);
            mike = mike.NameValidationState;
            mike = mike.ERROR;
            entity['type'] = mike;
            mike = 7;
            zulu = golf[mike];
            zulu = oscar.bind(report)(zulu);
            tango = zulu.intl;
            zulu = tango.string;
            mike = golf[mike];
            mike = oscar.bind(report)(mike);
            mike = mike.t;
            mike = mike.mCrAUV;
            mike = zulu.bind(tango)(mike);
            entity['message'] = mike;
            return entity;
        };
        report = report.bind(verify)(tango, zulu);
        tango = report.with;
        zulu = {};
        mike = options[mike];
        mike = golf.bind(oscar)(mike);
        mike = mike.P;
        mike = mike.nullish;
        zulu['error'] = mike;
        mike = function() {
            entity = {};
            tango = _closure1_slot0;
            zulu = _closure1_slot2;
            mike = 6;
            zulu = zulu[mike];
            mike = undefined;
            mike = tango.bind(mike)(zulu);
            mike = mike.NameValidationState;
            mike = mike.INTERNAL_ERROR;
            entity['type'] = mike;
            mike = '';
            entity['message'] = mike;
            return entity;
        };
        zulu = tango.bind(report)(zulu, mike);
        mike = zulu.otherwise;
        entity = function() {
            entity = undefined;
            return entity;
        };
        entity = mike.bind(zulu)(entity);
        return entity;
    };
    zulu['formatUsernameLiveCheckValidation'] = tango;
    mike = function(argFoo) { // Original name: getLocalizedForcedUUDate
        entity = global;
        report = entity.Date;
        entity = report.prototype;
        mike = Object.create(entity, {constructor: {value: report}});
        options = 2024;
        golf = 2;
        oscar = 4;
        verify = mike;
        entity = new verify[report](options, golf, oscar, report);
        tango = entity instanceof Object ? entity : mike;
        zulu = tango.toLocaleDateString;
        mike = argFoo;
        entity = {'month': 'long', 'day': 'numeric', 'year': 'numeric'};
        entity = zulu.bind(tango)(mike, entity);
        return entity;
    };
    zulu['getLocalizedForcedUUDate'] = mike;
    return entity;
})();