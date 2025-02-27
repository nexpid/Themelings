// app/modules/launchpad/native/LaunchPad.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    report = argBar;
    output = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = output;
    var _closure1_slot2 = oscard;
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
            if(!michal) { _fun00002_ip = 46; continue _fun00001 }
 30:
            tangon = report.Symbol;
            tangon = tangon.iterator;
            michal = zuuluu[tangon];
 46:
            if(michal) { _fun00002_ip = 55; continue _fun00001 }
 49:
            michal = zuuluu.@@iterator;
 55:
            if(michal) { _fun00002_ip = 345; continue _fun00001 }
 61:
            oscard = report.Array;
            tangon = oscard.isArray;
            oscard = tangon.bind(oscard)(zuuluu);
            tangon = michal;
            if(oscard) { _fun00002_ip = 323; continue _fun00001 }
 86:
            option = undefined;
            oscard = undefined;
            if(!zuuluu) { _fun00002_ip = 283; continue _fun00001 }
 96:
            verify = 'string';
            golfie = typeof zuuluu;
            if(!(verify !== golfie)) { _fun00002_ip = 270; continue _fun00001 }
 110:
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
            if(!golfie) { _fun00002_ip = 163; continue _fun00001 }
 158:
            golfie = zuuluu.constructor;
 163:
            offset = verify;
            if(!golfie) { _fun00002_ip = 179; continue _fun00001 }
 169:
            golfie = zuuluu.constructor;
            offset = golfie.name;
 179:
            golfie = 'Map';
            if(!(golfie !== offset)) { _fun00002_ip = 249; continue _fun00001 }
 187:
            golfie = 'Set';
            if(!(golfie !== offset)) { _fun00002_ip = 249; continue _fun00001 }
 195:
            golfie = 'Arguments';
            if(!(golfie !== offset)) { _fun00002_ip = 234; continue _fun00001 }
 205:
            verify = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            golfie = verify.test;
            verify = golfie.bind(verify)(offset);
            golfie = undefined;
            if(!verify) { _fun00002_ip = 247; continue _fun00001 }
 234:
            verify = _closure1_slot39;
            golfie = verify.bind(option)(zuuluu, option);
 247:
            _fun00002_ip = 265; continue _fun00001;
 249:
            offset = report.Array;
            verify = offset.from;
            golfie = verify.bind(offset)(zuuluu);
 265:
            oscard = golfie;
            _fun00002_ip = 283; continue _fun00001;
 270:
            golfie = _closure1_slot39;
            oscard = golfie.bind(option)(zuuluu, option);
 283:
            tangon = oscard;
            if(tangon) { _fun00002_ip = 323; continue _fun00001 }
 289:
            golfie = report.TypeError;
            report = golfie.prototype;
            oscard = Object.create(report, {constructor: {value: golfie}});
            foxtra = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
            backup = oscard;
            report = new backup[golfie](foxtra, romeon);
            report = report instanceof Object ? report : oscard;
            throw report;
 323:
            if(!tangon) { _fun00002_ip = 330; continue _fun00001 }
 326:
            _closure2_slot0 = tangon;
 330:
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
 345:
            entity = michal.call;
            zuuluu = entity.bind(michal)(zuuluu);
            michal = zuuluu.next;
            entity = michal.bind;
            entity = entity.bind(michal)(zuuluu);
            return entity;
        }
    };
    var _closure1_slot38 = entity;
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
    var _closure1_slot39 = entity;
    entity = function(argFoo) { // Original name: TabButton
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            entity = argFoo;
            verify = entity.onPress;
            oscard = entity.icon;
            option = entity.accessibilityLabel;
            report = entity.selected;
            offset = entity.style;
            entity = _closure1_slot27;
            tangon = undefined;
            yankee = entity.bind(tangon)();
            zuuluu = _closure1_slot25;
            michal = _closure1_slot0;
            romeon = _closure1_slot2;
            entity = 21;
            entity = romeon[entity];
            entity = michal.bind(tangon)(entity);
            michal = entity.PressableHighlight;
            entity = {};
            entity['onPress'] = verify;
            romeon = yankee.tab;
            verify = new Array(3);
            verify[0] = romeon;
            verify[1] = offset;
            offset = undefined;
            if(!report) { _fun00008_ip = 107; continue _fun00007 }
 101:
            offset = yankee.tabSelected;
 107:
            verify[2] = offset;
            entity['style'] = verify;
            entity['accessibilityLabel'] = option;
            option = 'tab';
            entity['accessibilityRole'] = option;
            option = {};
            option['selected'] = report;
            entity['accessibilityState'] = option;
            option = _closure1_slot1;
            verify = _closure1_slot2;
            golfie = 19;
            golfie = verify[golfie];
            golfie = option.bind(tangon)(golfie);
            golfie = golfie.colors;
            if(report) { _fun00008_ip = 175; continue _fun00007 }
 167:
            report = golfie.INTERACTIVE_NORMAL;
            _fun00008_ip = 181; continue _fun00007;
 175:
            report = golfie.INTERACTIVE_ACTIVE;
 181:
            report = oscard.bind(tangon)(report);
            entity['children'] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    var _closure1_slot40 = entity;
    entity = function(argFoo) { // Original name: TabHeader
        entity = argFoo;
        report = entity.text;
        michal = _closure1_slot27;
        tangon = undefined;
        oscard = michal.bind(tangon)();
        zuuluu = _closure1_slot25;
        michal = _closure1_slot0;
        golfie = _closure1_slot2;
        entity = 22;
        entity = golfie[entity];
        entity = michal.bind(tangon)(entity);
        michal = entity.Text;
        entity = {'style': null, 'variant': 'heading-md/extrabold', 'maxFontSizeMultiplier': 1.75, 'accessibilityRole': 'header'};
        oscard = oscard.subheader;
        entity['style'] = oscard;
        entity['children'] = report;
        entity = zuuluu.bind(tangon)(michal, entity);
        return entity;
    };
    var _closure1_slot41 = entity;
    entity = function(argFoo, argBar, argBaz) { // Original name: createAndAppendChannel
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            zuuluu = argFoo;
            michal = argBar;
            report = argBaz;
            entity = michal.has;
            entity = entity.bind(michal)(zuuluu);
            if(entity) { _fun00010_ip = 78; continue _fun00009 }
 22:
            oscard = _closure1_slot1;
            tangon = _closure1_slot2;
            entity = 34;
            entity = tangon[entity];
            tangon = undefined;
            entity = oscard.bind(tangon)(entity);
            tangon = entity.bind(tangon)(zuuluu);
            entity = null;
            if(!(entity != tangon)) { _fun00010_ip = 78; continue _fun00009 }
 58:
            entity = report.push;
            entity = entity.bind(report)(tangon);
            entity = michal.add;
            entity = entity.bind(michal)(zuuluu);
 78:
            entity = undefined;
            return entity;
        }
    };
    var _closure1_slot42 = entity;
    entity = function(argFoo) { // Original name: useInitialResults
        michal = argFoo;
        backup = michal.disabled;
        var _closure2_slot0 = backup;
        foxtra = michal.visible;
        var _closure2_slot1 = foxtra;
        offset = _closure1_slot0;
        romeon = _closure1_slot2;
        michal = 35;
        zuuluu = romeon[michal];
        yankee = undefined;
        tangon = offset.bind(yankee)(zuuluu);
        zuuluu = tangon.getSelectedGuildFromRoute;
        tangon = zuuluu.bind(tangon)();
        var _closure2_slot2 = tangon;
        michal = romeon[michal];
        zuuluu = offset.bind(yankee)(michal);
        michal = zuuluu.getSelectedChannelFromRoute;
        option = michal.bind(zuuluu)();
        var _closure2_slot3 = option;
        zuuluu = _closure1_slot4;
        michal = zuuluu.useState;
        report = michal.bind(zuuluu)(yankee);
        zuuluu = _closure1_slot3;
        michal = 2;
        report = zuuluu.bind(yankee)(report, michal);
        michal = 0;
        zuuluu = report[michal];
        var _closure2_slot4 = zuuluu;
        michal = 1;
        michal = report[michal];
        var _closure2_slot5 = michal;
        kiloes = _closure1_slot4;
        verify = kiloes.useEffect;
        oscard = new Array(1);
        oscard[0] = foxtra;
        report = function() {
            _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                michal = _closure2_slot1;
                if(michal) { _fun00012_ip = 21; continue _fun00011 }
 10:
                michal = _closure2_slot5;
                entity = undefined;
                entity = michal.bind(entity)(entity);
 21:
                entity = undefined;
                return entity;
            }
        };
        report = verify.bind(kiloes)(report, oscard);
        verify = _closure1_slot4;
        oscard = verify.useRef;
        report = new Array(0);
        report = oscard.bind(verify)(report);
        var _closure2_slot6 = report;
        verify = 23;
        report = romeon[verify];
        sizing = offset.bind(yankee)(report);
        kiloes = sizing.useStateFromStores;
        report = _closure1_slot19;
        oscard = new Array(1);
        oscard[0] = report;
        report = function() {
            _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                michal = _closure2_slot1;
                if(michal) { _fun00014_ip = 21; continue _fun00013 }
 10:
                entity = _closure2_slot6;
                entity = entity.current;
                _fun00014_ip = 38; continue _fun00013;
 21:
                zuuluu = _closure1_slot19;
                michal = zuuluu.getUnreadPrivateChannelIds;
                entity = michal.bind(zuuluu)();
 38:
                return entity;
            }
        };
        oscard = kiloes.bind(sizing)(oscard, report);
        var _closure2_slot7 = oscard;
        sizing = _closure1_slot4;
        kiloes = sizing.useEffect;
        report = function() {
            michal = _closure2_slot6;
            entity = _closure2_slot7;
            michal['current'] = entity;
            entity = undefined;
            return entity;
        };
        report = kiloes.bind(sizing)(report);
        sizing = _closure1_slot4;
        kiloes = sizing.useRef;
        report = new Array(0);
        report = kiloes.bind(sizing)(report);
        var _closure2_slot8 = report;
        report = romeon[verify];
        result = offset.bind(yankee)(report);
        output = result.useStateFromStoresArray;
        report = _closure1_slot18;
        sizing = new Array(2);
        sizing[0] = report;
        report = _closure1_slot21;
        sizing[1] = report;
        kiloes = new Array(2);
        kiloes[0] = foxtra;
        kiloes[1] = tangon;
        report = function() {
            _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                entity = _closure2_slot1;
                if(entity) { _fun00016_ip = 21; continue _fun00015 }
 10:
                entity = _closure2_slot8;
                entity = entity.current;
                return entity;
 21:
                entity = new Array(0);
                report = new Array(0);
                zuuluu = _closure1_slot38;
                tangon = _closure1_slot21;
                michal = tangon.getFlattenedGuildIds;
                michal = michal.bind(tangon)();
                golfie = undefined;
                oscard = zuuluu.bind(golfie)(michal);
                zuuluu = oscard.bind(golfie)();
                michal = zuuluu.done;
                tangon = 0;
                if(michal) { _fun00016_ip = 158; continue _fun00015 }
 71:
                offset = zuuluu.value;
                michal = _closure2_slot2;
                if(!(offset !== michal)) { _fun00016_ip = 143; continue _fun00015 }
 84:
                yankee = _closure1_slot18;
                michal = yankee.getMentionCount;
                michal = michal.bind(yankee)(offset);
                if(!(!(michal > tangon))) { _fun00016_ip = 133; continue _fun00015 }
 103:
                yankee = _closure1_slot18;
                michal = yankee.hasUnread;
                michal = michal.bind(yankee)(offset);
                if(!michal) { _fun00016_ip = 143; continue _fun00015 }
 121:
                michal = report.push;
                michal = michal.bind(report)(offset);
                _fun00016_ip = 143; continue _fun00015;
 133:
                michal = entity.push;
                michal = michal.bind(entity)(offset);
 143:
                offset = oscard.bind(golfie)();
                michal = offset.done;
                zuuluu = offset;
                if(!michal) { _fun00016_ip = 71; continue _fun00015 }
 158:
                zuuluu = entity.push;
                michal = new Array(0);
                backup = michal;
                foxtra = report;
                romeon = 0;
                tangon = arraySpread(backup, foxtra, romeon);
                backup = zuuluu;
                foxtra = michal;
                romeon = entity;
                michal = apply(backup, foxtra, romeon);
                return entity;
            }
        };
        report = output.bind(result)(sizing, report, kiloes);
        var _closure2_slot9 = report;
        output = _closure1_slot4;
        sizing = output.useEffect;
        kiloes = function() {
            michal = _closure2_slot8;
            entity = _closure2_slot9;
            michal['current'] = entity;
            entity = undefined;
            return entity;
        };
        kiloes = sizing.bind(output)(kiloes);
        output = _closure1_slot4;
        sizing = output.useRef;
        kiloes = new Array(0);
        kiloes = sizing.bind(output)(kiloes);
        var _closure2_slot10 = kiloes;
        verify = romeon[verify];
        sizing = offset.bind(yankee)(verify);
        kiloes = sizing.useStateFromStoresArray;
        verify = _closure1_slot7;
        romeon = new Array(5);
        romeon[0] = verify;
        verify = _closure1_slot23;
        romeon[1] = verify;
        verify = _closure1_slot20;
        romeon[2] = verify;
        verify = _closure1_slot22;
        romeon[3] = verify;
        verify = _closure1_slot12;
        romeon[4] = verify;
        offset = new Array(4);
        offset[0] = backup;
        offset[1] = tangon;
        offset[2] = foxtra;
        offset[3] = zuuluu;
        verify = function() {
            _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                tangon = _closure2_slot4;
                zuuluu = null;
                if(!(zuuluu == tangon)) { _fun00018_ip = 21; continue _fun00017 }
 15:
                verify = _closure2_slot2;
                _fun00018_ip = 25; continue _fun00017;
 21:
                verify = _closure2_slot4;
 25:
                tangon = _closure2_slot0;
                if(tangon) { _fun00018_ip = 348; continue _fun00017 }
 35:
                if(!(zuuluu != verify)) { _fun00018_ip = 348; continue _fun00017 }
 42:
                zuuluu = _closure2_slot1;
                if(zuuluu) { _fun00018_ip = 60; continue _fun00017 }
 49:
                entity = _closure2_slot10;
                entity = entity.current;
                return entity;
 60:
                entity = new Array(0);
                var _closure3_slot0 = entity;
                golfie = new Array(0);
                var _closure3_slot1 = golfie;
                report = new Array(0);
                var _closure3_slot2 = report;
                oscard = new Array(0);
                var _closure3_slot3 = oscard;
                zuuluu = global;
                offset = zuuluu.Object;
                option = offset.values;
                yankee = _closure1_slot12;
                tangon = yankee.getActiveJoinedUnreadThreadsForGuild;
                tangon = tangon.bind(yankee)(verify);
                yankee = option.bind(offset)(tangon);
                option = yankee.length;
                tangon = 0;
                option = tangon < option;
                offset = 0;
                if(!option) { _fun00018_ip = 195; continue _fun00017 }
 144:
                option = yankee[offset];
                backup = option;
                for(option in backup)
 159:
                {
 168:
                    output = option;
                    sizing = golfie.push;
                    sizing = sizing.bind(golfie)(output);
                    _fun00018_ip = 159; continue _fun00017;
                }
 183:
                offset = offset + 1;
                option = yankee.length;
                if(offset < option) { _fun00018_ip = 144; continue _fun00017 }
 195:
                option = _closure1_slot7;
                zuuluu = option.getGuild;
                zuuluu = zuuluu.bind(option)(verify);
                verify = zuuluu.guildChannels;
                option = verify.forEachChannel;
                zuuluu = function(argFoo) {
                    _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
                        michal = argFoo;
                        report = _closure1_slot14;
                        tangon = michal.type;
                        entity = undefined;
                        tangon = report.bind(entity)(tangon);
                        if(tangon) { _fun00020_ip = 45; continue _fun00019 }
 25:
                        oscard = _closure1_slot13;
                        report = michal.type;
                        report = oscard.bind(entity)(report);
                        if(!report) { _fun00020_ip = 354; continue _fun00019 }
 45:
                        option = _closure1_slot22;
                        golfie = option.isChannelMuted;
                        oscard = michal.guild_id;
                        report = michal.id;
                        report = golfie.bind(option)(oscard, report);
                        if(report) { _fun00020_ip = 354; continue _fun00019 }
 77:
                        oscard = michal.parent_id;
                        report = null;
                        if(!(report != oscard)) { _fun00020_ip = 122; continue _fun00019 }
 89:
                        option = _closure1_slot22;
                        golfie = option.isChannelMuted;
                        oscard = michal.guild_id;
                        report = michal.parent_id;
                        report = golfie.bind(option)(oscard, report);
                        if(report) { _fun00020_ip = 354; continue _fun00019 }
 122:
                        golfie = _closure1_slot20;
                        oscard = golfie.getMentionCount;
                        report = michal.id;
                        oscard = oscard.bind(golfie)(report);
                        report = 0;
                        if(!(!(oscard > report))) { _fun00020_ip = 332; continue _fun00019 }
 151:
                        if(tangon) { _fun00020_ip = 215; continue _fun00019 }
 154:
                        oscard = _closure1_slot0;
                        golfie = _closure1_slot2;
                        report = 36;
                        report = golfie[report];
                        oscard = oscard.bind(entity)(report);
                        report = oscard.getHasImportantUnread;
                        report = report.bind(oscard)(michal);
                        if(!report) { _fun00020_ip = 215; continue _fun00019 }
 188:
                        golfie = _closure3_slot1;
                        oscard = golfie.push;
                        report = michal.id;
                        report = oscard.bind(golfie)(report);
                        _fun00020_ip = 354; continue _fun00019;
 215:
                        if(tangon) { _fun00020_ip = 271; continue _fun00019 }
 218:
                        tangon = !tangon;
                        if(!tangon) { _fun00020_ip = 244; continue _fun00019 }
 224:
                        golfie = _closure1_slot20;
                        oscard = golfie.hasUnread;
                        report = michal.id;
                        tangon = oscard.bind(golfie)(report);
 244:
                        if(!tangon) { _fun00020_ip = 354; continue _fun00019 }
 247:
                        oscard = _closure3_slot2;
                        report = oscard.push;
                        tangon = michal.id;
                        tangon = report.bind(oscard)(tangon);
                        _fun00020_ip = 354; continue _fun00019;
 271:
                        verify = _closure1_slot23;
                        option = verify.getVoiceStatesForChannel;
                        zuuluu = michal.id;
                        oscard = option.bind(verify)(zuuluu);
                        for(zuuluu in oscard)
 299:
                        {
 308:
                            report = _closure3_slot3;
                            tangon = report.push;
                            zuuluu = michal.id;
                            zuuluu = tangon.bind(report)(zuuluu);
                            _fun00020_ip = 354; continue _fun00019;
 332:
                            tangon = _closure3_slot0;
                            zuuluu = tangon.push;
                            michal = michal.id;
                            michal = zuuluu.bind(tangon)(michal);
                        }
 354:
                        return entity;
                    }
                };
                michal = {'ignoreRecents': true, 'withThreads': true};
                michal = option.bind(verify)(zuuluu, michal);
                zuuluu = entity.push;
                michal = new Array(0);
                update = michal;
                echoed = golfie;
                result = 0;
                golfie = arraySpread(update, echoed, result);
                update = zuuluu;
                echoed = michal;
                result = entity;
                michal = apply(update, echoed, result);
                zuuluu = entity.push;
                michal = new Array(0);
                update = michal;
                echoed = oscard;
                result = 0;
                oscard = arraySpread(update, echoed, result);
                update = zuuluu;
                echoed = michal;
                result = entity;
                michal = apply(update, echoed, result);
                zuuluu = entity.push;
                michal = new Array(0);
                update = michal;
                echoed = report;
                result = 0;
                tangon = arraySpread(update, echoed, result);
                update = zuuluu;
                echoed = michal;
                result = entity;
                michal = apply(update, echoed, result);
                return entity;
 348:
                entity = new Array(0);
                return entity;
            }
        };
        romeon = kiloes.bind(sizing)(romeon, verify, offset);
        var _closure2_slot11 = romeon;
        kiloes = _closure1_slot4;
        offset = kiloes.useEffect;
        verify = function() {
            michal = _closure2_slot10;
            entity = _closure2_slot11;
            michal['current'] = entity;
            entity = undefined;
            return entity;
        };
        verify = offset.bind(kiloes)(verify);
        kiloes = _closure1_slot4;
        offset = kiloes.useRef;
        verify = new Array(0);
        verify = offset.bind(kiloes)(verify);
        var _closure2_slot12 = verify;
        kiloes = _closure1_slot4;
        offset = kiloes.useMemo;
        verify = new Array(4);
        verify[0] = backup;
        verify[1] = foxtra;
        verify[2] = tangon;
        verify[3] = report;
        tangon = function() {
            _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
                michal = _closure2_slot0;
                if(michal) { _fun00022_ip = 306; continue _fun00021 }
 13:
                michal = _closure2_slot1;
                if(!michal) { _fun00022_ip = 306; continue _fun00021 }
 23:
                zuuluu = global;
                report = zuuluu.Set;
                output = _closure2_slot9;
                tangon = report.prototype;
                tangon = Object.create(tangon, {constructor: {value: report}});
                result = tangon;
                michal = new result[report](output, sizing);
                yankee = michal instanceof Object ? michal : tangon;
                michal = _closure2_slot2;
                offset = null;
                if(!(offset != michal)) { _fun00022_ip = 79; continue _fun00021 }
 65:
                tangon = yankee.add;
                michal = _closure2_slot2;
                michal = tangon.bind(yankee)(michal);
 79:
                michal = _closure1_slot10;
                option = undefined;
                golfie = michal.bind(option)();
                michal = new Array(0);
                zuuluu = zuuluu.Set;
                tangon = zuuluu.prototype;
                tangon = Object.create(tangon, {constructor: {value: zuuluu}});
                result = tangon;
                zuuluu = new result[zuuluu](output);
                oscard = zuuluu instanceof Object ? zuuluu : tangon;
                tangon = golfie.length;
                zuuluu = 1;
                report = tangon - zuuluu;
                tangon = 0;
                zuuluu = undefined;
                if(!(report >= tangon)) { _fun00022_ip = 304; continue _fun00021 }
 145:
                sizing = golfie[report];
                if(!(offset != sizing)) { _fun00022_ip = 304; continue _fun00021 }
 156:
                foxtra = sizing.startsWith;
                romeon = _closure1_slot8;
                romeon = foxtra.bind(sizing)(romeon);
                if(romeon) { _fun00022_ip = 185; continue _fun00021 }
 174:
                romeon = _closure1_slot9;
                foxtra = romeon.bind(option)(sizing);
                _fun00022_ip = 228; continue _fun00021;
 185:
                kiloes = _closure1_slot16;
                backup = kiloes.getChannel;
                romeon = _closure1_slot9;
                romeon = romeon.bind(option)(sizing);
                backup = backup.bind(kiloes)(romeon);
                kiloes = offset == backup;
                romeon = undefined;
                if(kiloes) { _fun00022_ip = 222; continue _fun00021 }
 217:
                romeon = backup.guild_id;
 222:
                foxtra = romeon;
                zuuluu = backup;
 228:
                romeon = offset == foxtra;
                if(romeon) { _fun00022_ip = 245; continue _fun00021 }
 235:
                backup = yankee.has;
                romeon = backup.bind(yankee)(foxtra);
 245:
                if(romeon) { _fun00022_ip = 258; continue _fun00021 }
 248:
                backup = oscard.has;
                romeon = backup.bind(oscard)(foxtra);
 258:
                if(romeon) { _fun00022_ip = 281; continue _fun00021 }
 261:
                romeon = oscard.add;
                romeon = romeon.bind(oscard)(foxtra);
                romeon = michal.push;
                romeon = romeon.bind(michal)(foxtra);
 281:
                foxtra = michal.length;
                romeon = _closure1_slot32;
                if(!(!(foxtra >= romeon))) { _fun00022_ip = 304; continue _fun00021 }
 294:
                report = report - 1;
                if(report >= tangon) { _fun00022_ip = 145; continue _fun00021 }
 304:
                return michal;
 306:
                entity = _closure2_slot12;
                entity = entity.current;
                return entity;
            }
        };
        tangon = offset.bind(kiloes)(tangon, verify);
        var _closure2_slot13 = tangon;
        kiloes = _closure1_slot4;
        offset = kiloes.useEffect;
        verify = function() {
            michal = _closure2_slot12;
            entity = _closure2_slot13;
            michal['current'] = entity;
            entity = undefined;
            return entity;
        };
        verify = offset.bind(kiloes)(verify);
        offset = _closure1_slot4;
        verify = offset.useRef;
        verify = verify.bind(offset)(yankee);
        var _closure2_slot14 = verify;
        yankee = _closure1_slot4;
        offset = yankee.useMemo;
        verify = new Array(5);
        verify[0] = backup;
        verify[1] = foxtra;
        verify[2] = romeon;
        verify[3] = option;
        verify[4] = zuuluu;
        option = function() {
            _fun00023: for(var _fun00024_ip = 0; ; ) switch(_fun00024_ip) {
 0:
                entity = _closure2_slot0;
                if(entity) { _fun00024_ip = 419; continue _fun00023 }
 13:
                entity = _closure2_slot1;
                if(entity) { _fun00024_ip = 31; continue _fun00023 }
 20:
                entity = _closure2_slot14;
                entity = entity.current;
                return entity;
 31:
                offset = _closure2_slot3;
                zuuluu = _closure1_slot10;
                entity = undefined;
                oscard = zuuluu.bind(entity)();
                option = null;
                zuuluu = option != offset;
                tangon = undefined;
                if(!zuuluu) { _fun00024_ip = 86; continue _fun00023 }
 59:
                golfie = _closure1_slot8;
                zuuluu = global;
                zuuluu = zuuluu.HermesInternal;
                report = zuuluu.concat;
                zuuluu = '';
                tangon = report.bind(zuuluu)(golfie, offset);
 86:
                golfie = new Array(0);
                report = oscard.length;
                zuuluu = 1;
                zuuluu = report - zuuluu;
                report = 0;
                if(!(zuuluu >= report)) { _fun00024_ip = 177; continue _fun00023 }
 108:
                romeon = oscard[zuuluu];
                if(!(option != romeon)) { _fun00024_ip = 177; continue _fun00023 }
 116:
                yankee = romeon.startsWith;
                offset = _closure1_slot11;
                offset = yankee.bind(romeon)(offset);
                if(offset) { _fun00024_ip = 170; continue _fun00023 }
 134:
                if(!(romeon !== tangon)) { _fun00024_ip = 170; continue _fun00023 }
 138:
                yankee = golfie.push;
                offset = _closure1_slot9;
                offset = offset.bind(entity)(romeon);
                offset = yankee.bind(golfie)(offset);
                yankee = golfie.length;
                offset = _closure1_slot33;
                if(!(!(yankee >= offset))) { _fun00024_ip = 177; continue _fun00023 }
 170:
                zuuluu = zuuluu - 1;
                if(zuuluu >= report) { _fun00024_ip = 108; continue _fun00023 }
 177:
                zuuluu = new Array(0);
                tangon = new Array(0);
                oscard = _closure2_slot4;
                if(!(option == oscard)) { _fun00024_ip = 282; continue _fun00023 }
 193:
                oscard = global;
                oscard = oscard.Set;
                option = oscard.prototype;
                option = Object.create(option, {constructor: {value: oscard}});
                sizing = option;
                oscard = new sizing[oscard](kiloes);
                offset = oscard instanceof Object ? oscard : option;
                oscard = _closure1_slot38;
                option = oscard.bind(entity)(golfie);
                golfie = option.bind(entity)();
                oscard = golfie.done;
                if(oscard) { _fun00024_ip = 282; continue _fun00023 }
 242:
                romeon = golfie.value;
                yankee = _closure1_slot42;
                oscard = _closure1_slot9;
                oscard = oscard.bind(entity)(romeon);
                oscard = yankee.bind(entity)(oscard, offset, tangon);
                yankee = option.bind(entity)();
                oscard = yankee.done;
                golfie = yankee;
                if(!oscard) { _fun00024_ip = 242; continue _fun00023 }
 282:
                oscard = global;
                oscard = oscard.Set;
                golfie = oscard.prototype;
                golfie = Object.create(golfie, {constructor: {value: oscard}});
                sizing = golfie;
                oscard = new sizing[oscard](kiloes);
                option = oscard instanceof Object ? oscard : golfie;
                oscard = _closure2_slot11;
                oscard = oscard.length;
                if(!(oscard > report)) { _fun00024_ip = 379; continue _fun00023 }
 323:
                oscard = _closure1_slot38;
                michal = _closure2_slot11;
                golfie = oscard.bind(entity)(michal);
                oscard = golfie.bind(entity)();
                michal = oscard.done;
                if(michal) { _fun00024_ip = 379; continue _fun00023 }
 348:
                offset = _closure1_slot42;
                michal = oscard.value;
                michal = offset.bind(entity)(michal, option, zuuluu);
                offset = golfie.bind(entity)();
                michal = offset.done;
                oscard = offset;
                if(!michal) { _fun00024_ip = 348; continue _fun00023 }
 379:
                michal = tangon.length;
                if(!(!(michal > report))) { _fun00024_ip = 402; continue _fun00023 }
 388:
                michal = zuuluu.length;
                michal = michal > report;
                entity = undefined;
                if(!michal) { _fun00024_ip = 417; continue _fun00023 }
 402:
                michal = {};
                michal['channelHistory'] = tangon;
                michal['unreads'] = zuuluu;
                entity = michal;
 417:
                return entity;
 419:
                entity = undefined;
                return entity;
            }
        };
        verify = offset.bind(yankee)(option, verify);
        var _closure2_slot15 = verify;
        offset = _closure1_slot4;
        option = offset.useEffect;
        entity = function() {
            michal = _closure2_slot14;
            entity = _closure2_slot15;
            michal['current'] = entity;
            entity = undefined;
            return entity;
        };
        entity = option.bind(offset)(entity);
        entity = {};
        option = _closure1_slot4;
        golfie = option.useDeferredValue;
        golfie = golfie.bind(option)(verify);
        entity['initialResults'] = golfie;
        entity['unreadPrivateChannelIds'] = oscard;
        entity['unreadGuilds'] = report;
        entity['guildHistory'] = tangon;
        entity['selectedUnreadGuild'] = zuuluu;
        entity['setSelectedUnreadGuild'] = michal;
        return entity;
    };
    var _closure1_slot43 = entity;
    entity = global;
    option = entity.Object;
    golfie = option.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = golfie.bind(option)(zuuluu, entity, tangon);
    foxtra = 0;
    tangon = oscard[foxtra];
    entity = undefined;
    tangon = output.bind(entity)(tangon);
    var _closure1_slot3 = tangon;
    romeon = 1;
    golfie = oscard[romeon];
    tangon = argCor;
    golfie = tangon.bind(entity)(golfie);
    var _closure1_slot4 = golfie;
    yankee = 2;
    tangon = oscard[yankee];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.View;
    var _closure1_slot5 = tangon;
    offset = 3;
    tangon = oscard[offset];
    tangon = output.bind(entity)(tangon);
    var _closure1_slot6 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    tangon = output.bind(entity)(tangon);
    var _closure1_slot7 = tangon;
    echoed = 5;
    tangon = oscard[echoed];
    tangon = report.bind(entity)(tangon);
    option = tangon.CHANNEL_PREFIX;
    var _closure1_slot8 = option;
    option = tangon.getIdFromHistoryItem;
    var _closure1_slot9 = option;
    option = tangon.getNavigationHistory;
    var _closure1_slot10 = option;
    tangon = tangon.GUILD_PREFIX;
    var _closure1_slot11 = tangon;
    tangon = 6;
    tangon = oscard[tangon];
    tangon = output.bind(entity)(tangon);
    var _closure1_slot12 = tangon;
    tangon = 7;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    option = tangon.isGuildSelectableChannelType;
    var _closure1_slot13 = option;
    tangon = tangon.isGuildVocalChannelType;
    var _closure1_slot14 = tangon;
    tangon = 8;
    tangon = oscard[tangon];
    tangon = output.bind(entity)(tangon);
    var _closure1_slot15 = tangon;
    tangon = 9;
    tangon = oscard[tangon];
    tangon = output.bind(entity)(tangon);
    var _closure1_slot16 = tangon;
    tangon = 10;
    tangon = oscard[tangon];
    tangon = output.bind(entity)(tangon);
    var _closure1_slot17 = tangon;
    tangon = 11;
    tangon = oscard[tangon];
    tangon = output.bind(entity)(tangon);
    var _closure1_slot18 = tangon;
    tangon = 12;
    tangon = oscard[tangon];
    tangon = output.bind(entity)(tangon);
    var _closure1_slot19 = tangon;
    tangon = 13;
    tangon = oscard[tangon];
    tangon = output.bind(entity)(tangon);
    var _closure1_slot20 = tangon;
    tangon = 14;
    tangon = oscard[tangon];
    tangon = output.bind(entity)(tangon);
    var _closure1_slot21 = tangon;
    tangon = 15;
    tangon = oscard[tangon];
    tangon = output.bind(entity)(tangon);
    var _closure1_slot22 = tangon;
    tangon = 16;
    tangon = oscard[tangon];
    tangon = output.bind(entity)(tangon);
    var _closure1_slot23 = tangon;
    tangon = 17;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.AnalyticEvents;
    var _closure1_slot24 = tangon;
    tangon = 18;
    option = oscard[tangon];
    option = report.bind(entity)(option);
    option = option.jsx;
    var _closure1_slot25 = option;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.jsxs;
    var _closure1_slot26 = tangon;
    sizing = 19;
    tangon = oscard[sizing];
    tangon = output.bind(entity)(tangon);
    tangon = tangon.radii;
    result = tangon.md;
    tangon = 20;
    option = oscard[tangon];
    backup = report.bind(entity)(option);
    verify = backup.createStyles;
    option = {};
    kiloes = {'flexGrow': 0, 'marginHorizontal': 16, 'marginBottom': 16, 'flexShrink': 1, 'borderRadius': 24, 'backgroundColor': null, 'flexDirection': 'column', 'justifyContent': 'flex-start', 'alignItems': 'stretch', 'overflow': 'hidden'};
    update = oscard[sizing];
    update = output.bind(entity)(update);
    update = update.colors;
    update = update.BACKGROUND_PRIMARY;
    kiloes['backgroundColor'] = update;
    option['wrapper'] = kiloes;
    kiloes = {'flex': 4294967295, 'overflow': 'hidden', 'borderBottomLeftRadius': 24, 'borderBottomRightRadius': 24};
    option['launchPadContent'] = kiloes;
    kiloes = {'paddingHorizontal': 16, 'paddingTop': 16, 'flexDirection': 'row', 'flexShrink': 0, 'flexGrow': 0};
    option['header'] = kiloes;
    kiloes = {'flexGrow': 1, 'flexShrink': 1, 'flexDirection': 'row', 'alignItems': 'center', 'alignSelf': 'center', 'paddingStart': 8};
    option['subheader'] = kiloes;
    kiloes = {'marginStart': 8, 'flexDirection': 'row', 'flexShrink': 0, 'backgroundColor': null, 'borderRadius': null, 'padding': 5, 'alignItems': 'stretch', 'justifyContent': 'center', 'gap': 5, 'borderWidth': 1};
    update = oscard[sizing];
    update = output.bind(entity)(update);
    update = update.colors;
    update = update.INPUT_BACKGROUND;
    kiloes['backgroundColor'] = update;
    kiloes['borderRadius'] = result;
    update = oscard[sizing];
    update = output.bind(entity)(update);
    update = update.colors;
    update = update.INPUT_BORDER;
    kiloes['borderColor'] = update;
    option['tabs'] = kiloes;
    kiloes = {'width': 32, 'height': 32, 'borderRadius': null, 'alignItems': 'center', 'justifyContent': 'center'};
    result = result - echoed;
    kiloes['borderRadius'] = result;
    option['tab'] = kiloes;
    kiloes = {};
    sizing = oscard[sizing];
    sizing = output.bind(entity)(sizing);
    sizing = sizing.colors;
    sizing = sizing.BACKGROUND_PRIMARY;
    kiloes['backgroundColor'] = sizing;
    option['tabSelected'] = kiloes;
    option = verify.bind(backup)(option);
    var _closure1_slot27 = option;
    option = {};
    option['SEARCH'] = foxtra;
    verify = 'SEARCH';
    option[foxtra] = verify;
    option['MEMBERS'] = romeon;
    verify = 'MEMBERS';
    option[romeon] = verify;
    option['NOTIFICATIONS'] = yankee;
    verify = 'NOTIFICATIONS';
    option[yankee] = verify;
    option['DEV_TOOLS'] = offset;
    verify = 'DEV_TOOLS';
    option[offset] = verify;
    var _closure1_slot28 = option;
    option = {};
    verify = 'function LaunchPadTsx1(){const{sharedState}=this.__closure;return sharedState.get();}';
    option['code'] = verify;
    var _closure1_slot29 = option;
    option = {};
    verify = 'function LaunchPadTsx2(sharedState){const{keyboardShown,runOnJS,setFocused}=this.__closure;if(!keyboardShown.get()&&sharedState>0.75){runOnJS(setFocused)(true);}else if(keyboardShown.get()&&sharedState<=0){runOnJS(setFocused)(false);}}';
    option['code'] = verify;
    var _closure1_slot30 = option;
    verify = golfie.memo;
    option = function(argFoo) {
        _fun00025: for(var _fun00026_ip = 0; ; ) switch(_fun00026_ip) {
 0:
            entity = argFoo;
            sizing = entity.tab;
            var _closure2_slot0 = sizing;
            michal = entity.setTab;
            var _closure2_slot1 = michal;
            offset = entity.updateQuery;
            oscard = entity.sharedState;
            var _closure2_slot2 = oscard;
            romeon = entity.searchRef;
            var _closure2_slot3 = romeon;
            entity = _closure1_slot27;
            tangon = undefined;
            verify = entity.bind(tangon)();
            foxtra = _closure1_slot0;
            output = _closure1_slot2;
            entity = 23;
            michal = output[entity];
            golfie = foxtra.bind(tangon)(michal);
            report = golfie.useStateFromStores;
            michal = _closure1_slot17;
            zuuluu = new Array(1);
            zuuluu[0] = michal;
            michal = function() {
                entity = _closure1_slot17;
                entity = entity.isDeveloper;
                return entity;
            };
            yankee = report.bind(golfie)(zuuluu, michal);
            zuuluu = _closure1_slot4;
            michal = zuuluu.useRef;
            report = false;
            michal = michal.bind(zuuluu)(report);
            var _closure2_slot4 = michal;
            option = 24;
            michal = output[option];
            zuuluu = foxtra.bind(tangon)(michal);
            michal = zuuluu.useSharedValue;
            result = michal.bind(zuuluu)(report);
            var _closure2_slot5 = result;
            zuuluu = _closure1_slot4;
            michal = zuuluu.useRef;
            michal = michal.bind(zuuluu)(sizing);
            var _closure2_slot6 = michal;
            report = _closure1_slot4;
            zuuluu = report.useEffect;
            michal = function() {
                michal = _closure2_slot6;
                entity = _closure2_slot0;
                michal['current'] = entity;
                entity = undefined;
                return entity;
            };
            michal = zuuluu.bind(report)(michal);
            golfie = _closure1_slot4;
            report = golfie.useCallback;
            zuuluu = new Array(2);
            zuuluu[0] = result;
            zuuluu[1] = romeon;
            michal = function(argFoo) {
                _fun00027: for(var _fun00028_ip = 0; ; ) switch(_fun00028_ip) {
 0:
                    zuuluu = argFoo;
                    if(!zuuluu) { _fun00028_ip = 38; continue _fun00027 }
 6:
                    entity = _closure2_slot6;
                    report = entity.current;
                    tangon = _closure1_slot28;
                    tangon = tangon.SEARCH;
                    if(!(report !== tangon)) { _fun00028_ip = 163; continue _fun00027 }
 38:
                    if(zuuluu) { _fun00028_ip = 280; continue _fun00027 }
 44:
                    tangon = _closure2_slot4;
                    tangon = tangon.current;
                    if(!tangon) { _fun00028_ip = 110; continue _fun00027 }
 59:
                    oscard = _closure1_slot0;
                    report = _closure1_slot2;
                    tangon = 25;
                    report = report[tangon];
                    tangon = undefined;
                    report = oscard.bind(tangon)(report);
                    tangon = report.getBestActiveInput;
                    report = tangon.bind(report)();
                    tangon = null;
                    if(!(tangon != report)) { _fun00028_ip = 110; continue _fun00027 }
 100:
                    tangon = report.focus;
                    tangon = tangon.bind(report)();
 110:
                    tangon = _closure2_slot3;
                    report = tangon.current;
                    tangon = null;
                    if(!(tangon != report)) { _fun00028_ip = 135; continue _fun00027 }
 125:
                    tangon = report.blur;
                    tangon = tangon.bind(report)();
 135:
                    tangon = _closure2_slot4;
                    report = false;
                    tangon['current'] = report;
                    tangon = _closure2_slot5;
                    zuuluu = tangon.set;
                    zuuluu = zuuluu.bind(tangon)(report);
                    _fun00028_ip = 280; continue _fun00027;
 163:
                    tangon = _closure2_slot4;
                    report = _closure1_slot0;
                    zuuluu = _closure1_slot2;
                    entity = 25;
                    entity = zuuluu[entity];
                    zuuluu = undefined;
                    report = report.bind(zuuluu)(entity);
                    entity = report.getBestActiveInput;
                    oscard = entity.bind(report)();
                    entity = null;
                    report = entity == oscard;
                    if(report) { _fun00028_ip = 218; continue _fun00027 }
 208:
                    report = oscard.isFocused;
                    zuuluu = report.bind(oscard)();
 218:
                    report = true;
                    zuuluu = report === zuuluu;
                    tangon['current'] = zuuluu;
                    zuuluu = _closure2_slot3;
                    zuuluu = zuuluu.current;
                    if(!(entity != zuuluu)) { _fun00028_ip = 280; continue _fun00027 }
 243:
                    tangon = _closure2_slot5;
                    zuuluu = tangon.set;
                    zuuluu = zuuluu.bind(tangon)(report);
                    michal = _closure2_slot3;
                    michal = michal.current;
                    if(!(entity != michal)) { _fun00028_ip = 280; continue _fun00027 }
 270:
                    entity = michal.focus;
                    entity = entity.bind(michal)();
 280:
                    entity = undefined;
                    return entity;
                }
            };
            golfie = report.bind(golfie)(michal, zuuluu);
            var _closure2_slot7 = golfie;
            entity = output[entity];
            report = foxtra.bind(tangon)(entity);
            zuuluu = report.useStateFromStores;
            entity = _closure1_slot6;
            michal = new Array(1);
            michal[0] = entity;
            entity = function() {
                michal = _closure1_slot6;
                entity = michal.isOpen;
                entity = entity.bind(michal)();
                return entity;
            };
            entity = zuuluu.bind(report)(michal, entity);
            var _closure2_slot8 = entity;
            report = _closure1_slot4;
            zuuluu = report.useEffect;
            michal = new Array(2);
            michal[0] = entity;
            michal[1] = golfie;
            entity = function() {
                zuuluu = _closure2_slot7;
                entity = _closure2_slot8;
                michal = !entity;
                entity = undefined;
                michal = zuuluu.bind(entity)(michal);
                return entity;
            };
            entity = zuuluu.bind(report)(entity, michal);
            report = _closure1_slot4;
            zuuluu = report.useEffect;
            michal = new Array(3);
            michal[0] = sizing;
            michal[1] = oscard;
            michal[2] = golfie;
            entity = function() {
                _fun00029: for(var _fun00030_ip = 0; ; ) switch(_fun00030_ip) {
 0:
                    zuuluu = _closure2_slot0;
                    michal = _closure1_slot28;
                    michal = michal.SEARCH;
                    michal = zuuluu === michal;
                    if(!michal) { _fun00030_ip = 47; continue _fun00029 }
 27:
                    tangon = _closure2_slot2;
                    zuuluu = tangon.get;
                    tangon = zuuluu.bind(tangon)();
                    zuuluu = 1;
                    michal = zuuluu === tangon;
 47:
                    if(!michal) { _fun00030_ip = 63; continue _fun00029 }
 50:
                    zuuluu = _closure2_slot7;
                    michal = undefined;
                    entity = true;
                    entity = zuuluu.bind(michal)(entity);
 63:
                    entity = undefined;
                    return entity;
                }
            };
            entity = zuuluu.bind(report)(entity, michal);
            entity = output[option];
            report = foxtra.bind(tangon)(entity);
            zuuluu = report.useAnimatedReaction;
            michal = function() { // Original name: v
                michal = _closure2_slot2;
                entity = michal.get;
                entity = entity.bind(michal)();
                return entity;
            };
            entity = {};
            entity['sharedState'] = oscard;
            michal['__closure'] = entity;
            entity = 17067823098320.0;
            michal['__workletHash'] = entity;
            entity = _closure1_slot29;
            michal['__initData'] = entity;
            entity = function(argFoo) { // Original name: S
                _fun00031: for(var _fun00032_ip = 0; ; ) switch(_fun00032_ip) {
 0:
                    tangon = argFoo;
                    zuuluu = _closure2_slot5;
                    michal = zuuluu.get;
                    michal = michal.bind(zuuluu)();
                    if(michal) { _fun00032_ip = 84; continue _fun00031 }
 22:
                    michal = 0.75;
                    if(!(tangon > michal)) { _fun00032_ip = 84; continue _fun00031 }
 36:
                    zuuluu = _closure1_slot0;
                    report = _closure1_slot2;
                    michal = 24;
                    michal = report[michal];
                    report = undefined;
                    oscard = zuuluu.bind(report)(michal);
                    zuuluu = oscard.runOnJS;
                    michal = _closure2_slot7;
                    zuuluu = zuuluu.bind(oscard)(michal);
                    michal = true;
                    michal = zuuluu.bind(report)(michal);
                    _fun00032_ip = 155; continue _fun00031;
 84:
                    zuuluu = _closure2_slot5;
                    michal = zuuluu.get;
                    michal = michal.bind(zuuluu)();
                    if(!michal) { _fun00032_ip = 106; continue _fun00031 }
 100:
                    zuuluu = 0;
                    michal = tangon <= zuuluu;
 106:
                    if(!michal) { _fun00032_ip = 155; continue _fun00031 }
 109:
                    tangon = _closure1_slot0;
                    zuuluu = _closure1_slot2;
                    michal = 24;
                    michal = zuuluu[michal];
                    zuuluu = undefined;
                    tangon = tangon.bind(zuuluu)(michal);
                    michal = tangon.runOnJS;
                    entity = _closure2_slot7;
                    michal = michal.bind(tangon)(entity);
                    entity = false;
                    entity = michal.bind(zuuluu)(entity);
 155:
                    entity = undefined;
                    return entity;
                }
            };
            oscard = {};
            oscard['keyboardShown'] = result;
            option = output[option];
            option = foxtra.bind(tangon)(option);
            option = option.runOnJS;
            oscard['runOnJS'] = option;
            oscard['setFocused'] = golfie;
            entity['__closure'] = oscard;
            oscard = 3784684686013.0;
            entity['__workletHash'] = oscard;
            oscard = _closure1_slot30;
            entity['__initData'] = oscard;
            entity = zuuluu.bind(report)(michal, entity);
            zuuluu = _closure1_slot26;
            michal = _closure1_slot5;
            entity = {};
            report = verify.header;
            entity['style'] = report;
            report = _closure1_slot28;
            report = report.SEARCH;
            if(!(sizing !== report)) { _fun00026_ip = 736; continue _fun00025 }
 526:
            report = _closure1_slot28;
            report = report.MEMBERS;
            if(!(sizing !== report)) { _fun00026_ip = 659; continue _fun00025 }
 540:
            report = _closure1_slot28;
            report = report.NOTIFICATIONS;
            if(!(sizing !== report)) { _fun00026_ip = 582; continue _fun00025 }
 554:
            golfie = _closure1_slot25;
            oscard = _closure1_slot41;
            report = {};
            option = 'Dev Tools';
            report['text'] = option;
            oscard = golfie.bind(tangon)(oscard, report);
            _fun00026_ip = 657; continue _fun00025;
 582:
            option = _closure1_slot25;
            golfie = _closure1_slot41;
            report = {};
            echoed = _closure1_slot0;
            update = _closure1_slot2;
            foxtra = 27;
            output = update[foxtra];
            output = echoed.bind(tangon)(output);
            result = output.intl;
            output = result.string;
            foxtra = update[foxtra];
            foxtra = echoed.bind(tangon)(foxtra);
            foxtra = foxtra.t;
            foxtra = foxtra.HcoRu7;
            foxtra = output.bind(result)(foxtra);
            report['text'] = foxtra;
            oscard = option.bind(tangon)(golfie, report);
 657:
            _fun00026_ip = 734; continue _fun00025;
 659:
            option = _closure1_slot25;
            golfie = _closure1_slot41;
            report = {};
            echoed = _closure1_slot0;
            update = _closure1_slot2;
            foxtra = 27;
            output = update[foxtra];
            output = echoed.bind(tangon)(output);
            result = output.intl;
            output = result.string;
            foxtra = update[foxtra];
            foxtra = echoed.bind(tangon)(foxtra);
            foxtra = foxtra.t;
            foxtra = foxtra.9Oq93t;
            foxtra = output.bind(result)(foxtra);
            report['text'] = foxtra;
            oscard = option.bind(tangon)(golfie, report);
 734:
            _fun00026_ip = 798; continue _fun00025;
 736:
            option = _closure1_slot25;
            golfie = _closure1_slot0;
            foxtra = _closure1_slot2;
            report = 26;
            report = foxtra[report];
            report = golfie.bind(tangon)(report);
            golfie = report.SearchField;
            report = {'size': 'md', 'returnKeyType': 'done', 'ref': null, 'onChange': null, 'autoComplete': 'off', 'spellCheck': false, 'autoFocus': false};
            report['ref'] = romeon;
            report['onChange'] = offset;
            oscard = option.bind(tangon)(golfie, report);
 798:
            report = new Array(2);
            report[0] = oscard;
            option = _closure1_slot26;
            golfie = _closure1_slot5;
            oscard = {};
            verify = verify.tabs;
            oscard['style'] = verify;
            offset = _closure1_slot25;
            foxtra = _closure1_slot40;
            verify = {};
            romeon = function(argFoo) { // Original name: icon
                tangon = _closure1_slot25;
                michal = _closure1_slot0;
                zuuluu = _closure1_slot2;
                entity = 28;
                entity = zuuluu[entity];
                zuuluu = undefined;
                entity = michal.bind(zuuluu)(entity);
                michal = entity.FlashIcon;
                entity = {};
                report = 'sm';
                entity['size'] = report;
                report = argFoo;
                entity['color'] = report;
                entity = tangon.bind(zuuluu)(michal, entity);
                return entity;
            };
            verify['icon'] = romeon;
            source = _closure1_slot0;
            ctrled = _closure1_slot2;
            result = 27;
            romeon = ctrled[result];
            romeon = source.bind(tangon)(romeon);
            echoed = romeon.intl;
            output = echoed.string;
            romeon = ctrled[result];
            romeon = source.bind(tangon)(romeon);
            romeon = romeon.t;
            romeon = romeon.JqV7IC;
            romeon = output.bind(echoed)(romeon);
            verify['accessibilityLabel'] = romeon;
            romeon = function() { // Original name: onPress
                _fun00033: for(var _fun00034_ip = 0; ; ) switch(_fun00034_ip) {
 0:
                    tangon = _closure2_slot1;
                    entity = _closure1_slot28;
                    zuuluu = entity.SEARCH;
                    entity = undefined;
                    zuuluu = tangon.bind(entity)(zuuluu);
                    michal = _closure2_slot3;
                    zuuluu = michal.current;
                    michal = null;
                    if(!(michal != zuuluu)) { _fun00034_ip = 52; continue _fun00033 }
 42:
                    michal = zuuluu.focus;
                    michal = michal.bind(zuuluu)();
 52:
                    return entity;
                }
            };
            verify['onPress'] = romeon;
            output = _closure1_slot28;
            romeon = output.SEARCH;
            romeon = sizing === romeon;
            verify['selected'] = romeon;
            offset = offset.bind(tangon)(foxtra, verify);
            verify = new Array(3);
            verify[0] = offset;
            romeon = _closure1_slot25;
            offset = {};
            echoed = function(argFoo) { // Original name: icon
                tangon = _closure1_slot25;
                michal = _closure1_slot0;
                zuuluu = _closure1_slot2;
                entity = 29;
                entity = zuuluu[entity];
                zuuluu = undefined;
                entity = michal.bind(zuuluu)(entity);
                michal = entity.BellIcon;
                entity = {};
                report = 'sm';
                entity['size'] = report;
                report = argFoo;
                entity['color'] = report;
                entity = tangon.bind(zuuluu)(michal, entity);
                return entity;
            };
            offset['icon'] = echoed;
            echoed = ctrled[result];
            echoed = source.bind(tangon)(echoed);
            update = echoed.intl;
            echoed = update.string;
            result = ctrled[result];
            result = source.bind(tangon)(result);
            result = result.t;
            result = result.HcoRu7;
            result = echoed.bind(update)(result);
            offset['accessibilityLabel'] = result;
            result = function() { // Original name: onPress
                _fun00035: for(var _fun00036_ip = 0; ; ) switch(_fun00036_ip) {
 0:
                    tangon = _closure2_slot1;
                    entity = _closure1_slot28;
                    zuuluu = entity.NOTIFICATIONS;
                    entity = undefined;
                    zuuluu = tangon.bind(entity)(zuuluu);
                    michal = _closure2_slot3;
                    zuuluu = michal.current;
                    michal = null;
                    if(!(michal != zuuluu)) { _fun00036_ip = 52; continue _fun00035 }
 42:
                    michal = zuuluu.blur;
                    michal = michal.bind(zuuluu)();
 52:
                    return entity;
                }
            };
            offset['onPress'] = result;
            output = output.NOTIFICATIONS;
            output = sizing === output;
            offset['selected'] = output;
            offset = romeon.bind(tangon)(foxtra, offset);
            verify[1] = offset;
            offset = null;
            if(!yankee) { _fun00026_ip = 1123; continue _fun00025 }
 1056:
            foxtra = _closure1_slot25;
            romeon = _closure1_slot40;
            yankee = {};
            output = function(argFoo) { // Original name: icon
                tangon = _closure1_slot25;
                michal = _closure1_slot0;
                zuuluu = _closure1_slot2;
                entity = 30;
                entity = zuuluu[entity];
                zuuluu = undefined;
                entity = michal.bind(zuuluu)(entity);
                michal = entity.StaffBadgeIcon;
                entity = {};
                report = 'sm';
                entity['size'] = report;
                report = argFoo;
                entity['color'] = report;
                entity = tangon.bind(zuuluu)(michal, entity);
                return entity;
            };
            yankee['icon'] = output;
            output = 'Dev Tools';
            yankee['accessibilityLabel'] = output;
            kiloes = _closure1_slot28;
            kiloes = kiloes.DEV_TOOLS;
            kiloes = sizing === kiloes;
            yankee['selected'] = kiloes;
            backup = function() { // Original name: onPress
                _fun00037: for(var _fun00038_ip = 0; ; ) switch(_fun00038_ip) {
 0:
                    tangon = _closure1_slot0;
                    zuuluu = _closure1_slot2;
                    entity = 31;
                    zuuluu = zuuluu[entity];
                    entity = undefined;
                    tangon = tangon.bind(entity)(zuuluu);
                    zuuluu = tangon.isAndroid;
                    zuuluu = zuuluu.bind(tangon)();
                    if(zuuluu) { _fun00038_ip = 61; continue _fun00037 }
 37:
                    tangon = _closure2_slot1;
                    zuuluu = _closure1_slot28;
                    zuuluu = zuuluu.DEV_TOOLS;
                    zuuluu = tangon.bind(entity)(zuuluu);
                    _fun00038_ip = 111; continue _fun00037;
 61:
                    report = _closure1_slot0;
                    tangon = _closure1_slot2;
                    zuuluu = 32;
                    zuuluu = tangon[zuuluu];
                    report = report.bind(entity)(zuuluu);
                    zuuluu = report.navigateToDevTools;
                    zuuluu = zuuluu.bind(report)();
                    zuuluu = _closure1_slot1;
                    michal = 33;
                    michal = tangon[michal];
                    michal = zuuluu.bind(entity)(michal);
                    michal = michal.bind(entity)();
 111:
                    michal = _closure2_slot3;
                    zuuluu = michal.current;
                    michal = null;
                    if(!(michal != zuuluu)) { _fun00038_ip = 139; continue _fun00037 }
 129:
                    michal = zuuluu.blur;
                    michal = michal.bind(zuuluu)();
 139:
                    return entity;
                }
            };
            yankee['onPress'] = backup;
            offset = foxtra.bind(tangon)(romeon, yankee);
 1123:
            verify[2] = offset;
            oscard['children'] = verify;
            oscard = option.bind(tangon)(golfie, oscard);
            report[1] = oscard;
            entity['children'] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    option = verify.bind(golfie)(option);
    var _closure1_slot31 = option;
    var _closure1_slot32 = tangon;
    var _closure1_slot33 = tangon;
    tangon = new Array(0);
    var _closure1_slot34 = tangon;
    option = 37;
    tangon = oscard[option];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.AutocompleterResultTypes;
    verify = tangon.GUILD;
    tangon = new Array(5);
    tangon[0] = verify;
    verify = oscard[option];
    verify = report.bind(entity)(verify);
    verify = verify.AutocompleterResultTypes;
    verify = verify.TEXT_CHANNEL;
    tangon[1] = verify;
    verify = oscard[option];
    verify = report.bind(entity)(verify);
    verify = verify.AutocompleterResultTypes;
    verify = verify.GROUP_DM;
    tangon[2] = verify;
    verify = oscard[option];
    verify = report.bind(entity)(verify);
    verify = verify.AutocompleterResultTypes;
    verify = verify.VOICE_CHANNEL;
    tangon[3] = verify;
    option = oscard[option];
    option = report.bind(entity)(option);
    option = option.AutocompleterResultTypes;
    option = option.USER;
    tangon[4] = option;
    var _closure1_slot35 = tangon;
    tangon = {};
    option = 'function LaunchPadTsx3(){const{sharedState}=this.__closure;return sharedState.get()===0;}';
    tangon['code'] = option;
    var _closure1_slot36 = tangon;
    tangon = {};
    option = 'function LaunchPadTsx4(hidden,prevHidden){const{runOnJS,clearQuery,cancelTimeout}=this.__closure;if(hidden===prevHidden)return;if(hidden&&hidden!==prevHidden){runOnJS(clearQuery)();}else if(!hidden&&hidden!==prevHidden){runOnJS(cancelTimeout)();}}';
    tangon['code'] = option;
    var _closure1_slot37 = tangon;
    tangon = golfie.memo;
    michal = function(argFoo) { // Original name: LaunchPad
        _fun00039: for(var _fun00040_ip = 0; ; ) switch(_fun00040_ip) {
 0:
            michal = argFoo;
            source = michal.visible;
            romeon = michal.sharedState;
            michal = _closure1_slot27;
            tangon = undefined;
            yankee = michal.bind(tangon)();
            zuuluu = _closure1_slot4;
            michal = zuuluu.useState;
            oscard = false;
            zuuluu = michal.bind(zuuluu)(oscard);
            michal = _closure1_slot3;
            option = 2;
            michal = michal.bind(tangon)(zuuluu, option);
            golfie = 0;
            result = michal[golfie];
            report = 1;
            michal = michal[report];
            var _closure2_slot0 = michal;
            offset = _closure1_slot4;
            verify = offset.useCallback;
            zuuluu = function() {
                zuuluu = _closure2_slot0;
                michal = undefined;
                entity = function(argFoo) {
                    entity = argFoo;
                    entity = !entity;
                    return entity;
                };
                entity = zuuluu.bind(michal)(entity);
                return entity;
            };
            michal = new Array(0);
            output = verify.bind(offset)(zuuluu, michal);
            zuuluu = _closure1_slot4;
            michal = zuuluu.useRef;
            sizing = null;
            record = michal.bind(zuuluu)(sizing);
            michal = function(argFoo) { // Original name: useAutocompleterResults
                report = argFoo;
                var _closure3_slot0 = report;
                oscard = _closure1_slot4;
                tangon = oscard.useState;
                zuuluu = '';
                tangon = tangon.bind(oscard)(zuuluu);
                zuuluu = _closure1_slot3;
                offset = undefined;
                option = 2;
                tangon = zuuluu.bind(offset)(tangon, option);
                golfie = 0;
                zuuluu = tangon[golfie];
                verify = 1;
                tangon = tangon[verify];
                var _closure3_slot1 = tangon;
                yankee = _closure1_slot4;
                oscard = yankee.useState;
                tangon = _closure1_slot34;
                oscard = oscard.bind(yankee)(tangon);
                tangon = _closure1_slot3;
                oscard = tangon.bind(offset)(oscard, option);
                tangon = oscard[golfie];
                oscard = oscard[verify];
                var _closure3_slot2 = oscard;
                yankee = _closure1_slot4;
                option = yankee.useState;
                oscard = function() {
                    zuuluu = _closure1_slot1;
                    tangon = _closure1_slot2;
                    michal = 40;
                    michal = tangon[michal];
                    oscard = undefined;
                    report = zuuluu.bind(oscard)(michal);
                    verify = _closure1_slot35;
                    zuuluu = {};
                    entity = true;
                    zuuluu['frecencyBoosters'] = entity;
                    entity = report.prototype;
                    michal = Object.create(entity, {constructor: {value: report}});
                    offset = function(argFoo, argBar) {
                        _fun00041: for(var _fun00042_ip = 0; ; ) switch(_fun00042_ip) {
 0:
                            michal = argBar;
                            entity = michal.trim;
                            michal = entity.bind(michal)();
                            entity = michal.trim;
                            michal = entity.bind(michal)();
                            entity = '';
                            if(!(entity !== michal)) { _fun00042_ip = 50; continue _fun00041 }
 31:
                            zuuluu = _closure3_slot2;
                            michal = undefined;
                            entity = argFoo;
                            entity = zuuluu.bind(michal)(entity);
                            _fun00042_ip = 71; continue _fun00041;
 50:
                            zuuluu = _closure3_slot2;
                            michal = _closure1_slot34;
                            entity = undefined;
                            entity = zuuluu.bind(entity)(michal);
 71:
                            entity = undefined;
                            return entity;
                        }
                    };
                    yankee = michal;
                    option = undefined;
                    golfie = zuuluu;
                    entity = new yankee[report](offset, verify, option, golfie, oscard);
                    entity = entity instanceof Object ? entity : michal;
                    return entity;
                };
                option = option.bind(yankee)(oscard);
                oscard = _closure1_slot3;
                oscard = oscard.bind(offset)(option, verify);
                golfie = oscard[golfie];
                var _closure3_slot3 = golfie;
                offset = _closure1_slot4;
                verify = offset.useEffect;
                option = new Array(1);
                option[0] = golfie;
                oscard = function() {
                    entity = function() {
                        michal = _closure3_slot3;
                        entity = michal.clean;
                        entity = entity.bind(michal)();
                        return entity;
                    };
                    return entity;
                };
                oscard = verify.bind(offset)(oscard, option);
                offset = _closure1_slot4;
                verify = offset.useEffect;
                option = new Array(1);
                option[0] = golfie;
                oscard = function() {
                    zuuluu = _closure1_slot1;
                    michal = _closure1_slot2;
                    entity = 41;
                    michal = michal[entity];
                    entity = undefined;
                    zuuluu = zuuluu.bind(entity)(michal);
                    michal = zuuluu.addRouteChangeListener;
                    entity = function() {
                        _fun00043: for(var _fun00044_ip = 0; ; ) switch(_fun00044_ip) {
 0:
                            zuuluu = global;
                            report = zuuluu.Set;
                            tangon = _closure1_slot15;
                            michal = tangon.getId;
                            oscard = michal.bind(tangon)();
                            michal = zuuluu.HermesInternal;
                            tangon = michal.concat;
                            michal = 'user:';
                            tangon = tangon.bind(michal)(oscard);
                            michal = new Array(1);
                            michal[0] = tangon;
                            tangon = report.prototype;
                            tangon = Object.create(tangon, {constructor: {value: report}});
                            verify = tangon;
                            option = michal;
                            michal = new verify[report](option, golfie);
                            michal = michal instanceof Object ? michal : tangon;
                            report = _closure1_slot0;
                            tangon = _closure1_slot2;
                            entity = 35;
                            tangon = tangon[entity];
                            entity = undefined;
                            report = report.bind(entity)(tangon);
                            tangon = report.getSelectedGuildFromRoute;
                            oscard = tangon.bind(report)();
                            tangon = null;
                            if(!(tangon != oscard)) { _fun00044_ip = 148; continue _fun00043 }
 116:
                            tangon = michal.add;
                            zuuluu = zuuluu.HermesInternal;
                            report = zuuluu.concat;
                            zuuluu = 'guild:';
                            zuuluu = report.bind(zuuluu)(oscard);
                            zuuluu = tangon.bind(michal)(zuuluu);
 148:
                            report = _closure3_slot3;
                            tangon = report.setOptions;
                            zuuluu = {};
                            zuuluu['blacklist'] = michal;
                            michal = true;
                            michal = tangon.bind(report)(zuuluu, michal);
                            return entity;
                        }
                    };
                    entity = michal.bind(zuuluu)(entity);
                    return entity;
                };
                oscard = verify.bind(offset)(oscard, option);
                verify = _closure1_slot4;
                option = verify.useEffect;
                oscard = new Array(2);
                oscard[0] = report;
                oscard[1] = golfie;
                report = function() {
                    _fun00045: for(var _fun00046_ip = 0; ; ) switch(_fun00046_ip) {
 0:
                        entity = _closure3_slot0;
                        michal = _closure3_slot3;
                        if(entity) { _fun00046_ip = 26; continue _fun00045 }
 14:
                        entity = michal.pause;
                        entity = entity.bind(michal)();
                        _fun00046_ip = 36; continue _fun00045;
 26:
                        entity = michal.resume;
                        entity = entity.bind(michal)();
 36:
                        entity = undefined;
                        return entity;
                    }
                };
                report = option.bind(verify)(report, oscard);
                oscard = _closure1_slot4;
                report = oscard.useCallback;
                michal = new Array(1);
                michal[0] = golfie;
                entity = function(argFoo) {
                    tangon = argFoo;
                    zuuluu = _closure3_slot1;
                    entity = undefined;
                    zuuluu = zuuluu.bind(entity)(tangon);
                    zuuluu = _closure3_slot3;
                    michal = zuuluu.search;
                    michal = michal.bind(zuuluu)(tangon);
                    return entity;
                };
                michal = report.bind(oscard)(entity, michal);
                entity = {};
                entity['queryResults'] = tangon;
                entity['query'] = zuuluu;
                entity['updateQuery'] = michal;
                return entity;
            };
            michal = michal.bind(tangon)(source);
            foxtra = michal.query;
            var _closure2_slot1 = foxtra;
            cntext = michal.updateQuery;
            backup = michal.queryResults;
            zuuluu = _closure1_slot43;
            michal = {};
            verify = foxtra.trim;
            verify = verify.bind(foxtra)();
            verify = verify.length;
            verify = verify > golfie;
            michal['disabled'] = verify;
            michal['visible'] = source;
            michal = zuuluu.bind(tangon)(michal);
            update = michal.initialResults;
            sequen = michal.unreadPrivateChannelIds;
            vacuum = michal.unreadGuilds;
            ctrled = michal.guildHistory;
            echoed = michal.selectedUnreadGuild;
            config = michal.setSelectedUnreadGuild;
            zuuluu = _closure1_slot4;
            michal = zuuluu.useState;
            zuuluu = michal.bind(zuuluu)(oscard);
            michal = _closure1_slot3;
            zuuluu = michal.bind(tangon)(zuuluu, option);
            michal = zuuluu[golfie];
            var _closure2_slot2 = michal;
            verify = zuuluu[report];
            var _closure2_slot3 = verify;
            offset = _closure1_slot4;
            oscard = offset.useState;
            zuuluu = _closure1_slot28;
            zuuluu = zuuluu.SEARCH;
            oscard = oscard.bind(offset)(zuuluu);
            zuuluu = _closure1_slot3;
            zuuluu = zuuluu.bind(tangon)(oscard, option);
            offset = zuuluu[golfie];
            papara = zuuluu[report];
            zuuluu = function() { // Original name: useWrapperStyles
                zuuluu = _closure1_slot27;
                tangon = undefined;
                report = zuuluu.bind(tangon)();
                var _closure3_slot0 = report;
                oscard = _closure1_slot1;
                golfie = _closure1_slot2;
                zuuluu = 38;
                zuuluu = golfie[zuuluu];
                zuuluu = oscard.bind(tangon)(zuuluu);
                zuuluu = zuuluu.bind(tangon)();
                option = zuuluu.height;
                var _closure3_slot1 = option;
                zuuluu = 39;
                zuuluu = golfie[zuuluu];
                zuuluu = oscard.bind(tangon)(zuuluu);
                zuuluu = zuuluu.bind(tangon)();
                golfie = zuuluu.top;
                var _closure3_slot2 = golfie;
                oscard = zuuluu.bottom;
                var _closure3_slot3 = oscard;
                tangon = _closure1_slot4;
                zuuluu = tangon.useMemo;
                michal = new Array(4);
                michal[0] = option;
                michal[1] = golfie;
                michal[2] = oscard;
                michal[3] = report;
                entity = function() {
                    entity = _closure3_slot0;
                    michal = entity.wrapper;
                    entity = new Array(2);
                    entity[0] = michal;
                    michal = {};
                    report = _closure3_slot1;
                    tangon = _closure3_slot2;
                    tangon = report - tangon;
                    zuuluu = _closure3_slot3;
                    tangon = tangon - zuuluu;
                    zuuluu = 16;
                    zuuluu = tangon - zuuluu;
                    michal['maxHeight'] = zuuluu;
                    entity[1] = michal;
                    return entity;
                };
                entity = zuuluu.bind(tangon)(entity, michal);
                return entity;
            };
            report = zuuluu.bind(tangon)();
            option = _closure1_slot4;
            oscard = option.useEffect;
            zuuluu = new Array(3);
            zuuluu[0] = foxtra;
            zuuluu[1] = verify;
            zuuluu[2] = michal;
            michal = function() {
                _fun00047: for(var _fun00048_ip = 0; ; ) switch(_fun00048_ip) {
 0:
                    michal = _closure2_slot1;
                    michal = michal.length;
                    zuuluu = 0;
                    if(!(michal > zuuluu)) { _fun00048_ip = 83; continue _fun00047 }
 18:
                    michal = _closure2_slot2;
                    if(michal) { _fun00048_ip = 83; continue _fun00047 }
 25:
                    oscard = _closure1_slot1;
                    report = _closure1_slot2;
                    tangon = 42;
                    tangon = report[tangon];
                    report = undefined;
                    oscard = oscard.bind(report)(tangon);
                    tangon = oscard.track;
                    michal = _closure1_slot24;
                    michal = michal.LAUNCHPAD_SEARCHED;
                    michal = tangon.bind(oscard)(michal);
                    tangon = _closure2_slot3;
                    michal = true;
                    michal = tangon.bind(report)(michal);
                    _fun00048_ip = 109; continue _fun00047;
 83:
                    michal = _closure2_slot1;
                    michal = michal.length;
                    if(!(zuuluu === michal)) { _fun00048_ip = 109; continue _fun00047 }
 96:
                    zuuluu = _closure2_slot3;
                    michal = undefined;
                    entity = false;
                    entity = zuuluu.bind(michal)(entity);
 109:
                    entity = undefined;
                    return entity;
                }
            };
            michal = oscard.bind(option)(michal, zuuluu);
            entity = function(argFoo, argBar, argBaz) { // Original name: useDeferredQueryClear
                golfie = argFoo;
                entity = argBar;
                foxtra = argBaz;
                var _closure3_slot0 = golfie;
                var _closure3_slot1 = entity;
                var _closure3_slot2 = foxtra;
                report = _closure1_slot4;
                tangon = report.useRef;
                zuuluu = -1;
                zuuluu = tangon.bind(report)(zuuluu);
                var _closure3_slot3 = zuuluu;
                report = _closure1_slot4;
                tangon = report.useCallback;
                zuuluu = new Array(2);
                zuuluu[0] = golfie;
                zuuluu[1] = entity;
                entity = function() {
                    michal = global;
                    report = michal.clearTimeout;
                    zuuluu = _closure3_slot3;
                    tangon = zuuluu.current;
                    entity = undefined;
                    tangon = report.bind(entity)(tangon);
                    report = michal.setTimeout;
                    tangon = function() {
                        _fun00049: for(var _fun00050_ip = 0; ; ) switch(_fun00050_ip) {
 0:
                            entity = global;
                            tangon = entity.clearTimeout;
                            entity = _closure3_slot3;
                            zuuluu = entity.current;
                            entity = undefined;
                            zuuluu = tangon.bind(entity)(zuuluu);
                            zuuluu = _closure3_slot0;
                            tangon = '';
                            zuuluu = zuuluu.bind(entity)(tangon);
                            michal = _closure3_slot1;
                            zuuluu = michal.current;
                            michal = null;
                            if(!(michal != zuuluu)) { _fun00050_ip = 66; continue _fun00049 }
 55:
                            michal = zuuluu.setText;
                            michal = michal.bind(zuuluu)(tangon);
 66:
                            return entity;
                        }
                    };
                    michal = 100;
                    michal = report.bind(entity)(tangon, michal);
                    zuuluu['current'] = michal;
                    return entity;
                };
                verify = tangon.bind(report)(entity, zuuluu);
                var _closure3_slot4 = verify;
                report = _closure1_slot4;
                tangon = report.useCallback;
                zuuluu = function() {
                    entity = global;
                    zuuluu = entity.clearTimeout;
                    entity = _closure3_slot3;
                    michal = entity.current;
                    entity = undefined;
                    michal = zuuluu.bind(entity)(michal);
                    return entity;
                };
                entity = new Array(0);
                option = tangon.bind(report)(zuuluu, entity);
                var _closure3_slot5 = option;
                report = _closure1_slot4;
                tangon = report.useEffect;
                zuuluu = function() {
                    entity = function() {
                        entity = global;
                        zuuluu = entity.clearTimeout;
                        entity = _closure3_slot3;
                        michal = entity.current;
                        entity = undefined;
                        entity = zuuluu.bind(entity)(michal);
                        return entity;
                    };
                    return entity;
                };
                entity = new Array(0);
                entity = tangon.bind(report)(zuuluu, entity);
                yankee = _closure1_slot0;
                romeon = _closure1_slot2;
                offset = 24;
                zuuluu = romeon[offset];
                entity = undefined;
                report = yankee.bind(entity)(zuuluu);
                tangon = report.useAnimatedReaction;
                zuuluu = function() { // Original name: u
                    michal = _closure3_slot2;
                    entity = michal.get;
                    michal = entity.bind(michal)();
                    entity = 0;
                    entity = entity === michal;
                    return entity;
                };
                golfie = {};
                golfie['sharedState'] = foxtra;
                zuuluu['__closure'] = golfie;
                golfie = 7315121230879.0;
                zuuluu['__workletHash'] = golfie;
                golfie = _closure1_slot36;
                zuuluu['__initData'] = golfie;
                michal = function(argFoo, argBar) { // Original name: a
                    _fun00051: for(var _fun00052_ip = 0; ; ) switch(_fun00052_ip) {
 0:
                        zuuluu = argFoo;
                        michal = argBar;
                        entity = zuuluu !== michal;
                        if(!entity) { _fun00052_ip = 126; continue _fun00051 }
 13:
                        if(!zuuluu) { _fun00052_ip = 19; continue _fun00051 }
 16:
                        if(entity) { _fun00052_ip = 80; continue _fun00051 }
 19:
                        entity = zuuluu;
                        if(entity) { _fun00052_ip = 29; continue _fun00051 }
 25:
                        entity = zuuluu === michal;
 29:
                        if(entity) { _fun00052_ip = 126; continue _fun00051 }
 32:
                        zuuluu = _closure1_slot0;
                        michal = _closure1_slot2;
                        entity = 24;
                        entity = michal[entity];
                        michal = undefined;
                        tangon = zuuluu.bind(michal)(entity);
                        zuuluu = tangon.runOnJS;
                        entity = _closure3_slot5;
                        entity = zuuluu.bind(tangon)(entity);
                        entity = entity.bind(michal)();
                        _fun00052_ip = 126; continue _fun00051;
 80:
                        zuuluu = _closure1_slot0;
                        michal = _closure1_slot2;
                        entity = 24;
                        entity = michal[entity];
                        michal = undefined;
                        tangon = zuuluu.bind(michal)(entity);
                        zuuluu = tangon.runOnJS;
                        entity = _closure3_slot4;
                        entity = zuuluu.bind(tangon)(entity);
                        entity = entity.bind(michal)();
 126:
                        entity = undefined;
                        return entity;
                    }
                };
                golfie = {};
                offset = romeon[offset];
                offset = yankee.bind(entity)(offset);
                offset = offset.runOnJS;
                golfie['runOnJS'] = offset;
                golfie['clearQuery'] = verify;
                golfie['cancelTimeout'] = option;
                michal['__closure'] = golfie;
                golfie = 6379173436444.0;
                michal['__workletHash'] = golfie;
                oscard = _closure1_slot37;
                michal['__initData'] = oscard;
                michal = tangon.bind(report)(zuuluu, michal);
                return entity;
            };
            entity = entity.bind(tangon)(cntext, record, romeon);
            entity = foxtra.trim;
            entity = entity.bind(foxtra)();
            entity = entity.length;
            verify = entity > golfie;
            zuuluu = _closure1_slot26;
            michal = _closure1_slot5;
            entity = {};
            entity['style'] = report;
            option = _closure1_slot25;
            oscard = _closure1_slot31;
            report = {};
            report['tab'] = offset;
            report['setTab'] = papara;
            report['updateQuery'] = cntext;
            report['searchRef'] = record;
            report['sharedState'] = romeon;
            oscard = option.bind(tangon)(oscard, report);
            report = new Array(3);
            report[0] = oscard;
            oscard = foxtra.trim;
            oscard = oscard.bind(foxtra)();
            oscard = oscard.length;
            oscard = golfie === oscard;
            if(!oscard) { _fun00040_ip = 489; continue _fun00039 }
 475:
            golfie = _closure1_slot28;
            golfie = golfie.SEARCH;
            oscard = offset === golfie;
 489:
            if(!oscard) { _fun00040_ip = 554; continue _fun00039 }
 492:
            romeon = _closure1_slot25;
            option = _closure1_slot1;
            record = _closure1_slot2;
            golfie = 43;
            golfie = record[golfie];
            option = option.bind(tangon)(golfie);
            golfie = {};
            golfie['selectedGuildId'] = echoed;
            golfie['setSelectedGuild'] = config;
            golfie['unreadPrivateChannelIds'] = sequen;
            golfie['unreadGuilds'] = vacuum;
            golfie['guildHistory'] = ctrled;
            golfie['visible'] = source;
            oscard = romeon.bind(tangon)(option, golfie);
 554:
            report[1] = oscard;
            option = _closure1_slot25;
            golfie = _closure1_slot5;
            oscard = {};
            yankee = yankee.launchPadContent;
            oscard['style'] = yankee;
            yankee = _closure1_slot28;
            yankee = yankee.SEARCH;
            if(!(offset === yankee)) { _fun00040_ip = 598; continue _fun00039 }
 592:
            if(verify) { _fun00040_ip = 856; continue _fun00039 }
 598:
            verify = _closure1_slot28;
            verify = verify.SEARCH;
            if(!(offset !== verify)) { _fun00040_ip = 745; continue _fun00039 }
 615:
            verify = _closure1_slot28;
            verify = verify.DEV_TOOLS;
            if(!(offset !== verify)) { _fun00040_ip = 711; continue _fun00039 }
 629:
            verify = _closure1_slot28;
            verify = verify.MEMBERS;
            if(!(offset !== verify)) { _fun00040_ip = 677; continue _fun00039 }
 643:
            yankee = _closure1_slot25;
            offset = _closure1_slot1;
            romeon = _closure1_slot2;
            verify = 47;
            verify = romeon[verify];
            offset = offset.bind(tangon)(verify);
            verify = {};
            verify = yankee.bind(tangon)(offset, verify);
            _fun00040_ip = 709; continue _fun00039;
 677:
            romeon = _closure1_slot25;
            yankee = _closure1_slot1;
            source = _closure1_slot2;
            offset = 46;
            offset = source[offset];
            yankee = yankee.bind(tangon)(offset);
            offset = {};
            verify = romeon.bind(tangon)(yankee, offset);
 709:
            _fun00040_ip = 743; continue _fun00039;
 711:
            romeon = _closure1_slot25;
            yankee = _closure1_slot1;
            source = _closure1_slot2;
            offset = 45;
            offset = source[offset];
            yankee = yankee.bind(tangon)(offset);
            offset = {};
            verify = romeon.bind(tangon)(yankee, offset);
 743:
            _fun00040_ip = 854; continue _fun00039;
 745:
            romeon = _closure1_slot25;
            yankee = _closure1_slot0;
            source = _closure1_slot2;
            offset = 44;
            offset = source[offset];
            offset = yankee.bind(tangon)(offset);
            yankee = offset.InitialResults;
            offset = {};
            offset['selectedGuildId'] = echoed;
            source = sizing == update;
            echoed = undefined;
            if(source) { _fun00040_ip = 797; continue _fun00039 }
 791:
            echoed = update.unreads;
 797:
            if(!(sizing == echoed)) { _fun00040_ip = 805; continue _fun00039 }
 801:
            echoed = _closure1_slot34;
 805:
            offset['unreads'] = echoed;
            source = sizing == update;
            echoed = undefined;
            if(source) { _fun00040_ip = 825; continue _fun00039 }
 819:
            echoed = update.channelHistory;
 825:
            if(!(sizing == echoed)) { _fun00040_ip = 833; continue _fun00039 }
 829:
            echoed = _closure1_slot34;
 833:
            offset['history'] = echoed;
            offset['expandedHistory'] = result;
            offset['toggleExpandedHistory'] = output;
            verify = romeon.bind(tangon)(yankee, offset);
 854:
            _fun00040_ip = 911; continue _fun00039;
 856:
            romeon = _closure1_slot25;
            yankee = _closure1_slot0;
            output = _closure1_slot2;
            offset = 44;
            offset = output[offset];
            offset = yankee.bind(tangon)(offset);
            yankee = offset.SearchResults;
            offset = {};
            if(!(sizing == backup)) { _fun00040_ip = 896; continue _fun00039 }
 892:
            backup = _closure1_slot34;
 896:
            offset['results'] = backup;
            offset['query'] = foxtra;
            verify = romeon.bind(tangon)(yankee, offset);
 911:
            oscard['children'] = verify;
            oscard = option.bind(tangon)(golfie, oscard);
            report[2] = oscard;
            entity['children'] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    michal = tangon.bind(golfie)(michal);
    tangon = 48;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/launchpad/native/LaunchPad.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();