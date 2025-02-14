// app/modules/search_v2/native/components/list/SearchList.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    entity = argBaz;
    var _closure1_slot1 = entity;
    var _closure1_slot2 = oscar;
    entity = function(argFoo) { // Original name: getItemKey
        _fun113327: for(var _fun113327_ip = 0; ; ) switch(_fun113327_ip) {
 0:
            entity = argFoo;
            tango = entity.type;
            report = _closure1_slot6;
            report = report.DM;
            if(!(report !== tango)) { _fun113327_ip = 672; continue _fun113327 }
 30:
            report = _closure1_slot6;
            report = report.GUILD_CHANNEL_MEMBER;
            if(!(report !== tango)) { _fun113327_ip = 617; continue _fun113327 }
 47:
            report = _closure1_slot6;
            report = report.SEARCH_HISTORY_ITEM;
            if(!(report !== tango)) { _fun113327_ip = 590; continue _fun113327 }
 64:
            report = _closure1_slot6;
            report = report.MEDIA_GRID;
            if(!(report !== tango)) { _fun113327_ip = 546; continue _fun113327 }
 81:
            report = _closure1_slot6;
            report = report.MEDIA;
            if(!(report !== tango)) { _fun113327_ip = 483; continue _fun113327 }
 98:
            report = _closure1_slot6;
            report = report.GROUP_DM;
            if(!(report !== tango)) { _fun113327_ip = 433; continue _fun113327 }
 115:
            report = _closure1_slot6;
            report = report.GUILD_TEXT_CHANNEL;
            if(!(report !== tango)) { _fun113327_ip = 394; continue _fun113327 }
 132:
            report = _closure1_slot6;
            report = report.GUILD_VOICE_CHANNEL;
            if(!(report !== tango)) { _fun113327_ip = 394; continue _fun113327 }
 149:
            report = _closure1_slot6;
            report = report.MESSAGE;
            if(!(report !== tango)) { _fun113327_ip = 355; continue _fun113327 }
 166:
            report = _closure1_slot6;
            report = report.LINK;
            if(!(report !== tango)) { _fun113327_ip = 294; continue _fun113327 }
 180:
            report = _closure1_slot6;
            report = report.FILE;
            if(!(report !== tango)) { _fun113327_ip = 294; continue _fun113327 }
 194:
            report = _closure1_slot6;
            report = report.GENERIC;
            if(!(report !== tango)) { _fun113327_ip = 260; continue _fun113327 }
 208:
            zulu = _closure1_slot6;
            zulu = zulu.SECTION;
            if(!(zulu !== tango)) { _fun113327_ip = 226; continue _fun113327 }
 222:
            zulu = undefined;
            return zulu;
 226:
            zulu = entity.props;
            report = zulu.title;
            zulu = global;
            zulu = zulu.HermesInternal;
            tango = zulu.concat;
            zulu = '';
            zulu = tango.bind(zulu)(report);
            return zulu;
 260:
            zulu = entity.props;
            report = zulu.text;
            zulu = global;
            zulu = zulu.HermesInternal;
            tango = zulu.concat;
            zulu = '';
            zulu = tango.bind(zulu)(report);
            return zulu;
 294:
            zulu = entity.props;
            zulu = zulu.data;
            golf = zulu.messageId;
            zulu = entity.props;
            zulu = zulu.data;
            oscar = zulu.mediaIndex;
            zulu = global;
            zulu = zulu.HermesInternal;
            report = zulu.concat;
            tango = '';
            zulu = '-';
            zulu = report.bind(tango)(golf, zulu, oscar);
            return zulu;
 355:
            zulu = entity.props;
            zulu = zulu.message;
            report = zulu.id;
            zulu = global;
            zulu = zulu.HermesInternal;
            tango = zulu.concat;
            zulu = '';
            zulu = tango.bind(zulu)(report);
            return zulu;
 394:
            zulu = entity.props;
            zulu = zulu.channel;
            report = zulu.id;
            zulu = global;
            zulu = zulu.HermesInternal;
            tango = zulu.concat;
            zulu = '';
            zulu = tango.bind(zulu)(report);
            return zulu;
 433:
            golf = entity.section;
            zulu = entity.props;
            zulu = zulu.channel;
            oscar = zulu.id;
            zulu = global;
            zulu = zulu.HermesInternal;
            report = zulu.concat;
            tango = '';
            zulu = '-';
            zulu = report.bind(tango)(golf, zulu, oscar);
            return zulu;
 483:
            zulu = entity.props;
            zulu = zulu.media;
            golf = zulu.messageId;
            zulu = entity.props;
            zulu = zulu.media;
            oscar = zulu.mediaIndex;
            zulu = global;
            zulu = zulu.HermesInternal;
            report = zulu.concat;
            tango = '';
            zulu = '-';
            zulu = report.bind(tango)(golf, zulu, oscar);
            return zulu;
 546:
            zulu = entity.props;
            report = zulu.media;
            tango = report.map;
            zulu = function(argFoo) {
                entity = argFoo;
                report = entity.messageId;
                tango = entity.mediaIndex;
                entity = global;
                entity = entity.HermesInternal;
                zulu = entity.concat;
                mike = '';
                entity = '-';
                entity = zulu.bind(mike)(report, entity, tango);
                return entity;
            };
            report = tango.bind(report)(zulu);
            tango = report.join;
            zulu = '-';
            zulu = tango.bind(report)(zulu);
            return zulu;
 590:
            zulu = entity.props;
            tango = zulu.searchHistoryItem;
            zulu = function(argFoo) { // Original name: searchHistoryKeyExtractor
                _fun113328: for(var _fun113328_ip = 0; ; ) switch(_fun113328_ip) {
 0:
                    entity = argFoo;
                    zulu = entity.type;
                    tango = _closure1_slot5;
                    tango = tango.TEXT;
                    if(!(tango !== zulu)) { _fun113328_ip = 143; continue _fun113328 }
 25:
                    tango = _closure1_slot5;
                    tango = tango.GROUP_DM;
                    if(!(tango !== zulu)) { _fun113328_ip = 114; continue _fun113328 }
 39:
                    tango = _closure1_slot5;
                    tango = tango.GUILD_TEXT_CHANNEL;
                    if(!(tango !== zulu)) { _fun113328_ip = 114; continue _fun113328 }
 53:
                    tango = _closure1_slot5;
                    tango = tango.GUILD_VOICE_CHANNEL;
                    if(!(tango !== zulu)) { _fun113328_ip = 114; continue _fun113328 }
 67:
                    mike = _closure1_slot5;
                    mike = mike.DM;
                    if(!(mike !== zulu)) { _fun113328_ip = 85; continue _fun113328 }
 81:
                    mike = undefined;
                    return mike;
 85:
                    tango = entity.userId;
                    mike = global;
                    mike = mike.HermesInternal;
                    zulu = mike.concat;
                    mike = '';
                    mike = zulu.bind(mike)(tango);
                    return mike;
 114:
                    tango = entity.channelId;
                    mike = global;
                    mike = mike.HermesInternal;
                    zulu = mike.concat;
                    mike = '';
                    mike = zulu.bind(mike)(tango);
                    return mike;
 143:
                    report = entity.text;
                    zulu = entity.tags;
                    entity = null;
                    entity = entity == zulu;
                    tango = undefined;
                    if(entity) { _fun113328_ip = 198; continue _fun113328 }
 165:
                    mike = zulu.map;
                    entity = function(argFoo) {
                        entity = argFoo;
                        entity = entity.text;
                        return entity;
                    };
                    zulu = mike.bind(zulu)(entity);
                    mike = zulu.join;
                    entity = ' ';
                    tango = mike.bind(zulu)(entity);
 198:
                    entity = global;
                    entity = entity.HermesInternal;
                    zulu = entity.concat;
                    mike = '';
                    entity = ' ';
                    entity = zulu.bind(mike)(report, entity, tango);
                    return entity;
                }
            };
            mike = undefined;
            mike = zulu.bind(mike)(tango);
            return mike;
 617:
            mike = entity.props;
            mike = mike.user;
            oscar = mike.id;
            mike = entity.props;
            report = mike.guildId;
            mike = global;
            mike = mike.HermesInternal;
            tango = mike.concat;
            zulu = '';
            mike = '-';
            mike = tango.bind(zulu)(oscar, mike, report);
            return mike;
 672:
            romeo = entity.section;
            mike = entity.props;
            mike = mike.user;
            offset = mike.id;
            entity = entity.props;
            options = entity.guildId;
            entity = global;
            entity = entity.HermesInternal;
            zulu = entity.concat;
            foxtrot = '';
            entity = '-';
            yankee = entity;
            verify = entity;
            entity = foxtrot[zulu](romeo, yankee, offset, verify, options, golf);
            return entity;
        }
    };
    var _closure1_slot12 = entity;
    entity = function(argFoo) { // Original name: keyExtractor
        zulu = argFoo;
        report = zulu.type;
        mike = _closure1_slot12;
        entity = undefined;
        tango = mike.bind(entity)(zulu);
        entity = global;
        entity = entity.HermesInternal;
        zulu = entity.concat;
        mike = '';
        entity = '-';
        entity = zulu.bind(mike)(report, entity, tango);
        return entity;
    };
    var _closure1_slot13 = entity;
    entity = function(argFoo) { // Original name: getItemType
        entity = argFoo;
        entity = entity.type;
        return entity;
    };
    var _closure1_slot14 = entity;
    entity = function(argFoo) { // Original name: renderItem
        _fun113333: for(var _fun113333_ip = 0; ; ) switch(_fun113333_ip) {
 0:
            entity = argFoo;
            report = entity.item;
            zulu = report.type;
            mike = _closure1_slot6;
            mike = mike.DM;
            if(!(mike !== zulu)) { _fun113333_ip = 811; continue _fun113333 }
 33:
            mike = _closure1_slot6;
            mike = mike.GROUP_DM;
            if(!(mike !== zulu)) { _fun113333_ip = 763; continue _fun113333 }
 50:
            mike = _closure1_slot6;
            mike = mike.SEARCH_HISTORY_ITEM;
            if(!(mike !== zulu)) { _fun113333_ip = 715; continue _fun113333 }
 67:
            mike = _closure1_slot6;
            mike = mike.MEDIA;
            if(!(mike !== zulu)) { _fun113333_ip = 667; continue _fun113333 }
 84:
            mike = _closure1_slot6;
            mike = mike.MEDIA_GRID;
            if(!(mike !== zulu)) { _fun113333_ip = 619; continue _fun113333 }
 101:
            mike = _closure1_slot6;
            mike = mike.GUILD_TEXT_CHANNEL;
            if(!(mike !== zulu)) { _fun113333_ip = 571; continue _fun113333 }
 118:
            mike = _closure1_slot6;
            mike = mike.GUILD_VOICE_CHANNEL;
            if(!(mike !== zulu)) { _fun113333_ip = 523; continue _fun113333 }
 135:
            mike = _closure1_slot6;
            mike = mike.MESSAGE;
            if(!(mike !== zulu)) { _fun113333_ip = 475; continue _fun113333 }
 152:
            mike = _closure1_slot6;
            mike = mike.LINK;
            if(!(mike !== zulu)) { _fun113333_ip = 427; continue _fun113333 }
 169:
            mike = _closure1_slot6;
            mike = mike.FILE;
            if(!(mike !== zulu)) { _fun113333_ip = 379; continue _fun113333 }
 186:
            mike = _closure1_slot6;
            mike = mike.GUILD_CHANNEL_MEMBER;
            if(!(mike !== zulu)) { _fun113333_ip = 331; continue _fun113333 }
 203:
            mike = _closure1_slot6;
            mike = mike.GENERIC;
            if(!(mike !== zulu)) { _fun113333_ip = 283; continue _fun113333 }
 217:
            mike = _closure1_slot6;
            mike = mike.SECTION;
            if(!(mike !== zulu)) { _fun113333_ip = 235; continue _fun113333 }
 231:
            mike = null;
            return mike;
 235:
            oscar = _closure1_slot7;
            zulu = _closure1_slot1;
            tango = _closure1_slot2;
            mike = 17;
            mike = tango[mike];
            tango = undefined;
            zulu = zulu.bind(tango)(mike);
            mike = {};
            options = report.props;
            verify = mike;
            golf = copyDataProperties(verify, options);
            mike = oscar.bind(tango)(zulu, mike);
            return mike;
 283:
            oscar = _closure1_slot7;
            zulu = _closure1_slot1;
            tango = _closure1_slot2;
            mike = 16;
            mike = tango[mike];
            tango = undefined;
            zulu = zulu.bind(tango)(mike);
            mike = {};
            options = report.props;
            verify = mike;
            golf = copyDataProperties(verify, options);
            mike = oscar.bind(tango)(zulu, mike);
            return mike;
 331:
            oscar = _closure1_slot7;
            zulu = _closure1_slot1;
            tango = _closure1_slot2;
            mike = 15;
            mike = tango[mike];
            tango = undefined;
            zulu = zulu.bind(tango)(mike);
            mike = {};
            options = report.props;
            verify = mike;
            golf = copyDataProperties(verify, options);
            mike = oscar.bind(tango)(zulu, mike);
            return mike;
 379:
            oscar = _closure1_slot7;
            zulu = _closure1_slot1;
            tango = _closure1_slot2;
            mike = 14;
            mike = tango[mike];
            tango = undefined;
            zulu = zulu.bind(tango)(mike);
            mike = {};
            options = report.props;
            verify = mike;
            golf = copyDataProperties(verify, options);
            mike = oscar.bind(tango)(zulu, mike);
            return mike;
 427:
            oscar = _closure1_slot7;
            zulu = _closure1_slot1;
            tango = _closure1_slot2;
            mike = 13;
            mike = tango[mike];
            tango = undefined;
            zulu = zulu.bind(tango)(mike);
            mike = {};
            options = report.props;
            verify = mike;
            golf = copyDataProperties(verify, options);
            mike = oscar.bind(tango)(zulu, mike);
            return mike;
 475:
            oscar = _closure1_slot7;
            zulu = _closure1_slot1;
            tango = _closure1_slot2;
            mike = 12;
            mike = tango[mike];
            tango = undefined;
            zulu = zulu.bind(tango)(mike);
            mike = {};
            options = report.props;
            verify = mike;
            golf = copyDataProperties(verify, options);
            mike = oscar.bind(tango)(zulu, mike);
            return mike;
 523:
            oscar = _closure1_slot7;
            zulu = _closure1_slot1;
            tango = _closure1_slot2;
            mike = 11;
            mike = tango[mike];
            tango = undefined;
            zulu = zulu.bind(tango)(mike);
            mike = {};
            options = report.props;
            verify = mike;
            golf = copyDataProperties(verify, options);
            mike = oscar.bind(tango)(zulu, mike);
            return mike;
 571:
            oscar = _closure1_slot7;
            zulu = _closure1_slot1;
            tango = _closure1_slot2;
            mike = 10;
            mike = tango[mike];
            tango = undefined;
            zulu = zulu.bind(tango)(mike);
            mike = {};
            options = report.props;
            verify = mike;
            golf = copyDataProperties(verify, options);
            mike = oscar.bind(tango)(zulu, mike);
            return mike;
 619:
            oscar = _closure1_slot7;
            zulu = _closure1_slot1;
            tango = _closure1_slot2;
            mike = 9;
            mike = tango[mike];
            tango = undefined;
            zulu = zulu.bind(tango)(mike);
            mike = {};
            options = report.props;
            verify = mike;
            golf = copyDataProperties(verify, options);
            mike = oscar.bind(tango)(zulu, mike);
            return mike;
 667:
            oscar = _closure1_slot7;
            zulu = _closure1_slot1;
            tango = _closure1_slot2;
            mike = 8;
            mike = tango[mike];
            tango = undefined;
            zulu = zulu.bind(tango)(mike);
            mike = {};
            options = report.props;
            verify = mike;
            golf = copyDataProperties(verify, options);
            mike = oscar.bind(tango)(zulu, mike);
            return mike;
 715:
            oscar = _closure1_slot7;
            zulu = _closure1_slot1;
            tango = _closure1_slot2;
            mike = 7;
            mike = tango[mike];
            tango = undefined;
            zulu = zulu.bind(tango)(mike);
            mike = {};
            options = report.props;
            verify = mike;
            golf = copyDataProperties(verify, options);
            mike = oscar.bind(tango)(zulu, mike);
            return mike;
 763:
            oscar = _closure1_slot7;
            zulu = _closure1_slot1;
            tango = _closure1_slot2;
            mike = 6;
            mike = tango[mike];
            tango = undefined;
            zulu = zulu.bind(tango)(mike);
            mike = {};
            options = report.props;
            verify = mike;
            golf = copyDataProperties(verify, options);
            mike = oscar.bind(tango)(zulu, mike);
            return mike;
 811:
            tango = _closure1_slot7;
            mike = _closure1_slot1;
            zulu = _closure1_slot2;
            entity = 5;
            entity = zulu[entity];
            zulu = undefined;
            mike = mike.bind(zulu)(entity);
            entity = {};
            options = report.props;
            verify = entity;
            report = copyDataProperties(verify, options);
            entity = tango.bind(zulu)(mike, entity);
            return entity;
        }
    };
    var _closure1_slot15 = entity;
    entity = global;
    options = entity.Object;
    golf = options.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = golf.bind(options)(zulu, entity, tango);
    entity = 0;
    golf = oscar[entity];
    tango = argCorge;
    entity = undefined;
    golf = tango.bind(entity)(golf);
    yankee = 1;
    tango = oscar[yankee];
    tango = report.bind(entity)(tango);
    options = tango.View;
    var _closure1_slot3 = options;
    tango = tango.StyleSheet;
    var _closure1_slot4 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    options = tango.SearchHistoryItemTypes;
    var _closure1_slot5 = options;
    tango = tango.SearchListItemTypes;
    var _closure1_slot6 = tango;
    tango = 3;
    options = oscar[tango];
    options = report.bind(entity)(options);
    options = options.jsx;
    var _closure1_slot7 = options;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.jsxs;
    var _closure1_slot8 = tango;
    tango = 4;
    tango = oscar[tango];
    verify = report.bind(entity)(tango);
    options = verify.createStyles;
    tango = {};
    offset = {};
    offset['flex'] = yankee;
    tango['container'] = offset;
    tango = options.bind(verify)(tango);
    var _closure1_slot9 = tango;
    tango = {};
    options = 'function SearchListTsx1(){const{visible}=this.__closure;return visible?1:0;}';
    tango['code'] = options;
    var _closure1_slot10 = tango;
    tango = {};
    options = 'function SearchListTsx2(){const{visible,withSpring,animationState,springStandard}=this.__closure;return{opacity:visible?withSpring(animationState.get(),springStandard):0};}';
    tango['code'] = options;
    var _closure1_slot11 = tango;
    tango = golf.memo;
    mike = function(argFoo) {
        _fun113334: for(var _fun113334_ip = 0; ; ) switch(_fun113334_ip) {
 0:
            mike = argFoo;
            kilo = mike.contentContainerStyle;
            result = mike.data;
            backup = mike.onEndReached;
            offset = mike.ItemSeparatorComponent;
            romeo = mike.ListHeaderComponent;
            yankee = mike.ListFooterComponent;
            echo = mike.estimatedItemSize;
            oscar = mike.visible;
            tango = undefined;
            if(!(oscar === tango)) { _fun113334_ip = 60; continue _fun113334 }
 58:
            oscar = true;
 60:
            var _closure2_slot0 = oscar;
            verify = mike.numColumns;
            var _closure2_slot1 = tango;
            mike = _closure1_slot9;
            golf = mike.bind(tango)();
            zulu = _closure1_slot1;
            source = _closure1_slot2;
            mike = 18;
            mike = source[mike];
            mike = zulu.bind(tango)(mike);
            mike = mike.bind(tango)();
            output = mike.bottom;
            sizing = _closure1_slot0;
            update = 19;
            mike = source[update];
            report = sizing.bind(tango)(mike);
            zulu = report.useDerivedValue;
            mike = function() { // Original name: T
                _fun113335: for(var _fun113335_ip = 0; ; ) switch(_fun113335_ip) {
 0:
                    mike = _closure2_slot0;
                    entity = 0;
                    if(!mike) { _fun113335_ip = 15; continue _fun113335 }
 12:
                    entity = 1;
 15:
                    return entity;
                }
            };
            options = {};
            options['visible'] = oscar;
            mike['__closure'] = options;
            options = 7183199864841.0;
            mike['__workletHash'] = options;
            options = _closure1_slot10;
            mike['__initData'] = options;
            options = zulu.bind(report)(mike);
            _closure2_slot1 = options;
            mike = source[update];
            zulu = sizing.bind(tango)(mike);
            mike = zulu.useAnimatedStyle;
            entity = function() { // Original name: D
                _fun113336: for(var _fun113336_ip = 0; ; ) switch(_fun113336_ip) {
 0:
                    entity = {};
                    tango = _closure2_slot0;
                    mike = 0;
                    if(!tango) { _fun113336_ip = 81; continue _fun113336 }
 14:
                    options = _closure1_slot0;
                    verify = _closure1_slot2;
                    tango = 20;
                    tango = verify[tango];
                    golf = undefined;
                    oscar = options.bind(golf)(tango);
                    report = oscar.withSpring;
                    tango = _closure2_slot1;
                    zulu = tango.get;
                    tango = zulu.bind(tango)();
                    zulu = 21;
                    zulu = verify[zulu];
                    zulu = options.bind(golf)(zulu);
                    zulu = zulu.springStandard;
                    mike = report.bind(oscar)(tango, zulu);
 81:
                    entity['opacity'] = mike;
                    return entity;
                }
            };
            report = {};
            report['visible'] = oscar;
            control = 20;
            control = source[control];
            control = sizing.bind(tango)(control);
            control = control.withSpring;
            report['withSpring'] = control;
            report['animationState'] = options;
            options = 21;
            options = source[options];
            options = sizing.bind(tango)(options);
            options = options.springStandard;
            report['springStandard'] = options;
            entity['__closure'] = report;
            report = 15510780489798.0;
            entity['__workletHash'] = report;
            report = _closure1_slot11;
            entity['__initData'] = report;
            options = mike.bind(zulu)(entity);
            report = null;
            entity = report == verify;
            mike = 0.5;
            sizing = mike;
            if(entity) { _fun113334_ip = 377; continue _fun113334 }
 328:
            entity = 1;
            sizing = mike;
            if(!(entity !== verify)) { _fun113334_ip = 377; continue _fun113334 }
 338:
            sizing = 0.8;
            entity = 2;
            if(!(entity !== verify)) { _fun113334_ip = 377; continue _fun113334 }
 355:
            entity = 3;
            entity = verify >= entity;
            sizing = undefined;
            if(!entity) { _fun113334_ip = 377; continue _fun113334 }
 367:
            sizing = 0.99;
 377:
            zulu = _closure1_slot8;
            mike = _closure1_slot1;
            entity = _closure1_slot2;
            entity = entity[update];
            entity = mike.bind(tango)(entity);
            mike = entity.View;
            entity = {};
            update = golf.container;
            golf = new Array(2);
            golf[0] = update;
            golf[1] = options;
            entity['style'] = golf;
            if(!oscar) { _fun113334_ip = 440; continue _fun113334 }
 429:
            options = result.length;
            golf = 0;
            oscar = golf === options;
 440:
            if(!oscar) { _fun113334_ip = 447; continue _fun113334 }
 443:
            oscar = report == yankee;
 447:
            if(!oscar) { _fun113334_ip = 454; continue _fun113334 }
 450:
            oscar = report == romeo;
 454:
            if(!oscar) { _fun113334_ip = 578; continue _fun113334 }
 457:
            options = _closure1_slot7;
            golf = _closure1_slot3;
            report = {};
            update = _closure1_slot4;
            update = update.absoluteFill;
            report['style'] = update;
            control = _closure1_slot7;
            source = _closure1_slot1;
            context = _closure1_slot2;
            update = 22;
            update = context[update];
            source = source.bind(tango)(update);
            update = {};
            record = _closure1_slot0;
            vacuum = 23;
            sequence = context[vacuum];
            sequence = record.bind(tango)(sequence);
            config = sequence.intl;
            sequence = config.string;
            vacuum = context[vacuum];
            vacuum = record.bind(tango)(vacuum);
            vacuum = vacuum.t;
            vacuum = vacuum.V6nAfH;
            vacuum = sequence.bind(config)(vacuum);
            update['text'] = vacuum;
            update = control.bind(tango)(source, update);
            report['children'] = update;
            oscar = options.bind(tango)(golf, report);
 578:
            report = new Array(2);
            report[0] = oscar;
            options = _closure1_slot7;
            golf = _closure1_slot0;
            update = _closure1_slot2;
            oscar = 24;
            oscar = update[oscar];
            oscar = golf.bind(tango)(oscar);
            golf = oscar.AnimatedFlashList;
            oscar = {'keyboardDismissMode': 'on-drag', 'keyboardShouldPersistTaps': 'handled'};
            oscar['estimatedItemSize'] = echo;
            oscar['data'] = result;
            result = _closure1_slot15;
            oscar['renderItem'] = result;
            oscar['onEndReachedThreshold'] = sizing;
            oscar['onEndReached'] = backup;
            backup = true;
            oscar['scrollsToTop'] = backup;
            backup = {};
            sizing = 16;
            sizing = sizing + output;
            backup['paddingBottom'] = sizing;
            target = backup;
            papa = kilo;
            kilo = copyDataProperties(target, papa);
            oscar['contentContainerStyle'] = backup;
            backup = _closure1_slot13;
            oscar['keyExtractor'] = backup;
            foxtrot = _closure1_slot14;
            oscar['getItemType'] = foxtrot;
            oscar['ListHeaderComponent'] = romeo;
            oscar['ListFooterComponent'] = yankee;
            oscar['ItemSeparatorComponent'] = offset;
            oscar['numColumns'] = verify;
            oscar = options.bind(tango)(golf, oscar);
            report[1] = oscar;
            entity['children'] = report;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        }
    };
    mike = tango.bind(golf)(mike);
    tango = 25;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/search_v2/native/components/list/SearchList.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();