'use client';

import {
  Button,
  Card,
  Col,
  Divider,
  Paragraph,
  Placeholder,
  Row,
  Text,
  Toggle,
  View,
} from '@shared/components';
import { useStore } from '@shared/store';
import { useEffect } from 'react';

const noop = () => false;

const ComponentsPage = () => {
  const theme = useStore((state) => state.application.theme);
  const toggleTheme = useStore(
    (state) => state.application.actions.toggleTheme,
  );
  const isDark = theme === 'dark';

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark);
  }, [isDark]);

  return (
    <View style={{ marginHorizontal: 'auto', maxWidth: 640, padding: 24 }}>
      <Row
        style={{
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: 24,
        }}
      >
        <View>
          <Text
            title="Shared components"
            variant="h1"
          />
          <Paragraph>
            Example usage of @shared/components on web (react-native-web).
          </Paragraph>
        </View>
        <Row style={{ alignItems: 'center', gap: 8 }}>
          <Text
            title={isDark ? 'Dark' : 'Light'}
            variant="small"
          />
          <Toggle
            accessibilityLabel="Toggle theme"
            checked={isDark}
            onPress={toggleTheme}
          />
        </Row>
      </Row>
      <View style={{ gap: 32, marginTop: 24 }}>
        {/* Buttons */}
        <View>
          <Text
            title="Button variants"
            variant="h2"
          />
          <Row style={{ flexWrap: 'wrap', gap: 12, marginTop: 12 }}>
            <Button
              onPress={noop}
              title="Primary"
              variant="primary"
            />
            <Button
              onPress={noop}
              title="Secondary"
              variant="secondary"
            />
            <Button
              onPress={noop}
              title="Outline"
              variant="outline"
            />
            <Button
              onPress={noop}
              title="Ghost"
              variant="ghost"
            />
            <Button
              onPress={noop}
              title="Link"
              variant="link"
            />
            <Button
              onPress={noop}
              title="Destructive"
              variant="destructive"
            />
          </Row>
        </View>

        <Divider />

        {/* Typography */}
        <View>
          <Text
            title="Text variants"
            variant="h2"
          />
          <Col style={{ gap: 8, marginTop: 12 }}>
            <Text
              title="Heading (h1)"
              variant="h1"
            />
            <Text
              title="Large text"
              variant="large"
            />
            <Text
              title="Paragraph text"
              variant="p"
            />
            <Text
              title="Small text"
              variant="small"
            />
          </Col>
        </View>

        <Divider />

        {/* Card */}
        <View>
          <Text
            title="Card"
            variant="h2"
          />
          <View style={{ marginTop: 12 }}>
            <Card>
              <Text
                title="Card content with theme-aware background and border."
                variant="p"
              />
            </Card>
          </View>
        </View>

        {/* Placeholder */}
        <View>
          <Text
            title="Placeholder"
            variant="h2"
          />
          <View style={{ marginTop: 12 }}>
            <Placeholder title="Placeholder title">
              <Text
                title="Optional child content"
                variant="small"
              />
            </Placeholder>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ComponentsPage;
