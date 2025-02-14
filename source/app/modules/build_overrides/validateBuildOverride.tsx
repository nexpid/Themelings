// app/modules/build_overrides/validateBuildOverride.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golf;
    var _closure1_slot2 = oscar;
    entity = function(argFoo, argBar) { // Original name: _createForOfIteratorHelperLoose
        _fun70389: for(var _fun70389_ip = 0; ; ) switch(_fun70389_ip) {
 0:
            zulu = argFoo;
            var _closure2_slot0 = zulu;
            report = global;
            mike = report.Symbol;
            tango = 'undefined';
            mike = typeof mike;
            mike = tango !== mike;
            if(!mike) { _fun70389_ip = 46; continue _fun70389 }
 30:
            tango = report.Symbol;
            tango = tango.iterator;
            mike = zulu[tango];
 46:
            if(mike) { _fun70389_ip = 55; continue _fun70389 }
 49:
            mike = zulu.@@iterator;
 55:
            if(mike) { _fun70389_ip = 345; continue _fun70389 }
 61:
            oscar = report.Array;
            tango = oscar.isArray;
            oscar = tango.bind(oscar)(zulu);
            tango = mike;
            if(oscar) { _fun70389_ip = 323; continue _fun70389 }
 86:
            options = undefined;
            oscar = undefined;
            if(!zulu) { _fun70389_ip = 283; continue _fun70389 }
 96:
            verify = 'string';
            golf = typeof zulu;
            if(!(verify !== golf)) { _fun70389_ip = 270; continue _fun70389 }
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
            if(!golf) { _fun70389_ip = 163; continue _fun70389 }
 158:
            golf = zulu.constructor;
 163:
            offset = verify;
            if(!golf) { _fun70389_ip = 179; continue _fun70389 }
 169:
            golf = zulu.constructor;
            offset = golf.name;
 179:
            golf = 'Map';
            if(!(golf !== offset)) { _fun70389_ip = 249; continue _fun70389 }
 187:
            golf = 'Set';
            if(!(golf !== offset)) { _fun70389_ip = 249; continue _fun70389 }
 195:
            golf = 'Arguments';
            if(!(golf !== offset)) { _fun70389_ip = 234; continue _fun70389 }
 205:
            verify = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            golf = verify.test;
            verify = golf.bind(verify)(offset);
            golf = undefined;
            if(!verify) { _fun70389_ip = 247; continue _fun70389 }
 234:
            verify = _closure1_slot8;
            golf = verify.bind(options)(zulu, options);
 247:
            _fun70389_ip = 265; continue _fun70389;
 249:
            offset = report.Array;
            verify = offset.from;
            golf = verify.bind(offset)(zulu);
 265:
            oscar = golf;
            _fun70389_ip = 283; continue _fun70389;
 270:
            golf = _closure1_slot8;
            oscar = golf.bind(options)(zulu, options);
 283:
            tango = oscar;
            if(tango) { _fun70389_ip = 323; continue _fun70389 }
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
            if(!tango) { _fun70389_ip = 330; continue _fun70389 }
 326:
            _closure2_slot0 = tango;
 330:
            tango = 0;
            var _closure2_slot1 = tango;
            entity = function() {
                _fun70390: for(var _fun70390_ip = 0; ; ) switch(_fun70390_ip) {
 0:
                    mike = _closure2_slot1;
                    entity = _closure2_slot0;
                    entity = entity.length;
                    if(!(!(mike >= entity))) { _fun70390_ip = 56; continue _fun70390 }
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
                    _fun70390_ip = 67; continue _fun70390;
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
    var _closure1_slot7 = entity;
    entity = function(argFoo, argBar) { // Original name: _arrayLikeToArray
        _fun70391: for(var _fun70391_ip = 0; ; ) switch(_fun70391_ip) {
 0:
            tango = argFoo;
            entity = null;
            zulu = undefined;
            entity = entity == zulu;
            if(entity) { _fun70391_ip = 23; continue _fun70391 }
 14:
            mike = tango.length;
            entity = zulu > mike;
 23:
            mike = undefined;
            if(!entity) { _fun70391_ip = 33; continue _fun70391 }
 28:
            mike = tango.length;
 33:
            entity = global;
            entity = entity.Array;
            entity = entity.bind(zulu)(mike);
            zulu = 0;
            report = zulu < mike;
            if(!report) { _fun70391_ip = 70; continue _fun70391 }
 55:
            report = tango[zulu];
            entity[zulu] = report;
            zulu = zulu + 1;
            if(zulu < mike) { _fun70391_ip = 55; continue _fun70391 }
 70:
            return entity;
        }
    };
    var _closure1_slot8 = entity;
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
    var _closure1_slot3 = tango;
    tango = 1;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot4 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.BUILD_OVERRIDE_TARGET_NAMES;
    var _closure1_slot5 = tango;
    tango = 3;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.PublicReleaseChannels;
    var _closure1_slot6 = tango;
    tango = 6;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/build_overrides/validateBuildOverride.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo, argBar, argBaz) { // Original name: validateBuildOverride
        _fun70392: for(var _fun70392_ip = 0; ; ) switch(_fun70392_ip) {
 0:
            entity = argFoo;
            offset = argBar;
            foxtrot = argBaz;
            tango = null;
            if(!(tango != entity)) { _fun70392_ip = 953; continue _fun70392 }
 18:
            if(!(tango != offset)) { _fun70392_ip = 953; continue _fun70392 }
 25:
            zulu = entity.releaseChannel;
            romeo = entity.expiresAt;
            verify = entity.validForUserIds;
            output = entity.allowedVersions;
            oscar = entity.targetBuildOverride;
            entity = global;
            report = entity.Object;
            mike = report.keys;
            options = mike.bind(report)(oscar);
            golf = _closure1_slot1;
            oscar = _closure1_slot2;
            report = 5;
            report = oscar[report];
            oscar = undefined;
            golf = golf.bind(oscar)(report);
            report = golf.intersection;
            report = report.bind(golf)(options, offset);
            golf = report.length;
            report = 0;
            if(!(report !== golf)) { _fun70392_ip = 837; continue _fun70392 }
 126:
            if(!(tango != zulu)) { _fun70392_ip = 155; continue _fun70392 }
 130:
            golf = entity.window;
            golf = golf.GLOBAL_ENV;
            golf = golf.RELEASE_CHANNEL;
            if(!(zulu === golf)) { _fun70392_ip = 677; continue _fun70392 }
 155:
            if(!(tango != output)) { _fun70392_ip = 408; continue _fun70392 }
 162:
            yankee = tango == foxtrot;
            offset = false;
            golf = false;
            if(yankee) { _fun70392_ip = 312; continue _fun70392 }
 176:
            yankee = output.includes;
            yankee = yankee.bind(output)(foxtrot);
            golf = true;
            if(yankee) { _fun70392_ip = 312; continue _fun70392 }
 191:
            yankee = foxtrot.split;
            update = '.';
            foxtrot = yankee.bind(foxtrot)(update);
            yankee = _closure1_slot3;
            echo = 1;
            yankee = yankee.bind(oscar)(foxtrot, echo);
            result = yankee[report];
            yankee = _closure1_slot7;
            sizing = yankee.bind(oscar)(output);
            foxtrot = sizing.bind(oscar)();
            yankee = foxtrot.done;
            kilo = 2;
            backup = '*';
            golf = false;
            if(yankee) { _fun70392_ip = 312; continue _fun70392 }
 252:
            control = foxtrot.value;
            yankee = control.split;
            control = yankee.bind(control)(update);
            yankee = _closure1_slot3;
            control = yankee.bind(oscar)(control, kilo);
            yankee = control[report];
            control = control[echo];
            if(!(backup === control)) { _fun70392_ip = 295; continue _fun70392 }
 289:
            golf = true;
            if(!(result !== yankee)) { _fun70392_ip = 312; continue _fun70392 }
 295:
            control = sizing.bind(oscar)();
            yankee = control.done;
            foxtrot = control;
            golf = false;
            if(!yankee) { _fun70392_ip = 252; continue _fun70392 }
 312:
            if(golf) { _fun70392_ip = 408; continue _fun70392 }
 315:
            golf = {};
            golf['valid'] = offset;
            yankee = _closure1_slot0;
            kilo = _closure1_slot2;
            offset = 4;
            foxtrot = kilo[offset];
            foxtrot = yankee.bind(oscar)(foxtrot);
            backup = foxtrot.intl;
            foxtrot = backup.formatToPlainString;
            offset = kilo[offset];
            offset = yankee.bind(oscar)(offset);
            offset = offset.t;
            yankee = offset.GOEF0N;
            offset = {};
            sizing = output.join;
            kilo = ', ';
            kilo = sizing.bind(output)(kilo);
            offset['releaseChannel'] = kilo;
            offset = foxtrot.bind(backup)(yankee, offset);
            golf['reason'] = offset;
            return golf;
 408:
            offset = tango != romeo;
            golf = null;
            if(!offset) { _fun70392_ip = 456; continue _fun70392 }
 417:
            offset = entity.Date;
            yankee = offset.prototype;
            yankee = Object.create(yankee, {constructor: {value: offset}});
            config = yankee;
            sequence = romeo;
            offset = new config[offset](sequence, vacuum);
            yankee = offset instanceof Object ? offset : yankee;
            offset = yankee.getTime;
            golf = offset.bind(yankee)();
 456:
            if(!(tango != golf)) { _fun70392_ip = 482; continue _fun70392 }
 460:
            offset = entity.Date;
            tango = offset.now;
            tango = tango.bind(offset)();
            if(!(!(golf < tango))) { _fun70392_ip = 603; continue _fun70392 }
 482:
            tango = verify.length;
            if(!(tango > report)) { _fun70392_ip = 589; continue _fun70392 }
 491:
            golf = verify.includes;
            offset = _closure1_slot4;
            tango = offset.getId;
            tango = tango.bind(offset)();
            tango = golf.bind(verify)(tango);
            if(tango) { _fun70392_ip = 589; continue _fun70392 }
 518:
            tango = {};
            golf = false;
            tango['valid'] = golf;
            yankee = _closure1_slot0;
            romeo = _closure1_slot2;
            golf = 4;
            verify = romeo[golf];
            verify = yankee.bind(oscar)(verify);
            offset = verify.intl;
            verify = offset.string;
            golf = romeo[golf];
            golf = yankee.bind(oscar)(golf);
            golf = golf.t;
            golf = golf.qZgV0d;
            golf = verify.bind(offset)(golf);
            tango['reason'] = golf;
            _fun70392_ip = 601; continue _fun70392;
 589:
            golf = {};
            verify = true;
            golf['valid'] = verify;
            tango = golf;
 601:
            _fun70392_ip = 675; continue _fun70392;
 603:
            golf = {};
            verify = false;
            golf['valid'] = verify;
            romeo = _closure1_slot0;
            foxtrot = _closure1_slot2;
            verify = 4;
            offset = foxtrot[verify];
            offset = romeo.bind(oscar)(offset);
            yankee = offset.intl;
            offset = yankee.string;
            verify = foxtrot[verify];
            verify = romeo.bind(oscar)(verify);
            verify = verify.t;
            verify = verify.8eRE6e;
            verify = offset.bind(yankee)(verify);
            golf['reason'] = verify;
            tango = golf;
 675:
            return tango;
 677:
            tango = _closure1_slot6;
            tango = tango.PTB;
            if(!(zulu !== tango)) { _fun70392_ip = 748; continue _fun70392 }
 691:
            tango = zulu.charAt;
            report = tango.bind(zulu)(report);
            tango = report.toUpperCase;
            golf = tango.bind(report)();
            report = zulu.slice;
            tango = 1;
            report = report.bind(zulu)(tango);
            entity = entity.HermesInternal;
            tango = entity.concat;
            entity = '';
            verify = tango.bind(entity)(golf, report);
            _fun70392_ip = 758; continue _fun70392;
 748:
            entity = zulu.toUpperCase;
            verify = entity.bind(zulu)();
 758:
            entity = {};
            zulu = false;
            entity['valid'] = zulu;
            tango = _closure1_slot0;
            offset = _closure1_slot2;
            zulu = 4;
            report = offset[zulu];
            report = tango.bind(oscar)(report);
            golf = report.intl;
            report = golf.formatToPlainString;
            zulu = offset[zulu];
            zulu = tango.bind(oscar)(zulu);
            zulu = zulu.t;
            tango = zulu.GOEF0N;
            zulu = {};
            zulu['releaseChannel'] = verify;
            zulu = report.bind(golf)(tango, zulu);
            entity['reason'] = zulu;
            return entity;
 837:
            entity = {};
            zulu = false;
            entity['valid'] = zulu;
            zulu = _closure1_slot0;
            golf = _closure1_slot2;
            mike = 4;
            tango = golf[mike];
            tango = zulu.bind(oscar)(tango);
            report = tango.intl;
            tango = report.formatToPlainString;
            mike = golf[mike];
            mike = zulu.bind(oscar)(mike);
            mike = mike.t;
            zulu = mike.wySUzs;
            mike = {};
            golf = options.map;
            oscar = function(argFoo) {
                _fun70393: for(var _fun70393_ip = 0; ; ) switch(_fun70393_ip) {
 0:
                    mike = _closure1_slot5;
                    entity = argFoo;
                    mike = mike[entity];
                    entity = null;
                    zulu = entity != mike;
                    entity = 'unknown';
                    if(!zulu) { _fun70393_ip = 30; continue _fun70393 }
 27:
                    entity = mike;
 30:
                    return entity;
                }
            };
            options = golf.bind(options)(oscar);
            golf = options.join;
            oscar = ', ';
            oscar = golf.bind(options)(oscar);
            mike['requestedTargets'] = oscar;
            mike = tango.bind(report)(zulu, mike);
            entity['reason'] = mike;
            return entity;
 953:
            entity = {};
            mike = false;
            entity['valid'] = mike;
            oscar = _closure1_slot0;
            golf = _closure1_slot2;
            mike = 4;
            zulu = golf[mike];
            report = undefined;
            zulu = oscar.bind(report)(zulu);
            tango = zulu.intl;
            zulu = tango.string;
            mike = golf[mike];
            mike = oscar.bind(report)(mike);
            mike = mike.t;
            mike = mike.d34xi4;
            mike = zulu.bind(tango)(mike);
            entity['reason'] = mike;
            return entity;
        }
    };
    zulu['default'] = mike;
    return entity;
})();