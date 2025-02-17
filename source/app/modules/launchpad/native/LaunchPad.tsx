// app/modules/launchpad/native/LaunchPad.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    output = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = output;
    var _closure1_slot2 = oscar;
    entity = function(argFoo, argBar) { // Original name: _createForOfIteratorHelperLoose
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            zulu = argFoo;
            var _closure2_slot0 = zulu;
            report = global;
            mike = report.Symbol;
            tango = 'undefined';
            mike = typeof mike;
            mike = tango !== mike;
            if(!mike) { _fun00002_ip = 46; continue _fun00001 }
 30:
            tango = report.Symbol;
            tango = tango.iterator;
            mike = zulu[tango];
 46:
            if(mike) { _fun00002_ip = 55; continue _fun00001 }
 49:
            mike = zulu.@@iterator;
 55:
            if(mike) { _fun00002_ip = 345; continue _fun00001 }
 61:
            oscar = report.Array;
            tango = oscar.isArray;
            oscar = tango.bind(oscar)(zulu);
            tango = mike;
            if(oscar) { _fun00002_ip = 323; continue _fun00001 }
 86:
            options = undefined;
            oscar = undefined;
            if(!zulu) { _fun00002_ip = 283; continue _fun00001 }
 96:
            verify = 'string';
            golf = typeof zulu;
            if(!(verify !== golf)) { _fun00002_ip = 270; continue _fun00001 }
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
            if(!golf) { _fun00002_ip = 163; continue _fun00001 }
 158:
            golf = zulu.constructor;
 163:
            offset = verify;
            if(!golf) { _fun00002_ip = 179; continue _fun00001 }
 169:
            golf = zulu.constructor;
            offset = golf.name;
 179:
            golf = 'Map';
            if(!(golf !== offset)) { _fun00002_ip = 249; continue _fun00001 }
 187:
            golf = 'Set';
            if(!(golf !== offset)) { _fun00002_ip = 249; continue _fun00001 }
 195:
            golf = 'Arguments';
            if(!(golf !== offset)) { _fun00002_ip = 234; continue _fun00001 }
 205:
            verify = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            golf = verify.test;
            verify = golf.bind(verify)(offset);
            golf = undefined;
            if(!verify) { _fun00002_ip = 247; continue _fun00001 }
 234:
            verify = _closure1_slot39;
            golf = verify.bind(options)(zulu, options);
 247:
            _fun00002_ip = 265; continue _fun00001;
 249:
            offset = report.Array;
            verify = offset.from;
            golf = verify.bind(offset)(zulu);
 265:
            oscar = golf;
            _fun00002_ip = 283; continue _fun00001;
 270:
            golf = _closure1_slot39;
            oscar = golf.bind(options)(zulu, options);
 283:
            tango = oscar;
            if(tango) { _fun00002_ip = 323; continue _fun00001 }
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
            if(!tango) { _fun00002_ip = 330; continue _fun00001 }
 326:
            _closure2_slot0 = tango;
 330:
            tango = 0;
            var _closure2_slot1 = tango;
            entity = function() {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    mike = _closure2_slot1;
                    entity = _closure2_slot0;
                    entity = entity.length;
                    if(!(!(mike >= entity))) { _fun00004_ip = 56; continue _fun00003 }
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
                    _fun00004_ip = 67; continue _fun00003;
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
    var _closure1_slot38 = entity;
    entity = function(argFoo, argBar) { // Original name: _arrayLikeToArray
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            tango = argFoo;
            entity = null;
            zulu = undefined;
            entity = entity == zulu;
            if(entity) { _fun00006_ip = 23; continue _fun00005 }
 14:
            mike = tango.length;
            entity = zulu > mike;
 23:
            mike = undefined;
            if(!entity) { _fun00006_ip = 33; continue _fun00005 }
 28:
            mike = tango.length;
 33:
            entity = global;
            entity = entity.Array;
            entity = entity.bind(zulu)(mike);
            zulu = 0;
            report = zulu < mike;
            if(!report) { _fun00006_ip = 70; continue _fun00005 }
 55:
            report = tango[zulu];
            entity[zulu] = report;
            zulu = zulu + 1;
            if(zulu < mike) { _fun00006_ip = 55; continue _fun00005 }
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
            oscar = entity.icon;
            options = entity.accessibilityLabel;
            report = entity.selected;
            offset = entity.style;
            entity = _closure1_slot27;
            tango = undefined;
            yankee = entity.bind(tango)();
            zulu = _closure1_slot25;
            mike = _closure1_slot0;
            romeo = _closure1_slot2;
            entity = 21;
            entity = romeo[entity];
            entity = mike.bind(tango)(entity);
            mike = entity.PressableHighlight;
            entity = {};
            entity['onPress'] = verify;
            romeo = yankee.tab;
            verify = new Array(3);
            verify[0] = romeo;
            verify[1] = offset;
            offset = undefined;
            if(!report) { _fun00008_ip = 107; continue _fun00007 }
 101:
            offset = yankee.tabSelected;
 107:
            verify[2] = offset;
            entity['style'] = verify;
            entity['accessibilityLabel'] = options;
            options = 'tab';
            entity['accessibilityRole'] = options;
            options = {};
            options['selected'] = report;
            entity['accessibilityState'] = options;
            options = _closure1_slot1;
            verify = _closure1_slot2;
            golf = 19;
            golf = verify[golf];
            golf = options.bind(tango)(golf);
            golf = golf.colors;
            if(report) { _fun00008_ip = 175; continue _fun00007 }
 167:
            report = golf.INTERACTIVE_NORMAL;
            _fun00008_ip = 181; continue _fun00007;
 175:
            report = golf.INTERACTIVE_ACTIVE;
 181:
            report = oscar.bind(tango)(report);
            entity['children'] = report;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        }
    };
    var _closure1_slot40 = entity;
    entity = function(argFoo) { // Original name: TabHeader
        entity = argFoo;
        report = entity.text;
        mike = _closure1_slot27;
        tango = undefined;
        oscar = mike.bind(tango)();
        zulu = _closure1_slot25;
        mike = _closure1_slot0;
        golf = _closure1_slot2;
        entity = 22;
        entity = golf[entity];
        entity = mike.bind(tango)(entity);
        mike = entity.Text;
        entity = {'style': null, 'variant': 'heading-md/extrabold', 'maxFontSizeMultiplier': 1.75, 'accessibilityRole': 'header'};
        oscar = oscar.subheader;
        entity['style'] = oscar;
        entity['children'] = report;
        entity = zulu.bind(tango)(mike, entity);
        return entity;
    };
    var _closure1_slot41 = entity;
    entity = function(argFoo, argBar, argBaz) { // Original name: createAndAppendChannel
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            zulu = argFoo;
            mike = argBar;
            report = argBaz;
            entity = mike.has;
            entity = entity.bind(mike)(zulu);
            if(entity) { _fun00010_ip = 78; continue _fun00009 }
 22:
            oscar = _closure1_slot1;
            tango = _closure1_slot2;
            entity = 34;
            entity = tango[entity];
            tango = undefined;
            entity = oscar.bind(tango)(entity);
            tango = entity.bind(tango)(zulu);
            entity = null;
            if(!(entity != tango)) { _fun00010_ip = 78; continue _fun00009 }
 58:
            entity = report.push;
            entity = entity.bind(report)(tango);
            entity = mike.add;
            entity = entity.bind(mike)(zulu);
 78:
            entity = undefined;
            return entity;
        }
    };
    var _closure1_slot42 = entity;
    entity = function(argFoo) { // Original name: useInitialResults
        mike = argFoo;
        backup = mike.disabled;
        var _closure2_slot0 = backup;
        foxtrot = mike.visible;
        var _closure2_slot1 = foxtrot;
        offset = _closure1_slot0;
        romeo = _closure1_slot2;
        mike = 35;
        zulu = romeo[mike];
        yankee = undefined;
        tango = offset.bind(yankee)(zulu);
        zulu = tango.getSelectedGuildFromRoute;
        tango = zulu.bind(tango)();
        var _closure2_slot2 = tango;
        mike = romeo[mike];
        zulu = offset.bind(yankee)(mike);
        mike = zulu.getSelectedChannelFromRoute;
        options = mike.bind(zulu)();
        var _closure2_slot3 = options;
        zulu = _closure1_slot4;
        mike = zulu.useState;
        report = mike.bind(zulu)(yankee);
        zulu = _closure1_slot3;
        mike = 2;
        report = zulu.bind(yankee)(report, mike);
        mike = 0;
        zulu = report[mike];
        var _closure2_slot4 = zulu;
        mike = 1;
        mike = report[mike];
        var _closure2_slot5 = mike;
        kilo = _closure1_slot4;
        verify = kilo.useEffect;
        oscar = new Array(1);
        oscar[0] = foxtrot;
        report = function() {
            _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                mike = _closure2_slot1;
                if(mike) { _fun00012_ip = 21; continue _fun00011 }
 10:
                mike = _closure2_slot5;
                entity = undefined;
                entity = mike.bind(entity)(entity);
 21:
                entity = undefined;
                return entity;
            }
        };
        report = verify.bind(kilo)(report, oscar);
        verify = _closure1_slot4;
        oscar = verify.useRef;
        report = new Array(0);
        report = oscar.bind(verify)(report);
        var _closure2_slot6 = report;
        verify = 23;
        report = romeo[verify];
        sizing = offset.bind(yankee)(report);
        kilo = sizing.useStateFromStores;
        report = _closure1_slot19;
        oscar = new Array(1);
        oscar[0] = report;
        report = function() {
            _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                mike = _closure2_slot1;
                if(mike) { _fun00014_ip = 21; continue _fun00013 }
 10:
                entity = _closure2_slot6;
                entity = entity.current;
                _fun00014_ip = 38; continue _fun00013;
 21:
                zulu = _closure1_slot19;
                mike = zulu.getUnreadPrivateChannelIds;
                entity = mike.bind(zulu)();
 38:
                return entity;
            }
        };
        oscar = kilo.bind(sizing)(oscar, report);
        var _closure2_slot7 = oscar;
        sizing = _closure1_slot4;
        kilo = sizing.useEffect;
        report = function() {
            mike = _closure2_slot6;
            entity = _closure2_slot7;
            mike['current'] = entity;
            entity = undefined;
            return entity;
        };
        report = kilo.bind(sizing)(report);
        sizing = _closure1_slot4;
        kilo = sizing.useRef;
        report = new Array(0);
        report = kilo.bind(sizing)(report);
        var _closure2_slot8 = report;
        report = romeo[verify];
        result = offset.bind(yankee)(report);
        output = result.useStateFromStoresArray;
        report = _closure1_slot18;
        sizing = new Array(2);
        sizing[0] = report;
        report = _closure1_slot21;
        sizing[1] = report;
        kilo = new Array(2);
        kilo[0] = foxtrot;
        kilo[1] = tango;
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
                zulu = _closure1_slot38;
                tango = _closure1_slot21;
                mike = tango.getFlattenedGuildIds;
                mike = mike.bind(tango)();
                golf = undefined;
                oscar = zulu.bind(golf)(mike);
                zulu = oscar.bind(golf)();
                mike = zulu.done;
                tango = 0;
                if(mike) { _fun00016_ip = 158; continue _fun00015 }
 71:
                offset = zulu.value;
                mike = _closure2_slot2;
                if(!(offset !== mike)) { _fun00016_ip = 143; continue _fun00015 }
 84:
                yankee = _closure1_slot18;
                mike = yankee.getMentionCount;
                mike = mike.bind(yankee)(offset);
                if(!(!(mike > tango))) { _fun00016_ip = 133; continue _fun00015 }
 103:
                yankee = _closure1_slot18;
                mike = yankee.hasUnread;
                mike = mike.bind(yankee)(offset);
                if(!mike) { _fun00016_ip = 143; continue _fun00015 }
 121:
                mike = report.push;
                mike = mike.bind(report)(offset);
                _fun00016_ip = 143; continue _fun00015;
 133:
                mike = entity.push;
                mike = mike.bind(entity)(offset);
 143:
                offset = oscar.bind(golf)();
                mike = offset.done;
                zulu = offset;
                if(!mike) { _fun00016_ip = 71; continue _fun00015 }
 158:
                zulu = entity.push;
                mike = new Array(0);
                backup = mike;
                foxtrot = report;
                romeo = 0;
                tango = arraySpread(backup, foxtrot, romeo);
                backup = zulu;
                foxtrot = mike;
                romeo = entity;
                mike = apply(backup, foxtrot, romeo);
                return entity;
            }
        };
        report = output.bind(result)(sizing, report, kilo);
        var _closure2_slot9 = report;
        output = _closure1_slot4;
        sizing = output.useEffect;
        kilo = function() {
            mike = _closure2_slot8;
            entity = _closure2_slot9;
            mike['current'] = entity;
            entity = undefined;
            return entity;
        };
        kilo = sizing.bind(output)(kilo);
        output = _closure1_slot4;
        sizing = output.useRef;
        kilo = new Array(0);
        kilo = sizing.bind(output)(kilo);
        var _closure2_slot10 = kilo;
        verify = romeo[verify];
        sizing = offset.bind(yankee)(verify);
        kilo = sizing.useStateFromStoresArray;
        verify = _closure1_slot7;
        romeo = new Array(5);
        romeo[0] = verify;
        verify = _closure1_slot23;
        romeo[1] = verify;
        verify = _closure1_slot20;
        romeo[2] = verify;
        verify = _closure1_slot22;
        romeo[3] = verify;
        verify = _closure1_slot12;
        romeo[4] = verify;
        offset = new Array(4);
        offset[0] = backup;
        offset[1] = tango;
        offset[2] = foxtrot;
        offset[3] = zulu;
        verify = function() {
            _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                tango = _closure2_slot4;
                zulu = null;
                if(!(zulu == tango)) { _fun00018_ip = 21; continue _fun00017 }
 15:
                verify = _closure2_slot2;
                _fun00018_ip = 25; continue _fun00017;
 21:
                verify = _closure2_slot4;
 25:
                tango = _closure2_slot0;
                if(tango) { _fun00018_ip = 348; continue _fun00017 }
 35:
                if(!(zulu != verify)) { _fun00018_ip = 348; continue _fun00017 }
 42:
                zulu = _closure2_slot1;
                if(zulu) { _fun00018_ip = 60; continue _fun00017 }
 49:
                entity = _closure2_slot10;
                entity = entity.current;
                return entity;
 60:
                entity = new Array(0);
                var _closure3_slot0 = entity;
                golf = new Array(0);
                var _closure3_slot1 = golf;
                report = new Array(0);
                var _closure3_slot2 = report;
                oscar = new Array(0);
                var _closure3_slot3 = oscar;
                zulu = global;
                offset = zulu.Object;
                options = offset.values;
                yankee = _closure1_slot12;
                tango = yankee.getActiveJoinedUnreadThreadsForGuild;
                tango = tango.bind(yankee)(verify);
                yankee = options.bind(offset)(tango);
                options = yankee.length;
                tango = 0;
                options = tango < options;
                offset = 0;
                if(!options) { _fun00018_ip = 195; continue _fun00017 }
 144:
                options = yankee[offset];
                backup = options;
                for(options in backup)
 159:
                {
 168:
                    output = options;
                    sizing = golf.push;
                    sizing = sizing.bind(golf)(output);
                    _fun00018_ip = 159; continue _fun00017;
                }
 183:
                offset = offset + 1;
                options = yankee.length;
                if(offset < options) { _fun00018_ip = 144; continue _fun00017 }
 195:
                options = _closure1_slot7;
                zulu = options.getGuild;
                zulu = zulu.bind(options)(verify);
                verify = zulu.guildChannels;
                options = verify.forEachChannel;
                zulu = function(argFoo) {
                    _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
                        mike = argFoo;
                        report = _closure1_slot14;
                        tango = mike.type;
                        entity = undefined;
                        tango = report.bind(entity)(tango);
                        if(tango) { _fun00020_ip = 45; continue _fun00019 }
 25:
                        oscar = _closure1_slot13;
                        report = mike.type;
                        report = oscar.bind(entity)(report);
                        if(!report) { _fun00020_ip = 354; continue _fun00019 }
 45:
                        options = _closure1_slot22;
                        golf = options.isChannelMuted;
                        oscar = mike.guild_id;
                        report = mike.id;
                        report = golf.bind(options)(oscar, report);
                        if(report) { _fun00020_ip = 354; continue _fun00019 }
 77:
                        oscar = mike.parent_id;
                        report = null;
                        if(!(report != oscar)) { _fun00020_ip = 122; continue _fun00019 }
 89:
                        options = _closure1_slot22;
                        golf = options.isChannelMuted;
                        oscar = mike.guild_id;
                        report = mike.parent_id;
                        report = golf.bind(options)(oscar, report);
                        if(report) { _fun00020_ip = 354; continue _fun00019 }
 122:
                        golf = _closure1_slot20;
                        oscar = golf.getMentionCount;
                        report = mike.id;
                        oscar = oscar.bind(golf)(report);
                        report = 0;
                        if(!(!(oscar > report))) { _fun00020_ip = 332; continue _fun00019 }
 151:
                        if(tango) { _fun00020_ip = 215; continue _fun00019 }
 154:
                        oscar = _closure1_slot0;
                        golf = _closure1_slot2;
                        report = 36;
                        report = golf[report];
                        oscar = oscar.bind(entity)(report);
                        report = oscar.getHasImportantUnread;
                        report = report.bind(oscar)(mike);
                        if(!report) { _fun00020_ip = 215; continue _fun00019 }
 188:
                        golf = _closure3_slot1;
                        oscar = golf.push;
                        report = mike.id;
                        report = oscar.bind(golf)(report);
                        _fun00020_ip = 354; continue _fun00019;
 215:
                        if(tango) { _fun00020_ip = 271; continue _fun00019 }
 218:
                        tango = !tango;
                        if(!tango) { _fun00020_ip = 244; continue _fun00019 }
 224:
                        golf = _closure1_slot20;
                        oscar = golf.hasUnread;
                        report = mike.id;
                        tango = oscar.bind(golf)(report);
 244:
                        if(!tango) { _fun00020_ip = 354; continue _fun00019 }
 247:
                        oscar = _closure3_slot2;
                        report = oscar.push;
                        tango = mike.id;
                        tango = report.bind(oscar)(tango);
                        _fun00020_ip = 354; continue _fun00019;
 271:
                        verify = _closure1_slot23;
                        options = verify.getVoiceStatesForChannel;
                        zulu = mike.id;
                        oscar = options.bind(verify)(zulu);
                        for(zulu in oscar)
 299:
                        {
 308:
                            report = _closure3_slot3;
                            tango = report.push;
                            zulu = mike.id;
                            zulu = tango.bind(report)(zulu);
                            _fun00020_ip = 354; continue _fun00019;
 332:
                            tango = _closure3_slot0;
                            zulu = tango.push;
                            mike = mike.id;
                            mike = zulu.bind(tango)(mike);
                        }
 354:
                        return entity;
                    }
                };
                mike = {'ignoreRecents': true, 'withThreads': true};
                mike = options.bind(verify)(zulu, mike);
                zulu = entity.push;
                mike = new Array(0);
                update = mike;
                echo = golf;
                result = 0;
                golf = arraySpread(update, echo, result);
                update = zulu;
                echo = mike;
                result = entity;
                mike = apply(update, echo, result);
                zulu = entity.push;
                mike = new Array(0);
                update = mike;
                echo = oscar;
                result = 0;
                oscar = arraySpread(update, echo, result);
                update = zulu;
                echo = mike;
                result = entity;
                mike = apply(update, echo, result);
                zulu = entity.push;
                mike = new Array(0);
                update = mike;
                echo = report;
                result = 0;
                tango = arraySpread(update, echo, result);
                update = zulu;
                echo = mike;
                result = entity;
                mike = apply(update, echo, result);
                return entity;
 348:
                entity = new Array(0);
                return entity;
            }
        };
        romeo = kilo.bind(sizing)(romeo, verify, offset);
        var _closure2_slot11 = romeo;
        kilo = _closure1_slot4;
        offset = kilo.useEffect;
        verify = function() {
            mike = _closure2_slot10;
            entity = _closure2_slot11;
            mike['current'] = entity;
            entity = undefined;
            return entity;
        };
        verify = offset.bind(kilo)(verify);
        kilo = _closure1_slot4;
        offset = kilo.useRef;
        verify = new Array(0);
        verify = offset.bind(kilo)(verify);
        var _closure2_slot12 = verify;
        kilo = _closure1_slot4;
        offset = kilo.useMemo;
        verify = new Array(4);
        verify[0] = backup;
        verify[1] = foxtrot;
        verify[2] = tango;
        verify[3] = report;
        tango = function() {
            _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
                mike = _closure2_slot0;
                if(mike) { _fun00022_ip = 306; continue _fun00021 }
 13:
                mike = _closure2_slot1;
                if(!mike) { _fun00022_ip = 306; continue _fun00021 }
 23:
                zulu = global;
                report = zulu.Set;
                output = _closure2_slot9;
                tango = report.prototype;
                tango = Object.create(tango, {constructor: {value: report}});
                result = tango;
                mike = new result[report](output, sizing);
                yankee = mike instanceof Object ? mike : tango;
                mike = _closure2_slot2;
                offset = null;
                if(!(offset != mike)) { _fun00022_ip = 79; continue _fun00021 }
 65:
                tango = yankee.add;
                mike = _closure2_slot2;
                mike = tango.bind(yankee)(mike);
 79:
                mike = _closure1_slot10;
                options = undefined;
                golf = mike.bind(options)();
                mike = new Array(0);
                zulu = zulu.Set;
                tango = zulu.prototype;
                tango = Object.create(tango, {constructor: {value: zulu}});
                result = tango;
                zulu = new result[zulu](output);
                oscar = zulu instanceof Object ? zulu : tango;
                tango = golf.length;
                zulu = 1;
                report = tango - zulu;
                tango = 0;
                zulu = undefined;
                if(!(report >= tango)) { _fun00022_ip = 304; continue _fun00021 }
 145:
                sizing = golf[report];
                if(!(offset != sizing)) { _fun00022_ip = 304; continue _fun00021 }
 156:
                foxtrot = sizing.startsWith;
                romeo = _closure1_slot8;
                romeo = foxtrot.bind(sizing)(romeo);
                if(romeo) { _fun00022_ip = 185; continue _fun00021 }
 174:
                romeo = _closure1_slot9;
                foxtrot = romeo.bind(options)(sizing);
                _fun00022_ip = 228; continue _fun00021;
 185:
                kilo = _closure1_slot16;
                backup = kilo.getChannel;
                romeo = _closure1_slot9;
                romeo = romeo.bind(options)(sizing);
                backup = backup.bind(kilo)(romeo);
                kilo = offset == backup;
                romeo = undefined;
                if(kilo) { _fun00022_ip = 222; continue _fun00021 }
 217:
                romeo = backup.guild_id;
 222:
                foxtrot = romeo;
                zulu = backup;
 228:
                romeo = offset == foxtrot;
                if(romeo) { _fun00022_ip = 245; continue _fun00021 }
 235:
                backup = yankee.has;
                romeo = backup.bind(yankee)(foxtrot);
 245:
                if(romeo) { _fun00022_ip = 258; continue _fun00021 }
 248:
                backup = oscar.has;
                romeo = backup.bind(oscar)(foxtrot);
 258:
                if(romeo) { _fun00022_ip = 281; continue _fun00021 }
 261:
                romeo = oscar.add;
                romeo = romeo.bind(oscar)(foxtrot);
                romeo = mike.push;
                romeo = romeo.bind(mike)(foxtrot);
 281:
                foxtrot = mike.length;
                romeo = _closure1_slot32;
                if(!(!(foxtrot >= romeo))) { _fun00022_ip = 304; continue _fun00021 }
 294:
                report = report - 1;
                if(report >= tango) { _fun00022_ip = 145; continue _fun00021 }
 304:
                return mike;
 306:
                entity = _closure2_slot12;
                entity = entity.current;
                return entity;
            }
        };
        tango = offset.bind(kilo)(tango, verify);
        var _closure2_slot13 = tango;
        kilo = _closure1_slot4;
        offset = kilo.useEffect;
        verify = function() {
            mike = _closure2_slot12;
            entity = _closure2_slot13;
            mike['current'] = entity;
            entity = undefined;
            return entity;
        };
        verify = offset.bind(kilo)(verify);
        offset = _closure1_slot4;
        verify = offset.useRef;
        verify = verify.bind(offset)(yankee);
        var _closure2_slot14 = verify;
        yankee = _closure1_slot4;
        offset = yankee.useMemo;
        verify = new Array(5);
        verify[0] = backup;
        verify[1] = foxtrot;
        verify[2] = romeo;
        verify[3] = options;
        verify[4] = zulu;
        options = function() {
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
                zulu = _closure1_slot10;
                entity = undefined;
                oscar = zulu.bind(entity)();
                options = null;
                zulu = options != offset;
                tango = undefined;
                if(!zulu) { _fun00024_ip = 86; continue _fun00023 }
 59:
                golf = _closure1_slot8;
                zulu = global;
                zulu = zulu.HermesInternal;
                report = zulu.concat;
                zulu = '';
                tango = report.bind(zulu)(golf, offset);
 86:
                golf = new Array(0);
                report = oscar.length;
                zulu = 1;
                zulu = report - zulu;
                report = 0;
                if(!(zulu >= report)) { _fun00024_ip = 177; continue _fun00023 }
 108:
                romeo = oscar[zulu];
                if(!(options != romeo)) { _fun00024_ip = 177; continue _fun00023 }
 116:
                yankee = romeo.startsWith;
                offset = _closure1_slot11;
                offset = yankee.bind(romeo)(offset);
                if(offset) { _fun00024_ip = 170; continue _fun00023 }
 134:
                if(!(romeo !== tango)) { _fun00024_ip = 170; continue _fun00023 }
 138:
                yankee = golf.push;
                offset = _closure1_slot9;
                offset = offset.bind(entity)(romeo);
                offset = yankee.bind(golf)(offset);
                yankee = golf.length;
                offset = _closure1_slot33;
                if(!(!(yankee >= offset))) { _fun00024_ip = 177; continue _fun00023 }
 170:
                zulu = zulu - 1;
                if(zulu >= report) { _fun00024_ip = 108; continue _fun00023 }
 177:
                zulu = new Array(0);
                tango = new Array(0);
                oscar = _closure2_slot4;
                if(!(options == oscar)) { _fun00024_ip = 282; continue _fun00023 }
 193:
                oscar = global;
                oscar = oscar.Set;
                options = oscar.prototype;
                options = Object.create(options, {constructor: {value: oscar}});
                sizing = options;
                oscar = new sizing[oscar](kilo);
                offset = oscar instanceof Object ? oscar : options;
                oscar = _closure1_slot38;
                options = oscar.bind(entity)(golf);
                golf = options.bind(entity)();
                oscar = golf.done;
                if(oscar) { _fun00024_ip = 282; continue _fun00023 }
 242:
                romeo = golf.value;
                yankee = _closure1_slot42;
                oscar = _closure1_slot9;
                oscar = oscar.bind(entity)(romeo);
                oscar = yankee.bind(entity)(oscar, offset, tango);
                yankee = options.bind(entity)();
                oscar = yankee.done;
                golf = yankee;
                if(!oscar) { _fun00024_ip = 242; continue _fun00023 }
 282:
                oscar = global;
                oscar = oscar.Set;
                golf = oscar.prototype;
                golf = Object.create(golf, {constructor: {value: oscar}});
                sizing = golf;
                oscar = new sizing[oscar](kilo);
                options = oscar instanceof Object ? oscar : golf;
                oscar = _closure2_slot11;
                oscar = oscar.length;
                if(!(oscar > report)) { _fun00024_ip = 379; continue _fun00023 }
 323:
                oscar = _closure1_slot38;
                mike = _closure2_slot11;
                golf = oscar.bind(entity)(mike);
                oscar = golf.bind(entity)();
                mike = oscar.done;
                if(mike) { _fun00024_ip = 379; continue _fun00023 }
 348:
                offset = _closure1_slot42;
                mike = oscar.value;
                mike = offset.bind(entity)(mike, options, zulu);
                offset = golf.bind(entity)();
                mike = offset.done;
                oscar = offset;
                if(!mike) { _fun00024_ip = 348; continue _fun00023 }
 379:
                mike = tango.length;
                if(!(!(mike > report))) { _fun00024_ip = 402; continue _fun00023 }
 388:
                mike = zulu.length;
                mike = mike > report;
                entity = undefined;
                if(!mike) { _fun00024_ip = 417; continue _fun00023 }
 402:
                mike = {};
                mike['channelHistory'] = tango;
                mike['unreads'] = zulu;
                entity = mike;
 417:
                return entity;
 419:
                entity = undefined;
                return entity;
            }
        };
        verify = offset.bind(yankee)(options, verify);
        var _closure2_slot15 = verify;
        offset = _closure1_slot4;
        options = offset.useEffect;
        entity = function() {
            mike = _closure2_slot14;
            entity = _closure2_slot15;
            mike['current'] = entity;
            entity = undefined;
            return entity;
        };
        entity = options.bind(offset)(entity);
        entity = {};
        options = _closure1_slot4;
        golf = options.useDeferredValue;
        golf = golf.bind(options)(verify);
        entity['initialResults'] = golf;
        entity['unreadPrivateChannelIds'] = oscar;
        entity['unreadGuilds'] = report;
        entity['guildHistory'] = tango;
        entity['selectedUnreadGuild'] = zulu;
        entity['setSelectedUnreadGuild'] = mike;
        return entity;
    };
    var _closure1_slot43 = entity;
    entity = global;
    options = entity.Object;
    golf = options.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = golf.bind(options)(zulu, entity, tango);
    foxtrot = 0;
    tango = oscar[foxtrot];
    entity = undefined;
    tango = output.bind(entity)(tango);
    var _closure1_slot3 = tango;
    romeo = 1;
    golf = oscar[romeo];
    tango = argCorge;
    golf = tango.bind(entity)(golf);
    var _closure1_slot4 = golf;
    yankee = 2;
    tango = oscar[yankee];
    tango = report.bind(entity)(tango);
    tango = tango.View;
    var _closure1_slot5 = tango;
    offset = 3;
    tango = oscar[offset];
    tango = output.bind(entity)(tango);
    var _closure1_slot6 = tango;
    tango = 4;
    tango = oscar[tango];
    tango = output.bind(entity)(tango);
    var _closure1_slot7 = tango;
    echo = 5;
    tango = oscar[echo];
    tango = report.bind(entity)(tango);
    options = tango.CHANNEL_PREFIX;
    var _closure1_slot8 = options;
    options = tango.getIdFromHistoryItem;
    var _closure1_slot9 = options;
    options = tango.getNavigationHistory;
    var _closure1_slot10 = options;
    tango = tango.GUILD_PREFIX;
    var _closure1_slot11 = tango;
    tango = 6;
    tango = oscar[tango];
    tango = output.bind(entity)(tango);
    var _closure1_slot12 = tango;
    tango = 7;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    options = tango.isGuildSelectableChannelType;
    var _closure1_slot13 = options;
    tango = tango.isGuildVocalChannelType;
    var _closure1_slot14 = tango;
    tango = 8;
    tango = oscar[tango];
    tango = output.bind(entity)(tango);
    var _closure1_slot15 = tango;
    tango = 9;
    tango = oscar[tango];
    tango = output.bind(entity)(tango);
    var _closure1_slot16 = tango;
    tango = 10;
    tango = oscar[tango];
    tango = output.bind(entity)(tango);
    var _closure1_slot17 = tango;
    tango = 11;
    tango = oscar[tango];
    tango = output.bind(entity)(tango);
    var _closure1_slot18 = tango;
    tango = 12;
    tango = oscar[tango];
    tango = output.bind(entity)(tango);
    var _closure1_slot19 = tango;
    tango = 13;
    tango = oscar[tango];
    tango = output.bind(entity)(tango);
    var _closure1_slot20 = tango;
    tango = 14;
    tango = oscar[tango];
    tango = output.bind(entity)(tango);
    var _closure1_slot21 = tango;
    tango = 15;
    tango = oscar[tango];
    tango = output.bind(entity)(tango);
    var _closure1_slot22 = tango;
    tango = 16;
    tango = oscar[tango];
    tango = output.bind(entity)(tango);
    var _closure1_slot23 = tango;
    tango = 17;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.AnalyticEvents;
    var _closure1_slot24 = tango;
    tango = 18;
    options = oscar[tango];
    options = report.bind(entity)(options);
    options = options.jsx;
    var _closure1_slot25 = options;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.jsxs;
    var _closure1_slot26 = tango;
    sizing = 19;
    tango = oscar[sizing];
    tango = output.bind(entity)(tango);
    tango = tango.radii;
    result = tango.md;
    tango = 20;
    options = oscar[tango];
    backup = report.bind(entity)(options);
    verify = backup.createStyles;
    options = {};
    kilo = {'flexGrow': 0, 'marginHorizontal': 16, 'marginBottom': 16, 'flexShrink': 1, 'borderRadius': 24, 'backgroundColor': null, 'flexDirection': 'column', 'justifyContent': 'flex-start', 'alignItems': 'stretch', 'overflow': 'hidden'};
    update = oscar[sizing];
    update = output.bind(entity)(update);
    update = update.colors;
    update = update.BACKGROUND_PRIMARY;
    kilo['backgroundColor'] = update;
    options['wrapper'] = kilo;
    kilo = {'flex': 4294967295, 'overflow': 'hidden', 'borderBottomLeftRadius': 24, 'borderBottomRightRadius': 24};
    options['launchPadContent'] = kilo;
    kilo = {'paddingHorizontal': 16, 'paddingTop': 16, 'flexDirection': 'row', 'flexShrink': 0, 'flexGrow': 0};
    options['header'] = kilo;
    kilo = {'flexGrow': 1, 'flexShrink': 1, 'flexDirection': 'row', 'alignItems': 'center', 'alignSelf': 'center', 'paddingStart': 8};
    options['subheader'] = kilo;
    kilo = {'marginStart': 8, 'flexDirection': 'row', 'flexShrink': 0, 'backgroundColor': null, 'borderRadius': null, 'padding': 5, 'alignItems': 'stretch', 'justifyContent': 'center', 'gap': 5, 'borderWidth': 1};
    update = oscar[sizing];
    update = output.bind(entity)(update);
    update = update.colors;
    update = update.INPUT_BACKGROUND;
    kilo['backgroundColor'] = update;
    kilo['borderRadius'] = result;
    update = oscar[sizing];
    update = output.bind(entity)(update);
    update = update.colors;
    update = update.INPUT_BORDER;
    kilo['borderColor'] = update;
    options['tabs'] = kilo;
    kilo = {'width': 32, 'height': 32, 'borderRadius': null, 'alignItems': 'center', 'justifyContent': 'center'};
    result = result - echo;
    kilo['borderRadius'] = result;
    options['tab'] = kilo;
    kilo = {};
    sizing = oscar[sizing];
    sizing = output.bind(entity)(sizing);
    sizing = sizing.colors;
    sizing = sizing.BACKGROUND_PRIMARY;
    kilo['backgroundColor'] = sizing;
    options['tabSelected'] = kilo;
    options = verify.bind(backup)(options);
    var _closure1_slot27 = options;
    options = {};
    options['SEARCH'] = foxtrot;
    verify = 'SEARCH';
    options[foxtrot] = verify;
    options['MEMBERS'] = romeo;
    verify = 'MEMBERS';
    options[romeo] = verify;
    options['NOTIFICATIONS'] = yankee;
    verify = 'NOTIFICATIONS';
    options[yankee] = verify;
    options['DEV_TOOLS'] = offset;
    verify = 'DEV_TOOLS';
    options[offset] = verify;
    var _closure1_slot28 = options;
    options = {};
    verify = 'function LaunchPadTsx1(){const{sharedState}=this.__closure;return sharedState.get();}';
    options['code'] = verify;
    var _closure1_slot29 = options;
    options = {};
    verify = 'function LaunchPadTsx2(sharedState){const{keyboardShown,runOnJS,setFocused}=this.__closure;if(!keyboardShown.get()&&sharedState>0.75){runOnJS(setFocused)(true);}else if(keyboardShown.get()&&sharedState<=0){runOnJS(setFocused)(false);}}';
    options['code'] = verify;
    var _closure1_slot30 = options;
    verify = golf.memo;
    options = function(argFoo) {
        _fun00025: for(var _fun00026_ip = 0; ; ) switch(_fun00026_ip) {
 0:
            entity = argFoo;
            sizing = entity.tab;
            var _closure2_slot0 = sizing;
            mike = entity.setTab;
            var _closure2_slot1 = mike;
            offset = entity.updateQuery;
            oscar = entity.sharedState;
            var _closure2_slot2 = oscar;
            romeo = entity.searchRef;
            var _closure2_slot3 = romeo;
            entity = _closure1_slot27;
            tango = undefined;
            verify = entity.bind(tango)();
            foxtrot = _closure1_slot0;
            output = _closure1_slot2;
            entity = 23;
            mike = output[entity];
            golf = foxtrot.bind(tango)(mike);
            report = golf.useStateFromStores;
            mike = _closure1_slot17;
            zulu = new Array(1);
            zulu[0] = mike;
            mike = function() {
                entity = _closure1_slot17;
                entity = entity.isDeveloper;
                return entity;
            };
            yankee = report.bind(golf)(zulu, mike);
            zulu = _closure1_slot4;
            mike = zulu.useRef;
            report = false;
            mike = mike.bind(zulu)(report);
            var _closure2_slot4 = mike;
            options = 24;
            mike = output[options];
            zulu = foxtrot.bind(tango)(mike);
            mike = zulu.useSharedValue;
            result = mike.bind(zulu)(report);
            var _closure2_slot5 = result;
            zulu = _closure1_slot4;
            mike = zulu.useRef;
            mike = mike.bind(zulu)(sizing);
            var _closure2_slot6 = mike;
            report = _closure1_slot4;
            zulu = report.useEffect;
            mike = function() {
                mike = _closure2_slot6;
                entity = _closure2_slot0;
                mike['current'] = entity;
                entity = undefined;
                return entity;
            };
            mike = zulu.bind(report)(mike);
            golf = _closure1_slot4;
            report = golf.useCallback;
            zulu = new Array(2);
            zulu[0] = result;
            zulu[1] = romeo;
            mike = function(argFoo) {
                _fun00027: for(var _fun00028_ip = 0; ; ) switch(_fun00028_ip) {
 0:
                    zulu = argFoo;
                    if(!zulu) { _fun00028_ip = 38; continue _fun00027 }
 6:
                    entity = _closure2_slot6;
                    report = entity.current;
                    tango = _closure1_slot28;
                    tango = tango.SEARCH;
                    if(!(report !== tango)) { _fun00028_ip = 163; continue _fun00027 }
 38:
                    if(zulu) { _fun00028_ip = 280; continue _fun00027 }
 44:
                    tango = _closure2_slot4;
                    tango = tango.current;
                    if(!tango) { _fun00028_ip = 110; continue _fun00027 }
 59:
                    oscar = _closure1_slot0;
                    report = _closure1_slot2;
                    tango = 25;
                    report = report[tango];
                    tango = undefined;
                    report = oscar.bind(tango)(report);
                    tango = report.getBestActiveInput;
                    report = tango.bind(report)();
                    tango = null;
                    if(!(tango != report)) { _fun00028_ip = 110; continue _fun00027 }
 100:
                    tango = report.focus;
                    tango = tango.bind(report)();
 110:
                    tango = _closure2_slot3;
                    report = tango.current;
                    tango = null;
                    if(!(tango != report)) { _fun00028_ip = 135; continue _fun00027 }
 125:
                    tango = report.blur;
                    tango = tango.bind(report)();
 135:
                    tango = _closure2_slot4;
                    report = false;
                    tango['current'] = report;
                    tango = _closure2_slot5;
                    zulu = tango.set;
                    zulu = zulu.bind(tango)(report);
                    _fun00028_ip = 280; continue _fun00027;
 163:
                    tango = _closure2_slot4;
                    report = _closure1_slot0;
                    zulu = _closure1_slot2;
                    entity = 25;
                    entity = zulu[entity];
                    zulu = undefined;
                    report = report.bind(zulu)(entity);
                    entity = report.getBestActiveInput;
                    oscar = entity.bind(report)();
                    entity = null;
                    report = entity == oscar;
                    if(report) { _fun00028_ip = 218; continue _fun00027 }
 208:
                    report = oscar.isFocused;
                    zulu = report.bind(oscar)();
 218:
                    report = true;
                    zulu = report === zulu;
                    tango['current'] = zulu;
                    zulu = _closure2_slot3;
                    zulu = zulu.current;
                    if(!(entity != zulu)) { _fun00028_ip = 280; continue _fun00027 }
 243:
                    tango = _closure2_slot5;
                    zulu = tango.set;
                    zulu = zulu.bind(tango)(report);
                    mike = _closure2_slot3;
                    mike = mike.current;
                    if(!(entity != mike)) { _fun00028_ip = 280; continue _fun00027 }
 270:
                    entity = mike.focus;
                    entity = entity.bind(mike)();
 280:
                    entity = undefined;
                    return entity;
                }
            };
            golf = report.bind(golf)(mike, zulu);
            var _closure2_slot7 = golf;
            entity = output[entity];
            report = foxtrot.bind(tango)(entity);
            zulu = report.useStateFromStores;
            entity = _closure1_slot6;
            mike = new Array(1);
            mike[0] = entity;
            entity = function() {
                mike = _closure1_slot6;
                entity = mike.isOpen;
                entity = entity.bind(mike)();
                return entity;
            };
            entity = zulu.bind(report)(mike, entity);
            var _closure2_slot8 = entity;
            report = _closure1_slot4;
            zulu = report.useEffect;
            mike = new Array(2);
            mike[0] = entity;
            mike[1] = golf;
            entity = function() {
                zulu = _closure2_slot7;
                entity = _closure2_slot8;
                mike = !entity;
                entity = undefined;
                mike = zulu.bind(entity)(mike);
                return entity;
            };
            entity = zulu.bind(report)(entity, mike);
            report = _closure1_slot4;
            zulu = report.useEffect;
            mike = new Array(3);
            mike[0] = sizing;
            mike[1] = oscar;
            mike[2] = golf;
            entity = function() {
                _fun00029: for(var _fun00030_ip = 0; ; ) switch(_fun00030_ip) {
 0:
                    zulu = _closure2_slot0;
                    mike = _closure1_slot28;
                    mike = mike.SEARCH;
                    mike = zulu === mike;
                    if(!mike) { _fun00030_ip = 47; continue _fun00029 }
 27:
                    tango = _closure2_slot2;
                    zulu = tango.get;
                    tango = zulu.bind(tango)();
                    zulu = 1;
                    mike = zulu === tango;
 47:
                    if(!mike) { _fun00030_ip = 63; continue _fun00029 }
 50:
                    zulu = _closure2_slot7;
                    mike = undefined;
                    entity = true;
                    entity = zulu.bind(mike)(entity);
 63:
                    entity = undefined;
                    return entity;
                }
            };
            entity = zulu.bind(report)(entity, mike);
            entity = output[options];
            report = foxtrot.bind(tango)(entity);
            zulu = report.useAnimatedReaction;
            mike = function() { // Original name: v
                mike = _closure2_slot2;
                entity = mike.get;
                entity = entity.bind(mike)();
                return entity;
            };
            entity = {};
            entity['sharedState'] = oscar;
            mike['__closure'] = entity;
            entity = 17067823098320.0;
            mike['__workletHash'] = entity;
            entity = _closure1_slot29;
            mike['__initData'] = entity;
            entity = function(argFoo) { // Original name: S
                _fun00031: for(var _fun00032_ip = 0; ; ) switch(_fun00032_ip) {
 0:
                    tango = argFoo;
                    zulu = _closure2_slot5;
                    mike = zulu.get;
                    mike = mike.bind(zulu)();
                    if(mike) { _fun00032_ip = 84; continue _fun00031 }
 22:
                    mike = 0.75;
                    if(!(tango > mike)) { _fun00032_ip = 84; continue _fun00031 }
 36:
                    zulu = _closure1_slot0;
                    report = _closure1_slot2;
                    mike = 24;
                    mike = report[mike];
                    report = undefined;
                    oscar = zulu.bind(report)(mike);
                    zulu = oscar.runOnJS;
                    mike = _closure2_slot7;
                    zulu = zulu.bind(oscar)(mike);
                    mike = true;
                    mike = zulu.bind(report)(mike);
                    _fun00032_ip = 155; continue _fun00031;
 84:
                    zulu = _closure2_slot5;
                    mike = zulu.get;
                    mike = mike.bind(zulu)();
                    if(!mike) { _fun00032_ip = 106; continue _fun00031 }
 100:
                    zulu = 0;
                    mike = tango <= zulu;
 106:
                    if(!mike) { _fun00032_ip = 155; continue _fun00031 }
 109:
                    tango = _closure1_slot0;
                    zulu = _closure1_slot2;
                    mike = 24;
                    mike = zulu[mike];
                    zulu = undefined;
                    tango = tango.bind(zulu)(mike);
                    mike = tango.runOnJS;
                    entity = _closure2_slot7;
                    mike = mike.bind(tango)(entity);
                    entity = false;
                    entity = mike.bind(zulu)(entity);
 155:
                    entity = undefined;
                    return entity;
                }
            };
            oscar = {};
            oscar['keyboardShown'] = result;
            options = output[options];
            options = foxtrot.bind(tango)(options);
            options = options.runOnJS;
            oscar['runOnJS'] = options;
            oscar['setFocused'] = golf;
            entity['__closure'] = oscar;
            oscar = 3784684686013.0;
            entity['__workletHash'] = oscar;
            oscar = _closure1_slot30;
            entity['__initData'] = oscar;
            entity = zulu.bind(report)(mike, entity);
            zulu = _closure1_slot26;
            mike = _closure1_slot5;
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
            golf = _closure1_slot25;
            oscar = _closure1_slot41;
            report = {};
            options = 'Dev Tools';
            report['text'] = options;
            oscar = golf.bind(tango)(oscar, report);
            _fun00026_ip = 657; continue _fun00025;
 582:
            options = _closure1_slot25;
            golf = _closure1_slot41;
            report = {};
            echo = _closure1_slot0;
            update = _closure1_slot2;
            foxtrot = 27;
            output = update[foxtrot];
            output = echo.bind(tango)(output);
            result = output.intl;
            output = result.string;
            foxtrot = update[foxtrot];
            foxtrot = echo.bind(tango)(foxtrot);
            foxtrot = foxtrot.t;
            foxtrot = foxtrot.HcoRu7;
            foxtrot = output.bind(result)(foxtrot);
            report['text'] = foxtrot;
            oscar = options.bind(tango)(golf, report);
 657:
            _fun00026_ip = 734; continue _fun00025;
 659:
            options = _closure1_slot25;
            golf = _closure1_slot41;
            report = {};
            echo = _closure1_slot0;
            update = _closure1_slot2;
            foxtrot = 27;
            output = update[foxtrot];
            output = echo.bind(tango)(output);
            result = output.intl;
            output = result.string;
            foxtrot = update[foxtrot];
            foxtrot = echo.bind(tango)(foxtrot);
            foxtrot = foxtrot.t;
            foxtrot = foxtrot.9Oq93t;
            foxtrot = output.bind(result)(foxtrot);
            report['text'] = foxtrot;
            oscar = options.bind(tango)(golf, report);
 734:
            _fun00026_ip = 798; continue _fun00025;
 736:
            options = _closure1_slot25;
            golf = _closure1_slot0;
            foxtrot = _closure1_slot2;
            report = 26;
            report = foxtrot[report];
            report = golf.bind(tango)(report);
            golf = report.SearchField;
            report = {'size': 'md', 'returnKeyType': 'done', 'ref': null, 'onChange': null, 'autoComplete': 'off', 'spellCheck': false, 'autoFocus': false};
            report['ref'] = romeo;
            report['onChange'] = offset;
            oscar = options.bind(tango)(golf, report);
 798:
            report = new Array(2);
            report[0] = oscar;
            options = _closure1_slot26;
            golf = _closure1_slot5;
            oscar = {};
            verify = verify.tabs;
            oscar['style'] = verify;
            offset = _closure1_slot25;
            foxtrot = _closure1_slot40;
            verify = {};
            romeo = function(argFoo) { // Original name: icon
                tango = _closure1_slot25;
                mike = _closure1_slot0;
                zulu = _closure1_slot2;
                entity = 28;
                entity = zulu[entity];
                zulu = undefined;
                entity = mike.bind(zulu)(entity);
                mike = entity.FlashIcon;
                entity = {};
                report = 'sm';
                entity['size'] = report;
                report = argFoo;
                entity['color'] = report;
                entity = tango.bind(zulu)(mike, entity);
                return entity;
            };
            verify['icon'] = romeo;
            source = _closure1_slot0;
            control = _closure1_slot2;
            result = 27;
            romeo = control[result];
            romeo = source.bind(tango)(romeo);
            echo = romeo.intl;
            output = echo.string;
            romeo = control[result];
            romeo = source.bind(tango)(romeo);
            romeo = romeo.t;
            romeo = romeo.JqV7IC;
            romeo = output.bind(echo)(romeo);
            verify['accessibilityLabel'] = romeo;
            romeo = function() { // Original name: onPress
                _fun00033: for(var _fun00034_ip = 0; ; ) switch(_fun00034_ip) {
 0:
                    tango = _closure2_slot1;
                    entity = _closure1_slot28;
                    zulu = entity.SEARCH;
                    entity = undefined;
                    zulu = tango.bind(entity)(zulu);
                    mike = _closure2_slot3;
                    zulu = mike.current;
                    mike = null;
                    if(!(mike != zulu)) { _fun00034_ip = 52; continue _fun00033 }
 42:
                    mike = zulu.focus;
                    mike = mike.bind(zulu)();
 52:
                    return entity;
                }
            };
            verify['onPress'] = romeo;
            output = _closure1_slot28;
            romeo = output.SEARCH;
            romeo = sizing === romeo;
            verify['selected'] = romeo;
            offset = offset.bind(tango)(foxtrot, verify);
            verify = new Array(3);
            verify[0] = offset;
            romeo = _closure1_slot25;
            offset = {};
            echo = function(argFoo) { // Original name: icon
                tango = _closure1_slot25;
                mike = _closure1_slot0;
                zulu = _closure1_slot2;
                entity = 29;
                entity = zulu[entity];
                zulu = undefined;
                entity = mike.bind(zulu)(entity);
                mike = entity.BellIcon;
                entity = {};
                report = 'sm';
                entity['size'] = report;
                report = argFoo;
                entity['color'] = report;
                entity = tango.bind(zulu)(mike, entity);
                return entity;
            };
            offset['icon'] = echo;
            echo = control[result];
            echo = source.bind(tango)(echo);
            update = echo.intl;
            echo = update.string;
            result = control[result];
            result = source.bind(tango)(result);
            result = result.t;
            result = result.HcoRu7;
            result = echo.bind(update)(result);
            offset['accessibilityLabel'] = result;
            result = function() { // Original name: onPress
                _fun00035: for(var _fun00036_ip = 0; ; ) switch(_fun00036_ip) {
 0:
                    tango = _closure2_slot1;
                    entity = _closure1_slot28;
                    zulu = entity.NOTIFICATIONS;
                    entity = undefined;
                    zulu = tango.bind(entity)(zulu);
                    mike = _closure2_slot3;
                    zulu = mike.current;
                    mike = null;
                    if(!(mike != zulu)) { _fun00036_ip = 52; continue _fun00035 }
 42:
                    mike = zulu.blur;
                    mike = mike.bind(zulu)();
 52:
                    return entity;
                }
            };
            offset['onPress'] = result;
            output = output.NOTIFICATIONS;
            output = sizing === output;
            offset['selected'] = output;
            offset = romeo.bind(tango)(foxtrot, offset);
            verify[1] = offset;
            offset = null;
            if(!yankee) { _fun00026_ip = 1123; continue _fun00025 }
 1056:
            foxtrot = _closure1_slot25;
            romeo = _closure1_slot40;
            yankee = {};
            output = function(argFoo) { // Original name: icon
                tango = _closure1_slot25;
                mike = _closure1_slot0;
                zulu = _closure1_slot2;
                entity = 30;
                entity = zulu[entity];
                zulu = undefined;
                entity = mike.bind(zulu)(entity);
                mike = entity.StaffBadgeIcon;
                entity = {};
                report = 'sm';
                entity['size'] = report;
                report = argFoo;
                entity['color'] = report;
                entity = tango.bind(zulu)(mike, entity);
                return entity;
            };
            yankee['icon'] = output;
            output = 'Dev Tools';
            yankee['accessibilityLabel'] = output;
            kilo = _closure1_slot28;
            kilo = kilo.DEV_TOOLS;
            kilo = sizing === kilo;
            yankee['selected'] = kilo;
            backup = function() { // Original name: onPress
                _fun00037: for(var _fun00038_ip = 0; ; ) switch(_fun00038_ip) {
 0:
                    tango = _closure1_slot0;
                    zulu = _closure1_slot2;
                    entity = 31;
                    zulu = zulu[entity];
                    entity = undefined;
                    tango = tango.bind(entity)(zulu);
                    zulu = tango.isAndroid;
                    zulu = zulu.bind(tango)();
                    if(zulu) { _fun00038_ip = 61; continue _fun00037 }
 37:
                    tango = _closure2_slot1;
                    zulu = _closure1_slot28;
                    zulu = zulu.DEV_TOOLS;
                    zulu = tango.bind(entity)(zulu);
                    _fun00038_ip = 111; continue _fun00037;
 61:
                    report = _closure1_slot0;
                    tango = _closure1_slot2;
                    zulu = 32;
                    zulu = tango[zulu];
                    report = report.bind(entity)(zulu);
                    zulu = report.navigateToDevTools;
                    zulu = zulu.bind(report)();
                    zulu = _closure1_slot1;
                    mike = 33;
                    mike = tango[mike];
                    mike = zulu.bind(entity)(mike);
                    mike = mike.bind(entity)();
 111:
                    mike = _closure2_slot3;
                    zulu = mike.current;
                    mike = null;
                    if(!(mike != zulu)) { _fun00038_ip = 139; continue _fun00037 }
 129:
                    mike = zulu.blur;
                    mike = mike.bind(zulu)();
 139:
                    return entity;
                }
            };
            yankee['onPress'] = backup;
            offset = foxtrot.bind(tango)(romeo, yankee);
 1123:
            verify[2] = offset;
            oscar['children'] = verify;
            oscar = options.bind(tango)(golf, oscar);
            report[1] = oscar;
            entity['children'] = report;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        }
    };
    options = verify.bind(golf)(options);
    var _closure1_slot31 = options;
    var _closure1_slot32 = tango;
    var _closure1_slot33 = tango;
    tango = new Array(0);
    var _closure1_slot34 = tango;
    options = 37;
    tango = oscar[options];
    tango = report.bind(entity)(tango);
    tango = tango.AutocompleterResultTypes;
    verify = tango.GUILD;
    tango = new Array(5);
    tango[0] = verify;
    verify = oscar[options];
    verify = report.bind(entity)(verify);
    verify = verify.AutocompleterResultTypes;
    verify = verify.TEXT_CHANNEL;
    tango[1] = verify;
    verify = oscar[options];
    verify = report.bind(entity)(verify);
    verify = verify.AutocompleterResultTypes;
    verify = verify.GROUP_DM;
    tango[2] = verify;
    verify = oscar[options];
    verify = report.bind(entity)(verify);
    verify = verify.AutocompleterResultTypes;
    verify = verify.VOICE_CHANNEL;
    tango[3] = verify;
    options = oscar[options];
    options = report.bind(entity)(options);
    options = options.AutocompleterResultTypes;
    options = options.USER;
    tango[4] = options;
    var _closure1_slot35 = tango;
    tango = {};
    options = 'function LaunchPadTsx3(){const{sharedState}=this.__closure;return sharedState.get()===0;}';
    tango['code'] = options;
    var _closure1_slot36 = tango;
    tango = {};
    options = 'function LaunchPadTsx4(hidden,prevHidden){const{runOnJS,clearQuery,cancelTimeout}=this.__closure;if(hidden===prevHidden)return;if(hidden&&hidden!==prevHidden){runOnJS(clearQuery)();}else if(!hidden&&hidden!==prevHidden){runOnJS(cancelTimeout)();}}';
    tango['code'] = options;
    var _closure1_slot37 = tango;
    tango = golf.memo;
    mike = function(argFoo) { // Original name: LaunchPad
        _fun00039: for(var _fun00040_ip = 0; ; ) switch(_fun00040_ip) {
 0:
            mike = argFoo;
            source = mike.visible;
            romeo = mike.sharedState;
            mike = _closure1_slot27;
            tango = undefined;
            yankee = mike.bind(tango)();
            zulu = _closure1_slot4;
            mike = zulu.useState;
            oscar = false;
            zulu = mike.bind(zulu)(oscar);
            mike = _closure1_slot3;
            options = 2;
            mike = mike.bind(tango)(zulu, options);
            golf = 0;
            result = mike[golf];
            report = 1;
            mike = mike[report];
            var _closure2_slot0 = mike;
            offset = _closure1_slot4;
            verify = offset.useCallback;
            zulu = function() {
                zulu = _closure2_slot0;
                mike = undefined;
                entity = function(argFoo) {
                    entity = argFoo;
                    entity = !entity;
                    return entity;
                };
                entity = zulu.bind(mike)(entity);
                return entity;
            };
            mike = new Array(0);
            output = verify.bind(offset)(zulu, mike);
            zulu = _closure1_slot4;
            mike = zulu.useRef;
            sizing = null;
            record = mike.bind(zulu)(sizing);
            mike = function(argFoo) { // Original name: useAutocompleterResults
                report = argFoo;
                var _closure3_slot0 = report;
                oscar = _closure1_slot4;
                tango = oscar.useState;
                zulu = '';
                tango = tango.bind(oscar)(zulu);
                zulu = _closure1_slot3;
                offset = undefined;
                options = 2;
                tango = zulu.bind(offset)(tango, options);
                golf = 0;
                zulu = tango[golf];
                verify = 1;
                tango = tango[verify];
                var _closure3_slot1 = tango;
                yankee = _closure1_slot4;
                oscar = yankee.useState;
                tango = _closure1_slot34;
                oscar = oscar.bind(yankee)(tango);
                tango = _closure1_slot3;
                oscar = tango.bind(offset)(oscar, options);
                tango = oscar[golf];
                oscar = oscar[verify];
                var _closure3_slot2 = oscar;
                yankee = _closure1_slot4;
                options = yankee.useState;
                oscar = function() {
                    zulu = _closure1_slot1;
                    tango = _closure1_slot2;
                    mike = 40;
                    mike = tango[mike];
                    oscar = undefined;
                    report = zulu.bind(oscar)(mike);
                    verify = _closure1_slot35;
                    zulu = {};
                    entity = true;
                    zulu['frecencyBoosters'] = entity;
                    entity = report.prototype;
                    mike = Object.create(entity, {constructor: {value: report}});
                    offset = function(argFoo, argBar) {
                        _fun00041: for(var _fun00042_ip = 0; ; ) switch(_fun00042_ip) {
 0:
                            mike = argBar;
                            entity = mike.trim;
                            mike = entity.bind(mike)();
                            entity = mike.trim;
                            mike = entity.bind(mike)();
                            entity = '';
                            if(!(entity !== mike)) { _fun00042_ip = 50; continue _fun00041 }
 31:
                            zulu = _closure3_slot2;
                            mike = undefined;
                            entity = argFoo;
                            entity = zulu.bind(mike)(entity);
                            _fun00042_ip = 71; continue _fun00041;
 50:
                            zulu = _closure3_slot2;
                            mike = _closure1_slot34;
                            entity = undefined;
                            entity = zulu.bind(entity)(mike);
 71:
                            entity = undefined;
                            return entity;
                        }
                    };
                    yankee = mike;
                    options = undefined;
                    golf = zulu;
                    entity = new yankee[report](offset, verify, options, golf, oscar);
                    entity = entity instanceof Object ? entity : mike;
                    return entity;
                };
                options = options.bind(yankee)(oscar);
                oscar = _closure1_slot3;
                oscar = oscar.bind(offset)(options, verify);
                golf = oscar[golf];
                var _closure3_slot3 = golf;
                offset = _closure1_slot4;
                verify = offset.useEffect;
                options = new Array(1);
                options[0] = golf;
                oscar = function() {
                    entity = function() {
                        mike = _closure3_slot3;
                        entity = mike.clean;
                        entity = entity.bind(mike)();
                        return entity;
                    };
                    return entity;
                };
                oscar = verify.bind(offset)(oscar, options);
                offset = _closure1_slot4;
                verify = offset.useEffect;
                options = new Array(1);
                options[0] = golf;
                oscar = function() {
                    zulu = _closure1_slot1;
                    mike = _closure1_slot2;
                    entity = 41;
                    mike = mike[entity];
                    entity = undefined;
                    zulu = zulu.bind(entity)(mike);
                    mike = zulu.addRouteChangeListener;
                    entity = function() {
                        _fun00043: for(var _fun00044_ip = 0; ; ) switch(_fun00044_ip) {
 0:
                            zulu = global;
                            report = zulu.Set;
                            tango = _closure1_slot15;
                            mike = tango.getId;
                            oscar = mike.bind(tango)();
                            mike = zulu.HermesInternal;
                            tango = mike.concat;
                            mike = 'user:';
                            tango = tango.bind(mike)(oscar);
                            mike = new Array(1);
                            mike[0] = tango;
                            tango = report.prototype;
                            tango = Object.create(tango, {constructor: {value: report}});
                            verify = tango;
                            options = mike;
                            mike = new verify[report](options, golf);
                            mike = mike instanceof Object ? mike : tango;
                            report = _closure1_slot0;
                            tango = _closure1_slot2;
                            entity = 35;
                            tango = tango[entity];
                            entity = undefined;
                            report = report.bind(entity)(tango);
                            tango = report.getSelectedGuildFromRoute;
                            oscar = tango.bind(report)();
                            tango = null;
                            if(!(tango != oscar)) { _fun00044_ip = 148; continue _fun00043 }
 116:
                            tango = mike.add;
                            zulu = zulu.HermesInternal;
                            report = zulu.concat;
                            zulu = 'guild:';
                            zulu = report.bind(zulu)(oscar);
                            zulu = tango.bind(mike)(zulu);
 148:
                            report = _closure3_slot3;
                            tango = report.setOptions;
                            zulu = {};
                            zulu['blacklist'] = mike;
                            mike = true;
                            mike = tango.bind(report)(zulu, mike);
                            return entity;
                        }
                    };
                    entity = mike.bind(zulu)(entity);
                    return entity;
                };
                oscar = verify.bind(offset)(oscar, options);
                verify = _closure1_slot4;
                options = verify.useEffect;
                oscar = new Array(2);
                oscar[0] = report;
                oscar[1] = golf;
                report = function() {
                    _fun00045: for(var _fun00046_ip = 0; ; ) switch(_fun00046_ip) {
 0:
                        entity = _closure3_slot0;
                        mike = _closure3_slot3;
                        if(entity) { _fun00046_ip = 26; continue _fun00045 }
 14:
                        entity = mike.pause;
                        entity = entity.bind(mike)();
                        _fun00046_ip = 36; continue _fun00045;
 26:
                        entity = mike.resume;
                        entity = entity.bind(mike)();
 36:
                        entity = undefined;
                        return entity;
                    }
                };
                report = options.bind(verify)(report, oscar);
                oscar = _closure1_slot4;
                report = oscar.useCallback;
                mike = new Array(1);
                mike[0] = golf;
                entity = function(argFoo) {
                    tango = argFoo;
                    zulu = _closure3_slot1;
                    entity = undefined;
                    zulu = zulu.bind(entity)(tango);
                    zulu = _closure3_slot3;
                    mike = zulu.search;
                    mike = mike.bind(zulu)(tango);
                    return entity;
                };
                mike = report.bind(oscar)(entity, mike);
                entity = {};
                entity['queryResults'] = tango;
                entity['query'] = zulu;
                entity['updateQuery'] = mike;
                return entity;
            };
            mike = mike.bind(tango)(source);
            foxtrot = mike.query;
            var _closure2_slot1 = foxtrot;
            context = mike.updateQuery;
            backup = mike.queryResults;
            zulu = _closure1_slot43;
            mike = {};
            verify = foxtrot.trim;
            verify = verify.bind(foxtrot)();
            verify = verify.length;
            verify = verify > golf;
            mike['disabled'] = verify;
            mike['visible'] = source;
            mike = zulu.bind(tango)(mike);
            update = mike.initialResults;
            sequence = mike.unreadPrivateChannelIds;
            vacuum = mike.unreadGuilds;
            control = mike.guildHistory;
            echo = mike.selectedUnreadGuild;
            config = mike.setSelectedUnreadGuild;
            zulu = _closure1_slot4;
            mike = zulu.useState;
            zulu = mike.bind(zulu)(oscar);
            mike = _closure1_slot3;
            zulu = mike.bind(tango)(zulu, options);
            mike = zulu[golf];
            var _closure2_slot2 = mike;
            verify = zulu[report];
            var _closure2_slot3 = verify;
            offset = _closure1_slot4;
            oscar = offset.useState;
            zulu = _closure1_slot28;
            zulu = zulu.SEARCH;
            oscar = oscar.bind(offset)(zulu);
            zulu = _closure1_slot3;
            zulu = zulu.bind(tango)(oscar, options);
            offset = zulu[golf];
            papa = zulu[report];
            zulu = function() { // Original name: useWrapperStyles
                zulu = _closure1_slot27;
                tango = undefined;
                report = zulu.bind(tango)();
                var _closure3_slot0 = report;
                oscar = _closure1_slot1;
                golf = _closure1_slot2;
                zulu = 38;
                zulu = golf[zulu];
                zulu = oscar.bind(tango)(zulu);
                zulu = zulu.bind(tango)();
                options = zulu.height;
                var _closure3_slot1 = options;
                zulu = 39;
                zulu = golf[zulu];
                zulu = oscar.bind(tango)(zulu);
                zulu = zulu.bind(tango)();
                golf = zulu.top;
                var _closure3_slot2 = golf;
                oscar = zulu.bottom;
                var _closure3_slot3 = oscar;
                tango = _closure1_slot4;
                zulu = tango.useMemo;
                mike = new Array(4);
                mike[0] = options;
                mike[1] = golf;
                mike[2] = oscar;
                mike[3] = report;
                entity = function() {
                    entity = _closure3_slot0;
                    mike = entity.wrapper;
                    entity = new Array(2);
                    entity[0] = mike;
                    mike = {};
                    report = _closure3_slot1;
                    tango = _closure3_slot2;
                    tango = report - tango;
                    zulu = _closure3_slot3;
                    tango = tango - zulu;
                    zulu = 16;
                    zulu = tango - zulu;
                    mike['maxHeight'] = zulu;
                    entity[1] = mike;
                    return entity;
                };
                entity = zulu.bind(tango)(entity, mike);
                return entity;
            };
            report = zulu.bind(tango)();
            options = _closure1_slot4;
            oscar = options.useEffect;
            zulu = new Array(3);
            zulu[0] = foxtrot;
            zulu[1] = verify;
            zulu[2] = mike;
            mike = function() {
                _fun00047: for(var _fun00048_ip = 0; ; ) switch(_fun00048_ip) {
 0:
                    mike = _closure2_slot1;
                    mike = mike.length;
                    zulu = 0;
                    if(!(mike > zulu)) { _fun00048_ip = 83; continue _fun00047 }
 18:
                    mike = _closure2_slot2;
                    if(mike) { _fun00048_ip = 83; continue _fun00047 }
 25:
                    oscar = _closure1_slot1;
                    report = _closure1_slot2;
                    tango = 42;
                    tango = report[tango];
                    report = undefined;
                    oscar = oscar.bind(report)(tango);
                    tango = oscar.track;
                    mike = _closure1_slot24;
                    mike = mike.LAUNCHPAD_SEARCHED;
                    mike = tango.bind(oscar)(mike);
                    tango = _closure2_slot3;
                    mike = true;
                    mike = tango.bind(report)(mike);
                    _fun00048_ip = 109; continue _fun00047;
 83:
                    mike = _closure2_slot1;
                    mike = mike.length;
                    if(!(zulu === mike)) { _fun00048_ip = 109; continue _fun00047 }
 96:
                    zulu = _closure2_slot3;
                    mike = undefined;
                    entity = false;
                    entity = zulu.bind(mike)(entity);
 109:
                    entity = undefined;
                    return entity;
                }
            };
            mike = oscar.bind(options)(mike, zulu);
            entity = function(argFoo, argBar, argBaz) { // Original name: useDeferredQueryClear
                golf = argFoo;
                entity = argBar;
                foxtrot = argBaz;
                var _closure3_slot0 = golf;
                var _closure3_slot1 = entity;
                var _closure3_slot2 = foxtrot;
                report = _closure1_slot4;
                tango = report.useRef;
                zulu = -1;
                zulu = tango.bind(report)(zulu);
                var _closure3_slot3 = zulu;
                report = _closure1_slot4;
                tango = report.useCallback;
                zulu = new Array(2);
                zulu[0] = golf;
                zulu[1] = entity;
                entity = function() {
                    mike = global;
                    report = mike.clearTimeout;
                    zulu = _closure3_slot3;
                    tango = zulu.current;
                    entity = undefined;
                    tango = report.bind(entity)(tango);
                    report = mike.setTimeout;
                    tango = function() {
                        _fun00049: for(var _fun00050_ip = 0; ; ) switch(_fun00050_ip) {
 0:
                            entity = global;
                            tango = entity.clearTimeout;
                            entity = _closure3_slot3;
                            zulu = entity.current;
                            entity = undefined;
                            zulu = tango.bind(entity)(zulu);
                            zulu = _closure3_slot0;
                            tango = '';
                            zulu = zulu.bind(entity)(tango);
                            mike = _closure3_slot1;
                            zulu = mike.current;
                            mike = null;
                            if(!(mike != zulu)) { _fun00050_ip = 66; continue _fun00049 }
 55:
                            mike = zulu.setText;
                            mike = mike.bind(zulu)(tango);
 66:
                            return entity;
                        }
                    };
                    mike = 100;
                    mike = report.bind(entity)(tango, mike);
                    zulu['current'] = mike;
                    return entity;
                };
                verify = tango.bind(report)(entity, zulu);
                var _closure3_slot4 = verify;
                report = _closure1_slot4;
                tango = report.useCallback;
                zulu = function() {
                    entity = global;
                    zulu = entity.clearTimeout;
                    entity = _closure3_slot3;
                    mike = entity.current;
                    entity = undefined;
                    mike = zulu.bind(entity)(mike);
                    return entity;
                };
                entity = new Array(0);
                options = tango.bind(report)(zulu, entity);
                var _closure3_slot5 = options;
                report = _closure1_slot4;
                tango = report.useEffect;
                zulu = function() {
                    entity = function() {
                        entity = global;
                        zulu = entity.clearTimeout;
                        entity = _closure3_slot3;
                        mike = entity.current;
                        entity = undefined;
                        entity = zulu.bind(entity)(mike);
                        return entity;
                    };
                    return entity;
                };
                entity = new Array(0);
                entity = tango.bind(report)(zulu, entity);
                yankee = _closure1_slot0;
                romeo = _closure1_slot2;
                offset = 24;
                zulu = romeo[offset];
                entity = undefined;
                report = yankee.bind(entity)(zulu);
                tango = report.useAnimatedReaction;
                zulu = function() { // Original name: u
                    mike = _closure3_slot2;
                    entity = mike.get;
                    mike = entity.bind(mike)();
                    entity = 0;
                    entity = entity === mike;
                    return entity;
                };
                golf = {};
                golf['sharedState'] = foxtrot;
                zulu['__closure'] = golf;
                golf = 7315121230879.0;
                zulu['__workletHash'] = golf;
                golf = _closure1_slot36;
                zulu['__initData'] = golf;
                mike = function(argFoo, argBar) { // Original name: a
                    _fun00051: for(var _fun00052_ip = 0; ; ) switch(_fun00052_ip) {
 0:
                        zulu = argFoo;
                        mike = argBar;
                        entity = zulu !== mike;
                        if(!entity) { _fun00052_ip = 126; continue _fun00051 }
 13:
                        if(!zulu) { _fun00052_ip = 19; continue _fun00051 }
 16:
                        if(entity) { _fun00052_ip = 80; continue _fun00051 }
 19:
                        entity = zulu;
                        if(entity) { _fun00052_ip = 29; continue _fun00051 }
 25:
                        entity = zulu === mike;
 29:
                        if(entity) { _fun00052_ip = 126; continue _fun00051 }
 32:
                        zulu = _closure1_slot0;
                        mike = _closure1_slot2;
                        entity = 24;
                        entity = mike[entity];
                        mike = undefined;
                        tango = zulu.bind(mike)(entity);
                        zulu = tango.runOnJS;
                        entity = _closure3_slot5;
                        entity = zulu.bind(tango)(entity);
                        entity = entity.bind(mike)();
                        _fun00052_ip = 126; continue _fun00051;
 80:
                        zulu = _closure1_slot0;
                        mike = _closure1_slot2;
                        entity = 24;
                        entity = mike[entity];
                        mike = undefined;
                        tango = zulu.bind(mike)(entity);
                        zulu = tango.runOnJS;
                        entity = _closure3_slot4;
                        entity = zulu.bind(tango)(entity);
                        entity = entity.bind(mike)();
 126:
                        entity = undefined;
                        return entity;
                    }
                };
                golf = {};
                offset = romeo[offset];
                offset = yankee.bind(entity)(offset);
                offset = offset.runOnJS;
                golf['runOnJS'] = offset;
                golf['clearQuery'] = verify;
                golf['cancelTimeout'] = options;
                mike['__closure'] = golf;
                golf = 6379173436444.0;
                mike['__workletHash'] = golf;
                oscar = _closure1_slot37;
                mike['__initData'] = oscar;
                mike = tango.bind(report)(zulu, mike);
                return entity;
            };
            entity = entity.bind(tango)(context, record, romeo);
            entity = foxtrot.trim;
            entity = entity.bind(foxtrot)();
            entity = entity.length;
            verify = entity > golf;
            zulu = _closure1_slot26;
            mike = _closure1_slot5;
            entity = {};
            entity['style'] = report;
            options = _closure1_slot25;
            oscar = _closure1_slot31;
            report = {};
            report['tab'] = offset;
            report['setTab'] = papa;
            report['updateQuery'] = context;
            report['searchRef'] = record;
            report['sharedState'] = romeo;
            oscar = options.bind(tango)(oscar, report);
            report = new Array(3);
            report[0] = oscar;
            oscar = foxtrot.trim;
            oscar = oscar.bind(foxtrot)();
            oscar = oscar.length;
            oscar = golf === oscar;
            if(!oscar) { _fun00040_ip = 489; continue _fun00039 }
 475:
            golf = _closure1_slot28;
            golf = golf.SEARCH;
            oscar = offset === golf;
 489:
            if(!oscar) { _fun00040_ip = 554; continue _fun00039 }
 492:
            romeo = _closure1_slot25;
            options = _closure1_slot1;
            record = _closure1_slot2;
            golf = 43;
            golf = record[golf];
            options = options.bind(tango)(golf);
            golf = {};
            golf['selectedGuildId'] = echo;
            golf['setSelectedGuild'] = config;
            golf['unreadPrivateChannelIds'] = sequence;
            golf['unreadGuilds'] = vacuum;
            golf['guildHistory'] = control;
            golf['visible'] = source;
            oscar = romeo.bind(tango)(options, golf);
 554:
            report[1] = oscar;
            options = _closure1_slot25;
            golf = _closure1_slot5;
            oscar = {};
            yankee = yankee.launchPadContent;
            oscar['style'] = yankee;
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
            romeo = _closure1_slot2;
            verify = 47;
            verify = romeo[verify];
            offset = offset.bind(tango)(verify);
            verify = {};
            verify = yankee.bind(tango)(offset, verify);
            _fun00040_ip = 709; continue _fun00039;
 677:
            romeo = _closure1_slot25;
            yankee = _closure1_slot1;
            source = _closure1_slot2;
            offset = 46;
            offset = source[offset];
            yankee = yankee.bind(tango)(offset);
            offset = {};
            verify = romeo.bind(tango)(yankee, offset);
 709:
            _fun00040_ip = 743; continue _fun00039;
 711:
            romeo = _closure1_slot25;
            yankee = _closure1_slot1;
            source = _closure1_slot2;
            offset = 45;
            offset = source[offset];
            yankee = yankee.bind(tango)(offset);
            offset = {};
            verify = romeo.bind(tango)(yankee, offset);
 743:
            _fun00040_ip = 854; continue _fun00039;
 745:
            romeo = _closure1_slot25;
            yankee = _closure1_slot0;
            source = _closure1_slot2;
            offset = 44;
            offset = source[offset];
            offset = yankee.bind(tango)(offset);
            yankee = offset.InitialResults;
            offset = {};
            offset['selectedGuildId'] = echo;
            source = sizing == update;
            echo = undefined;
            if(source) { _fun00040_ip = 797; continue _fun00039 }
 791:
            echo = update.unreads;
 797:
            if(!(sizing == echo)) { _fun00040_ip = 805; continue _fun00039 }
 801:
            echo = _closure1_slot34;
 805:
            offset['unreads'] = echo;
            source = sizing == update;
            echo = undefined;
            if(source) { _fun00040_ip = 825; continue _fun00039 }
 819:
            echo = update.channelHistory;
 825:
            if(!(sizing == echo)) { _fun00040_ip = 833; continue _fun00039 }
 829:
            echo = _closure1_slot34;
 833:
            offset['history'] = echo;
            offset['expandedHistory'] = result;
            offset['toggleExpandedHistory'] = output;
            verify = romeo.bind(tango)(yankee, offset);
 854:
            _fun00040_ip = 911; continue _fun00039;
 856:
            romeo = _closure1_slot25;
            yankee = _closure1_slot0;
            output = _closure1_slot2;
            offset = 44;
            offset = output[offset];
            offset = yankee.bind(tango)(offset);
            yankee = offset.SearchResults;
            offset = {};
            if(!(sizing == backup)) { _fun00040_ip = 896; continue _fun00039 }
 892:
            backup = _closure1_slot34;
 896:
            offset['results'] = backup;
            offset['query'] = foxtrot;
            verify = romeo.bind(tango)(yankee, offset);
 911:
            oscar['children'] = verify;
            oscar = options.bind(tango)(golf, oscar);
            report[2] = oscar;
            entity['children'] = report;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        }
    };
    mike = tango.bind(golf)(mike);
    tango = 48;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/launchpad/native/LaunchPad.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();