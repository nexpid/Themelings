// app/modules/polls/parsePollResultSystemMessageEmbed.tsx
export default (function(argFoo, argBar, _, __, ___, argFre, argPlu) {
    zuuluu = argFre;
    entity = function(argFoo, argBar) { // Original name: _createForOfIteratorHelperLoose
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            zuuluu = argFoo;
            var _closure2_slot0 = zuuluu;
            report = global;
            michal = report.Symbol;
            tangon = 'undefined';
            michal = typeof michal;
            michal = tangon !== michal;
            if(!michal) { _fun00002_ip = 45; continue _fun00001 }
 30:
            tangon = report.Symbol;
            tangon = tangon.iterator;
            michal = zuuluu[tangon];
 45:
            if(michal) { _fun00002_ip = 54; continue _fun00001 }
 48:
            michal = zuuluu.@@iterator;
 54:
            if(michal) { _fun00002_ip = 342; continue _fun00001 }
 60:
            oscard = report.Array;
            tangon = oscard.isArray;
            oscard = tangon.bind(oscard)(zuuluu);
            tangon = michal;
            if(oscard) { _fun00002_ip = 322; continue _fun00001 }
 85:
            option = undefined;
            oscard = undefined;
            if(!zuuluu) { _fun00002_ip = 282; continue _fun00001 }
 95:
            verify = 'string';
            golfie = typeof zuuluu;
            if(!(verify !== golfie)) { _fun00002_ip = 269; continue _fun00001 }
 109:
            golfie = {};
            verify = golfie.toString;
            golfie = verify.call;
            yankee = golfie.bind(verify)(zuuluu);
            offset = yankee.slice;
            verify = 8;
            golfie = -1;
            verify = offset.bind(yankee)(verify, golfie);
            golfie = 'Object';
            golfie = golfie === verify;
            if(!golfie) { _fun00002_ip = 162; continue _fun00001 }
 157:
            golfie = zuuluu.constructor;
 162:
            offset = verify;
            if(!golfie) { _fun00002_ip = 178; continue _fun00001 }
 168:
            golfie = zuuluu.constructor;
            offset = golfie.name;
 178:
            golfie = 'Map';
            if(!(golfie !== offset)) { _fun00002_ip = 248; continue _fun00001 }
 186:
            golfie = 'Set';
            if(!(golfie !== offset)) { _fun00002_ip = 248; continue _fun00001 }
 194:
            golfie = 'Arguments';
            if(!(golfie !== offset)) { _fun00002_ip = 233; continue _fun00001 }
 204:
            verify = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            golfie = verify.test;
            verify = golfie.bind(verify)(offset);
            golfie = undefined;
            if(!verify) { _fun00002_ip = 246; continue _fun00001 }
 233:
            verify = _closure1_slot1;
            golfie = verify.bind(option)(zuuluu, option);
 246:
            _fun00002_ip = 264; continue _fun00001;
 248:
            offset = report.Array;
            verify = offset.from;
            golfie = verify.bind(offset)(zuuluu);
 264:
            oscard = golfie;
            _fun00002_ip = 282; continue _fun00001;
 269:
            golfie = _closure1_slot1;
            oscard = golfie.bind(option)(zuuluu, option);
 282:
            tangon = oscard;
            if(tangon) { _fun00002_ip = 322; continue _fun00001 }
 288:
            golfie = report.TypeError;
            report = golfie.prototype;
            oscard = Object.create(report, {constructor: {value: golfie}});
            foxtra = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
            backup = oscard;
            report = new backup[golfie](foxtra, romeon);
            report = report instanceof Object ? report : oscard;
            throw report;
 322:
            if(!tangon) { _fun00002_ip = 329; continue _fun00001 }
 325:
            _closure2_slot0 = tangon;
 329:
            tangon = 0;
            var _closure2_slot1 = tangon;
            entity = function() {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    michal = _closure2_slot1;
                    entity = _closure2_slot0;
                    entity = entity.length;
                    if(!(!(michal >= entity))) { _fun00004_ip = 56; continue _fun00003 }
 20:
                    entity = {};
                    michal = false;
                    entity['done'] = michal;
                    zuuluu = _closure2_slot0;
                    michal = _closure2_slot1;
                    michal = parseFloat(michal);
                    tangon = michal + 1;
                    _closure2_slot1 = tangon;
                    michal = zuuluu[michal];
                    entity['value'] = michal;
                    _fun00004_ip = 67; continue _fun00003;
 56:
                    michal = {};
                    zuuluu = true;
                    michal['done'] = zuuluu;
                    entity = michal;
 67:
                    return entity;
                }
            };
            return entity;
 342:
            entity = michal.call;
            zuuluu = entity.bind(michal)(zuuluu);
            michal = zuuluu.next;
            entity = michal.bind;
            entity = entity.bind(michal)(zuuluu);
            return entity;
        }
    };
    var _closure1_slot0 = entity;
    entity = function(argFoo, argBar) { // Original name: _arrayLikeToArray
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            tangon = argFoo;
            entity = null;
            zuuluu = undefined;
            entity = entity == zuuluu;
            if(entity) { _fun00006_ip = 23; continue _fun00005 }
 14:
            michal = tangon.length;
            entity = zuuluu > michal;
 23:
            michal = undefined;
            if(!entity) { _fun00006_ip = 33; continue _fun00005 }
 28:
            michal = tangon.length;
 33:
            entity = global;
            entity = entity.Array;
            entity = entity.bind(zuuluu)(michal);
            zuuluu = 0;
            report = zuuluu < michal;
            if(!report) { _fun00006_ip = 70; continue _fun00005 }
 55:
            report = tangon[zuuluu];
            entity[zuuluu] = report;
            zuuluu = zuuluu + 1;
            if(zuuluu < michal) { _fun00006_ip = 55; continue _fun00005 }
 70:
            return entity;
        }
    };
    var _closure1_slot1 = entity;
    entity = global;
    oscard = entity.Object;
    report = oscard.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = report.bind(oscard)(zuuluu, entity, tangon);
    tangon = argPlu;
    entity = 0;
    report = tangon[entity];
    tangon = argBar;
    entity = undefined;
    oscard = tangon.bind(entity)(report);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/polls/parsePollResultSystemMessageEmbed.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) { // Original name: parsePollResultSystemMessageEmbed
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            tangon = argFoo;
            entity = null;
            zuuluu = entity == tangon;
            result = undefined;
            michal = undefined;
            if(zuuluu) { _fun00008_ip = 22; continue _fun00007 }
 16:
            michal = tangon.fields;
 22:
            if(!(entity != michal)) { _fun00008_ip = 373; continue _fun00007 }
 29:
            michal = {};
            zuuluu = {};
            report = _closure1_slot0;
            tangon = tangon.fields;
            output = report.bind(result)(tangon);
            report = output.bind(result)();
            tangon = report.done;
            sizing = global;
            kiloes = 10;
            backup = 'true';
            foxtra = 'victor_answer_emoji_animated';
            romeon = 'victor_answer_emoji_name';
            yankee = 'victor_answer_emoji_id';
            offset = 'total_votes';
            verify = 'victor_answer_votes';
            option = 'victor_answer_text';
            golfie = 'victor_answer_id';
            oscard = 'poll_question_text';
            if(tangon) { _fun00008_ip = 334; continue _fun00007 }
 123:
            tangon = report.value;
            echoed = tangon.rawName;
            if(!(oscard !== echoed)) { _fun00008_ip = 304; continue _fun00007 }
 141:
            if(!(golfie !== echoed)) { _fun00008_ip = 290; continue _fun00007 }
 148:
            if(!(option !== echoed)) { _fun00008_ip = 276; continue _fun00007 }
 155:
            if(!(verify !== echoed)) { _fun00008_ip = 250; continue _fun00007 }
 159:
            if(!(offset !== echoed)) { _fun00008_ip = 224; continue _fun00007 }
 163:
            if(!(yankee !== echoed)) { _fun00008_ip = 210; continue _fun00007 }
 167:
            if(!(romeon !== echoed)) { _fun00008_ip = 196; continue _fun00007 }
 171:
            if(!(foxtra === echoed)) { _fun00008_ip = 316; continue _fun00007 }
 178:
            echoed = tangon.rawValue;
            echoed = backup === echoed;
            zuuluu['animated'] = echoed;
            _fun00008_ip = 316; continue _fun00007;
 196:
            echoed = tangon.rawValue;
            zuuluu['name'] = echoed;
            _fun00008_ip = 316; continue _fun00007;
 210:
            echoed = tangon.rawValue;
            zuuluu['id'] = echoed;
            _fun00008_ip = 316; continue _fun00007;
 224:
            update = sizing.parseInt;
            echoed = tangon.rawValue;
            echoed = update.bind(result)(echoed, kiloes);
            michal['totalVotes'] = echoed;
            _fun00008_ip = 316; continue _fun00007;
 250:
            update = sizing.parseInt;
            echoed = tangon.rawValue;
            echoed = update.bind(result)(echoed, kiloes);
            michal['victorAnswerVotes'] = echoed;
            _fun00008_ip = 316; continue _fun00007;
 276:
            echoed = tangon.rawValue;
            michal['victorAnswerText'] = echoed;
            _fun00008_ip = 316; continue _fun00007;
 290:
            echoed = tangon.rawValue;
            michal['victorAnswerId'] = echoed;
            _fun00008_ip = 316; continue _fun00007;
 304:
            tangon = tangon.rawValue;
            michal['questionText'] = tangon;
 316:
            echoed = output.bind(result)();
            tangon = echoed.done;
            report = echoed;
            if(!tangon) { _fun00008_ip = 123; continue _fun00007 }
 334:
            tangon = zuuluu.name;
            if(!(entity != tangon)) { _fun00008_ip = 371; continue _fun00007 }
 343:
            report = zuuluu.animated;
            tangon = entity != report;
            if(!tangon) { _fun00008_ip = 359; continue _fun00007 }
 356:
            tangon = report;
 359:
            zuuluu['animated'] = tangon;
            michal['victorEmoji'] = zuuluu;
 371:
            return michal;
 373:
            return entity;
        }
    };
    zuuluu['default'] = michal;
    return entity;
})();