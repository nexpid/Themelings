// app/modules/voice_calls/native/components/VoiceCallBlurGrid.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    yankee = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = yankee;
    var _closure1_slot2 = oscar;
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
    tango = tango.bind(entity)(golf);
    tango = 1;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    golf = tango.View;
    var _closure1_slot3 = golf;
    golf = tango.ImageBackground;
    var _closure1_slot4 = golf;
    options = tango.StyleSheet;
    var _closure1_slot5 = options;
    tango = 2;
    tango = oscar[tango];
    tango = yankee.bind(entity)(tango);
    var _closure1_slot6 = tango;
    tango = 3;
    tango = oscar[tango];
    tango = yankee.bind(entity)(tango);
    var _closure1_slot7 = tango;
    tango = 4;
    tango = oscar[tango];
    tango = yankee.bind(entity)(tango);
    var _closure1_slot8 = tango;
    tango = 5;
    golf = oscar[tango];
    golf = report.bind(entity)(golf);
    golf = golf.jsx;
    var _closure1_slot9 = golf;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.jsxs;
    var _closure1_slot10 = tango;
    golf = options.create;
    tango = {};
    verify = {};
    backup = options.absoluteFillObject;
    kilo = verify;
    offset = copyDataProperties(kilo, backup);
    romeo = 0.5;
    offset = 'opacity';
    verify[offset] = romeo;
    offset = 6;
    offset = oscar[offset];
    offset = yankee.bind(entity)(offset);
    offset = offset.unsafe_rawColors;
    yankee = offset.PRIMARY_600;
    offset = 'backgroundColor';
    verify[offset] = yankee;
    tango['imageBackgroundCover'] = verify;
    verify = {'flex': 1, 'alignSelf': 'stretch'};
    tango['avatar'] = verify;
    verify = {'flex': 1, 'alignSelf': 'stretch', 'flexDirection': 'row'};
    tango['avatarRow'] = verify;
    tango = golf.bind(options)(tango);
    var _closure1_slot11 = tango;
    tango = function(argFoo) { // Original name: AvatarRow
        _fun104171: for(var _fun104171_ip = 0; ; ) switch(_fun104171_ip) {
 0:
            entity = argFoo;
            tango = entity.recipients;
            entity = entity.guildId;
            var _closure2_slot0 = entity;
            entity = null;
            if(!(entity != tango)) { _fun104171_ip = 95; continue _fun104171 }
 26:
            report = tango.length;
            zulu = 0;
            if(!(zulu !== report)) { _fun104171_ip = 95; continue _fun104171 }
 37:
            zulu = tango.map;
            mike = function(argFoo) {
                _fun104172: for(var _fun104172_ip = 0; ; ) switch(_fun104172_ip) {
 0:
                    oscar = argFoo;
                    zulu = _closure1_slot8;
                    entity = zulu.getUser;
                    verify = entity.bind(zulu)(oscar);
                    entity = null;
                    zulu = entity == verify;
                    if(zulu) { _fun104172_ip = 85; continue _fun104172 }
 30:
                    report = _closure1_slot9;
                    tango = _closure1_slot4;
                    zulu = {};
                    options = verify.getAvatarSource;
                    golf = _closure2_slot0;
                    golf = options.bind(verify)(golf);
                    zulu['source'] = golf;
                    mike = _closure1_slot11;
                    mike = mike.avatar;
                    zulu['style'] = mike;
                    mike = undefined;
                    entity = report.bind(mike)(tango, zulu, oscar);
 85:
                    return entity;
                }
            };
            mike = zulu.bind(tango)(mike);
            report = _closure1_slot9;
            tango = _closure1_slot3;
            zulu = {};
            oscar = _closure1_slot11;
            oscar = oscar.avatarRow;
            zulu['style'] = oscar;
            zulu['children'] = mike;
            mike = undefined;
            mike = report.bind(mike)(tango, zulu);
            return mike;
 95:
            return entity;
        }
    };
    var _closure1_slot12 = tango;
    tango = 10;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/voice_calls/native/components/VoiceCallBlurGrid.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo) { // Original name: _default
        mike = argFoo;
        verify = mike.channelId;
        var _closure2_slot0 = verify;
        romeo = mike.guildId;
        report = _closure1_slot0;
        yankee = _closure1_slot2;
        mike = 7;
        mike = yankee[mike];
        tango = undefined;
        golf = report.bind(tango)(mike);
        oscar = golf.useStateFromStoresArray;
        mike = _closure1_slot7;
        zulu = new Array(1);
        zulu[0] = mike;
        mike = new Array(1);
        mike[0] = verify;
        entity = function() {
            _fun104174: for(var _fun104174_ip = 0; ; ) switch(_fun104174_ip) {
 0:
                zulu = _closure1_slot7;
                mike = zulu.getChannel;
                entity = _closure2_slot0;
                mike = mike.bind(zulu)(entity);
                entity = null;
                if(!(entity != mike)) { _fun104174_ip = 43; continue _fun104174 }
 30:
                entity = mike.isPrivate;
                entity = entity.bind(mike)();
                if(entity) { _fun104174_ip = 49; continue _fun104174 }
 43:
                entity = new Array(0);
                _fun104174_ip = 71; continue _fun104174;
 49:
                report = mike.recipients;
                tango = report.slice;
                zulu = 0;
                mike = 3;
                entity = tango.bind(report)(zulu, mike);
 71:
                return entity;
            }
        };
        oscar = oscar.bind(golf)(zulu, entity, mike);
        entity = oscar.shift;
        entity = entity.bind(oscar)();
        golf = new Array(2);
        golf[0] = entity;
        entity = oscar.shift;
        entity = entity.bind(oscar)();
        golf[1] = entity;
        zulu = golf.filter;
        entity = 8;
        mike = yankee[entity];
        mike = report.bind(tango)(mike);
        mike = mike.isNotNullish;
        foxtrot = zulu.bind(golf)(mike);
        zulu = _closure1_slot6;
        mike = zulu.getId;
        mike = mike.bind(zulu)();
        zulu = new Array(2);
        zulu[0] = mike;
        mike = oscar.shift;
        mike = mike.bind(oscar)();
        zulu[1] = mike;
        mike = zulu.filter;
        entity = yankee[entity];
        entity = report.bind(tango)(entity);
        entity = entity.isNotNullish;
        oscar = mike.bind(zulu)(entity);
        zulu = _closure1_slot10;
        mike = _closure1_slot3;
        entity = {};
        offset = _closure1_slot5;
        report = offset.absoluteFill;
        entity['style'] = report;
        golf = _closure1_slot9;
        verify = _closure1_slot12;
        report = {};
        report['recipients'] = oscar;
        report['guildId'] = romeo;
        oscar = golf.bind(tango)(verify, report);
        report = new Array(4);
        report[0] = oscar;
        oscar = {};
        oscar['recipients'] = foxtrot;
        oscar['guildId'] = romeo;
        oscar = golf.bind(tango)(verify, oscar);
        report[1] = oscar;
        verify = _closure1_slot1;
        oscar = 9;
        oscar = yankee[oscar];
        verify = verify.bind(tango)(oscar);
        oscar = {};
        yankee = 'dark';
        oscar['blurTheme'] = yankee;
        offset = offset.absoluteFill;
        oscar['style'] = offset;
        oscar = golf.bind(tango)(verify, oscar);
        report[2] = oscar;
        oscar = {};
        options = _closure1_slot11;
        options = options.imageBackgroundCover;
        oscar['style'] = options;
        oscar = golf.bind(tango)(mike, oscar);
        report[3] = oscar;
        entity['children'] = report;
        entity = zulu.bind(tango)(mike, entity);
        return entity;
    };
    zulu['default'] = mike;
    return entity;
})();