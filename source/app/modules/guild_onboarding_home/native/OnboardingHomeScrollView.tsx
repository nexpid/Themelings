// app/modules/guild_onboarding_home/native/OnboardingHomeScrollView.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    yankee = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = yankee;
    var _closure1_slot1 = oscar;
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
    var _closure1_slot2 = tango;
    tango = 1;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.ScrollView;
    var _closure1_slot3 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.jsx;
    var _closure1_slot4 = tango;
    tango = 3;
    tango = oscar[tango];
    options = report.bind(entity)(tango);
    golf = options.createStyles;
    tango = {};
    verify = {};
    offset = 4;
    offset = oscar[offset];
    offset = yankee.bind(entity)(offset);
    offset = offset.colors;
    offset = offset.BACKGROUND_SECONDARY;
    verify['backgroundColor'] = offset;
    tango['guildFeedBackground'] = verify;
    tango = golf.bind(options)(tango);
    var _closure1_slot5 = tango;
    tango = 6;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/guild_onboarding_home/native/OnboardingHomeScrollView.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo) { // Original name: OnboardingHomeScrollView
        _fun112133: for(var _fun112133_ip = 0; ; ) switch(_fun112133_ip) {
 0:
            entity = argFoo;
            zulu = entity.guildId;
            mike = entity.headerOffset;
            tango = undefined;
            if(!(mike === tango)) { _fun112133_ip = 26; continue _fun112133 }
 24:
            mike = 0;
 26:
            var _closure2_slot0 = mike;
            report = entity.scrollValue;
            var _closure2_slot1 = report;
            report = entity.children;
            var _closure2_slot2 = tango;
            var _closure2_slot3 = tango;
            var _closure2_slot4 = tango;
            var _closure2_slot5 = tango;
            oscar = _closure1_slot5;
            golf = oscar.bind(tango)();
            offset = _closure1_slot2;
            verify = offset.useRef;
            oscar = false;
            oscar = verify.bind(offset)(oscar);
            _closure2_slot2 = oscar;
            verify = offset.useRef;
            oscar = null;
            verify = verify.bind(offset)(oscar);
            _closure2_slot3 = verify;
            yankee = _closure1_slot0;
            romeo = _closure1_slot1;
            oscar = 5;
            oscar = romeo[oscar];
            oscar = yankee.bind(tango)(oscar);
            oscar = oscar.bind(tango)();
            yankee = oscar.bottom;
            _closure2_slot4 = yankee;
            foxtrot = offset.useEffect;
            romeo = new Array(1);
            romeo[0] = zulu;
            oscar = function() {
                mike = _closure2_slot2;
                entity = false;
                mike['current'] = entity;
                entity = undefined;
                return entity;
            };
            oscar = foxtrot.bind(offset)(oscar, romeo);
            romeo = offset.useRef;
            oscar = true;
            oscar = romeo.bind(offset)(oscar);
            _closure2_slot5 = oscar;
            romeo = offset.useEffect;
            oscar = new Array(1);
            oscar[0] = zulu;
            zulu = function() {
                _fun112135: for(var _fun112135_ip = 0; ; ) switch(_fun112135_ip) {
 0:
                    mike = _closure2_slot3;
                    zulu = mike.current;
                    mike = null;
                    mike = mike == zulu;
                    if(mike) { _fun112135_ip = 30; continue _fun112135 }
 21:
                    zulu = _closure2_slot5;
                    mike = zulu.current;
 30:
                    if(mike) { _fun112135_ip = 63; continue _fun112135 }
 33:
                    mike = _closure2_slot3;
                    tango = mike.current;
                    zulu = tango.scrollTo;
                    mike = {'animated': false, 'y': 0};
                    mike = zulu.bind(tango)(mike);
 63:
                    mike = _closure2_slot5;
                    entity = false;
                    mike['current'] = entity;
                    entity = undefined;
                    return entity;
                }
            };
            zulu = romeo.bind(offset)(zulu, oscar);
            oscar = offset.useMemo;
            zulu = new Array(2);
            zulu[0] = yankee;
            zulu[1] = mike;
            mike = function() {
                entity = {};
                tango = _closure2_slot4;
                zulu = 16;
                zulu = zulu + tango;
                entity['paddingBottom'] = zulu;
                mike = _closure2_slot0;
                entity['marginTop'] = mike;
                return entity;
            };
            oscar = oscar.bind(offset)(mike, zulu);
            zulu = _closure1_slot4;
            mike = _closure1_slot3;
            entity = {};
            entity['ref'] = verify;
            verify = {};
            offset = 1;
            verify['right'] = offset;
            entity['scrollIndicatorInsets'] = verify;
            options = function(argFoo) { // Original name: onScroll
                entity = argFoo;
                entity = entity.nativeEvent;
                entity = entity.contentOffset;
                zulu = entity.y;
                mike = _closure2_slot1;
                entity = mike.set;
                entity = entity.bind(mike)(zulu);
                entity = undefined;
                return entity;
            };
            entity['onScroll'] = options;
            options = 16;
            entity['scrollEventThrottle'] = options;
            golf = golf.guildFeedBackground;
            entity['style'] = golf;
            entity['contentContainerStyle'] = oscar;
            entity['children'] = report;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        }
    };
    zulu['default'] = mike;
    return entity;
})();