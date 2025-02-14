// discord_common/js/packages/dynamic-links/generateDynamicLink.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golf;
    var _closure1_slot2 = oscar;
    entity = function(argFoo, argBar) { // Original name: _createForOfIteratorHelperLoose
        _fun104618: for(var _fun104618_ip = 0; ; ) switch(_fun104618_ip) {
 0:
            zulu = argFoo;
            var _closure2_slot0 = zulu;
            report = global;
            mike = report.Symbol;
            tango = 'undefined';
            mike = typeof mike;
            mike = tango !== mike;
            if(!mike) { _fun104618_ip = 46; continue _fun104618 }
 30:
            tango = report.Symbol;
            tango = tango.iterator;
            mike = zulu[tango];
 46:
            if(mike) { _fun104618_ip = 55; continue _fun104618 }
 49:
            mike = zulu.@@iterator;
 55:
            if(mike) { _fun104618_ip = 345; continue _fun104618 }
 61:
            oscar = report.Array;
            tango = oscar.isArray;
            oscar = tango.bind(oscar)(zulu);
            tango = mike;
            if(oscar) { _fun104618_ip = 323; continue _fun104618 }
 86:
            options = undefined;
            oscar = undefined;
            if(!zulu) { _fun104618_ip = 283; continue _fun104618 }
 96:
            verify = 'string';
            golf = typeof zulu;
            if(!(verify !== golf)) { _fun104618_ip = 270; continue _fun104618 }
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
            if(!golf) { _fun104618_ip = 163; continue _fun104618 }
 158:
            golf = zulu.constructor;
 163:
            offset = verify;
            if(!golf) { _fun104618_ip = 179; continue _fun104618 }
 169:
            golf = zulu.constructor;
            offset = golf.name;
 179:
            golf = 'Map';
            if(!(golf !== offset)) { _fun104618_ip = 249; continue _fun104618 }
 187:
            golf = 'Set';
            if(!(golf !== offset)) { _fun104618_ip = 249; continue _fun104618 }
 195:
            golf = 'Arguments';
            if(!(golf !== offset)) { _fun104618_ip = 234; continue _fun104618 }
 205:
            verify = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            golf = verify.test;
            verify = golf.bind(verify)(offset);
            golf = undefined;
            if(!verify) { _fun104618_ip = 247; continue _fun104618 }
 234:
            verify = _closure1_slot7;
            golf = verify.bind(options)(zulu, options);
 247:
            _fun104618_ip = 265; continue _fun104618;
 249:
            offset = report.Array;
            verify = offset.from;
            golf = verify.bind(offset)(zulu);
 265:
            oscar = golf;
            _fun104618_ip = 283; continue _fun104618;
 270:
            golf = _closure1_slot7;
            oscar = golf.bind(options)(zulu, options);
 283:
            tango = oscar;
            if(tango) { _fun104618_ip = 323; continue _fun104618 }
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
            if(!tango) { _fun104618_ip = 330; continue _fun104618 }
 326:
            _closure2_slot0 = tango;
 330:
            tango = 0;
            var _closure2_slot1 = tango;
            entity = function() {
                _fun104619: for(var _fun104619_ip = 0; ; ) switch(_fun104619_ip) {
 0:
                    mike = _closure2_slot1;
                    entity = _closure2_slot0;
                    entity = entity.length;
                    if(!(!(mike >= entity))) { _fun104619_ip = 56; continue _fun104619 }
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
                    _fun104619_ip = 67; continue _fun104619;
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
    var _closure1_slot6 = entity;
    entity = function(argFoo, argBar) { // Original name: _arrayLikeToArray
        _fun104620: for(var _fun104620_ip = 0; ; ) switch(_fun104620_ip) {
 0:
            tango = argFoo;
            entity = null;
            zulu = undefined;
            entity = entity == zulu;
            if(entity) { _fun104620_ip = 23; continue _fun104620 }
 14:
            mike = tango.length;
            entity = zulu > mike;
 23:
            mike = undefined;
            if(!entity) { _fun104620_ip = 33; continue _fun104620 }
 28:
            mike = tango.length;
 33:
            entity = global;
            entity = entity.Array;
            entity = entity.bind(zulu)(mike);
            zulu = 0;
            report = zulu < mike;
            if(!report) { _fun104620_ip = 70; continue _fun104620 }
 55:
            report = tango[zulu];
            entity[zulu] = report;
            zulu = zulu + 1;
            if(zulu < mike) { _fun104620_ip = 55; continue _fun104620 }
 70:
            return entity;
        }
    };
    var _closure1_slot7 = entity;
    entity = ['utmSource', 'androidFallbackLink', 'iosFallbackLink'];
    var _closure1_slot3 = entity;
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
    var _closure1_slot4 = tango;
    tango = 1;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot5 = tango;
    tango = 5;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = '../discord_common/js/packages/dynamic-links/generateDynamicLink.tsx';
    tango = report.bind(oscar)(tango);
    tango = function(argFoo, argBar) { // Original name: generateDynamicLink
        _fun104621: for(var _fun104621_ip = 0; ; ) switch(_fun104621_ip) {
 0:
            golf = argBar;
            kilo = golf.utmSource;
            report = golf.androidFallbackLink;
            oscar = golf.iosFallbackLink;
            tango = _closure1_slot4;
            mike = _closure1_slot3;
            zulu = undefined;
            foxtrot = tango.bind(zulu)(golf, mike);
            mike = global;
            options = mike.URL;
            tango = options.prototype;
            golf = Object.create(tango, {constructor: {value: options}});
            context = argFoo;
            papa = golf;
            tango = new papa[options](context, record);
            verify = tango instanceof Object ? tango : golf;
            yankee = foxtrot;
            tango = null;
            for(golf in yankee)
 86:
            {
 95:
                result = golf;
                output = foxtrot[result];
                if(tango == output) { _fun104621_ip = 86; continue _fun104621 }
 106:
                sizing = verify.searchParams;
                backup = sizing.set;
                backup = backup.bind(sizing)(result, output);
                _fun104621_ip = 86; continue _fun104621;
            }
 125:
            options = mike.encodeURIComponent;
            golf = verify.toString;
            golf = golf.bind(verify)();
            backup = options.bind(zulu)(golf);
            offset = mike.encodeURIComponent;
            options = _closure1_slot1;
            golf = _closure1_slot2;
            verify = 4;
            verify = golf[verify];
            verify = options.bind(zulu)(verify);
            verify = verify.bind(zulu)();
            foxtrot = offset.bind(zulu)(verify);
            romeo = mike.RegExp;
            yankee = ['WebView', '(iPhone|iPod|iPad)(?!.*Safari/)'];
            offset = yankee.join;
            verify = '|';
            sizing = offset.bind(yankee)(verify);
            verify = mike.HermesInternal;
            yankee = verify.concat;
            offset = '(';
            verify = ')';
            context = yankee.bind(offset)(sizing, verify);
            verify = romeo.prototype;
            offset = Object.create(verify, {constructor: {value: romeo}});
            record = 'ig';
            papa = offset;
            verify = new papa[romeo](context, record, config);
            yankee = verify instanceof Object ? verify : offset;
            offset = 2;
            golf = golf[offset];
            golf = options.bind(zulu)(golf);
            options = tango == golf;
            golf = undefined;
            if(options) { _fun104621_ip = 323; continue _fun104621 }
 280:
            verify = _closure1_slot1;
            options = _closure1_slot2;
            options = options[offset];
            options = verify.bind(zulu)(options);
            verify = options.ua;
            options = tango == verify;
            golf = undefined;
            if(options) { _fun104621_ip = 323; continue _fun104621 }
 312:
            options = verify.match;
            golf = options.bind(verify)(yankee);
 323:
            options = tango != golf;
            verify = _closure1_slot1;
            golf = _closure1_slot2;
            golf = golf[offset];
            golf = verify.bind(zulu)(golf);
            golf = tango == golf;
            verify = undefined;
            if(golf) { _fun104621_ip = 375; continue _fun104621 }
 353:
            yankee = _closure1_slot1;
            golf = _closure1_slot2;
            golf = golf[offset];
            golf = yankee.bind(zulu)(golf);
            verify = golf.name;
 375:
            golf = 'Safari';
            golf = golf === verify;
            if(!golf) { _fun104621_ip = 391; continue _fun104621 }
 388:
            golf = !options;
 391:
            verify = _closure1_slot1;
            options = _closure1_slot2;
            options = options[offset];
            options = verify.bind(zulu)(options);
            verify = tango == options;
            options = undefined;
            if(verify) { _fun104621_ip = 455; continue _fun104621 }
 417:
            verify = _closure1_slot1;
            entity = _closure1_slot2;
            entity = entity[offset];
            entity = verify.bind(zulu)(entity);
            entity = entity.os;
            verify = tango == entity;
            options = undefined;
            if(verify) { _fun104621_ip = 455; continue _fun104621 }
 449:
            options = entity.family;
 455:
            entity = 'iOS';
            entity = entity !== options;
            if(entity) { _fun104621_ip = 471; continue _fun104621 }
 468:
            entity = golf;
 471:
            romeo = 0;
            if(!entity) { _fun104621_ip = 479; continue _fun104621 }
 476:
            romeo = 1;
 479:
            entity = tango != report;
            options = null;
            if(!entity) { _fun104621_ip = 499; continue _fun104621 }
 488:
            entity = mike.encodeURIComponent;
            options = entity.bind(zulu)(report);
 499:
            entity = tango != oscar;
            report = null;
            if(!entity) { _fun104621_ip = 519; continue _fun104621 }
 508:
            entity = mike.encodeURIComponent;
            report = entity.bind(zulu)(oscar);
 519:
            entity = mike.HermesInternal;
            yankee = entity.concat;
            papa = '';
            context = 'https://discordapp.page.link';
            record = '/?link=';
            sequence = '&utm_source=';
            control = '&apn=com.discord&isi=985746746&ibi=com.hammerandchisel.discord&sd=';
            update = '&efr=';
            config = backup;
            vacuum = kilo;
            source = foxtrot;
            echo = romeo;
            oscar = papa[yankee](context, record, config, sequence, vacuum, control, source, update, echo, result);
            zulu = oscar;
            if(!(tango != options)) { _fun104621_ip = 613; continue _fun104621 }
 587:
            entity = mike.HermesInternal;
            golf = entity.concat;
            entity = '&afl=';
            entity = golf.bind(entity)(options);
            zulu = oscar + entity;
 613:
            entity = zulu;
            if(!(tango != report)) { _fun104621_ip = 646; continue _fun104621 }
 620:
            mike = mike.HermesInternal;
            tango = mike.concat;
            mike = '&ifl=';
            mike = tango.bind(mike)(report);
            entity = zulu + mike;
 646:
            return entity;
        }
    };
    zulu['default'] = tango;
    tango = function() { // Original name: generateAttemptId
        zulu = _closure1_slot0;
        mike = _closure1_slot2;
        entity = 3;
        mike = mike[entity];
        entity = undefined;
        mike = zulu.bind(entity)(mike);
        entity = mike.v4;
        entity = entity.bind(mike)();
        return entity;
    };
    zulu['generateAttemptId'] = tango;
    mike = function(argFoo) { // Original name: parseDynamicLink
        _fun104623: for(var _fun104623_ip = 0; ; ) switch(_fun104623_ip) {
 0:
            romeo = argFoo;
            entity = romeo;
            options = undefined;
            oscar = undefined;
            report = undefined;
            golf = undefined;
            verify = undefined;
            zulu = undefined;
            mike = undefined;
            offset = undefined;
            yankee = romeo.startsWith;
            tango = 'https://discordapp.page.link';
            tango = yankee.bind(romeo)(tango);
            if(tango) { _fun104623_ip = 46; continue _fun104623 }
 42:
            tango = null;
            return tango;
 46: // try_start_0
            tango = global;
            romeo = tango.URL;
            backup = entity;
            yankee = romeo.prototype;
            yankee = Object.create(yankee, {constructor: {value: romeo}});
            kilo = yankee;
            entity = new kilo[romeo](backup, foxtrot);
            entity = entity instanceof Object ? entity : yankee;
            romeo = entity.searchParams;
            report = romeo;
            yankee = romeo.get;
            entity = 'link';
            yankee = yankee.bind(romeo)(entity);
            golf = yankee;
            entity = null;
            if(!(entity != yankee)) { _fun104623_ip = 301; continue _fun104623 }
 112:
            yankee = tango.decodeURIComponent;
            backup = yankee.bind(options)(golf);
            tango = tango.URL;
            golf = tango.prototype;
            golf = Object.create(golf, {constructor: {value: tango}});
            kilo = golf;
            tango = new kilo[tango](backup, foxtrot);
            tango = tango instanceof Object ? tango : golf;
            zulu = tango.searchParams;
            tango = {};
            yankee = report;
            golf = yankee.get;
            report = 'utm_source';
            report = golf.bind(yankee)(report);
            oscar = report;
            golf = entity != report;
            report = undefined;
            if(!golf) { _fun104623_ip = 189; continue _fun104623 }
 186:
            report = oscar;
 189:
            tango['utmSource'] = report;
            mike = tango;
            tango = _closure1_slot6;
            report = zulu;
            zulu = report.entries;
            zulu = zulu.bind(report)();
            zulu = tango.bind(options)(zulu);
            offset = zulu;
            zulu = zulu.bind(options)();
            verify = zulu;
            zulu = zulu.done;
            oscar = 2;
            report = 0;
            tango = 1;
            if(zulu) { _fun104623_ip = 299; continue _fun104623 }
 248:
            zulu = verify;
            yankee = zulu.value;
            zulu = _closure1_slot5;
            zulu = zulu.bind(options)(yankee, oscar);
            romeo = zulu[report];
            yankee = zulu[tango];
            zulu = mike;
            zulu[romeo] = yankee;
            zulu = offset;
            zulu = zulu.bind(options)();
            verify = zulu;
            zulu = zulu.done;
            if(!zulu) { _fun104623_ip = 248; continue _fun104623 }
 299: // try_end0
            return mike;
 301:
            return entity;
 303: // catch_target0
            CatchBlockStart(arg_register=0);
            entity = null;
            return entity;
        }
    };
    zulu['parseDynamicLink'] = mike;
    return entity;
})();